const footballTeam={
     team:"Argentina",
     year:1987,
     headCoach:"Luis Miguel",
     players:[
      {
        name:"Achu",
        position:"forward",
        isCaptain:true,
      },
            {
        name:"Salud",
        position:"midfielder",
        isCaptain:false,
      },
            {
        name:"Dia",
        position:"defender",
        isCaptain:false,
      },
            {
        name:"Noche",
        position:"goalkeeper",
        isCaptain:false,
      },
        {
        name:"Arriba",
        position:"goalkeeper",
        isCaptain:false,
      },
        {
        name:"Abajo",
        position:"defender",
        isCaptain:false,
      },
     ],
};

document.getElementById("team").textContent=footballTeam.team;
document.getElementById("year").textContent=footballTeam.year;
document.getElementById("head-coach").textContent=footballTeam.headCoach;

const select = document.getElementById("players");
const playercardsContainer = document.getElementById("player-cards");

function playerCards(positionsC) {
  const filterPositions =
    positionsC === "all"
      ? footballTeam.players
      : footballTeam.players.filter(
          ({ position }) => position === positionsC
        );

  return filterPositions
    .map(({ name, position, isCaptain}) => {
      return `
          <div class="player-card">
            <h2>${isCaptain ? "(Captain) " : ""}${name}</h2>
            <p>Position: ${position}</p>
          </div>
        `;
    })
}

playercardsContainer.innerHTML=playerCards("all");

select.addEventListener("change", () => {
  playercardsContainer.innerHTML=playerCards(select.value); 
});
