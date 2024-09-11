import { html, render } from "../lib.js"
import * as dataService from '../data/data.js'
import { hasOwner } from "../util.js"
import { page } from "../lib.js"



// tova ni e shablona za details , tuk primema car kato parametar i posle smianme polatat tai kato 6te napravim zaivka do sarvcara s _idto na eleemnta 
const temp = (car, owner) => html`

<section id="details">
        <div id="details-wrapper">
          <img id="details-img" src=${car.imageUrl} alt="example1" />
          <p id="details-title">${car.model}</p>
          <div id="info-wrapper">
            <div id="details-description">
              <p class="price">Price: €${car.price}</p>
              <p class="weight">Weight: ${car.weight} kg</p>
              <p class="top-speed">Top Speed: ${car.speed} kph</p>
              <p id="car-description">
               ${car.about}

              
              </p>
              </div>
              <!--Edit and Delete are only for creator-->

              ${owner ? html`
                <div id="action-buttons">
                    <a href="/edit/${car._id}" id="edit-btn">Edit</a>
                    <a href="#" @click=${onDelete} data-id=${car._id}  id="delete-btn">Delete</a>
                </div>
            ` : ''
              
    }
         </div>
       </div>
 </section>
`

//kadeto e  ${owner} si slagame ako e owner userra moje da gi vijda tezi ako ne orsoti im aprazen string koeoto zna4i ni6to 
// v action buttons imame href pak si gi pravim da sa patia plus ID na redove 24 i 25 

// showDetailView si is exportvame i asyncvame 
//i polu4avame contex po4vame da si vzemame ctx v funckiite ve4e i da si go vikame kadetro ni tribva za da vzemem idto na elemnta 



export async function showDetailsView(ctx) {

    const id = ctx.params.id

    const car = await dataService.getCarById(id)

    const owner = hasOwner(car._ownerId)

    debugger
    render(temp(car, owner))
    //tuk si podavame parametri kade da otidat i dabadat viknati v html temlate 
    //osven car koeto tribva da e obekt i info ot sarvara kakvoto ni e varnal 
    //si slgame hasOnwer dali toi e pravil elemnta koito gleda 

}


// tuk si pravim butona za delete ad mina prez patia ia 


async function onDelete(e){
    e.preventDefault();
    const id = e.target.dataset.id;
    const confirmRes = confirm("delete this car ")
    if(!confirmRes){
        return
    }
    await dataService.deleteCar(id)
    page.redirect("/dashboard")
}



