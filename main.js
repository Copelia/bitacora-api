

//DnD 

function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
  }

//Retrieving from local storage with a button event
    let button = document.getElementById('try');
    let inputValue = document.getElementById('storage');
    
    button.addEventListener('click', event => {
        let storageValue = localStorage.getItem("card");
        inputValue.innerHTML = storageValue;
    });


  // Trabajando con DOM. Resolver input creado no habilitado 
  let createInput = document.getElementById('newInput');
  let text = document.getElementById('text').value;
  
  //Setting local storage from input
  const newInput = () => {
    let newValue = document.getElementById('text').value;
    localStorage.setItem("card", newValue);
    // var x = document.createElement("TEXTAREA");
    // var t = document.createTextNode("What is your main focus today?");
    // x.appendChild(t);
    // document.body.appendChild(x);

   createInput.innerHTML = `<div class="input-group" id="drag-d" draggable="true" ondragstart="drag(event)">
   <textarea oninput="newInput()" class="form-control" aria-label="With textarea"></textarea>
 </div> `
  }

