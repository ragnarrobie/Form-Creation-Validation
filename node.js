async function fetchUserData(){

const apiUrl= "https://jsonplaceholder.typicode.com/users";
 const dataContainer = document.getElementById("api-data");
 try
 {

    const response= await fetch(apiUrl);
    if(!response.ok){
        throw new error("error fetching user data");
    }
    const users = await response.json();
 
 
    dataContainer.innerHTML='';
    const userList = document.createElement("ul");
    users.forEach(user => {
    const bruh = document.createElement('li');
    bruh.textContent= username;
    userList.appendChild(bruh); 
    });
    dataContainer.appendChild(userList);
 }
 catch(error){
    dataContainer.innerHTML="failed to load user data.";
    
    console.error("error fetching user data",error);
 }

}
document.addEventListener("DOMContentLoaded", fetchUserData);
