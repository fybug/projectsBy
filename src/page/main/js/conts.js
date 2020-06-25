/** 填充数据
 *
 * @param {Aout_blog} Aout_blog 博客数据对象
 *
 * @return {function}
 */
window.plushcont = (Aout_blog) => {
    return (data, index) => {
        let html;
        let dom = Aout_blog.data('dom');
        let step = 200;

        setTimeout(() => {
            html = `
            <section class="grid-y shadow" onclick="window.open('${data.link}','_blank')">
                <div class="cell"><h3 class="h3 margin-bottom-0">${data.title}</h3></div>`;
            // 插入日期
            if (data.date) {
                html += `<div class="cell">
                    <p>
                        <i class="fa fa-calendar"></i>
                        <small><b>${data.date}</b></small>
                    </p>
                </div>`;
            }
            // 插入图标
            if (data.icon) {
                html += `<div class="cell titleimg grid-x align-center">
                    <img class="cell" src="${data.icon}" alt=""/>
                </div>`;
            }
            // 插入描述
            if (data.des) {
                html += `<div class="cell">
                    ${data.des}
                </div>`;
            }
            html += `</section>`;

            dom.innerHTML = html;
            // 连接
            if (data.link) {
                let link = data.link;
                dom.children[0].addEventListener('click', () => window.open(link, '_blank'));
            }
            Aout_blog.data('root').before(dom.children[0]);
        }, step * index);
    };
};