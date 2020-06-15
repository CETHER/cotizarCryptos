//Class UI
class Interface {

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