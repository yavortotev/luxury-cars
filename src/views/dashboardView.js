import { html, render } from "../lib.js";
import { getAllcars } from "../data/data.js";

//vatre izriazahme stati4nite elemnti vs lu4aia koli i si vzemhem na ednata templata izkarvame go v promenliva i slagame car v slu4aia kato argumnst v osnovnia templait slgame cars tova e promenlica v koito priememame otgovora na servra vatre i ia puskame kato argumnt v osnovnia temolati kadeto s map 6te minem prez nariazanite templaiti 
const temp = (cars) => html`

<h3 class="heading">Our Cars</h3>
      <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
        
         ${cars.map(car => carTemp(car))}

      </section>
      <!-- Display an h2 if there are no posts -->
     
      ${cars.length===0 ? html ` <h3 class="nothing">Nothing to see yet</h3>` : ""}
     

`;

    //zameniame vsi4ko deto e s `` ili e promenliva s ne6tata detro idvat ot masiva 
    const carTemp = (car)=> html `
     
    <div class="car">
          <img src=${car.imageUrl} alt="example1" />
          <h3 class="model">${car.model}</h3>
          <div class="specs">
            <p class="price">Price: €${car.price}</p>
            <p class="weight">Weight: ${car.weight} kg</p>
            <p class="top-speed">Top Speed: ${car.speed} kph</p>
          </div>
          <a class="details-btn" href="/details/${car._id}">More Info</a>
        </div>

   `;
   // i superrrrr vajnoooo na 32 red imame herif koito be6e : <a class="details-btn" href="#">More Info</a> i nie hrefa go smimae s idto na obekta deto idva ta11111111m slgame idoto i stava href="/details/${car._id}">More Info</a> href="/details/${car._id}"> stava taka i slagame car._id ili elemnta i _id v ${}
    // inoformaciata koito se vra6ta ima i owner._id ?!?!








export async  function showDashboardView(){

    const cars = await getAllcars()
    
    
    debugger

      

    render(temp(cars))

}



