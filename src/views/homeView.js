import {html, render} from "../lib.js"

// 1va stupka pravim isi template s lit kadeto slagaem html templaita 
const temp = () => html `
 
     <section id="hero">
        <h1>
          Accelerate Your Passion Unleash the Thrill of Sport Cars Together!
        </h1>
      </section>

`;
// 2 ra stapka exporttvame funccia kam app show viewto kadeto renderirame 
export function showHomeView(){
    render(temp())
}