


//Referencias html


function startTime() {
    let groupArra = ["Grupo 1", "Grupo 2", "Grupo 3", "Grupo 4"];
    const today = new Date();
    let h = today.getUTCHours();
    let m = today.getUTCMinutes();
    let s = today.getUTCSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    document.getElementById('group').innerHTML = groupArra[0];
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

startTime();