//script

function teamString (name, role, photo) {
    const rowDOM = document.getElementById('row_strings');

    const stringEl = document.createElement('p');
    
    console.log(stringEl);

    stringEl.classList.add('col-12','text-center','text-white','rounded-2');

    stringEl.id = 'p_injected';

    console.log(stringEl.classList);

    const tempEl = name + ' / ' + role + ' / ' + photo;

    stringEl.innerHTML = tempEl;

    console.log(stringEl);

    rowDOM.insertAdjacentElement('beforeend',stringEl);
}

function teamCard (name, role, photo) {
    const rowCards = document.getElementById('row_cards');

    
    const cardEl =  `
    <div class="card col gy-4">
    <img class="card-img-top p-1" src="./assets/img/${photo}" alt="ciao">
        <div class="card-body">
            <p class="card-text">Name: ${name}</p>
            <p class="card-text">Role: ${role}</p>
        </div>
    </div>
    `
    console.log('cardEl: ', cardEl, 'cardEl type: ', typeof(cardEl));

    console.log(cardEl);

    rowCards.insertAdjacentHTML('beforeend', cardEl);
}

const teamArray = [
    {
        name: 'Mayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg',
    },
]


for(let i = 0; i < teamArray.length; i++) {
    console.log('member name: ',teamArray[i].name, 'member role: ', teamArray[i].role, 'member photo: ', teamArray[i].photo);

    teamString(teamArray[i].name, teamArray[i].role, teamArray[i].photo);

    teamCard(teamArray[i].name, teamArray[i].role, teamArray[i].photo);
}



