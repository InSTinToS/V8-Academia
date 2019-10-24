


var p = document.querySelector("*")   

window.addEventListener("load", padrao)

p.addEventListener("mousewheel", mostrar)

var k = 0;




function padrao()
{
    document.p.scrollTop = 0
}

function mostrar()
{
    if (event.deltaY > 0)
    {
        k += 1000 
        document.scrollingElement.scrollTop = k
        alert(k)
    }
}
