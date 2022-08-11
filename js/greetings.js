const loginForm = document.querySelector("#login-form"); 
const loginInput = document.querySelector("#login-form input");
 const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const saveusername = localStorage.getItem(USERNAME_KEY);

 function onLoginBtnClick(info){
   info.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY,username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  painGreeting(username);
//   console.log("click!!!!");
 }

 function painGreeting(username){
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
}
 
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit",onLoginBtnClick);
}else{
 painGreeting(savedUsername);
}

 
