import { del, get, post, put } from "./api.js" // tuk da vidia to4kite 

//v data.js v data si pravim rest servisite za vsi4ki uslugi joito 6te pravim edit , create ... plus bonusa 




const endpoints = {

    allCars: '/data/cars?sortBy=_createdOn%20desc',
    cars: '/data/cars', //polzvame go iv create i v details v deitels plus ID 
    //addDetails: '/data/cars/:id'

}

 //exportvame si funciite i gi awaitvame te sa async za read , edit , del , update


 export async function getAllcars(){

    return await get(endpoints.allCars)


}
 
//tova e funckiza za create !!!1 popst methid i priema data 
export async function createCar (data){

    return await post(endpoints.cars, data)
}

// tova e funcciata get car by id , za vzeamne na car po id 
// preiam id 
export async function getCarById(id){

 return await get(endpoints.cars + `/${id}`) // taka priema id

}

 // tuk si pravim funkciata za edit na elemnts - priema data i id 
export async function updateCar(id,data){
 
    return await put(endpoints.cars + `/${id}`, data)
    


}

// funciata za delete na elemnt 
export async function deleteCar(id){
    return await del(endpoints.cars + `/${id}`)
}

//bonus search
// bonus serach 
//export async function searchCar(query){
   // return await get(`${endpoints.cars}/data/cars?where=model%20LIKE%20%22{query}%22`)
  //  }
