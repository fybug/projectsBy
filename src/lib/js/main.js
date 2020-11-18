require('../css/font-awesome.css');
require('../css/main.pcss');
require('./lib/vhannels/vhannels_publiclib')

// 项目公共 js
$(() => {
    let head = document.querySelector("body > header");

    // 移动端菜单
    let mob = "";
    let pc = "";

    for (let v of menudata) {
        mob += "<li><a href=\"" + v.link + "\"class=\"padding-1\" target='_blank'>" + v.name + "</a></li>";
        pc += "<li><a href=\"" + v.link + "\" class=\"padding-horizontal-2\" target='_blank'>" + v.name + "</a></li>";
    }

    head.innerHTML =
        `<!-- 移动设备顶栏 -->
        <div id="mobile_menu" class="leftload hide-for-large">
        <!-- 顶栏 -->
            <div class="title-bar">
                <!--<div class="title-bar-left">-->
        <!-- 菜单按钮 -->
                <button class="menu-icon" type="button" data-toggle="mobile_menu_list"></button>
                <h4 class="title-bar-title margin-bottom-0" style="margin-left:.5rem">fybug\`s log</h4>
                <!--</div>-->
            </div>
        
        <!-- 菜单部分 -->
            <aside class="off-canvas position-left" id="mobile_menu_list" data-off-canvas>
        <!-- 菜单列表 -->
                <ul class="vertical menu">
        <!-- 标题 -->
                    <ti>
        <!-- 关闭按钮 -->
                        <button class="padding-top-1 padding-left-1 close-button position-static"
                                aria-label="Close menu" type="button" data-close>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="margin-0">fybug\`s log</h4>
                    </ti>
                    ${mob}
                </ul>
            </aside>
        </div>
        
        <!-- pc 端顶栏 -->
        <div id="pc_menu" class="showload grid-container padding-vertical-0 top-bar show-for-large">
        <!-- 图标 -->
            <div class="top-bar-left padding-horizontal-2">
                <h4 class="margin-0 font-bold font-wide">fybug\`s log</h4>
            </div>
        
        <!-- 菜单 -->
            <div class="top-bar-right">
                <ul class="horizontal menu">
                    ${pc}
                </ul>
            </div>
        </div>`;
});

/* foundation 初始化 */
$(() => {
    let a = document.createElement("script");
    document.body.appendChild(a);
    a.innerHTML = `$(document).foundation();`;
});
window.menudata = [
    {
        link: "https://fybug.gitee.io/main.html",
        name: "我的主页"
    }, {
        link: "https://fybug.gitee.io/projectsBy/main.html",
        name: "开源 项目 / 作品 列表"
    }
];