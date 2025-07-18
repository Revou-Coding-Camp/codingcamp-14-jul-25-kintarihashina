let username;

document.getElementById("mySubmit").onclick = function(){
 username = document.getElementById("myText").value;
 document.getElementById("myH2").textContent = `Hello ${username}, welcome to our page!`
}
