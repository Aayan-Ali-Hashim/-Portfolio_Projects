document.querySelector("#btn").addEventListener('click',(e)=>{
    function titleData(){
        let title = document.querySelector("#title-input").value;
        return title;
    }
    function textData(){
        let text = document.querySelector("#text-input").value;
        return text;
    }

    const cardContainer = document.getElementById('card-container');

function createCard(title, content) {
    const card = document.createElement('div');
    card.classList.add('card'); 
    
    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;

    const cardContent = document.createElement('p');
    cardContent.textContent = content;
    card.appendChild(cardTitle);
    card.appendChild(cardContent);  
  return card;
}
if (document.body.scrollHeight > document.body.clientHeight) {
  document.body.style.height = "fit-content";
}
document.querySelector("#title-input").value = "";
document.querySelector("#text-input").value = "";
// Example usage
const card1 = createCard(titleData(),textData());
cardContainer.appendChild(card1);
})
