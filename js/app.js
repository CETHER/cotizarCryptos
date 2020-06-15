//Instances
const compareAPI = new API('92a216c13996f7edb2983a0c5ae42e26aad6dd6026dd95b65273d7c884ed8a15');
const interface = new Interface();

//Read form
const form = document.getElementById('formulario');
const coinSelect = document.getElementById('moneda');
const cryptoCoinSelect = document.getElementById('criptomoneda');
const resultados = document.getElementById('resultados');

//event Listeners
form.addEventListener('submit', sendForm);


//functions
function sendForm(e) {
  e.preventDefault()
  
  //read coin selected
  const coinSelected = coinSelect.options[coinSelect.selectedIndex].value;
  //read cryptoCoin selected
  const cryptoCoinSelected = cryptoCoinSelect.options[cryptoCoinSelect.selectedIndex].value;
  
  //comprobar que ambos campos estén seleccionados
  validarFormulario(coinSelected, cryptoCoinSelected);

}

//Validar los campos del formulario
function validarFormulario(coinSelected, cryptoCoinSelected) {
  
  if (coinSelected === '' || cryptoCoinSelected === '') {
    interface.showMessage('Ambos campos son obligatorios', 'alert bg-danger text-center');

  } else {
    compareAPI.getValues(coinSelected, cryptoCoinSelected)
      .then(data => {
        interface.showResult(data.result.RAW, coinSelected, cryptoCoinSelected);
      })
  }
}