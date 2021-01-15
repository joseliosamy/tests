
const btn = document.querySelector('button[type="button"]')
function clear(){
    
    const textarea = document.querySelector('textarea[name="test-html"]').textContent

    console.log(textarea)
}

btn.addEventListener('click', clear)