const html_code=document.querySelector('.html-code textarea');
const css_code=document.querySelector('.css-code textarea');
const js_code=document.querySelector('.js-code textarea');
const result=document.querySelector('#result');

function run(){

    localStorage.setItem('html_code',html_code.value);
    localStorage.setItem('css_code',css_code.value);
    localStorage.setItem('js_code',js_code.value);
    result.contentDocument.body.innerHTML= `<style>${localStorage.css_code}</style>`+localStorage.html_code;
    result.contentWindow.eval(localStorage.js_code);
}
html_code.onkeyup = () =>run()
css_code.onkeyup = () =>run()
js_code.onkeyup = () =>run()

html_code.value=localStorage.html_code;
css_code.value=localStorage.css_code;
js_code.value=localStorage.js_code;