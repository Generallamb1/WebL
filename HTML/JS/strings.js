textList =
[
    {
        style: "h2",
        text: "Мои хобби"
    },
    {
        style: "p",
        text: "Увлекаюсь рисованием и моделированием в свободное время, также люблю собирать картины из пазл, состоящие больше чем из 1500 деталей. Положительно отношусь к искусству в разных его проявлениях"
    },
    {
        style: "h3",
        text: "Моя любимая музыка"
    },
    {
        style: "p",
        text: "Мне нравится разная музыка, которая может варьироваться от рока до фолка. Люблю сложные композиции с использованием различных инструментов. Очень нравится арфа"
    },
    {
        style: "h3",
        text: "Мои любимые фильмы"
    },
    {
        style: "p",
        text: "Мои любимые фильмы: Побег из Шоушенка, Форест Гамп(Лесной болван), Трасса 60."
    },
    {
        style: "h3",
        text: "Мои любимые книги"
    },
    {
        style: "p",
        text: " Цикл книг Молот войны, Карл Май -  Виннету (троекнижие)"
    }

]


printOut(...textList);


function printOut(){

    var container = document.getElementById('container');
    var my_html = ' ';


    for (var i = 0; i < arguments.length; i++)
    {
        my_html += '<' + arguments[i].style + '>';
        my_html += arguments[i].text;
        my_html += '</' + arguments[i].style + '>';
    }

    container.innerHTML = my_html;
}