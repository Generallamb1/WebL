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
    errorField.setCustomValidity(errorText)
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

    error = checkEmptyField('mail', mailField);

    if (error)
    {
        alertAndFocus(mailField, 'mail', error);
        return false;
    }
    else
    {
        mailField.setCustomValidity("");
        mailField.style.borderColor = "green";
        return true;
    }
}

function checkFIO()
{   
    var error = "";
    var string = document.getElementById('contact').value;
    var counter = 0;
    
    error = checkEmptyField('contact', fioField);

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
        alertAndFocus(fioField, 'contact', error);
        return false;
    } else  
    {
        fioField.setCustomValidity("");
        fioField.style.borderColor = "green";     
        return true;
    }
}

function PhoneCheck()
{
    var error = "";

    var string = document.getElementById('phone').value;

    error = checkEmptyField('phone', phoneField);

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
        alertAndFocus(phoneField, 'phone', error);
        return false;
    }
    else
    {
        phoneField.setCustomValidity("");
        phoneField.style.borderColor = "green";
        return true;
    }

}

function buttonAble()
{

    submitButton.disabled = !(PhoneCheck() && checkFIO() && MailCheck());
} 
