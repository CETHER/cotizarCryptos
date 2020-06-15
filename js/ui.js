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
        //const select = document.getElementById('criptomoneda');
        
        //get coins in array
        for (const [key, value] of Object.entries(coins.coins.Data)) {
          //add Symbol and Name options
          const option = document.createElement('option');
          option.value = value.Symbol;
          option.appendChild(document.createTextNode(value.CoinName));
          
          cryptoCoinSelect.appendChild(option);
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

  //Print the result of quote from data selected
  showResult(result, coin, cryptoCoin){
    const dataCoin = result[cryptoCoin][coin];
    const price = dataCoin.PRICE.toFixed(2);
    const percent = dataCoin.CHANGEPCTDAY.toFixed(2);
    const updated = new Date(dataCoin.LASTUPDATE * 1000).toLocaleDateString('es-MX');

    //build template
    let templateHTML = `
      <div class="card bg-warning">
        <div class="card-body text-light">
          <h2 class="card-title"></h2>
          <p>El precio de ${dataCoin.FROMSYMBOL} a moneda
          ${dataCoin.TOSYMBOL} es de : $ ${price}</p>
          <p>Varición último día es de: % ${percent}</p>
          <p>Última actualización: ${updated}</p>
        </div>
      </div>
    `

    //insert result
    document.getElementById('resultados').innerHTML = templateHTML;

  }
}