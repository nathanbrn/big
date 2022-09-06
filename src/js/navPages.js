function voltarIndex() {
    window.location.href = "../../index.html";
}


document.querySelectorAll("button").forEach( function(button) {

    
    button.addEventListener("click", function(event) {
    const pages = event.target || event.srcElement;
    const id = pages.id;

    if(id === "index")
        window.location.href = "../../"+id+".html";
    else 
        window.location.href = "src/pages/"+id+".html";
  });

});



// function salgados() {
//     window.location.href = "src/pages/salgados.html";
// }
// function sanduiches() {
//     window.location.href = "src/pages/sanduiches.html";
// }
// function petiscos() {
//     window.location.href = "src/pages/petiscos.html";
// }
// function bebidas() {
//     window.location.href = "src/pages/bebidas.html";
// }
// function outros() {
//     window.location.href = "src/pages/outros.html";
// }

