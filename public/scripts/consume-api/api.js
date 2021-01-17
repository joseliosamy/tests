async function getContent(){
    try{
        const response = await fetch('https://tests-my.herokuapp.com/api');
        const data = await response.json();

        
    }
    catch(error){
        console.log(error)
    }
}
getContent()

function show(users){
    let output = ""
    for (let user of users){
        output += `
        <div class="card">
            <div class="name">
                <h4>${user.title}</h4>
            </div><!--name-->

            <div class="content">

                <p>${user.text}</p>

                <div class="links">

                    <ul>
                        <li><a href="${user.linkContent.link}">${user.linkContent.name}</a></li>
                    </ul>

                </div><!--links-->
            </div><!--content-->
        </div><!--card-->`
    }
    
    document.querySelector('#api .max').innerHTML = output
}