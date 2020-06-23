/** 打印所有标签数据 */
window.showtag = (root) => {
    fetch('./static/blogs/main/tags.js').then((response) => response.json()).catch(() => error(root)).then((json) => {
        let dom = document.createElement("div");
        for (let tag of json) {
            dom.innerHTML = `<section class="grid-y shadow" onclick="window.open('?tag=${tag}','_blank')">
                <div class="cell"><h3 class="h3 margin-bottom-0"><i class="fa fa-tag"></i> ${tag}</h3></div>
            </section>`;
            root.before(dom.children[0]);
        }
    });
};
/** 填充标签页面数据 */
window.plushtagcont = (root) => {
    fetch(`./static/blogs/main/tag_${tag}.js`).then(response => response.json()).catch(() => error(root)).then(json => {
        let maxnum = json[0];
        // 生成分页
        plushpagelist(index, maxnum, root, `tag=${tag}&`);
        fetch(`./static/blogs/main/tag_${index}_${tag}.js`).then(response => response.json()).catch(() => error(root))
            .then(json => plushcont(json, root));
    });
};