
//Construyendo lineas verticales (columnas)
const medidas_izquierda = document.querySelector(".medidas_izquierda") //Contenedor Padre_columnas
fila_num = 1;
cm = 0;
for (let i = 1; i<= 29; i++ ){

    
    let linea = document.createElement("div") //Div creado.
    linea.innerHTML = (`<p class="centimetros_eje_Y">${cm}cm</p>`)   
    linea.classList.add("centimetros_verticales")
    linea.classList.add(`.columna_${fila_num}`)

    let elemento_traido = document.querySelector(`.columna_${fila_num}`)
    medidas_izquierda.insertBefore(linea, elemento_traido)
    cm +=1
    console.log(linea)
}

//Construyendo lineas horizontales (filas)
const medidas_abajo = document.querySelector(".medidas_abajo") //contenedor padre_filas

let linea_num = 1;
for (let i = 1; i<= 16; i++ ){
    let fila = document.createElement("div")//Div creado.
    fila.classList.add("centimetros_horizontales")
    fila.classList.add(`columna_${linea_num}`)

    if (i == 15){
        document.querySelector(".columna_7")
    }

    let elemento_traido = document.querySelector(`fila_${linea_num}`)
    medidas_abajo.insertBefore(fila, elemento_traido)

    linea_num += 1
}