


//Referencias html


function startTime() {
    const today = new Date();
    let h = today.getUTCHours();
    let m = today.getUTCMinutes();
    let s = today.getUTCSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    switch () ( (h >= 00 && h <= 1) && (m <= 35) ) {
        document.getElementById('group').innerHTML = ("Grupo 1 Activo")
    }
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function activeGroup () {


}




startTime();