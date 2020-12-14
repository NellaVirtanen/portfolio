var getJSON = function(url, callback){

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function(){
  
  var status = xhr.status;

  if (status == 200) {
    callback(null, xhr.response);

  } else {
    callback(status);
  }
  };

xhr.send();
}

getJSON('https://api.apify.com/v2/datasets/BDEAOLx0DzEW91s5L/items?format=json&clean=1', function(err, data){
let taulukko = `<table width="30%" style="border:1px solid black">`

const historia = data.map(function(paiva){

if(paiva.confimedCases != undefined){
//console.log(`Confirmed: ${paiva.confirmedCases}`);
taulukko = taulukko + `<tr><td>Vahvistetut</td><td>${paiva.confirmedCases} <td> ${paiva.lastUpdatedAtSource}</td></tr>`;
}
else if (paiva.testedCases != undefined){
//console.log(`Tested: ${paiva.testedCases}`);
taulukko = taulukko + `<tr><td>Testatut</td><td>${paiva.testedCases} <td> ${paiva.lastUpdatedAtSource}</td></tr>`;
}
else if (paiva.infected != undefined){
//console.log(`Infected: ${paiva.infected}`);
taulukko = taulukko + `<tr><td>Tartunnat</td><td>${paiva.infected} <td> ${paiva.lastUpdatedAtSource}</td></tr>`
}
else{
taulukko = taulukko + `<tr><td>Ei dataa</td><td>Ei dataa</td></tr>`;
}


});

taulukko = taulukko + `</table>`
document.body.innerHTML = taulukko;

});