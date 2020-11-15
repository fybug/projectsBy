
/** Aout.blog 静态数据快速处理工具
 *
 * 用于在网页中获取已经生成好的博客静态数据
 *
 * 并使用预设的数据处理方法去处理它
 *
 * @author fybug
 * @version 0.0.1
 * @class Aout_blog
 */
let Aout_blog = class Aout_blog {
    static emptyfun = () => {
    };
    /** 内容数据处理对象
     *
     * @type {Aout_blog.Conts}
     */
    conts;
    /** 标签数据处理对象
     *
     * @type {Aout_blog.Tags}
     */
    tags;
    /** 跨文件数据映射 */
    datamap = {};

    /**
     * @param {string} page 页面名称
     * @param {string} pageque 用于标识页面的地址栏参数名称
     * @param {string} publicpath url 地址名称
     */
    constructor(page, pageque = "p", publicpath = './static/blogs/') {
        let path = publicpath + page + '/';
        let nowpage = vhannels.tool.getQueryString(pageque, '0');

        this.conts = new Aout_blog.Conts(nowpage, path);
        this.tags = new Aout_blog.Tags(nowpage, path);
    }

    /** 添加附加数据
     *
     * @param {string} name 数据名
     * @param {any} val 数据值
     *
     * @return {this|any} 数据值为空时返回数据，有数据时返回 this
     */
    data(name, val = undefined) {
        if (val === undefined)
            return this.datamap[name];
        this.datamap[name] = val;
        return this;
    }

    /** 填充页码索引
     *
     * @param {number} index 当前页面页码
     * @param {number} maxnum 最大页码
     * @param {number} pagnum 分页数量
     * @param {{}} runof 回调存储对象
     *
     * @return {boolean}
     */
    static __plushpagelist(index, maxnum, pagnum, runof) {
        // 向前快速索引
        if (runof.calledge(index, false, maxnum, pagnum)) return true;

        for (let i =
            // 计算需要向前偏移的页数，以尾页为基数计算需要向前溢出的页数
            Math.max(0, index - pagnum - Math.max(0, index - maxnum + pagnum + 1)); i <= index; ++i) {
            if (runof.fun(i, index === i, maxnum, pagnum)) return true;
        }
        for (let i = index + 1, len =
            // 计算需要向后偏移的页数，以当前页数为基数计算向后溢出的页数
            Math.min(i + pagnum + Math.max(0, pagnum - index), maxnum); i < len; ++i) {
            if (runof.fun(i, index === i, maxnum, pagnum)) return true;
        }

        // 向后快速索引
        return runof.calledge(index, true, maxnum, pagnum);
    }

    /** 填充内容区的数据
     *
     * @param {{}} runof 回调对象
     * @param {Promise<Response>} fatch fetch 对象
     *
     * @return {boolean}
     */
    static __plushconts(runof, fatch) {
        let re = undefined;

        fatch.then(re => re.json()).catch(runof.error).then(json => {
            // 前边缘处理
            if (runof.calledge(json, false)) return true;

            // 内容生成
            for (let i = 0, len = json.length; i < len; ++i) if (runof.fun(json[i], i, json)) return true;

            // 后边缘处理
            return runof.calledge(json, true);
        }).then(r => re = r);

        return re;
    }
}

/** 标签数据处理对象
 *
 * 无标签时打印所有标签，有标签时打印对应的标签页面内容
 *
 * 无标签时 仅 tags 流程
 * 有标签时 tagpagenum -> tagpaging -> tagconts
 *
 * @author fybug
 * @version 0.0.1
 * @class Aout_blog.Tags
 */
