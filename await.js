
function loginUser(email,password){
    const promise = new Promise (function(resolve,reject){
        setTimeout(function(){
            resolve({username:"raj"});
        },4000);
    });
    return promise;
}

function getUserDetails(username){
    const promise = new Promise (function(resolve,reject){
        setTimeout(function(){
            resolve({username:username, age:22, year:1999});
        },2000);
    });
    return promise; 
}
function fetchPosts(username){
    const promise = new Promise (function(resolve,reject){
        setTimeout(function(){
            resolve(["post1","post2"]);
        },2000);
    });
    return promise;  
}
async function example(){
    try{
const userObj  = await loginUser("raj@gmail.com","4353");
console.log(userObj);
const userDetails  = await getUserDetails(userObj.username);
console.log(userDetails);
const postsArr  = await fetchPosts(userDetails.username);
console.log(postsArr);
    }
    catch(err){
        console.log(err);
    }
}

example();










































