<template>
  <v-app>
		
        


		  
  <v-container class="con1">
		
  <h1 class="profile1" style="text-align:left">Profile</h1>
		
	
        <v-layout pt-3>
        <v-expansion-panel popout  class="expansion">
          <v-expansion-panel-content style="background-color:#CFD8DC">
            <div slot="header">Profile</div>


						<!-- Profile-->
            <v-card class="card">
							 <v-layout wrap justify-space-around align-center pt-3>
               <v-avatar class="indigo">
               <v-icon dark>account_circle</v-icon>
               </v-avatar>
							 </v-layout>
							 <v-layout class="avatar" row>
								 <v-btn  depressed>Upload avatar</v-btn>
							 </v-layout>
	         <div class="form">
				   <v-form class="registerform" v-model="validx" method="post" v-on:submit.prevent="getFormValues">
					 <input type="text"  name="firstname" v-model="firstname"  class="userfirst"             placeholder="Firstname"/>
					 <input type="text"  name="lastname" v-model="lastname"    class="userlast"              placeholder="Lastname">
					 <input type="Email" name="email"    v-model="email"       class="useremail"             placeholder="Email Address"/>
					 <input type="text"  name="name"     v-model="name"        class="username"              placeholder="Display Name"/>
					 <input type="text"  name="bio"      v-model="bio"         class="bio"                   placeholder="Short Autobiography"/>
					 <!-- switch -->
					  <v-flex xs12 sm4 md4>
            <v-switch
              label="Hide"
              v-model="ex11"
              color="blue"
              value="red"
              hide-details
            ></v-switch>
						</v-flex>
						<!--submit  -->
					 <v-btn 
					 class="button"
					  type="submit" 
						@click="submit" 
						:disabled="!valid"
						>Submit</v-btn>
				 </v-form>
			 </div>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
				</v-layout>
   



		<!-- password-->



		    <v-layout pt-2>
        <v-expansion-panel popout  class="expansion" pt-3 >
          <v-expansion-panel-content style="background-color:#CFD8DC">
            <div slot="header">Password</div>
            <v-card>
							
	         <div class="form">
				 <v-form class="registerform" v-model="validx" method="post" v-on:submit.prevent="getFormValues">
					 <input type="password"  name="Currentpassword" v-model="password"     class="Currentpassword"             placeholder="Current Password"/>
			     <input type="password"  name="Newpassword"     v-model="newpassword"      class="Newpassword"                 placeholder="New Password"/>
           <input type="password"  name="Confirmpassword" v-model="conpassword"  class="Confirmpassword"             placeholder="Confirm Password"/>

					 <v-btn large type="submit" @click="submit" :disabled="!valid">Submit</v-btn>
				 </v-form>
				
			 </div>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
				
				</v-layout>
      

		<!-- Email Notifications -->
		    <v-layout pt-2>
        <v-expansion-panel popout  class="expansion"  >
          <v-expansion-panel-content style="background-color:#CFD8DC">
            <div slot="header">Email Notifications</div>
            <v-card>
	         <div class="form">
				 <v-form class="registerform" v-model="validx" method="post" v-on:submit.prevent="getFormValues">
					 <v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox>
           <v-text-field label="A payout has been sold" :disabled="!enabled"></v-text-field>
           <v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox>
           <v-text-field label="My product is sold" :disabled="!enabled"></v-text-field> 
					 <v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox>
           <v-text-field label="An author i followed liked the product" :disabled="!enabled"></v-text-field>          

					 <v-btn large type="submit" @click="submit" :disabled="!valid">Submit</v-btn>
				 </v-form>
				
			 </div>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
     </v-layout>

		
  </v-container>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			firstname: '',
			lastname: '',
			email: '',
			name: '',
			bio: '',
			password:'',
			newpassword:'',
			conpassword:'',
			validx:true,
			includeFiles: true,
			enabled: false
		},
		{
			ex11 :['blue']
		}
	},

	methods:{
		submit(){
			console.log('debug')
		},
		getFormValues(submitEvent){
			axios.post('192.168.137.1:4000/api/data/create',{
				name1: this.firstname,
				name2: this.lastname,
				email1: this.email,
				name3 : this.name,
				bio1  : this.bio,
				pass  : this.password,
				newpass: this.newpassword,
				conpassword : this.conpassword

				
			})

			.then(response => {
				console.log(response)
			})

			.catch (e => {
			
			})
		}
	},
	computed: {
		valid: function(){
			return this.firstname !='' && this.lastname !='' && this.email !='' && this.name !='' && this.bio !=''
			
		}
	}
	
  
}
</script>

 <style scoped>



 
.expansion{
	 /* width: 800px; */
	 /* background-color:#CFD8DC; */
	
	
 }

.form{
	position: relative;
	z-index: 1;
	/* background: #E0E0E0; */
	max-width: 500px;
	margin: 0 auto 100px;
	padding: 45px;
	text-align: center;
}


.register-form{
	font-family: "Roboto", sans-serif;
	outline: 1;
	background: #757575;
	/* border-color: blue; */
	width: 100%;
	border: 0;
	margin: 0 0 25px;
	padding: 28px;
	box-sizing: border-box;
	font-size: 14px

}

.form input{
	font-family: "Roboto", sans-serif;
	outline: 1;
	background: #f2f2f2;
	width: 100%;
	border: 0;
	margin: 0 0 15px;
	padding: 22px;
	box-sizing: border-box;
	font-size: 14px;

}

.avatar{
	padding-left: 2px;
	
}


.card{
	background-color: #CFD8DC;
}

.profile1{
	padding-left: 33px;
}






</style>

