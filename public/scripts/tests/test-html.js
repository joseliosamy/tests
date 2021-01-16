function testHtml(){
    const textarea = document.querySelector('textarea[name="test_html"]');
    document.querySelector('section script').innerHTML = textarea.value
}
const btnHtml = document.querySelector('input[type=button]')
btnHtml.addEventListener('click', testHtml);


