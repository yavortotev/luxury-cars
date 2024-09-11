import { html, render } from "../lib.js";
import { createSubmitHandler, } from "../util.js";
import  *as userService from "../data/user.js"
import { page } from "../lib.js";
import { updateNav } from '../util.js';


const temp = (handler) => html `

<section id="login">
        <div class="form">
          <h2>Login</h2>
          <form @submit=${handler} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
            <button type="submit">login</button>
            <p class="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </section>
`;

export function showloginView(){
    render(temp(createSubmitHandler(onSubmit)))
}


async function onSubmit(data, form){


  // proveriavame dali usara e popalnil poletata pravilno 
  // i hvarliame greshak ako ne sa popalneni poletata
  if(!data.email || !data.password){
    return alert("All fields are req!!!!")
  }

 // tuka si pravim zaiavkata kam servara za login !!!
  
 await userService.login(data.email,data.password) // tuk e zaivkata 
 updateNav() 
 
 page.redirect("/")
 
 // taka si redirektvame !!! 

   



}