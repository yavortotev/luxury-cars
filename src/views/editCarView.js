import { html, render } from "../lib.js"
import * as dataService from '../data/data.js'
import { createSubmitHandler } from "../util.js"
import { page } from "../lib.js"


const temp = (handler,car)=> html`
  <section id="edit">
        <div class="form form-auto">
          <h2>Edit Your Car</h2>
          <form @submit=${handler} class="edit-form">
            <input type="text" name="model" id="model" placeholder="Model" .value=${car.model} />
            <input
              type="text"
              name="imageUrl"
              id="car-image"
              placeholder="Your Car Image URL"
             .value=${car.imageUrl}
            />
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price in Euro"
              .value=${car.price}
            />
            <input
              type="number"
              name="weight"
              id="weight"
              placeholder="Weight in Kg"
              .value=${car.weight}
            />
            <input
              type="text"
              name="speed"
              id="speed"
              placeholder="Top Speed in Kmh"
              .value=${car.speed}
            />
            <textarea
              id="about"
              name="about"
              placeholder="More About The Car"
              .value=${car.about}
              rows="10"
              cols="50"
            ></textarea>
            <button type="submit">Edit</button>
          </form>
        </div>
      </section>
      <!-- Details page -->

      
`
 
// vseki pat kato vlizame v ot view v drugo view si vzemame ctx i tam si rabotiim ve4e 

//ot tuk si prehvalime id`to zadaljitelno !!!! ot tova koeto sme polu4ili v showeditdetails v promenlivtaa id koito setvame na null si slagame zapisa i sgo polzvame nadolu po verigata :)))
// stvame si go na null psole si go zimame v show edit view i posle si go polzvame vava vsik4i drugi funkcii 

//funckia da asynk da kajem da survara da prati kakvo ima zad tva id 

let id=null
export async function showEditView(ctx){
 id =ctx.params.id
const car = await dataService.getCarById(id)
debugger
render(temp(createSubmitHandler(onSubmit),car))
}

 // o6te edna funkcia async da promenim da napravim update na tva deto prati servara 

async function onSubmit(data,form){

   if( !data.about || !data.imageUrl || !data.model 
    || !data.price || !data.speed || !data.weight ){
        return alert ('All fields are requerd!!!')
    }
      
     await dataService.updateCar(id,data)
     debugger
     page.redirect(`/details/${id}`)


}


