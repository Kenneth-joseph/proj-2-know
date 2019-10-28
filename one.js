
function oncalculate()
{
    var maleName =["kwasi(sunday", "kwadwo(Monday)","kwabena(Tuesday)","kwaku(Wednesday)","yaw(Thursday)","kofi(Friday)","kwame(Saturday)"];
    var femaleName=["Akosua (sunday)", "Adwao(Monday)","Abenaa(Tuesday)", "Akua(Wednesday)","Yaa(Thursday)","Afua(Friday)","Ama(Saturday)"];

    var dayOfBirth = parseInt(document.getElementById("day").value);
    var monthOfBirth= parseInt(document.getElementById("month").value);
    var yearOfBirth= document.getElementById("year").value;
    var genderM = document.getElementById("male");
    var genderF = document.getElementById("female");

     
    
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
 if(genderM.checked==true){
     
  for(var a=0;a< maleName.length;a++){
      if(a===dayOfTheWeek-1){
          alert("your Akan name is " + maleName[a] );
      }
  }
}
else if(genderF.checked==true){
    for(var a=0;a< femaleName.length;a++){
        if(a===dayOfTheWeek-1){
            alert("your Akan name is " + femaleName[a]);
        }
    }

}
    
}
