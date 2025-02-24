function crearComponente(){
    const $componenteP = document.createElement("p"),
    $label = document.createElement("label"),
    $input1 = document.createElement("input"),
    $input2 = document.createElement("input"),
    $boton = document.createElement("button"),
    $divComponentes = document.getElementById("AgregarComponentes");
    //$script = document.createElement("script");
    

    $label.classList.add("texto","textoComponentes");
    $label.textContent = "Datos";
    $input1.classList.add("inputComponentes");
    $input1.placeholder = "Ingresa texto";
    $input2.classList.add("inputComponentes");
    $input2.placeholder = "Ingresa texto";
    $boton.classList.add("botonComponentes");
    $boton.textContent = "-";
    $boton.onclick = function() {
        eliminarComponente($boton);
    };
    //$script.src="JS/aggComponenetes.js";

    $componenteP.classList.add("alinearComponentes");
    $componenteP.appendChild($label);
    $componenteP.appendChild($input1);
    $componenteP.appendChild($input2);
    $componenteP.appendChild($boton);
    //$componenteP.appendChild($script);

    console.log($divComponentes);
    if($divComponentes.childElementCount == 5){
        document.querySelector("div").style.setProperty('--alturaGrid','auto');
    }

    $divComponentes.appendChild($componenteP);

    
}
function eliminarComponente(boton){
    const $divComponentes = document.getElementById("AgregarComponentes");
    console.log($divComponentes.childElementCount);
    console.log($divComponentes.childNodes);
    if($divComponentes.childElementCount == 6){
        document.querySelector("div").style.setProperty('--alturaGrid','500px');
    }
    let elemento = boton.closest("p");
    console.log("Eliminando:",elemento);
    if(elemento){
        elemento.remove();
    }
}