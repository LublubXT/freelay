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
    if (page_css.includes('.main-3')) {
        render();
    } else {
        page_css += main_3.css;
        render()
    }
}

function add_main_4() {
    page_html += main_4.html
    if (page_css.includes('.main-4')) {
        render();
    } else {
        page_css += main_4.css;
        render()
    }
}

function add_main_5() {
    page_html += main_5.html
    if (page_css.includes('.main-5')) {
        render();
    } else {
        page_css += main_5.css;
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