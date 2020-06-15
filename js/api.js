class API {
  constructor(apikey) {
    this.apikey = apikey;
  }

  //method async to get all the coins
  async getCoinsAPI() {
    const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

    //fetch to api
    const urlGetCoins = await fetch(url);

    //response json
    const coins = await urlGetCoins.json();
    
    return {coins};
  }

  async getValues(coin, criptoCoin) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCoin}&tsyms=${coin}&api_key=${this.apikey}`;

    //consult rest API
    const urlGetCoin = await fetch(url);

    //response json
    const result = urlGetCoin.json();

    return {result};
  }
}