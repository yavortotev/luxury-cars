
import { page } from './lib.js';
import { showHomeView } from './views/homeView.js';
import {showloginView} from './views/loginView.js'
import {logout} from './views/logout.js'
import {showRegisterView} from './views/registerView.js'
import { updateNav } from "./util.js"
import { showDashboardView } from './views/dashboardView.js';
import {addNewCarView} from './views/addNewCarView.js'
import {showDetailsView} from './views/detailsView.js'
import {showEditView} from './views/editCarView.js'
 
 
 
 
page('/', showHomeView);
page('/register', showRegisterView);
page('/login',showloginView)
page('/logout',logout )
page('/dashboard', showDashboardView)
page('/addCar', addNewCarView)
page('/details/:id',showDetailsView)
page('/edit/:id',showEditView )



page.start();
updateNav()





//document.getElementById('logoutLink').addEventListener('click', () => {
//    logout();
//    updateNav();
//    page.redirect('/');
//});