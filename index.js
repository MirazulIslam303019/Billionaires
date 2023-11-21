const loadBoroloks=()=>{
    const url=`https://forbes400.onrender.com/api/forbes400/`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayBoroloks(data))
}
const displayBoroloks=Boroloks=>{
    const conatiners=document.getElementById('container');
    conatiners.innerHTML='';
    for(const billionaire of Boroloks){
        console.log(billionaire);
        const Div=document.createElement('div');
        Div.classList.add('classas')
        Div.innerHTML=`
        <div class="col">
    <div class="card w-75">
    <img src="${billionaire.person.squareImage}" class="card-img-top" alt="...">
     <div class="card-body">
    <h1 class="card-title">${billionaire.rank}</h1>
    <h2 class="card-title">${billionaire.personName}</h2>
    <h5 class="card-title">${billionaire.countryOfCitizenship
    }</h5>

    <p class="card-text">${billionaire.bios[0,1,2,3]}</p>
    </div>
    </div>
    </div>
        `;
        conatiners.appendChild(Div);
    }
}

const loadBoroloksY=()=>{
    const url=`https://forbes400.onrender.com/api/forbes400/youngest`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayBoroloksY(data))
}
const displayBoroloksY=Boroloks=>{
    const conatiners=document.getElementById('container');
    conatiners.innerHTML='';
    for(const billionaire of Boroloks){
        console.log(billionaire);
        const Div=document.createElement('div');
        Div.classList.add('classas')
        Div.innerHTML=`
        <div class="col">
    <div class="card w-75">
    <img src="${billionaire.person.squareImage}" class="card-img-top" alt="...">
     <div class="card-body">
    <h1 class="card-title">${billionaire.rank}</h1>
    <h2 class="card-title">${billionaire.personName}</h2>
    <h5 class="card-title">${billionaire.countryOfCitizenship
    }</h5>

    <p class="card-text">${billionaire.bios[0,1,2,3]}</p>
    </div>
    </div>
    </div>
        `;
        conatiners.appendChild(Div);
    }
}

const loadBoroloksText=()=>{
    const url=`https://forbes400.onrender.com/api/forbes400/states/Texas`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayBoroloksText(data))
}
const displayBoroloksText=Boroloks=>{
    const conatiners=document.getElementById('container');
    conatiners.innerHTML='';
    for(const billionaire of Boroloks){
        console.log(billionaire);
        const Div=document.createElement('div');
        Div.classList.add('classas')
        Div.innerHTML=`
        <div class="col">
    <div class="card w-75">
    <img src="${billionaire.person.squareImage}" class="card-img-top" alt="...">
     <div class="card-body">
    <h1 class="card-title">${billionaire.rank}</h1>
    <h2 class="card-title">${billionaire.personName}</h2>
    <h5 class="card-title">${billionaire.countryOfCitizenship
    }</h5>

    <p class="card-text">${billionaire.bios[0,1,2,3]}</p>
    </div>
    </div>
    </div>
        `;
        conatiners.appendChild(Div);
    }
}
const loadBoroloksTecq=()=>{
    const url=`https://forbes400.onrender.com/api/forbes400/industries/technology`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayBoroloksTecq(data))
}
const displayBoroloksTecq=Boroloks=>{
    const conatiners=document.getElementById('container');
    conatiners.innerHTML='';
    for(const billionaire of Boroloks){
        console.log(billionaire);
        const Div=document.createElement('div');
        Div.classList.add('classas')
        Div.innerHTML=`
        <div class="col">
    <div class="card w-75">
    <img src="${billionaire.person.squareImage}" class="card-img-top " alt="...">
     <div class="card-body">
    <h1 class="card-title">${billionaire.rank}</h1>
    <h2 class="card-title">${billionaire.personName}</h2>
    <h5 class="card-title">${billionaire.countryOfCitizenship
    }</h5>

    <p class="card-text">${billionaire.bios[0,1,2,3]}</p>
    </div>
    </div>
    </div>
        `;
        conatiners.appendChild(Div);
    }
}

