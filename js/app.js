//Instances
const interface = new Interface();

//Read form
const form = document.getElementById('formulario');
const coinSelect = document.getElementById('moneda');
const criptoCoinSelect = document.getElementById('criptomoneda');

//event Listeners
form.addEventListener('submit', sendForm);


//functions
function sendForm(e) {
  e.preventDefault()
  
  //read coin selected
  const coinSelected = coinSelect.options[coinSelect.selectedIndex].value;
  //read criptoCoin selected
  const criptoCoinSelected = criptoCoinSelect.options[criptoCoinSelect.selectedIndex].value;
  
  //comprobar que ambos campos estén seleccionados
  validarFormulario(coinSelected, criptoCoinSelected);

}

//Validar los campos del formulario
function validarFormulario(coinSelected, criptoCoinSelected) {
  
  if (coinSelected === '' || criptoCoinSelected === '') {
    interface.showMessage('Ambos campos son obligatorios', 'alert bg-danger text-center');

  } else {
    console.log('todo bien');
    
  }
}