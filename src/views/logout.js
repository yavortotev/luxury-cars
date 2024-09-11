import  *as userService from "../data/user.js"  
import {page} from "../lib.js"
import { updateNav } from '../util.js';

export async function logout(){
     await userService.logout()
    updateNav() 
    page.redirect("/")

}



//da proveria kanoni4nia na4in deto victor pokaza