/** 生成符合当前状态的分页
 *
 * @param {number} index 当前检查的页码
 * @param {number} now 当前页面
 * @param {string} link 附加参数
 */
window.checkpageinde = (index, now, link) => {
    let html = '<li class="cell shrink';
    if (index === now) html += ` current">${index + 1}</li>`;
    else html += `"><a href="?${link}p=${index}">${index + 1}</a></li>`;
    return html;
};

/** 填充分页
 *
 * @param {number} index 当前位置
 * @param {number} maxnum 最大页数
 * @param {Element} root 父节点
 * @param {string} link 连接参数
 */
window.plushpagelist = (index, maxnum, root, link = '') => {
    let html = '';

    /* 生成当前 */
    // 向前快速索引
    if (index > 2) {
        html += checkpageinde(0, index, link);
        if (index > 3)
            html += `<li class="ellipsis" aria-hidden="true"></li>`;
    }

    for (let i = Math.max(0, index - 2 - Math.max(0, index - maxnum + 3)); i <= index; ++i) {
        html += checkpageinde(i, index, link);
    }
    for (let i = index + 1, len = Math.min(i + 2 + Math.max(0, 2 - index), maxnum); i < len; ++i) {
        html += checkpageinde(i, index, link);
    }

    // 向前快速索引
    if (index < maxnum - 3) {
        if (index < maxnum - 4)
            html += `<li class="ellipsis" aria-hidden="true"></li>`;
        html += checkpageinde(maxnum - 1, index, link);
    }

    root.children[0].innerHTML = html;
};