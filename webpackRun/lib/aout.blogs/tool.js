/** aout.blogs 辅助工具 */
let Tool = {
    /** 扫描路径
     *
     * @return 按照页面名称分开的数据
     */
    __scann: (compilation) => {
        let jsonlist = {};
        // 解析 markdown
        glob.sync("src/page/*/static/blogs/*\\.md").forEach(v => {
            // 获取数据
            let data = compilation.inputFileSystem.readFileSync(v).toString().trim();

            // 内容部分
            let cont = "";
            // 头数据
            let header = ((da) => {
                cont = da[1];
                return da[0];
            })(Tool.__pass_header(data));
            // 处理内容
            cont = marked(cont.trim());

            // 没数据
            if (header.length === 0 && cont === "") return;

            // 插入内容数据
            header.__cont = cont;

            // 页面名称
            let pagename = path.basename(path.resolve(v, "../../../"));

            jsonlist[pagename] || (jsonlist[pagename] = []);
            jsonlist[pagename].push(header);
        });
        return jsonlist;
    },
    /** 解析头数据
     *
     * @param {string} data
     *
     * @return {[{},string]} 返回解析后的头数据和去除头数据后的内容
     */
    __pass_header: (data) => {
        // 数据头检查
        if (!data.startsWith("++++++")) return [{}, data];

        /* 数据尾检查 */
        let endmark = data.indexOf("++++++", 6);
        if (endmark === -1) return [{}, data];

        // 截取的数据头
        let head = data.substring(6, endmark).trim();
        // 取出数据头后的内容
        data = data.substring(endmark + 6).trim();

        // 头数据
        let header = {};

        // 逐行解析数据
        head.split(/\r?\n/).forEach(v => {
            let keys = v.indexOf(':');
            if (keys === -1) return;
            header[v.substring(0, keys).trim()] = v.substring(keys + 1).trim();
        });

        /* 处理日期数据 */
        header.date ? (header.date = new Date(header.date)) : (header.date = new Date());
        header.date = header.date.getTime();
        // 处理说明
        header.des && (header.des = marked(header.des));

        return [header, data];
    },

    /** 解析标签数据
     *
     * @param {{}} markd 头数据对象
     * @param {{}} tags 标签数据集
     *
     * @return {{}} 标签数据
     */
    __pass_tag: (markd, tags) => {
        if (!markd.tag) return tags;

        // 拆解为数组
        let tag = markd.tag.trim().split(",");

        // 初始化内容数组
        markd.tag = [];
        /* 解析标签数据 */
        tag.forEach(v => {
            v = v.trim();
            // 填充处理后的标签数据到原本的头数据中
            markd.tag.push(v);

            let nowmark = Object.assign({}, markd);
            delete nowmark.tag;
            tags[v] || (tags[v] = []);
            tags[v].push(nowmark);
        });
        return tags;
    }
};
module.exports = Tool;