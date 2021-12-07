
function calendar()
{
    var datePlace = document.getElementById('calendar');

    months =
        ["Январь", "Февраль", "Март", "Апрель",
        "Май", "Июнь", "Июль", "Август",
        "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    
    let today = new Date();


    let date = today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear();
    
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
    var dateTime = date + ' ' + time;

    datePlace.innerHTML = dateTime;

}

var interval = setInterval(calendar, 1000);