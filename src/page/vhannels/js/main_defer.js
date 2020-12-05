require("../css/main.pcss");
require("../css/user.pcss");
require("../../../lib/js/lib/vhannels/style/vhannels.floatContlos_all.css");
require("../../../lib/js/lib/vhannels/vhannels.floatContlos_all");

// 浮动消息展示
{
    // 消息对象记录集合
    let floatmessaSet = new Set();

    // 消息初始化方法
    function floatmessageload(c) {
        return (p, mes) => {
            floatmessaSet.add(mes);
            mes.setHtml(`
                <div style="display: flex;flex-direction: row">
                    <p style="flex: 1"><i class="fa ${c}" style="margin-right: .5rem"></i>${p}</p>
                    <p style="flex: 0;margin-left: 0;margin-right: .5rem"><a class="fa fa-close"></a></p>
                </div>`);
            mes.querySelector("a.fa-close").getDom().addEventListener("click", () => mes.message_destroy());
        }
    }

    // 浮动消息容器
    let floatmessage = new vhannels.floatContlos.FloatMessage(document.getElementById("floatmessageshow"));
    // 按钮展示消息
    document.querySelectorAll('button[name="floatmessageshow"]').forEach(d => {
        d.addEventListener("click", e => {
            // 按钮
            let butdom = new vhannels.ViewGroup(e.currentTarget);
            // 消息对象
            let message = floatmessage.createMessage({
                load: floatmessageload("fa-circle-o-notch fa-spin"),
                success: floatmessageload("fa-check"),
                warning: floatmessageload("fa-exclamation-triangle"),
                error: floatmessageload("fa-close"),
                destroy: v => {
                    floatmessaSet.delete(v);
                    setTimeout(() => v.remove(), 350)
                }
            }, () => {
            });

            message["message_" + butdom.value()](butdom.text());
            floatmessage.showMessage(message);
        });
    });
    // 按钮销毁消息
    document.querySelector("button[name=\"floatmessagehide\"]").addEventListener("click", () => {
        floatmessaSet.forEach((k) => k.querySelector("a.fa-close").getDom().click());
    });
}

// 浮动对话框展示
{
    let floatdialog = new vhannels.floatContlos.FloatDialog(document.getElementById("floatdialogshow"));

    // 事件监听
    floatdialog.showListern(() => {
        document.querySelector("[name=\"floatdialoggrouplistern\"]").value = "对话框容器正在展示";
    });
    floatdialog.destroyListern(() => {
        // 恢复按钮
        new vhannels.View(document.querySelector("[name=\"callfloatdialog\"]"))
            .attrs({"disabled": undefined}).setHtml("唤起对话框");

        document.querySelector("[name=\"floatdialoggrouplistern\"]").value = "对话框容器曾经或已经销毁";
    });

    // 对话框对象
    let dia = new vhannels.floatContlos.Dialog();

    // 对话框监听
    dia.showListern(() => {
        document.querySelector("[name=\"floatdialoglistern\"]").value = "对话框正在展示";
    });
    dia.destroyListern(() => {
        document.querySelector("[name=\"floatdialoglistern\"]").value = "对话框被销毁";
    });

    // 对话框展示的 html 内容
    dia.show_Html(() => {
        let dom = new vhannels.ViewGroup(document.createElement("div"));
        dom.style({"margin-top": "1rem", "display": "flex", "flex-direction": "column"});
        dom.setHtml(`<h2>示例对话框</h2>
                <a class="button">点击我关闭</a>`);
        // 关闭按钮
        dom.querySelector("a").getDom().addEventListener("click", () => floatdialog.destroy());

        return [dom];
    });

    // 唤起对话框
    document.querySelector("[name=\"callfloatdialog\"]").addEventListener("click", v => {
        // 展示对话框，可点击外部关闭
        floatdialog.show(dia, true);
        // 禁用按钮
        new vhannels.View(v.currentTarget).attrs({"disabled": ""}).setHtml("单击灰色容器部分也可关闭");
    });
}