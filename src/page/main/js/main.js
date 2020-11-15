require("../css/main.pcss");
require("../../../lib/js/lib/vhannels/tool/main")
require('./aout.blog');

let Aout_blog = new window.Aout_blog('main');

/** 数据错误处理回调生成
 *
 * @param {Aout_blog} Aout_blog 博客数据对象
 *
 * @return {function}
 */
window.error = (Aout_blog) => {
    return () => {
        let dom = document.createElement("div");
        dom.innerHTML = `
            <section class="grid-y shadow alert callout">
                <div class="cell text-center">
                    <h3>没查到数据</h3>
                </div>
                <div class="cell titleimg grid-x align-center">
                    <img class="cell" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDABsSFBcUERsXFhceHBsgKEIrKCUlKFE6PTBCYFVlZF9VXVtqeJmBanGQc1tdhbWGkJ6jq62rZ4C8ybqmx5moq6T/2wBDARweHigjKE4rK06kbl1upKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKT/wAARCADGAMYDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAMBAgQFBv/EAC8QAAICAQQABQMEAgIDAAAAAAABAhEDBBIhMQUTIkFRMmFxFCNCgVKhcpFTYrH/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAbEQEBAAMBAQEAAAAAAAAAAAAAAQIDETEhEv/aAAwDAQACEQMRAD8A9D5jDzEHlh5bI+q+Faxqemyx96Ob4XKtXG32mjqyxOSars4uFeXrIKuVKhlWnxqDnlwqPMnapFtPp46PTzlw8tcv4NeRrctqTn8idbWLTO32VE1yMsm8n3bHPozwe/KmaX2UiooKRNMkCVoKXySyKGEMj3LMoNNSAWFjCYdjMuPhSQo16drJj2sCZYRuSDMv3L+DQ8bxbm1+BNXyybV4w/RZahsb6GSdsyK4u1wPwS3yr3FBYlDY9fcpOLi/sy8UNKQJ5AA6JIEENwYp6eMc8si5k+vsass9sXXLE41LuXYgnHCuWcrxXUPJk2J8I1eIa5Yo7I8yZyItylb5bGmm6eHvQ+iuJNR5JbKialkAQ2MkkWRYAQZQs3wVQyBBb2IGEpl8cnGVp0ULQ5kkAa9VktRj7+5nqxmTmZCRllW2E+KOJEZvHNSXsMaKSiEosbYSjngn/wBk1Rh0+R4cif8AH3Nzd8rplxlYlKwITrhgBOgRJpKyJzjCLlJ0kcfXeISk3GHESG1rbn1uHDy5W/hHO1Pi85pxxrajDkm2+WUjywLvV/Vklbds1YYV7C8MDRFCPiX1RRlpdlH2XEZItgDD2GkABDYEH0Rb+QIGEgBAwkZgi3kT9lyLNGFVjb+eBWjFbt2TRMVwTtMeuiK0UmhtFZIDZ5I1aPJu/bft0InEjHJ45p/BcrLKOg1yBEpdNe4FMyvFNTz5cXwuzk5HyaNTNyk2zJNktPUSZfFH3FXbNOFCOH440hqKRGRJq4XPsrZfJ2LZpizziPcgkgpmkhhZAwAIsmwAAAQEtHng11W2HwZ8EXLIvsaYK22Rk0wn1dR4JolE0ZN1JIpJDtv2KSQwTKIma5NMoipRHE2HaeXmYkm+Y8AZYZHjbr3AvqPwVqU1Jr7mSb5Oh4p6dROvc5mR8iStjVys2YUY8JuxrgVXDYlkQqUbMGXXTeT0cRX+yVug1YmQ6D3RTXuLmisazzijKkvog1jIAQAEKAAXYAExAADTp1WOUvd8I0QVIVGO2EYf2xyM8m+uLJAiARm0WIcSQAFyQqS4HipLgYZpx5AbOPIDIrxlpah/g5Lds2+K5Jbob/qcVZhjyymTRgRth0Z8GPg0xRNXITrsuzFtT+o547X5d2bauoqjPYjdzTr9mH/EJRsMKrHFfCLsBzrNJUyrG5I+4pm2N7GGU4gAJGhAE0AwgZhhvyRiUH6NbXLI/pihHGiVPI69uGWRSJazHJ1YzkWJKLgsqXLlSRJk67VLT4qXM5dHK/VZd+7fK/yRqc7z5pTk+3x+BRRWu5pc/n493v0xrRz/AAebucfY6TQjhLXIDGgAON45kvVNfBlwK2i3iOXzdXkf3GaTFfNF1lGzCuBj9MW3wlyRCNIprp7NNN/aiGjkSm5ycn22Wx+rJGP+ToXY7Qw36mC+9jJ3I9EkICVKyQjJFr8Gl8lZRtUXjUZY9ZSyCUXFkGnWFiwER6BsaQaMfowxj7ydszxTk0l7mqK5+y6JyrTCdXJKolGLoiwnX5fL0kvmXpQ5GDxmdeTj/tgK55JFhZaHR8GXrmzqHP8AB4VhcvlnQsmqgoAARvKRvJlb+WdXTx2xoxaHHfLN10O0sYchOui8mnkl32SpkSmVhjaM7xx6Z0PCcPLyv24QyWHHJ24qx+GkqSqjTLDkZ45dp6AhEmDVJFFgGC5RtCJQ2vo1UUlGyplxGWPWZuiBuTH9hbizSZMbgvhXDl8dGmKpCsadJDUZ5Vrrx4sCACGixyfF57tXX+MUjrJ0cbxWDWsm31Kn/ocKs9gVTNGiwvNqIr+K5Y0uzo4PFp4RHWRHhUSJayAhAIONp8WyCLsNM3LCr7LuIVWKhBaUSvR1aJ8c+6pG4RVjsP0l7vEavTCUQUzTePFOS7ijidRtk2cyGo1U4KSlDnnonz9X842McdIhnO/U6tfwg/7LLWahd4L/AAwHK3kUvgxLxCS+rBNf0SvFMF87l+QLjYkWEY9Vin9M1/2Oi7CnxJKYECCMk9qM2fbmXr5robqfYQdmrXLHLszspUdFjXcmdHTwhiglCNGRdo1RfpM9uMjTVbk0JqgsSpKgtHO6OHgUjJgBccvRSU8UWn7Gijn+Ey/acfhnQQVOKslwKHT6EnZp8c26g0YfpM5ox/SG/wAGpcpqE3gyV/iyydE9qjjdTm6Z3hx/gbQnAvLnkwvuMuPwNsbXFYCAGpJDSf1JMAAuF5dPi2yl5a4XsavDL/Rwb+5j1U9mGS95cHR02Py8EI/CEzyNAgLCJpOodyFFsjubK2ehqnI4Nl7Uw+o0xM+JXI0pHPuv106PgICmFHM6epTAEAE4ulksOXGl1KPP5Oojhxm45F/6vg7OHIp400VYyxq2ToSMydCzq0+Ofb6B+P6RA6L9KFvPSYixRdFkzkdTD4jilGa1EI3XE18opDJHJHdF2joPlmHNoZQk56d18xfTGrHLiQM61Dhxmxyg/wDRZarE/wCaG0/UOAS9TiX87KxebVPbji4QfcmBXJbGv1Gril9GPl/k6qEabTx0+NRj/b+RwmdvViH0Sis36WPH1GV+M0+2QEuwPRx8cN9OwLkeJwDji3X67NU+IJADFqmgJiAE8tkdZW/ubvDc7fo7+BWXFv3JLlSF+GScPEMC+Zpf7NKxxdnJCVxVO30hcoOEnCSqS9jdDI8mOP7cpzuXqT5irFZfT5cZYpKnUZSfP4Ntd4y2eszhJNJxavqx8oSxvbJUzTue76JTlvlTT+norm9OFKWLJ9pSfRG3Lq9U4SoyStxa/JeWOUK3Kr5NW71SuLn6o7VfXBTLaxS3YptXdya4Zg3ZS0U3Kkm/wUv7DtM/VJrj0v8A+AFPKlOexQt/ApaTE3XkRb/4nQncrShLlR3SXb4K7v30nBp7Xy33x2MMePSQUlHHhipL2ottcXtapmy7SWyTbgt0k+RGpfMbg4y+W+0AKLQhOd7YN7eyg/TpuElsU4tr+VCCFgyvqD7oVkva6N6Uk05wXLc16vf4MSai8u9PbtpuPsXh6jPxmcJbYuvq6+5Wn1XJqk8McWGT37U21wvn8lcalHUzbls9XKbptf0df7+OXnathxyUFOuOhii5cJX+DXjjKMIuWW4JuTdvlcGTI5brc038o5M72uvD5FvJyf8Ajl/0VlBxdSTT+5fFKscpvlppJPoXKbk7k7bIWsgIi37ABOO4qOXN+UzPkrDlhnil6Jp18gBoxjdovEnn8yObGlFRdLGq7aY+eWDxY1jjJVJv1O/gANcEZ+nR1W+cozglHbL6eHyGSeN6XbjjJeq/U79gAzzaazces35FGUEo3fp76oh5MawTjBTVtct2AGTUp5I8ry11Xfv8k486hO4wVbaoAAzZZ4SxvzYPmS+n8UVlqEssJQi2lDpgABb9Qp45+ZHpRra66spkywbgoxk4wXUn3yAASqyRq9i4lb57XwXxSxpSlKLdPhewAAW85yco5VuV3xxX4F+ZGHnQmpOLrp0+wAvD1GfhU8+GcYwcJ1G65XuWyZY+e57FKUvovpfkAN3PPWhZpLFGXbtt373RXI4ydxjt+1gBzZeunHxecow09K+WnyhN0ACU2aeEYYlJq9wAAB//2Q==" alt=""/>
                </div>
            </section>`;
        Aout_blog.data('root').before(dom.children[0]);
    }
};

