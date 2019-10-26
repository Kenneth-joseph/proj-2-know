
function oncalculate()
{
    // var maleName =["kwasi", "kwadwo","kwabena","kwaku","yaw","kofi","kwame"];
    // var femaleName=["Akosua", "Adwao","Abenaa", "Akua","Yaa","Afua"];

    var dayOfBirth = parseInt(document.getElementById("day").value);
    var monthOfBirth= parseInt(document.getElementById("month").value);
    var yearOfBirth= document.getElementById("year").value;


    var sliceY= yearOfBirth.slice(2,4);
    var sliceC= yearOfBirth.slice(0,2);
    var c= parseInt(sliceC);
    var y= parseInt(sliceY);
    var d= dayOfBirth;
    var m=monthOfBirth;

   
    // var dayOfTheWeek = ( ( (c/4) -2*c-1) + ((5*y/4) ) + ((26*(m+1)/10)) + d )% 7
   var dayOfTheWeek= ( ( (c/4) - 2 * c - 1) + ((5*y/4) ) + ((26*(m+1)/10)) + d ) %7;
   alert(dayOfTheWeek);
  
    
    
}