Aout_blog.Tags = class Tags {
    /** 根目录
     *
     * @param {string}
     */
    publicpath;
    /** 当前页面页码
     *
     * @type {number}
     */
    nowpage;
    /** 运行数据映射 */
    __runof;

    /**
     * @param {string} nowpage 当前页码
     * @param {string} publicpath 当前 url 地址
     */
    constructor(nowpage, publicpath) {
        this.publicpath = publicpath;
        this.nowpage = Number(nowpage);

        this.__runof = {
            alltag: {
                publicpath: this.publicpath,
                filename: 'tags.js',
                error: Aout_blog.emptyfun,
                fun: Aout_blog.emptyfun,
                calledge: Aout_blog.emptyfun
            },
            tagpagenum: {
                publicpath: this.publicpath,
                error: Aout_blog.emptyfun,
                fun: Aout_blog.emptyfun,
            },
            tagpaging: {
                pagnum: 2,
                fun: Aout_blog.emptyfun,
                calledge: Aout_blog.emptyfun
            },
            tagconts: {
                publicpath: this.publicpath,
                error: Aout_blog.emptyfun,
                fun: Aout_blog.emptyfun,
                calledge: Aout_blog.emptyfun
            }
        };
    }

    /** 注册标签列表数据处理回调
     *
     * 作用于无标签名称打印所有标签数据的时候
     *
     * @param {function(string,number,string[]):boolean|undefined} fun 标签数据处理方法，传入：当前标签，标签的位置，标签数据集
     * @param {function(string[],boolean):boolean|undefined} calledge 数据边缘处理方法，传入：当前标签数据集，[true 在后边缘 false 在前边缘]
     * @param {function(any)} error 错误处理回调
     * @param {string} publicpath 重新定位 url 地址
     * @param {string} filname 重新指定文件名称
     *
     * @return this
     */
    tags(fun, calledge = undefined, error = undefined, publicpath = this.publicpath, filname = 'tags.js') {
        this.__runof.alltag.fun = fun;
        if (calledge) this.__runof.alltag.calledge = calledge;
        if (error) this.__runof.alltag.error = error;
        this.__runof.alltag.publicpath = publicpath;
        this.__runof.alltag.filename = filname;

        return this;
    }

    /** 注册获取数据总量时的处理
     *
     * @param {function(number,number):boolean|undefined} fun 页数数据处理回调，传入：最大页数，当前页码
     * @param {function(any)} error 错误处理回调
     * @param {string} publicpath 重新定位 url 地址
     *
     * @return this
     */
    tagpagenum(fun, error = undefined, publicpath = this.publicpath) {
        this.__runof.tagpagenum.fun = fun;
        if (error) this.__runof.tagpagenum.error = error;
        this.__runof.tagpagenum.publicpath = publicpath;

        return this;
    }

    /** 注册分页处理
     *
     * @param {number} pagnum 每边的页码数量
     * @param {function(number,boolean,number,number):boolean|undefined} fun 分页处理回调，传入：当前页码，当前生成的页码是否与页面页码相同，最大数量，分页数量
     * @param {function(number,boolean,number,number):boolean|undefined} calledge 分页边缘处理回调，传入：当前页码，[true 是后面的边缘 false 是前面的边缘]，最大数量，分页数量
     *
     * @return this
     */
    tagpaging(pagnum, fun, calledge = undefined) {
        this.__runof.tagpaging.pagnum = pagnum;
        this.__runof.tagpaging.fun = fun;
        if (calledge) this.__runof.tagpaging.calledge = calledge;

        return this;
    }

    /** 注册标签页面内容数据
     *
     * 带有对应标签的文章数据
     *
     * @param {function({},number,{}[]):boolean|undefined} fun 数据处理回调，传入：当前内容的数据对象，当前内容的位置，当前页面所有内容的数据对象组
     * @param {function({}[],boolean):boolean|undefined} calledge 数据边缘处理，传入：当前页面所有内容的数据对象组，[true 为在后方边缘 false 为在前方边缘]
     * @param {function(any)} error 错误处理回调
     * @param {string} publicpath 重新定位 url 地址
     *
     * @return this
     */
    tagconts(fun, calledge = undefined, error = undefined, publicpath = this.publicpath) {
        this.__runof.tagconts.fun = fun;
        if (calledge) this.__runof.tagconts.calledge = calledge;
        if (error) this.__runof.tagconts.error = error;
        this.__runof.tagconts.publicpath = publicpath;

        return this;
    }

    /** 启动标签数据处理
     *
     * @param {string} tagname 标签的名称，可为空
     * @param {function()} fun 结束后的回调
     */
    showtag(tagname = '', fun = Aout_blog.emptyfun) {
        let fa;
        if (tagname === '') {
            fa = fetch(this.__runof.alltag.publicpath + this.__runof.alltag.filename)
                .then((response) => response.json()).catch(this.__runof.alltag.error)
                .then((json) => {
                    if (this.__runof.alltag.calledge(json, false)) return;

                    for (let i = 0, len = json.length; i < len; ++i) if (this.__runof.alltag.fun(json[i], i, json)) return;

                    this.__runof.alltag.calledge(json, true);
                });
        } else {
            fa = fetch(this.__runof.tagconts.publicpath + `tag_${tagname}.js`)
                .then(response => response.json()).catch(this.__runof.tagpagenum.error).then(json => {
                    // 最大页数
                    let maxnum = json[0];
                    // 当前页码
                    let index = this.nowpage;

                    if (this.__runof.tagpagenum.fun(maxnum, index)) return;

                    // 生成分页
                    if (Aout_blog.__plushpagelist(index, maxnum, this.__runof.tagpaging.pagnum, this.__runof.tagpaging)) return;
                    // 获取内容数据
                    Aout_blog.__plushconts(this.__runof.tagconts, fetch(this.__runof.tagconts.publicpath + `tag_${index}_${tagname}.js`));
                });
        }

        fa.then(() => fun());
    }
};

