var yourName=document.getElementById("your-name");
var yourUrl=document.getElementById("your-url");
var arrayUrl=[];

function addUrl()
{
    var saveUrl=
    {
    Name:yourName.value,
    url:yourUrl.value,
    }
    arrayUrl.push(saveUrl);
   localStorage.setItem("allContent" , JSON.stringify(arrayUrl));
   
}
