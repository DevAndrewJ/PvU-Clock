


//Referencias html
let listTimer = 0;
listCounter = 0;

function startTime() {
    const today = new Date();
    let h = today.getUTCHours();
    let m = today.getUTCMinutes();
    let s = today.getUTCSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    minRestantes();
    grupoActivo();
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function grupoActivo(){

    if(listTimer == 0){
        listCounter ++;
    }  

    console.log(listCounter);

    if(listCounter == 4){
        listCounter = 0;
    }


    switch(listCounter) {
        case 0:
            document.getElementById('group').innerHTML = ("Grupo 1 Activo");
            break;
        case 1:
            document.getElementById('group').innerHTML = ("Grupo 2 Activo");
            break;
        case 2:
            document.getElementById('group').innerHTML = ("Grupo 3 Activo");
            break;
        case 3:
            document.getElementById('group').innerHTML = ("Grupo 4 Activo");
            break;
        default :
            return false;

    }

}

function minRestantes(){
    const minuto = new Date();
    let minRest = minuto.getUTCMinutes();
    serverTimer = true;
    listTimer = 60 - minRest;
    if(serverTimer != false){
        document.getElementById('minRes').innerHTML = ("Quedan " + listTimer + " Minutos");
        if (listTimer == 0) {
            serverTimer = false;
        }
    }



}
    

startTime();
grupoActivo();
