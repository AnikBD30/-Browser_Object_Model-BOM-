/*console.log(window.location.href); 

//protocal
console.log(location.protocol); 
//host name 
console.log(location.hostname); 
//port 
console.log(location.port);
//path name 
console.log(location.pathname); 
*/

var loctionDiv = document.querySelector(".location-div"); 
// console.log(loctionDiv);
var p1 = loctionDiv.children[0];
p1.textContent = location.href; 

var p2 = loctionDiv.children[1]; 
p2.textContent = location.protocol; 

var p3 = loctionDiv.children[2]; 
p3.textContent = location.hostname;
var p4 = loctionDiv.children[3]; 
p4.textContent = location.port; 
var p5 = loctionDiv.children[4];
p5.textContent = loctionDiv.pathname;

const visitButton = document.getElementById('visit-button'); 
visitButton.addEventListener('click', function(){
     location.assign('https://www.youtube.com/')
}); 



Precatice for DOM Pro

