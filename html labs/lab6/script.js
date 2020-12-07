const fname = document.getElementById("name");
const fsurname = document.getElementById("surname");
const femail = document.getElementById("email");
let fsex;
const fcountry = document.getElementById("country");
const ferror = document.getElementById("errortext");
function main()
{
  if (document.getElementById("male").checked) {
    fsex = document.getElementById("male");
} else if (document.getElementById("female").checked) {
    fsex = document.getElementById("female");
}
  if ((fname.value!="" && fname.value) && (fsurname.value!="" && fsurname.value) && (femail.value!="" && femail.value))
       { db.collection('requests').add({
        name: fname.value,
        surname: fsurname.value,
        email: femail.value,
        sex: fsex.value,
        country: fcountry.value})

     .then(function(result){
      document.location.reload(true);
     })
}
else {
    ferror.innerHTML = "Неправильные данные";
 } 
}
