//Class UI
class Interface {
  constructor(){
    this.init();
  }

  init(){
    this.buildSelect();
  }

  buildSelect() {
    compareAPI.getCoinsAPI()
      .then(coins => {
        
        //create select for options
        const select = document.getElementById('criptomoneda');
        
        //get coins in array
        for (const [key, value] of Object.entries(coins.coins.Data)) {
          //add Symbol and Name options
          const option = document.createElement('option');
          option.value = value.Symbol;
          option.appendChild(document.createTextNode(value.CoinName));
          
          select.appendChild(option);
        }
      })
  }

  showMessage(message, classes) {
    const div = document.createElement('div');
    div.className = classes;
    div.appendChild(document.createTextNode(message));
    
    //select messages
    const divMessage = document.querySelector('.mensajes');
    
    divMessage.appendChild(div);
    
    //show div
    setTimeout(() => {
      document.querySelector('.mensajes div').remove();
    }, 3000);
  }
}