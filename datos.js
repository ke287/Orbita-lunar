const datos_escala = document.querySelector(".datos_escala");

let ua=[2.687, 2.6996, 2.7044, 2.7006, 2.688, 2.6672, 2.6396, 2.607, 2.572, 2.5372, 2.5054, 2.4791, 2.46, 2.4491, 2.4464, 2.451, 2.4615, 2.4764, 2.4943, 2.5139, 2.5346, 2.5559, 2.5778, 2.6, 2.6223, 2.6443, 2.6649, 2.6832, 2.6977]
let cm = []
let grados = [0, 11, 23, 35, 47, 60, 72, 86, 99, 113, 127, 142, 157, 172, 187, 202, 216, 230, 244, 257, 270, 283, 296, 308, 320, 332, 344, 356, 360]





console.log("Valores duplicados para simular distancia")
for (let i = 0; i < 29; i++) {
    //console.log("Llevamos"+ i+"     " +ua[i])
    let conversion = ((ua[i]*2.5)/1)*2 ;
    //console.log(`Resultado ${conversion}cm`)
    
}
console.log("***********************************************************************")
console.log("**************************Valores reales")
for (let i = 0; i < 29; i++) {
    //console.log("Llevamos"+ i+"     " +ua[i])
    let conversion = (ua[i]*2.5)/1 ;
    cm[i] = conversion;
    //console.log(`Resultado ${conversion}`)
    
}



const play_button = document.getElementById("play_button", reproducir)
//play_button.addEventListener("click", reproducir)
const control_panel = document.querySelector(".control_panel");
control_panel.addEventListener("click", reproducir)

const luna_orbita = document.querySelector(".luna_orbita"); //Orbitador
const items_group = document.querySelector(".items_group"); //Distanciador

const distancia_ua = document.getElementById("distancia_ua") //<span> para insertar los datos en U.A
const distancia_cm = document.getElementById("distancia_cm") //<span> para insertar los datos en Centímetros.
const longitud_grados = document.getElementById("longitud_grados")

var intervalo;
function reproducir(){
    play_button.src=("./assets/loadin_icon.png")

    luna_orbita.classList.add("luna_orbitando")
    items_group.classList.add("distancia_luna")


    
    setTimeout(function(){
        play_button.src=("./assets/play_btn.png")
    }, 20000)

    let count = 0;
    intervalo = window.setInterval(function (){
        console.log(cm[count])
        distancia_cm.innerHTML=(cm[count])
        distancia_ua.innerHTML=(ua[count])
        longitud_grados.innerHTML=(grados[count])

        count++;
        if (count > 28){
            window.clearInterval(intervalo)
            console.log("es mayoor")


            detener_orbita()
            
        }
        
    }, 689.65)
}


function detener_orbita(){
    luna_orbita.classList.remove("luna_orbitando")
    items_group.classList.remove("distancia_luna")


    distancia_ua.innerHTML="---"
    distancia_cm.innerHTML="---"
    longitud_grados.innerHTML="---"
}

