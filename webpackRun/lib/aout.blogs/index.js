let tool = require('./tool');

/** 自动化博客数据生成工具
 *
 * @author fybug
 * @version 0.0.1
 * @class Aout_Blogs
 */
class Aout_Blogs {
    /** 单页内容量
     *
     * @type number
     */
    static itemnum = 5;
    /** 标签展示量
     *
     * @type number
     */
    static tagnum = 5;
    /** 展示在数据中的字段 */
    static showfield = {page: true, index: true};

    constructor(option = {}) {
        option.itemnum && (Aout_Blogs.itemnum = option.itemnum);
        option.tagnum && (Aout_Blogs.tagnum = option.tagnum);
        option.showfield && (Aout_Blogs.showfield = Object.assign(Aout_Blogs.showfield, option.showfield));
    }

    /** 生成头数据索引
     *
     * @param {{}} markd 当前数据
     * @param {[{}[]]} datalist 当前索引数据集
     * @param {number} nowdataindex 当前索引位置
     *
     * @return {number} 现在的索引位置
     */
    static __load_header(markd, datalist, nowdataindex) {
        /* 偏移当前索引数据集，每个数据集最多八个 */
        let dataitem = datalist[nowdataindex];
        dataitem.length >= Aout_Blogs.itemnum && (datalist[++nowdataindex] = dataitem = []);

        // 载入到当前索引中
        dataitem.push(markd);

        return nowdataindex;
    }

    /** 生成内容文件
     *
     * 生成的内容文件存放在 static/blogs/[pagename]/[index]_data.html
     *
     * @param {string} pagename 页面名称
     * @param {string} d 内容数据
     * @param {number} index 当前 id
     * @param compilation
     */
    static __load_cont(pagename, d, index, compilation) {
        d !== "" && (compilation.assets['static/blogs/' + pagename + '/' + index + '_data.html'] = {
            source: () => d,
            size: () => d.length
        });
    }

    /** 生成标签数据文件
     *
     * 生成标签展示数据和标签页面数据
     *
     * @param {{}} compilation
     * @param {{}} tags 标签数据
     * @param {string} pagename 所属页面名称
     */
    static __load_tag(compilation, pagename, tags) {
        let tagset = {
            __listdata: []
        };
        let tag, taglist, tagitem, tagindex;

        /* 整理当前标签数据 */
        for (let tagsKey in tags) {
            tag = tags[tagsKey];
            // 记录标签
            if (!tagset[tagsKey] && tagset.__listdata.length < Aout_Blogs.tagnum) {
                tagset.__listdata.push(tagsKey);
                tagset[tagsKey] = "";
            }

            // 标签页面数据集
            taglist = tags[tagsKey] = [[]];
            // 当前标签页面数据
            tagitem = taglist[0];
            // 当前数据集的位置
            tagindex = 0;
            /* 按页面整理数据 */
            tag.forEach(v => {
                // 页面内容满了之后偏移数据集的位置
                taglist[tagindex].length >= Aout_Blogs.itemnum && (tagitem = taglist[++tagindex] = []);
                tagitem.push(v);
            });
            tagindex = undefined;
            /* 生成标签页面数据 */
            taglist.forEach((v, index) => {
                tagitem = JSON.stringify(v);
                compilation.assets['static/blogs/' + pagename + '/tag_' + index + "_" + tagsKey + ".js"] = {
                    source: () => tagitem,
                    size: () => tagitem.length
                }
            })
        }

        /* 生成 tag 展示索引 */
        {
            tagset = JSON.stringify(tagset.__listdata);
            compilation.assets['static/blogs/' + pagename + '/tags.js'] = {
                source: () => tagset,
                size: () => tagset.length
            };
        }
    }

    apply(compiler) {
        compiler.plugin('emit', function (compilation, callback) {
            /** @type {{}} */
            let jsonlist = tool.__scann(compilation);

            /* 处理每个页面的数据 */
            for (let v in jsonlist) {
                // 标签数据集
                let tags = {};
                // 索引数据集
                let datalist = [[]];
                // 当前索引记录位置
                let nowdataindex = 0;
                let d;

                // 当前页面所属的数据
                let list = jsonlist[v];
                // 排序扫描到的数据，按照日期进行排序
                list.sort((r, l) => l.date - r.date)
                    /* 处理排序好的数据 */
                    .forEach((markd, index) => {
                        /* 转移内容部分 */
                        d = markd.__cont;
                        delete markd.__cont;
                        // 转换日期数据
                        markd.date && (markd.date = new Date(markd.date).toLocaleString());

                        // 没头数据不可生成索引
                        if (markd.length === 0) return;
                        /* 附加索引数据 */
                        Aout_Blogs.showfield.page && (markd.page = v);
                        Aout_Blogs.showfield.index && (markd.index = index);

                        // 解析标签数据
                        tags = tool.__pass_tag(markd, tags);
                        // 生成头数据
                        nowdataindex = Aout_Blogs.__load_header(markd, datalist, nowdataindex);

                        // todo 归档文件
                        // 生成内容文件
                        Aout_Blogs.__load_cont(v, d, index, compilation);
                    });

                // 生成标签文件
                Aout_Blogs.__load_tag(compilation, v, tags);

                /* 生成索引数据集 */
                datalist.forEach((item, index) => {
                    // 当前索引
                    let data = JSON.stringify(item);
                    // 插入索引数据
                    compilation.assets['static/blogs/' + v + '/' + index + '.js'] = {
                        source: () => data,
                        size: () => data.length
                    };
                });
            }
            callback();
        });
    }
}

module.exports = Aout_Blogs;