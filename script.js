document.addEventListener('DOM content loaded',()=>{

const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");
form.addEventListener('submit',()=>{
    event.preventDefault();

const u = document.getElementById("username");
const e = document.getElementById("email");
const p = document.getElementById("password");
u.value.trim();
e.value.trim();
p.value.trim();
let isValid=true;
const messages=[];
if(username.length<3){
    isValid = false;
    messages.push("error!");
};
if( !email.includes("@")|| !email.includes(".")){
    
    isValid=false;
    messages.push("error!");
};
if(password.length<8){
    isValid=false;
    messages.textContent="error!";
};
feedbackDiv.style.display="block";
if(isValid){
    feedbackDiv.textContent="Registration successful!"
    feedbackDiv.style.color="#28a745";
}
else{
    feedbackDiv.style.color="#dc3545";
    feedbackDiv.innerHTML = messages.join("<br>");
}
});

});
