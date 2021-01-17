async function getContent(){
    try{
        const response = await fetch('https://tests-my.herokuapp.com/api');
        const data = await response.json();
        console.log(data)
    }
    catch(error){
        console.error(error)
    }
}
getContent()