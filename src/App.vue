<template>
  <v-app >

    <v-toolbar 
   class="tool_bar"
   flat
   color="blue-grey lighten-5">
    <v-toolbar-side-icon  
    @click.native.stop="sideNav=!sideNav"
    class="hidden-sm-and-up"></v-toolbar-side-icon>
    
     <v-toolbar-title class="toolbar_title" >
       <router-link to="/" tag="span" style="cursor:pointer">Homepage</router-link>
     </v-toolbar-title>
   
     <v-spacer></v-spacer>
     <v-toolbar-items 
     class="hidden-xs-only" >
       <v-btn depressed
       v-for="item in menuItems"
       :key="item.title"
       router
       :to="item.link"
       color="blue-grey lighten-5"
       >
       <v-icon 
       left
       large color="blue">{{ item.icon }}</v-icon>
       <div style="color:#455A64">{{ item.title }}
       </div>
       </v-btn>
       
       </v-toolbar-items>
       </v-toolbar>
       <v-container fluid>  
      <v-layout row wrap>
        
    
    <v-navigation-drawer
    absolute
    
    v-model="sideNav"
    >
    <v-list>
      <v-list-tile
      v-for="item in menuItems"
      :key="item.title"
      router
      :to="item.link">
      <v-list-tile-action>
        <v-icon>{{item.icon}}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>{{item.title}}</v-list-tile-content>
      </v-list-tile>
    </v-list>

    </v-navigation-drawer>
   
   <main style="width:100%">
     <router-view></router-view>
   </main>
   
      </v-layout>
      
      </v-container>  

    

    
  </v-app>
</template>


<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems:[
        {icon:'face', title:'Features', link:'/features'},
        {icon:'note', title:'Pricing',link:'/pricing'},
        {icon:'contact_phone', title:'Contact Us',link:'/contactus'},
        {icon:'face', title:'Sign Up',link:'/signup'},
        // {icon:'lock_open', title:'Sign in',link:'/signin'}


      ],
     
      
      
  }
  }
}

</script>



<style>

.tool_bar
{  
   position:sticky; 
   top: 1px;
   z-index: 999; 
  
  
}

.toolbar_title{
  color:#455A64
}


</style>





