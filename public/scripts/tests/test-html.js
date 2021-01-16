function testHtml(){
    const textarea = document.querySelector('textarea[name="test_html"]');
    document.write(textarea.value)
}
const btnHtml = document.querySelector('input[type=button]')
btnHtml.addEventListener('click', testHtml);


