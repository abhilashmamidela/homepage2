<template>
  <v-app>
	  <template>
		  
  <v-container class="con1">
    <v-layout row wrap>
      <v-flex xs12 lg5 mb-3>
        <v-expansion-panel popout  class="item">
          <v-expansion-panel-content>
            <div slot="header">Profile</div>
						<!-- 1 -->
            <v-card>
	         <div class="form">
				 <v-form class="register-form" v-model="validx" method="post" v-on:submit.prevent="getFormValues">
					 <v-text-field type="text"  name="firstname" v-model="firstname"  class="userfirst"      placeholder="Firstname"></v-text-field>
					 <v-text-field type="text"  name="lastname" v-model="lastname"    class="userlast"              placeholder="Lastname"></v-text-field>
					 <v-text-field type="Email" name="email"    v-model="email"       class="useremail"             placeholder="Email Address"></v-text-field>
					 <v-text-field type="text"  name="name"     v-model="name"        class="username"              placeholder="Display Name"></v-text-field>
					 <v-text-field type="text"  name="bio"      v-model="bio"         class="bio"                   placeholder="Short Autobiography"></v-text-field>
					 <v-btn class="button" type="submit" @click="submit" :disabled="!valid">Submit</v-btn>
				 </v-form>
			 </div>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>		
    </v-layout>
		
  </v-container>
</template>
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
			validx:true,
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

 




 .item{
	 width: 900px;
	
	
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
	background:#f2f2f2;
	/* border-color: blue; */
	width: 100%;
	border: 0;
	margin: 0 0 25px;
	padding: 28px;
	box-sizing: border-box;
	font-size: 14px

}





</style>

