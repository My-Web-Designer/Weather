var http = new XMLHttpRequest();
var method = 'GET';
var url = 'https://api.openweathermap.org/data/2.5/weather?q=Vishakhapatnam&units=metric&appid=ad1fbda76cdc139e86e018fbc6c3ca75';

http.open(method, url);
http.onreadystatechange = function () {
  if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
    // console.log(http.responseText);
    console.log(JSON.parse(http.responseText));
  } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
    console.log('Error');
  }
};
http.send();