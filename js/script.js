/*

Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)
Bonus
Rendere l’esercizio responsive, mandando a capo le card
Aggiungere, sotto alla sezione dei membri del team, un form di aggiunta membri che permetta di aggiungere un nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! :sorridere:)
Buon Lavoro

*/

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const formNewStudent = document.getElementById('form_new_student');
const addUserName = document.getElementById('nome');
const addUserRole = document.getElementById('role');
const addUserEmail = document.getElementById('email');
const addUserImg = document.getElementById('img');

const students = document.querySelector('.row');
// console.log(students);


function membersPrint(a, b) {
  
  for (let i = 0; i < a.length; i++) {
    const {name, role, email, img} = a[i];
  
    const members = `
    <div class="col-md-4 col-sm-12">
      <div class="card">
        <div class="row g-0">
          <div class="col-md-12 col-lg-4">
            <img src="./${img}" class="img-fluid card-img-top">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${role}</p>
              <a href="#" class="card-text">${email}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
    b.innerHTML += members
  }

  formNewStudent.addEventListener('submit', function(event) {

    event.preventDefault();
    
    const newMember = {
      name: addUserName.value,
      role: addUserRole.value,
      email: addUserEmail.value,
      img: addUserImg.value
    };
    
    console.log(a);
    
    a.push(newMember);
  
    b.innerHTML += newMember
    // non riesco a stampare l'oggetto su schermata (a meno che non si ripetano tutti gli altri. Non stampa nemmeno l'immagine)
  })
}

membersPrint(teamMembers, students)




