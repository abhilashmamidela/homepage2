import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/CommonPages/Home.vue'
import Features from './../components/CommonPages/features.vue'
import Pricing from '../components/CommonPages/pricing.vue'
import Contact from '../components/CommonPages/contactus.vue'
import Signup from '../components/User/signup.vue'
import Profile from '../components/User/Profile.vue'





Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/features',
      name: 'Features',
      component:Features,
      
    },
    {
      path:'/pricing',
      name:'Pricing',
      component:Pricing
    },
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
    path:'/contactus',
    name:'Contactus',
    component:Contact

    },
    
    {
      path:'/signup',
      name:'Signup',
      component:Signup
  
    },
   
{
  path:'/profile',
  name:'Profile',
  component:Profile
},


  ]
})
