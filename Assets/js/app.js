


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
    res = groupCounter;
    const minFaltante = new Date();
    let minute = minFaltante.getUTCMinutes();
    let restante = 60;
    for(i = 3; i <= groupArra.length; i--){
        if(groupCounter >= 0 && restante != 0){
            document.getElementById('group').innerHTML = groupArra[i];
            groupCounter = groupCounter - 1;
            restante = restante - minute;
            document.getElementById('minRes').innerHTML = ("Restan "+ restante + " min");
            return console.log(groupCounter);
        }
        else {
            groupCounter = 4;
        }
    }
}

function checkGroup(){
    
    let listNumber = 4;
    let groupCounter = 0;
    for(i = 0; groupCounter <= groupArra.length[i]; i++){

    }
}

countHour();
startTime();