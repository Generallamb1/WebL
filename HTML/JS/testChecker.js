
let counter = 0;
var checkedBoxes = document.querySelectorAll("input[name=checkbox]");
let enabledSettings;

checkedBoxes.forEach(function (checkbox)
{
    checkbox.addEventListener('change', function ()
    {
        enabledSettings =
            Array.from(checkedBoxes)
                .filter(i =>  i.checked)
                .length;
        if (enabledSettings > 2)
        {
            alert("В задании не может быть более двух ответов!");
        }
    })
});






