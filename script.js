//s1;create a XHR object
var request=new XMLHttpRequest();
//s2:create a connection
//true:optional
request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true);
//s3:send a request
//push for the api to send request to server
request.send();
//s4:once the data successfully received from server
//http:200
request.onload=function(){
    //conversion from string into array of jsOn objects
    var data=JSON.parse(request.response);
    console.log(data)
     for(var i=0;i<data.length;i++){
        console.log(data[i].id+"-"+data[i].name+"-"+data[i].email)
        
    }
    
    
    
} 