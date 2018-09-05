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
    }
    }
    }  
 request1.open("GET", url1, true);  
 request1.send(); 
}


          

        
