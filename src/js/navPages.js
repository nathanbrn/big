function voltarIndex() {
    window.location.href = "../../index.html";
};

function voltarTelaBebidas() {
    window.location.href = "./bebidas.html"
};


document.querySelectorAll(".items").forEach( function(button) {

    
    button.addEventListener("click", function(event) {
    const pages = event.target || event.srcElement;
    const id = pages.id;

    if(id === "index")
        window.location.href = "../../"+id+".html";
    else 
        window.location.href = "src/pages/"+id+".html";
  });

});
