let username;

document.getElementById("mySubmit").onclick = function(){
 username = document.getElementById("myText").Value;
 document.getElementById("myH2").textContent = `Hello ${username}`
}
