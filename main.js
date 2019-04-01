function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}
//test comment
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Big_Mac.jpg') {
      myImage.setAttribute ('src','images/Big_Mac1.jpg');
    } else {
      myImage.setAttribute ('src','images/Big_Mac.jpg');
    }
}


var myButton = document.getElementById('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Big Macs are great, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}