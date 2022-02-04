/** aout.blogs 辅助工具 */
let Tool = {
    /** 扫描 md 文件并解析
     *
     * 按照页面文件夹分类存放
     *
     * @return {{}} 按照页面名称分开的 md 文件数据
     * <pre>
     * {
     *    [页面名称]: [ // 数据列表
     *       { // 一个 md 文件的数据
     *         [字段名称]: string, // 字段内容
     *         date: number, // 指定的日期毫秒数，无输入时使用当前时间
     *         des?: string // 描述，如果有此字段则会对其进行 markdown 解析，返回 html
     *         __cont: string // 内容数据，已经被进行 markdown 解析，返回 html
     *       },
     *    ]
     * }
     * </pre>
     * @see Date.getTime
     */
    __scann: (compilation) => {
        let jsonlist = {};
        // 扫描 markdown 文件
        glob.sync("src/page/*/static/blogs/*\\.md").forEach(v => {
            // 获取数据
            let data = compilation.inputFileSystem.readFileSync(v).toString().trim();

            // 内容部分
            let cont = "";
            // 头数据
            let header = ((da) => {
                // 除去头数据后的内容
                cont = da[1];
                return da[0];
            })(Tool.__pass_header(data));
            // 解析 markdown
            cont = marked(cont.trim());

            // 没数据
            if (header.length === 0 && cont === "") return;

            // 记录内容数据
            header.__cont = cont;

            // 页面名称，通过获取文件夹名称设置
            let pagename = path.basename(path.resolve(v, "../../../"));

            // 不同页面目录下的的 md 文件数据数据按照 页面名称 分开
            jsonlist[pagename] || (jsonlist[pagename] = []);
            // 追加数据
            jsonlist[pagename].push(header);
        });
        return jsonlist;
    },

    /** 解析头数据
     *
     * @param {string} data
     *
     * @return {[{},string]} 返回解析后的头数据和去除头数据后的内容
     * <pre>
     * [
     *    { // 实际输入的头数据
     *       [字段名称]: string, // 字段内容
     *       date: number, // 指定的日期毫秒数，无输入时使用当前时间
     *       des?: string // 描述，如果有此字段则会对其进行 markdown 解析，返回 html
     *    },
     *    string // 去除头数据后的剩余内容
     * ]
     * </pre>
     * @see Date.getTime
     */
    __pass_header: (data) => {
        /* 数据头检查 */
        if (!data.startsWith("++++++"))
            // 头标签不符，不处理，直接返回
            return [{}, data];

        /* 数据尾检查 */
        let endmark = data.indexOf("++++++", 6);
        if (endmark === -1)
            // 尾标签不符，不处理，直接返回
            return [{}, data];

        // 截取头数据
        let head = data.substring(6, endmark).trim();
        // 剩余的内容
        data = data.substring(endmark + 6).trim();

        // 头数据
        let header = {};

        // 逐行解析数据
        head.split(/\r?\n/).forEach(v => {
            // 截取检查字段分割符
            let keys = v.indexOf(':');
            // 无效字段直接忽略
            if (keys === -1) return;
            // 解析数据并放入头数据数组
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

            // 克隆一个数据对象
            let nowmark = Object.assign({}, markd);
            // 删除克隆对象的 tag 内容
            delete nowmark.tag;
            // 记录当前内容数据对象到对应的 tag 分类中
            tags[v] || (tags[v] = []);
            tags[v].push(nowmark);
        });
        return tags;
    }
};
module.exports = Tool;
