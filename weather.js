/* api key: e529ac0356807f6458edfd38cd082d7a

Endpoint for any API calls

api.openweathermap.org

Example of API call

api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e529ac0356807f6458edfd38cd082d7a

API documentation

http://openweathermap.org/api

http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=e529ac0356807f6458edfd38cd082d7a
http://api.openweathermap.org/data/2.5/forecast?q=London,us&units=metric&mode=xml&appid=e529ac0356807f6458edfd38cd082d7a

temp
humidity
weather>desc
time and date and place


// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp*1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript


Clouds
Clear
Rain
*/

function getData(){

   var url = "http://api.openweathermap.org/data/2.5/weather?q="+document.getElementById("location").value+"&units=metric&appid=e529ac0356807f6458edfd38cd082d7a";
   var url1 = "http://api.openweathermap.org/data/2.5/forecast?q="+document.getElementById("location").value+"&units=metric&cnt=7&appid=e529ac0356807f6458edfd38cd082d7a"

   var request,request1; 
   var jsonObj,jsonObj1;
   if(window.XMLHttpRequest){    
    request=new XMLHttpRequest();
    request1=new XMLHttpRequest();
   }    
   else if(window.ActiveXObject){    
    request=new ActiveXObject("Microsoft.XMLHTTP");
    request1=new ActiveXObject("Microsoft.XMLHTTP");
   
   }  

   request.onreadystatechange  = function(){  
      if (request.readyState == 4  )  
      {  
      jsonObj = JSON.parse(request.responseText);
        document.getElementById("item3").innerHTML =  `<h4>Temperature : ${jsonObj.main.temp} &#8451;</h4>`;  
        document.getElementById("item2").innerHTML = `<h4>Humidty : ${jsonObj.main.humidity}</h4>`;  
        document.getElementById("item1").innerHTML = `<h4>Date : ${new Date().toDateString()}</h4>`;  
        document.getElementById("item4").innerHTML = `<h4>Weather : ${jsonObj.weather[0].description}</h4>`;  
        
        //console.log(jsonObj.weather[0].description);
      }  
      
   }  
   request.open("GET", url, true);  
   request.send();  


   request1.onreadystatechange  = function(){  
    if (request1.readyState == 4  ) 
    {  
    jsonObj1 = JSON.parse(request1.responseText);
  
    for(i=1;i<jsonObj1.list.length;i++){

      document.getElementsByClassName("Ttl")[i-1].innerHTML=`Date : ${jsonObj1.list[i].dt_txt.toString().substring(0,10)}`;
      document.getElementsByClassName("Ttl1")[i-1].innerHTML=`Time : ${jsonObj1.list[i].dt_txt.toString().substring(10)}`;
      document.getElementsByClassName("txt")[i-1].innerHTML=`Max : ${jsonObj1.list[i].main.temp_max}&#8451; Min : ${jsonObj1.list[i].main.temp_min} &#8451;`;

/*
     //console.log(jsonObj1.list[i].dt);
     var node = document.createElement("div");
     node.setAttribute('class', 'col-sm-2');
     var textnode1 = document.createTextNode(`Date : ${jsonObj1.list[i].dt_txt.toString().replace(" ", "\nTime : ")}`);
     var textnode2 = document.createTextNode(`\nMax : ${jsonObj1.list[i].main.temp_min}`);
     var textnode3 = document.createTextNode(`\nMin : ${jsonObj1.list[i].main.temp_max}`);
     node.appendChild(textnode1);
     node.appendChild(textnode2);
     node.appendChild(textnode3);
   console.log(node);
      document.getElementById("forecast").appendChild(node);
    */


    }
  

    /*
    for(i=1;i<jsonObj1.list.length;i++)
      //x[i].innerHTML = "Hello World!";


      //jsonObj1.list[i].dt_txt
      //jsonObj1.list[i].main.temp_min
      //jsonObj1.list[i].main.temp_max



      var node = document.createElement("div");
      node.setAttribute('class', 'col-sm-2');
      var textnode1 = document.createTextNode(`${jsonObj1.list[i].dt_txt}`);
      var textnode2 = document.createTextNode(`${jsonObj1.list[i].main.temp_min}`);
      var textnode3 = document.createTextNode(`${jsonObj1.list[i].main.temp_max}`);

      node.appendChild(textnode1);
      node.appendChild(textnode2);
      node.appendChild(textnode3);
      document.getElementByClass("forecast").appendChild(node);
      
*/
    }




      console.log(jsonObj1);
    }  
    
  
 request1.open("GET", url1, true);  
 request1.send(); 
}


          

        
