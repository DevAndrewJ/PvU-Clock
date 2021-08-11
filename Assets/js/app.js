


//Referencias html


function startTime() {
    const today = new Date();
    let h = today.getUTCHours();
    let m = today.getUTCMinutes();
    let s = today.getUTCSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function grupoActivo(){
    const serverAct = true;
    const groupArra = [" Grupo 1 Activo", " Grupo 2 Activo", "Grupo 3 Activo", " Grupo 4 Activo"];
    list = 2;

    switch(list) {
        case 0:
            document.getElementById('group').innerHTML = ("Grupo 1 Activo");
            break;
        case 1:
            document.getElementById('group').innerHTML = ("Grupo 2 Activo");
            break;
        case 2:
            document.getElementById('group').innerHTML = ("Grupo 3 Activo");
            break;
        default :
            document.getElementById('group').innerHTML = ("Grupo 4 Activo");
            break;
    }

}

function minRestantes(){
    const minuto = new Date();
    let minRest = minuto.getUTCMinutes();
    serverTimer = true;
    let listTimer = 60;

    if(serverTimer != false){
        listTimer = listTimer - minRest;
        document.getElementById('minRes').innerHTML = ("Quedan " + listTimer + " Minutos");
    }



}
    

grupoActivo();
minRestantes();
startTime();