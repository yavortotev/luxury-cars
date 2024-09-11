import {html, render} from "../lib.js"
import {createSubmitHandler, } from '../util.js'
import  *as userService from "../data/user.js"
import { page } from "../lib.js";
import { updateNav } from '../util.js';


  


// tuk na argumenite si slagame handler imetto na funccia s koito 6te dapame dannit i posle i slagame v tamplita predi tova v druga funcia 
const temp  = (handler)=> html`
 
<section id="register">
        <div class="form">
          <h2>Register</h2>
          <form @submit=${handler}  class="register-form">
            <input
              type="text"
              name="email"
              id="register-email"
              placeholder="email"
            />
            <input
              type="password"
              name="password"
              id="register-password"
              placeholder="password"
            />
            <input
              type="password"
              name="re-password"
              id="repeat-password"
              placeholder="repeat password"
            />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
          </form>
        </div>
      </section>
      
      `;


      export function  showRegisterView(){

        render(temp(createSubmitHandler(onSubmit)))

      }


      async function onSubmit(data,formRef){
         // tuk si polu4avame ot submita infoto proveriavme dane e bilo prazno i go pra6tame kam servara 
        const { email, password, "re-password": repassword } = data;
       
        if(!email, !password, password!=repassword){
          return alert("All fields are reguierd!!!")
          //returnvsme alert ako ne6to ne otgovaria na iziskvaniata 
        }
   

        await userService.register(email,password)
         updateNav() 
         page.redirect('/')
        
      }