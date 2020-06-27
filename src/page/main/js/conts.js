/**
 * @param {string[]} data
 * @param {function(string,string,string)} fun
 */
function passlabel(data, fun) {
    data.forEach(v => {
        v = v.trim();
        v = v.split(':');
        if (v.length === 0) return;
        if (v.length === 1) fun("", v[0].trim(), "");
        if (v.length === 2) fun(v[0].trim(), v[1].trim(), '');
        if (v.length === 3) fun(v[0].trim(), v[1].trim(), v[2].trim());
    });
}

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
            <section class="grid-y shadow">
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
            // 插入标签
            if (data.label) {
                html += '<div class="cell">'
                passlabel(data.label.split(","), (clas, val, color) => {
                    html += `<label class="`;
                    if (clas !== '') html += `${clas} `;
                    html += `label radius"`;
                    if (color !== '') html += `style="background-color: ${color}"`;
                    html += `>${val}</label> `;
                });
                html += '</div>';
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