// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. 
// Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, 
//Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le 
//card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere
// nuovi membri del team.

let stamp = document.querySelector(".team-container");

const teamMembers = [
    {
        "nome": "Wayne Barnett",
        "immagine": "img/wayne-barnett-founder-ceo.jpg",
        "ruolo": "Founder & CEO"
    },
    {
        "nome": "Angela Caroll",
        "immagine": "img/angela-caroll-chief-editor.jpg",
        "ruolo": "Chief Editor"
    },
    {
        "nome": "Walter Gordon",
        "immagine": "img/walter-gordon-office-manager.jpg",
        "ruolo": "Office Manager"
    },
    {
        "nome": "Angela Lopez",
        "immagine": "img/angela-lopez-social-media-manager.jpg",
        "ruolo": "Social Media Manager"
    },
    {
        "nome": "Scott Estrada",
        "immagine": "img/scott-estrada-developer.jpg",
        "ruolo": "developer"
    },
    {
        "nome": "Barbara Ramos",
        "immagine": "img/barbara-ramos-graphic-designer.jpg",
        "ruolo": "Grafhic Designer"
    }

];
console.log(teamMembers);

teamMembers.forEach((result) => {
    // Creo card
    const card = document.createElement('div');
    card.classList = 'team-card';
  
    // contenuto card
    const content = `
    <div class="card-image">
    <img
      src="img/wayne-barnett-founder-ceo.jpg"
      alt="Wayne Barnett"
    />
  </div>
  <div class="card-text">
    <h3>${result.nome}</h3>
    <p>${result.ruolo}</p>
  </div> 
    `;
  
    // stampa
    stamp.innerHTML += content;
  })