// 分页相关
require('./pageindex');
// 内容获取
require('./conts');

(() => {
    Aout_blog.conts.paging(2, plushpagedata(Aout_blog), plushpageedge(Aout_blog))
        .conts(plushcont(Aout_blog), void 0, error(Aout_blog))
        .tags((tag) => {
            let root = Aout_blog.data("tags");
            let html =
                `<div class="cell shrink">
                    <a href="?tag=${tag}">${tag}</a>
                </div>`;

            root.forEach(v => v.innerHTML += html);
        }, undefined, () => {
            let root = Aout_blog.data("tags");
            let i = 0;
            for (const v of root) {
                if (i >= 5) return;
                ++i;
                v.innerHTML += `<div class="cell shrink">
                    <p>null 获取失败</p>
                </div>`;
            }
        });
})();

// 标签页面
require('./tags');

(() => {
    Aout_blog.tags.tags(showtag(Aout_blog), void 0, error(Aout_blog));
    Aout_blog.tags.tagconts(plushcont(Aout_blog), void 0, error(Aout_blog));
})();

window.addEventListener("load", () => {
    // 临时节点
    Aout_blog.data('dom', document.createElement("div"));
    // 数据根对象
    Aout_blog.data('root', document.querySelector("#contlist > div nav"));
    Aout_blog.data("tags", document.querySelectorAll(".tags"));

    // tag 参数数据
    let tag = vhannels.tool.getQueryString("tag");

    if (tag !== undefined) {
        document.querySelectorAll(".tags").forEach(v => v.remove());

        if (tag !== '')
            Aout_blog.tags.tagpaging(2, plushpagedata(Aout_blog, `tag=${tag}&`), plushpageedge(Aout_blog, `tag=${tag}&`));
        Aout_blog.tags.showtag(tag);

    } else Aout_blog.conts.run();
});