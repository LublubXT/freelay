var page_html = ""

var plain_html = ""

var page_css = ""
var responsive_css = ""

var page_css_all;

var object_id = '';

var object_styles = {
    backgroundColor: '',
    color: '',
    textAlign: '',
    margin: '',
    fontFamily: '',
    border: '',
    padding: '',
    borderRadius: '',
    outline: '',
    transition: ''
};

function getStyle(element) {
    const style = getComputedStyle(element);
    var bg = document.getElementById('bg-color');
    var txt_color = document.getElementById('txt-color');
    var txt_align = document.getElementById('txt-align');
    var margin = document.getElementById('margin');


    object_styles = {
        backgroundColor: style.backgroundColor,
        color: style.color,
        textAlign: style.textAlign,
        margin: style.margin,
        fontFamily: style.fontFamily,
        border: style.border,
        padding: style.padding,
        borderRadius: style.borderRadius,
        outline: style.outline,
        transition: style.transition
    }

    console.log(object_styles);

    bg.value = object_styles.backgroundColor
    txt_color.value = object_styles.color
    txt_align.value = object_styles.textAlign
    margin.value = object_styles.margin
}

function get_object_id(clicked_id) {
    object_id = clicked_id;
    var elements = document.getElementsByClassName(object_id);

    getStyle(elements[0])
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function add_button_1() {
    plain_html += button_1.plain_html;
    page_html += button_1.html;
    if (page_css.includes('.button-1')) {
        render();
    } else {
        page_css += button_1.css;
        // responsive_css += button_1.responsive_css;
        render()
    }
}

function render() {
    const paper = document.getElementById("paper");

    page_css_all = `body {
    margin: 0px;
}\n
${page_css}
@media (max-width: 800px) {
    ${responsive_css}
}`

    document.getElementById('html_of_page').innerText = plain_html;
    document.getElementById('css_of_page').innerText = page_css_all;
    paper.innerHTML = page_html;
}

function get_input() {
    var bg = document.getElementById('bg-color').value;


};