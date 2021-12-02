var page_html = ""

var page_css = ""
var responsive_css = ""

var page_css_all;

function add_navbar_1() {
    page_html += navbar_1.html;
    if (page_css.includes('.navbar-1')) {
        render();
    } else {
        page_css += navbar_1.css;
        responsive_css += navbar_1.responsive_css;
        render()
    }
}

function add_navbar_2() {
    page_html += navbar_2.html
    if (page_css.includes('.navbar-2')) {
        render();
    } else {
        page_css += navbar_2.css;
        responsive_css += navbar_2.responsive_css;
        render()
    }
}

function add_header_1() {
    page_html += header_1.html
    if (page_css.includes('.header-1')) {
        render();
    } else {
        page_css += header_1.css;
        render()
    }
}

function add_header_2() {
    page_html += header_2.html
    if (page_css.includes('.header-2')) {
        render();
    } else {
        page_css += header_2.css;
        render()
    }
}

function add_header_3() {
    page_html += header_3.html
    if (page_css.includes('.header-3')) {
        render();
    } else {
        page_css += header_3.css;
        render()
    }
}

function add_main_1() {
    page_html += main_1.html
    if (page_css.includes('.main-1')) {
        render();
    } else {
        page_css += main_1.css;
        render()
    }
}

function add_main_2() {
    page_html += main_2.html
    if (page_css.includes('.main-button-1')) {
        render();
    } else {
        page_css += main_2.css;
        render()
    }
}

function add_main_3() {
    page_html += main_3.html
    responsive_css += main_3.responsive_css;
    if (page_css.includes('.main-3')) {
        render();
    } else {
        page_css += main_3.css;
        render()
    }
}

function add_main_3_1() {
    page_html += main_3_1.html
    responsive_css += main_3_1.responsive_css;
    if (page_css.includes('.main-3')) {
        render();
    } else {
        page_css += main_3_1.css;
        render()
    }
}

function add_main_3_2() {
    page_html += main_3_2.html
    responsive_css += main_3_2.responsive_css;
    if (page_css.includes('.main-3')) {
        render();
    } else {
        page_css += main_3_2.css;
        render()
    }
}

function add_main_3_3() {
    page_html += main_3_3.html
    responsive_css += main_3_3.responsive_css;
    if (page_css.includes('.main-3')) {
        render();
    } else {
        page_css += main_3_3.css;
        render()
    }
}

function add_main_3_4() {
    page_html += main_3_4.html
    responsive_css += main_3_4.responsive_css;
    if (page_css.includes('.main-3')) {
        render();
    } else {
        page_css += main_3_4.css;
        render()
    }
}

function add_main_3_5() {
    page_html += main_3_5.html
    responsive_css += main_3_5.responsive_css;
    if (page_css.includes('.main-3')) {
        render();
    } else {
        page_css += main_3_5.css;
        render()
    }
}

function add_main_3_6() {
    page_html += main_3_6.html
    responsive_css += main_3_6.responsive_css;
    if (page_css.includes('.main-3')) {
        render();
    } else {
        page_css += main_3_6.css;
        render()
    }
}

function add_main_4() {
    page_html += main_4.html
    responsive_css += main_4.responsive_css;
    if (page_css.includes('.main-4')) {
        render();
    } else {
        page_css += main_4.css;
        render()
    }
}

function add_main_5() {
    page_html += main_5.html
    responsive_css += main_5.responsive_css;
    if (page_css.includes('.main-5')) {
        render();
    } else {
        page_css += main_5.css;
        render()
    }
}

function add_main_6() {
    page_html += main_6.html
    responsive_css += main_6.responsive_css;
    if (page_css.includes('.main-6')) {
        render();
    } else {
        page_css += main_6.css;
        render()
    }
}

function add_main_7() {
    page_html += main_7.html
    responsive_css += main_7.responsive_css;
    if (page_css.includes('.main-7')) {
        render();
    } else {
        page_css += main_7.css;
        render()
    }
}

function add_main_8() {
    page_html += main_8.html
    responsive_css += main_8.responsive_css;
    if (page_css.includes('.main-8')) {
        render();
    } else {
        page_css += main_8.css;
        render()
    }
}

function add_main_9() {
    page_html += main_9.html
    responsive_css += main_9.responsive_css;
    if (page_css.includes('.main-9')) {
        render();
    } else {
        page_css += main_9.css;
        render()
    }
}

function add_main_10() {
    page_html += main_10.html
    responsive_css += main_10.responsive_css;
    if (page_css.includes('.main-10')) {
        render();
    } else {
        page_css += main_10.css;
        render()
    }
}

function add_footer_1() {
    page_html += footer_1.html
    responsive_css += footer_1.responsive_css;
    if (page_css.includes('.footer-1')) {
        render();
    } else {
        page_css += footer_1.css;
        render()
    }
}

function render() {
    const paper = document.getElementById("paper");
    paper.innerHTML = page_html;
    console.clear()
    console.log(page_css)
        // console.log(page_plain_html)
    console.log(page_html)

    page_css_all = `body {
    margin: 0px;
}\n
${page_css}
@media (max-width: 800px) {
    ${responsive_css}
}`

    document.getElementById('html_of_page').innerText = page_html;
    document.getElementById('css_of_page').innerText = page_css_all;
}