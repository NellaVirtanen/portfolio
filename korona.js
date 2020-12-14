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
};

getJSON('https://api.apify.com/v2/key-value-stores/jEFt5tgCTMfjJpLD3/records/LATEST?disableRedirect=true', function(err, data){
  if (err != null) {
    console.error(err);
  } else {
  /*console.log(`Tartuntojen määrä: ${data.infected}`);
  console.log(`Testien määrä: ${data.tested}`);
  console.log(`Kuolemien määrä: ${data.deaths}`);
  console.log(`${data.lastUpdatedAtApify}`.substring(0, 11)); */

  document.querySelector(".korona").innerHTML=`<b>Tartuntojen määrä: ${data.infected} <br>Testien määrä: ${data.tested}<br>Kuolemien määrä: ${data.deaths} <br>${data.lastUpdatedAtApify}`.substring(0, 90);
  }
  });