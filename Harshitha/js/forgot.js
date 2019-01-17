function validate(){
var mailid = document.getElementById("mailid").value;
if ( mailid = 'harshu1ml@gmail.com'){
alert ("You have access");
window.location.href = "page1.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}