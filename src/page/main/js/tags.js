/** 标签打印处理回调
 *
 * @param {Aout_blog} Aout_blog Aout.blog 数据对象
 *
 * @return {function}
 */
window.showtag = (Aout_blog) => {
    return (tag) => {
        // 移除动画
        document.querySelectorAll("#contlist > div > loadfun").forEach(v => v.remove());

        let dom = Aout_blog.data('dom');
        dom.innerHTML = `<section class="grid-y shadow" onclick="window.open('?tag=${tag}','_blank')">
                <div class="cell"><h3 class="h3 margin-bottom-0"><i class="fa fa-tag"></i> ${tag}</h3></div>
            </section>`;
        Aout_blog.data("root").before(dom.children[0]);
    }
};