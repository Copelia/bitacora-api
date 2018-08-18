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


  let createInput = document.getElementById('newInput');
  let text = document.getElementById('text').value;

  const newInput = () => {

    // var x = document.createElement("TEXTAREA");
    // var t = document.createTextNode("What is your main focus today?");
    // x.appendChild(t);
    // document.body.appendChild(x);

   createInput.innerHTML = `<div class="input-group" id="drag-d" draggable="true" ondragstart="drag(event)">
   <textarea oninput="newInput()" class="form-control" aria-label="With textarea"></textarea>
 </div> `
  }