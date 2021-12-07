
let button = document.getElementById('subm');

button.addEventListener('click', checkField);

button.addEventListener('click', checkFIO);

button.addEventListener('click', PhoneCheck);

function alertAndFocus(element, errorText)
{
    alert(errorText);
    document.getElementById(element).focus();
}

function checkField()
{

    if (document.getElementById('contact').value == "")
    {
        alertAndFocus('contact', "Ваше имя не может быть пустым!");
        return null;
    }

    if (document.getElementById('mail').value == "")
        alertAndFocus('mail', "Ваша почта должна быть заполнена!");

}

function checkFIO()
{

    var string = document.getElementById('contact').value;
    var counter = 0;


    for (let i = 0; i < string.length; i++)
    {
        if (string[i] == " "
            && string[i + 1] != " "
            && string[i - 1] != " ")
            counter++;
    }

    if (string[0] == " " || counter != 2)
        alertAndFocus('contact', "Данные введены неверно!");

}

function PhoneCheck()
{
    var string = document.getElementById('phone').value;

    if (string.match(/^[0-9+]+$/) == null)
    {
        error = "Есть сторонние символы!";
    }

    if (string.includes(' '))
    {
        error = "В строке присутствуют пробелы! Уберите их!";
    }

    if (!string.startsWith('+7') && !string.startsWith('+3'))
    {
        error = "В строке неправильно введён код страны!";
    }

    if (string.length < 10 || string.length > 12)
    {
        error = "Неправильно набран номер";  
    }

    if (error)
    {
        alertAndFocus('phone', error);
    }
}