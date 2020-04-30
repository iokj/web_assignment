import Vue from 'vue'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Contacts from '../views/Contacts.vue'
import NewContact from '../views/NewContact.vue'
import EditContact from '../views/EditContact.vue'
import Vuelidate from 'vuelidate'
import UploadImage from 'vue-upload-image';
import VueSimpleAlert from "vue-simple-alert";
import VueFlashMessage from 'vue-flash-message';
Vue.use(VueFlashMessage);

Vue.use(VueSimpleAlert);
 
// register globally
Vue.component('upload-image', UploadImage)
Vue.use(UploadImage)
Vue.use(Vuelidate)
Vue.use(VueRouter)
Vue.use(SuiVue)

  const routes = [

  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/newcontact',
    name: 'NewContact',
    component: NewContact
  },
  {
    path: '/editcontact/:contactId',
    name: 'EditContact',
    component: EditContact
  }
]

const router = new VueRouter({
  routes
})

export default router
