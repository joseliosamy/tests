async function getContent(){
    try{
        const response = await fetch('https://tests-my.herokuapp.com/api');
        const data = await response.json();
        
        show(data)
    }
    catch(error){
        console.log(error)
    }
}
getContent()

function show(users){
    let output = ""
    for (let user of users){
        output += `<li>${user.name}</li>`
    }
    
    document.querySelector('#api').innerHTML = output
}