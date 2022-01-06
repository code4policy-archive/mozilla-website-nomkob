 // Define a Function
 function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }
 
 // Use a CSS selector to identify an element
 var foxImage = document.querySelector('img');
 
 // Assign the function to the onclick event on that element
 foxImage.onclick = sayOuch;


 function myFunction() {
  var x = document.getElementById("img");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}