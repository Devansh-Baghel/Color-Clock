function showTime(){
    var x = new Date();
    var secs = x.getSeconds();
    var hours = x.getHours();
    var mins = x.getMinutes();


    hours = (hours < 10) ? "0" + hours : hours;
    mins = (mins < 10) ? "0" + mins : mins;
    secs = (secs < 10) ? "0" + secs : secs;

    document.getElementById('body').style.backgroundColor = `#${hours}${mins}${secs}`
    document.getElementById('p').innerHTML = `#${hours}${mins}${secs}`

    var x = new Date();
    var hours12 = parseInt(x.getHours());
    var mins12 = parseInt(x.getMinutes());
    var secs12 = parseInt(x.getSeconds());
    
    if (hours12 >= 12) {
        hours12 = hours12 - 12;
    }
    
    hours12 = (hours12 < 10) ? "0" + hours12 : hours12;
    mins12 = (mins12 < 10) ? "0" + mins12 : mins12;
    secs12 = (secs12 < 10) ? "0" + secs12 : secs12;
    

    document.getElementById('h2').innerHTML = `${hours12}:${mins12}:${secs12}`
    
    setTimeout(showTime, 1000);
}

showTime();

