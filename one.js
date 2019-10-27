
// function verifyNumber( myInput ){
//     if( !isNaN( parseFloat( myInput.value ) ) && isFinite( myInput.value ) )
//         return true;
//     else
//         return false;
// }





function oncalculate()
{
    var maleName =["kwasi", "kwadwo","kwabena","kwaku","yaw","kofi","kwame"];
    var femaleName=["Akosua", "Adwao","Abenaa", "Akua","Yaa","Afua"];

    var dayOfBirth = parseInt(document.getElementById("day").value);
    var monthOfBirth= parseInt(document.getElementById("month").value);
    var yearOfBirth= document.getElementById("year").value;
     
    
    if( dayOfBirth <= 0 || dayOfBirth>31)
     {
         alert("enter valid date"); 
         return false;
     }
      else if(monthOfBirth <=0 || monthOfBirth > 12)
      {
          alert("enter valid month");
          return false;
      }

    var sliceY= yearOfBirth.slice(2,4);
    var sliceC= yearOfBirth.slice(0,2);
    var c= parseInt(sliceC);
    var y= parseInt(sliceY);
    var d= dayOfBirth;
    var m=monthOfBirth;

   
   var dayOfTheWeek= Math.round(( ( (c/4) - 2 * c - 1) + ((5*y/4) ) + ((26*(m+1)/10)) + d ) %7);

  for(var a=0;a< maleName.length;a++){
      if(a===dayOfTheWeek){
          alert(maleName[a]);
      }
  }
//   var gender;
    
}
