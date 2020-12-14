
const emailnappi = document.querySelector('.nappi');
const nimiSisalto = document.querySelector('#nimi');
const emailSisalto = document.querySelector('#email');
const viestiSisalto = document.querySelector('#viesti');
const virhe = document.querySelector ('.virheilmoitus');

emailnappi.addEventListener('click', e => {
  e.preventDefault();
  sendJSON();

function validateForm(){
	var nimiSisalto = document.forms["myForm"]["nimi"].value;
	var emailSisalto = document.forms["myForm"]["email"].value;
	var viestiSisalto = document.forms["myForm"]["viesti"].value;

	if (name.length<1) {
        document.getElementById('error-nimi').innerHTML = " Please Enter Your Name *"
    }
    if (email.length<1) {
        document.getElementById('error-email').innerHTML = " Please Enter Your Email *";   
    }
    if (message.length<1) {
        document.getElementById('error-viesti').innerHTML = " Please Enter Your Message *";
    }          
    if(name.length<1 || email.length<1 || message.length<1){
       	return false;
    }            
}

 if(nimiSisalto.value === '' || emailSisalto.value === '' || viestiSisalto.value === ''){
  virhe.classList.add('virhe');
  virhe.innerHTML = `<br><b>Täytä kaikki vaadittavat kentät!*</b>`;
  setTimeout(() => virhe.classList.remove('virhe'), 3000);
  setTimeout(() => virhe.innerHTML = '', 3000);
  }

  else{
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${nimiSisalto.value}:${emailSisalto.value}:${viestiSisalto.value}`));
  viesti.appendChild(li);
  nimiSisalto.value = '';
  emailSisalto.value = '';
  viestiSisalto.value = '';
  }
  
});

function sendJSON(){ 
console.log("sent here");
     
let xhr = new XMLHttpRequest(); 
let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp1?code=lWOELqiU07AqsBviOQYzuNIrQP7xoV7NV7C5W2ctgjIRcf7nXE2biw=="; 

// open a connection 
xhr.open("POST", url, true); 

// Set the request header i.e. which type of content you are sending 
xhr.setRequestHeader("Content-Type", "application/json"); 

// Create a state change callback 
xhr.onreadystatechange = function () { 
if (xhr.readyState === 4 && xhr.status === 200) { 

// Print received data from server 
//        result.innerHTML = this.responseText; 
console.log("ready");
} 
}; 

 // Converting JSON data to string 
var data = JSON.stringify({
"EmailMsg": "Viesti", //Viestin sisältö
//  "EmailAddress": "nella.virtanen@edu.salpaus.fi", //Lähettäjän sähköposti
"EmailTo": "nellu.virtanen@gmail.com", //Sivun sähköposti
"EmailName": "Nimi" //Lähettäjän nimi
}); 

// Sending data with the request 
xhr.send(data); 
} 