/** 内容数据处理对象
 *
 * 处理顺序 pagenum -> paging -> conts -> tags
 *
 * 在 pagenum 获取失败的时候后面的都将不会运行
 *
 * 获取列表项内容使用 {@link Aout_blog.Conts.run}，获取单独的 id 内容使用 {@link Aout_blog.Conts.runofCont}
 *
 * @author fybug
 * @version 0.0.1
 * @class Aout_blog.Conts
 */
Aout_blog.Conts = class Conts {
    /** 根目录
     *
     * @param {string}
     */
    publicpath;
    /** 当前页面页码
     *
     * @type {number}
     */
    nowpage;
    /** 运行数据映射 */
    __runof;

    /**
     * @param {string} nowpage 当前页码
     * @param {string} publicpath 当前 url 地址
     */
    constructor(nowpage, publicpath) {
        this.publicpath = publicpath;
        this.nowpage = Number(nowpage);

        // 初始化数据映射
        this.__runof = {
            pagenum: {
                publicpath: this.publicpath,
                filename: 'indexlist.js',
                error: Aout_blog.emptyfun,
                fun: Aout_blog.emptyfun
            },
            paging: {calledge: void 0, fun: Aout_blog.emptyfun, pagnum: 5},
            conts: {
                publicpath: this.publicpath,
                calledge: Aout_blog.emptyfun,
                fun: Aout_blog.emptyfun,
                error: Aout_blog.emptyfun
            },
            tags: {
                publicpath: this.publicpath,
                filename: 'tags.js',
                error: Aout_blog.emptyfun,
                calledge: Aout_blog.emptyfun,
                fun: Aout_blog.emptyfun
            }
        };
    }

    /** 注册获取数据总量时的处理
     *
     * @param {function(number,number):boolean|undefined} fun 处理页面数量相关时的函数，传入最大的页数，当前页数
     * @param {function(any)} error 发生错误时的处理回调
     * @param {string} publicpath 重新指定 url 地址
     * @param {string} filname 重新指定数据文件的名称
     *
     * @return this
     */
    pagenum(fun, error = undefined, publicpath = this.publicpath, filname = 'indexlist.js') {
        this.__runof.pagenum.fun = fun;
        if (error) this.__runof.pagenum.error = error;
        this.__runof.pagenum.publicpath = publicpath;
        this.__runof.pagenum.filename = filname;

        return this;
    }

    /** 注册分页数据处理方法
     *
     * @param {number} pagnum 前后每一边留出多少分页
     * @param {function(number,boolean,number,number):boolean|undefined} fun 页码生成方法：当前生成的页码，当前生成的页码是否与页面页码相同，最大数量，分页数量
     * @param {function(number,boolean,number,number):boolean|undefined} calledge 生成页码边缘的内容传入：当前页面页码，[true 是后面的边缘 false 是前面的边缘]，最大数量，分页数量
     *
     * @return this
     */
    paging(pagnum, fun, calledge = undefined) {
        this.__runof.paging.pagnum = pagnum;
        this.__runof.paging.fun = fun;
        if (calledge) this.__runof.paging.calledge = calledge;

        return this;
    }

    /** 注册内容列表数据处理方法
     *
     * @param {function({},number,{}[]):boolean|undefined} fun 内容数据填充方法，传入：当前内容的 json 数据对象，当前内容的位置，当前页面所有内容的 json 数据对象数组
     * @param {function({}[],boolean):boolean|undefined} calledge 内容边缘数据处理，传入：当前内容的 json 数据对象数组，[true 为在后方边缘 false 为在前方边缘]
     * @param {function(any)} error 错误处理回调
     * @param {string} publicpath 重新指定的 url 地址
     *
     * @return this
     */
    conts(fun, calledge = undefined, error = undefined, publicpath = this.publicpath) {
        this.__runof.conts.fun = fun;
        if (calledge) this.__runof.conts.calledge = calledge;
        if (error) this.__runof.conts.error = error;
        this.__runof.conts.publicpath = publicpath;
        return this;
    }

    /** 注册标签数据处理方法
     *
     * @param {function(string,number,string[]):boolean|undefined} fun 标签数据填充方法，传入：当前标签，当前标签的位置，所有标签的数据集
     * @param {function(string[],boolean):boolean|undefined} calledge 边缘数据处理，传入：全部标签的数据集，[true 为在后方边缘 false 为在前方边缘]
     * @param {function(any)} error 错误处理回调
     * @param {string} publicpath 重新指定的 url 地址
     * @param {string} filname 重新指定的文件名称
     *
     * @return this
     */
    tags(fun, calledge = undefined, error = undefined, publicpath = this.publicpath, filname = 'tags.js') {
        this.__runof.tags.fun = fun;
        if (calledge) this.__runof.tags.calledge = calledge;
        if (error) this.__runof.tags.error = error;
        this.__runof.tags.publicpath = publicpath;
        this.__runof.tags.filname = filname;
        return this;
    }

    /** 启动列表内容处理
     *
     * 此前注册的处理接口如果返回 true 则会在当前流程中断
     *
     * @param {function()} fun 结束后的回调
     */
    run(fun = Aout_blog.emptyfun) {
        fetch(this.__runof.pagenum.publicpath + this.__runof.pagenum.filename)
            .then((response) => response.json())
            .catch(this.__runof.pagenum.error)
            .then(json => {
                // 最大页数
                let maxnum = json[0];
                // 当前页码
                let index = this.nowpage;

                // 总页码处理方法
                if (this.__runof.pagenum.fun(maxnum, index)) return;

                // 生成分页
                if (Aout_blog.__plushpagelist(index, maxnum, this.__runof.paging.pagnum, this.__runof.paging)) return;
                // 获取内容数据
                if (Aout_blog.__plushconts(this.__runof.conts, fetch(this.__runof.conts.publicpath + index + '.js'))) return;
                // 获取标签数据
                this.__plushtags();
            }).then(() => fun());
    }

    /** 启动内容处理
     *
     * 此前注册的处理接口如果返回 true 则会在当前流程中断
     *
     * @param {string|number} id 内容的 id 的 get 参数名或者直接输入 id
     * @param {{
     *     error: function(any),
     *     calledge: function({},boolean):boolean|undefined,
     *     fun: function({},number):boolean|undefined
     * }} runof 数据处理接口对象，内部函数类型与 {@link conts} 的参数类似，但是只有一个数据对象了，并且数据的位置变成了数据的 id
     * @param {function()} fun 结束后的回调
     */
    runofCont(id, runof = {}, fun = Aout_blog.emptyfun) {
        if (typeof id === "string") id = vhannels.tool.getQueryString(id, -1)
        runof = Object.assign({
            error: Aout_blog.emptyfun(),
            calledge: Aout_blog.emptyfun(),
            fun: Aout_blog.emptyfun()
        }, runof)

        // 当前页码
        let index = this.nowpage;

        fetch(this.__runof.conts.publicpath + index + '.js')
            .then(re => re.json()).catch(runof.error)
            .then(json => {
                // 提取当前数据属性
                for (let i = 0, len = json.length; i < len; ++i)
                    if (json[i]["index"] === id) return json[i]
                throw new Error("无法获取属性，页码 " + index + "，id " + id + " !");
            }).then(json => {
            // 获取数据
            fetch(this.__runof.conts.publicpath + id + '_data.html')
                .then(da => json.content = da).catch(runof.error)
                .then(() => {
                    // 前边缘处理
                    if (runof.calledge(json, false)) return true;
                    // 数据处理
                    if (runof.fun(json, id)) return true;
                    // 后边缘处理
                    return runof.calledge(json, true);
                })
                .then(() => fun());
        });
    }

    /** 填充标签区的数据 */
    __plushtags() {
        fetch(this.__runof.tags.publicpath + this.__runof.tags.filename)
            .then((response) => response.json()).catch(this.__runof.tags.error).then(json => {
            // 前边缘处理
            if (this.__runof.tags.calledge(json, false)) return;
            // 标签内容生成
            for (let i = 0, len = json.length; i < len; ++i) if (this.__runof.tags.fun(json[i], i, json)) return;
            // 后边缘处理
            this.__runof.tags.calledge(json, true);
        });
    }
};

/**
 * @class Aout_blog
 */
window.Aout_blog = Aout_blog;
module.exports = Aout_blog;
