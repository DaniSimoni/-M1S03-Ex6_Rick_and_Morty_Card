/* Utilize a API abaixo para buscar um json e criar um cartão com as informações de um usuário do Ricky and Morty.
Onde você vê o número um, pode mudar para qualquer número até 800 que vai buscar um personagem diferente.
https://rickandmortyapi.com/api/character/1 */

/* 
const num = 0;
const formCard = document.querySelector('#formCard');
console.log(formCard);

formCard.addEventListener('submit', (event) => {
    event.preventDefault();
    const num = document.querySelector('#numCard').value;
    console.log(num)
}); */



async function search () {
  
    const formCard = document.querySelector('#formCard');
    formCard.addEventListener('submit', async (event) => {
      event.preventDefault();
      const num = parseInt(document.querySelector('#numCard').value);
      
      if (isNaN(num)) {
        console.log('Digite um número');
        return;
      }
  
      const response = await fetch(`https://rickandmortyapi.com/api/character/${num}`)
      const data = await response.json()

    console.log(data)
    document.getElementById('name').innerHTML = data?.name;
    document.getElementById('species').innerHTML = data?.species ;
    document.getElementById('status').innerHTML = data?.status;
    document.getElementById('gender').innerHTML = data?.gender;
    document.getElementById('image').src = data?.image; 
      
    console.log(`O card é o nº ${num}`);
          });
        }
search();



