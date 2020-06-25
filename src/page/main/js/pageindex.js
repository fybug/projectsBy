/** 分页生成回调
 *
 * @param {Aout_blog} Aout_blog 博客数据对象
 * @param {string} link 附加参数
 *
 * @return {function}
 */
window.plushpagedata = (Aout_blog, link = '') => {
    return (index, isac) => {
        let html = '<li class="cell shrink';
        if (isac) html += ` current">${index + 1}</li>`;
        else html += `"><a href="?${link}p=${index}">${index + 1}</a></li>`;

        Aout_blog.data('root').children[0].innerHTML += html;
    };
};

/** 分页边缘生成回调
 *
 * @param {Aout_blog} Aout_blog 博客数据对象
 * @param {string} link 附加参数
 *
 * @return {function}
 */
window.plushpageedge = (Aout_blog, link = '') => {
    return (index, after, maxnum, pagenum) => {
        let html = '';

        // 向前快速索引
        if (!after) {
            if (index > pagenum && maxnum > pagenum * 2 + 1) {
                html += `<li class="cell shrink"><a href="?${link}p=0">1</a></li>`;
                if (index > pagenum + 1)
                    html += `<li class="ellipsis" aria-hidden="true"></li>`;

                Aout_blog.data('root').children[0].innerHTML += html;
            }
        } else {
            // 向后快速索引
            if (index < maxnum - pagenum - 1 && maxnum > pagenum * 2 + 1) {
                if (index < maxnum - pagenum - 2)
                    html += `<li class="ellipsis" aria-hidden="true"></li>`;
                html += `<li class="cell shrink"><a href="?${link}p=${maxnum - 1}">${maxnum}</a></li>`;

                Aout_blog.data('root').children[0].innerHTML += html;
            }
        }
    };
};