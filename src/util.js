export function setUserData(data) {
    localStorage.setItem('user', JSON.stringify(data));
}

export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}


//kato si proverivame dali sme owner na elementa ot details deto gledame i 6te edit or delete 
export function hasOwner(ownerId) {
   
    const userData=getUserData()
    return ownerId===userData?._id // mnogo vajno tova ? vatre v userData?._id tova e optional chaiing koito kazva ako ima data prodalji ako ima sa6to ne spirai operaciata oprinal chainmg s ? se pravi
    
}

export function clearUserData() {
    localStorage.removeItem('user');
}

export function createSubmitHandler(callback) {  
    return function(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        callback(data, event.target);
    };
}

export function updateNav() {
    const userData = getUserData();
    

    if (userData) {
        document.querySelector('.user').style.display = 'block';

        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }
}