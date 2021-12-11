let submitButton = document.getElementById('subm');

let phoneField = document.getElementById('phone');

let fioField = document.getElementById('contact')

let mailField = document.getElementById('mail');

submitButton.disabled = true;


fioField.addEventListener('blur', checkFIO);

phoneField.addEventListener('blur', PhoneCheck);

mailField.addEventListener('blur', MailCheck);

mailField.addEventListener('change', buttonAble);

phoneField.addEventListener('change', buttonAble);

fioField.addEventListener('change', buttonAble);




function alertAndFocus(errorField, element, errorText)
{
    document.getElementById(errorField).innerText = errorText;
    document.getElementById(element).focus();
    document.getElementById(element).style.borderColor = "red";
}

function checkEmptyField(id, errorField)
{
    error = "Ваше имя не может быть пустым!";

    if (document.getElementById(id).value == "")
    {
        alertAndFocus(errorField, id, error);
        return error;
    }
}

function MailCheck()
{
    error = "";

    error = checkEmptyField('mail', 'mailError');

    if (error)
    {
        alertAndFocus('mailError', 'mail', error);
        return false;
    }
    else
    {
        document.getElementById('mailError').innerText = "";
        document.getElementById('mail').style.borderColor = "green";
        return true;
    }
}


function checkFIO()
{
    var error = "";
    var string = document.getElementById('contact').value;
    var counter = 0;

    error = checkEmptyField('contact', 'nameError');

    for (let i = 0; i < string.length; i++)
    {
        if (string[i] == " "
            && string[i + 1] != " "
            && string[i - 1] != " ")
            counter++;
    }

    if (string[0] == " " || counter != 2)
    {
        error = "Данные введены неверно!"
    }

    
    if (error)
    {
        alertAndFocus('nameError', 'contact', error);
        return false;
    } else
    {
        document.getElementById('nameError').innerText = "";
        document.getElementById('contact').style.borderColor = "green";     
        return true;
    }
}

function PhoneCheck()
{
    var error = "";

    var string = document.getElementById('phone').value;

    error = checkEmptyField('phone', 'phoneError');

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
        alertAndFocus('phoneError', 'phone', error);
        return false;
    }
    else
    {
        document.getElementById('phoneError').innerText = "";
        document.getElementById('phone').style.borderColor = "green";
        return true;
    }

}

function buttonAble()
{

    submitButton.disabled = !(PhoneCheck() && checkFIO() && MailCheck());
} 
