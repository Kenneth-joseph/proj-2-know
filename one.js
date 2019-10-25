
function oncalculate()
{
    var maleName =["kwasi", "kwadwo","kwabena","kwaku","yaw","kofi","kwame"];
    var femaleName=["Akosua", "Adwao","Abenaa", "Akua","Yaa","Afua"];

    var dayOfBirth = parseInt(document.getElementById("day").value);
    var monthOfBirth= parseInt(document.getElementById("month").value);
    var yearOfBirth= document.getElementById("year").value;


    var y= yearOfBirth.slice(2,4);
    var c= yearOfBirth.slice(0,2);
    alert(y);
    alert(c);
    
    
}
