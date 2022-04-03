console.log("start");
console.log("mid");
function loginUser(email,password,callback){

    setTimeout(function(){
        console.log("working");
        callback({username:"abc"});
     },3000);
}
function getUserDetails(username,callback){
    setTimeout(function(){
        console.log("iam so happy,because its working");
        callback({username:username,age:25,likes:3999});
    },3000);
}
function posts(username,callback){
    setTimeout(function(){
        callback(['post1','post2']);
    },2000);
}
    console.log("end");
    loginUser("raj@gmail.com","23242",function(userObj){
        console.log(userObj);
        getUserDetails(userObj.username,function(rajData){
            console.log(rajData);
            posts(userObj.username,function(data){
                console.log(data);
            });
        });
    });
    