require('../css/font-awesome.css');
require('../css/main.pcss');

// 项目公共 js
$(() => {
    let head = document.querySelector("body > header");

    // 移动端菜单
    let mob = "";
    let pc = "";

    for (let v of menudata) {
        mob += "<li><a href=\"" + v.link + "\"class=\"padding-1\">" + v.name + "</a></li>";
        pc += "<li><a href=\"" + v.link + "\" class=\"padding-horizontal-2\">" + v.name + "</a></li>";
    }

    head.innerHTML =
        // 移动设备顶栏
        "<div id=\"mobile_menu\" class=\"hide-for-large\">\n" +
        // 顶栏
        "        <div class=\"title-bar\">\n" +
        "        <!--<div class=\"title-bar-left\">-->\n" +
        // 菜单按钮
        "        <button class=\"menu-icon\" type=\"button\" data-toggle=\"mobile_menu_list\"></button>\n" +
        "        <h4 class=\"title-bar-title margin-bottom-0\" style=\"margin-left:.5rem\">fybug`s log</h4>\n" +
        "            <!--</div>-->\n" +
        "        </div>\n" +
        "\n" +
        // 菜单部分
        "        <aside class=\"off-canvas position-left\" id=\"mobile_menu_list\" data-off-canvas>\n" +
        // 菜单列表
        "            <ul class=\"vertical menu\">\n" +
        // 标题
        "                <ti>\n" +
        // 关闭按钮
        "                    <button class=\"padding-top-1 padding-left-1 close-button position-static\"\n" +
        "                            aria-label=\"Close menu\"\n" +
        "                            type=\"button\" data-close>\n" +
        "                        <span aria-hidden=\"true\">&times;</span>\n" +
        "                    </button>\n" +
        "                    <h4 class=\"margin-0\">fybug`s log</h4>\n" +
        "    </ti>\n" +
        mob +
        "    </ul>\n" +
        "    </aside>\n" +
        "    </div>\n" +
        "\n" +
        // pc 端顶栏
        "    <div id=\"pc_menu\" class=\"grid-container padding-vertical-0 top-bar show-for-large\">\n" +
        // 图标
        "        <div class=\"top-bar-left padding-horizontal-2\"><h4 class=\"margin-0 font-bold font-wide\">\n" +
        "        fybug`s\n" +
        "            log</h4></div>\n" +
        "\n" +
        // 菜单
        "        <div class=\"top-bar-right\">\n" +
        "            <ul class=\"horizontal menu\">" +
        pc +
        "            </ul>\n" +
        "        </div>\n" +
        "    </div>";

});
/* foundation 初始化 */
$(() => {
    let a = document.createElement("script");
    document.body.appendChild(a);
    a.innerHTML = "$(document).foundation();";
});
window.menudata = [{link: "#", name: "blog"}];