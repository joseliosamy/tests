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

function show(topics){
    let output = ""
    for (let topic of topics){
        output += `
        <div class="card">
            <div class="name">
                <h4>${topic.title}</h4>
            </div><!--name-->

            <div class="content">

                <p>${topic.text}</p>

                <div class="links">

                    <ul>
                        <li><a href="${topic.linkContent.link}">${topic.link.linkContent.name}</a></li>
                    </ul>

                </div><!--links-->
            </div><!--content-->
        </div><!--card-->`
    }
    
    document.querySelector('#api .max').innerHTML = output
}