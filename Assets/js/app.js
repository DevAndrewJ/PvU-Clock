


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

function countHour(){
    let groupArra = [" Grupo 1 Activo", " Grupo 2 Activo", "Grupo 3 Activo", " Grupo 4 Activo"];
    let groupCounter = 4;
    const minFaltante = new Date();
    let minute = minFaltante.getUTCMinutes();
    list = 0;
    let restante = 60;

    if (restante > 0) {
        switch (list){
            case 0:
                document.getElementById('group').innerHTML = groupArra[0];    
                break;

            case 1:
                document.getElementById('group').innerHTML = groupArra[1];
                break;

            case 2:
                document.getElementById('group').innerHTML = groupArra[2];
                    break;

            default :
                document.getElementById('group').innerHTML = groupArra[0];
                break;

    }
    document.getElementById('minRes').innerHTML = ("Quedan " + restante + " min ");
    restante = restante - minute;
    list ++;
}



}

countHour();
startTime();