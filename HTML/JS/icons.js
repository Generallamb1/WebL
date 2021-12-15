var bars = document.querySelectorAll("a[name=iconstore]");

bars.forEach(function(bar)
{
    bar.addEventListener("mouseover", function ()
    {  
        bar.childNodes[0].src="JS/Icons/circle-regular.svg"
    })
    bar.addEventListener("mouseout", function ()
    {
        bar.childNodes[0].src = "JS/Icons/circle-solid.svg"
    })
}) 