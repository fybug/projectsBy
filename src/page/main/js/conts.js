/** 填充数据
 *
 * @param {{}[]} json 数据集
 * @param {Element} markdom 标记节点
 */
window.plushcont = (json, markdom) => {
    let html;
    let dom = document.createElement("div");
    let step = 200;
    let times = 0;
    for (let now of json) {
        times += step;
        setTimeout(() => {
            html = `
            <section class="grid-y shadow" onclick="window.open('${now.link}','_blank')">
                <div class="cell"><h3 class="h3 margin-bottom-0">${now.title}</h3></div>`;
            // 插入日期
            if (now.date) {
                html += `<div class="cell">
                    <p>
                        <i class="fa fa-calendar"></i>
                        <small><b>${now.date}</b></small>
                    </p>
                </div>`;
            }
            // 插入图标
            if (now.icon) {
                html += `<div class="cell titleimg grid-x align-center">
                    <img class="cell" src="${now.icon}" alt=""/>
                </div>`;
            }
            // 插入描述
            if (now.des) {
                html += `<div class="cell">
                    ${now.des}
                </div>`;
            }
            html += `</section>`;

            dom.innerHTML = html;
            // 连接
            if (now.link) {
                let link = now.link;
                dom.children[0].addEventListener('click', () => window.open(link, '_blank'));
            }
            markdom.before(dom.children[0]);
        }, times);
    }
};

/** 获取页面内容 */
window.getCont = (index, root) => {
    fetch('./static/blogs/main/indexlist.js').then((response) => response.json()).catch(() => error(root)).then((json) => {
        // 最大数量
        let maxnum = json[0];

        // 生成页数
        plushpagelist(index, maxnum, root);

        // 请求内容数据
        fetch('./static/blogs/main/' + index + '.js').then((response) => response.json()).catch(() => error(root))
            .then((json) => plushcont(json, root));

        // 请求标签内容
        fetch('./static/blogs/main/tags.js').then((response) => response.json()).catch(() => {
            let root = document.querySelectorAll(".tags");
            let i = 0;
            for (const v of root) {
                if (i >= 5) return;
                ++i;
                v.innerHTML += `<div class="cell shrink">
                    <p>null 获取失败</p>
                </div>`;
            }
        }).then((json) => {
            let root = document.querySelectorAll(".tags");
            let html = '';
            for (let tag of json) {
                html += `<div class="cell shrink">
                    <a href="?tag=${tag}">${tag}</a>
                </div>`;
            }
            root.forEach(v => v.innerHTML += html);
        });
    });
};