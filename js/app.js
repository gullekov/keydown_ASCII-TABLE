//  document.addEventListener("keypress", run);

//  function run(e){
    // console.log(e.key) // key dine bizin yazyan sanymyzy gorkezyar
    // console.log(e.keyCode) ascii tablodaky garsylygyny gorkezyar

    // console.log(e.which);
// }

//  document.addEventListener("keydown", run);

//  function run(e){
    // console.log(e.key);
    // onsole.log(e.key) // key dine bizin yazyan sanymyzy gorkezyar
    // console.log(e.keyCode) ascii tablodaky garsylygyny gorkezyar

    // console.log(e.which);
// }


//  document.addEventListener("keyup", run);

//  function run(e){
//     console.log(e.key)
//  }


// document.addEventListener("keydown", run);

// function run(e){
//     console.log(e.keyCode);
//     if(e.keyCode ==116){
//         alert("sizin sahypany tazelemek ucin hukudynyz yok")
//     }

//     e.preventDefault();
// }



const insert = document.getElementById("insert")



window.addEventListener("keydown", (event) =>{
    insert.innerHTML = `
    <div class="key">
    ${event.key === " " ? "Space" : event.key}
   <small>event-key</small>
</div>
<div class="key">
${event.keyCode}
   <small>event-keyCode</small>
</div>

<div class="key">   
${event.code}
   <small>event-code</small>
</div>
    `



})