let text = '{"todo_mal":[' + 
 '{"cantico":"Cantico del 2000","motivo":"Despido del entrenador Joaquín Caparrós, quien llevó al equipo a la final de la Copa del Rey la temporada anterior."},' +
 '{"cantico":"Cantico del 2011","motivo":"Fichaje de varios jugadores de alto costo que no rindieron como se esperaba, generando problemas financieros al club."},' +
 '{"cantico":"Cantico del 2015","motivo":"Venta de jugadores clave sin reemplazarlos adecuadamente, lo que resultó en un debilitamiento del equipo y malos resultados en la liga."}' +
 ']}';

let ejercicio3 = JSON.parse(text);

for (let i = 0; i < ejercicio3.todo_mal.length; i++) {
    // Para el ejercicio 3, He cambiado el número de CanticoX.html según el índice del bucle
    let canticoIndex = i + 1;
    let canticoURL = "Cantico" + canticoIndex + ".html";
    document.getElementById("todomal").innerHTML += "⚫ " +
    ejercicio3.todo_mal[i].cantico + " - " +
    ejercicio3.todo_mal[i].motivo +
    " " +
    '<a href="' + canticoURL + '">Ver más</a>' + // Enlace a la página específica de cántico
    "<br>";
}
document.getElementById("todomal").innerHTML += "<br>";
