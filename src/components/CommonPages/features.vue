<template>
<v-container fluid>

  
  <v-parallax
  src="/static/doc-images/features.jpeg">
  <v-layout row align-center justify-center>

  </v-layout>
  </v-parallax>
  


  <v-layout row wrap>

              <v-flex xs12 sm6 pr-3 pt-4>

                <v-card 
                hover raised ripple
                color="blue lighten-3">

                  <v-card-media>
                    <i class="fab fa-android fa-3x"></i>
                  </v-card-media>

                  <v-card-title>
                    <h1>Lorem Ipsum</h1>
                    <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quisquam facere inventore quod, sed ipsa ut. Aliquam debitis, dolores natus sint at, hic quos vero distinctio reprehenderit labore, amet omnis.</v-card-text>
                  </v-card-title>

                </v-card>
              </v-flex>
             
             <!-- 2 -->
             
            

              <v-flex xs12 sm6 pr-3 mt-4>

                <v-card 
                hover raised ripple
                color="indigo lighten-2">

                  <v-card-media>
                    <i class="fab fa-apple fa-3x"></i>
                  </v-card-media>

                  <v-card-title>
                    <h1>Lorem Ipsum</h1>
                    <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quisquam facere inventore quod, sed ipsa ut. Aliquam debitis, dolores natus sint at, hic quos vero distinctio reprehenderit labore, amet omnis.</v-card-text>
                  </v-card-title>

                </v-card>
              </v-flex>
            
           
           <!-- 3 -->

            <v-flex xs12 sm6 pr-3 mt-4>

                <v-card 
                hover raised ripple
                color="deep-purple lighten-3">

                  <v-card-media>
                    <i class="fab fa-android fa-3x"></i>
                  </v-card-media>

                  <v-card-title>
                    <h1>Lorem Ipsum</h1>
                    <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quisquam facere inventore quod, sed ipsa ut. Aliquam debitis, dolores natus sint at, hic quos vero distinctio reprehenderit labore, amet omnis.</v-card-text>
                  </v-card-title>

                </v-card>
              </v-flex>

              <!-- 4 -->

              <v-flex xs12 sm6 pr-3 mt-4>

                <v-card 
                hover raised ripple
                color="teal lighten-3">

                  <v-card-media>
                    <i class="fab fa-android fa-3x"></i>
                  </v-card-media>

                  <v-card-title>
                    <h1>Lorem Ipsum</h1>
                    <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quisquam facere inventore quod, sed ipsa ut. Aliquam debitis, dolores natus sint at, hic quos vero distinctio reprehenderit labore, amet omnis.</v-card-text>
                  </v-card-title>

                </v-card>
              </v-flex>

            <!-- features card -->
            <v-flex xs-12 pt-4>
        <v-card 
        ripple hover raised height="300px"
        color="blue-grey lighten-3">
<!--           <v-container fluid grid-list-lg> -->
            <v-layout row>
              <!--Media in this flex-->
              <v-flex xs5>
                <v-card-media
                 contain
                 height="300px"
                 img src='https://images.unsplash.com/photo-1519475180017-2880844644bc?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=0beaf64e277c1f36c8f41aad27d16c73' alt=''>
                </v-card-media>
              </v-flex>
              <!--Text and title in this flex-->
              <v-flex xs7>
                <v-card-title>Lorem Ipsum</v-card-title>
                <v-card-text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum numquam labore itaque sint vitae corrupti quibusdam veritatis neque sequi dolorum adipisci excepturi inventore maxime veniam, provident omnis dicta, assumenda beatae.</v-card-text>
              </v-flex>
            </v-layout>
<!--           </v-container> -->
        </v-card>
      </v-flex>
      </v-layout>

      <!-- footer -->
      <v-layout pt-4>
      <v-footer height="auto">
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          icon
          class="mx-3 white--text"
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>
      <v-card-text class="white--text">
        &copy;2018 — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
 </v-layout>

             

</v-container>


            

</template>


<script>
export default {
  data: () => ({
      icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram']
    }),
      // beforeRouteLeave (to, from , next) {
      //   const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
      //   if (answer) next(); else next(false);
      // }
  }

</script>

<style scoped>

/* main cards */
/*Basic Styling of Card*/
.card{
  border: white solid 2px;
  padding-right: 55px;
  /* border-radius: 12px; */
  max-width: 100%;
}
/*Styling the card media*/
.card__media{
  /*border: black solid 1px; */
  margin-top: 10px;
  margin-left: 55%;
}
/*Styling the card title*/
.card__title{
/*   border: black solid 1px; */
  text-align:center;
  padding-left: 150px;
}
.card__title h1{
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  margin-left: 34%;
}
.card__title .card__text{
  font-family: 'Gorditas', cursive;
  font-size: 14px;
}

/* picture cards */

.card1{
/*   border: solid black 2px; */
  /* border-radius: 12px; */
  width: 80%;
  text-align: center;
}
.card__media1{
/*   border: solid black 2px; */
  margin-top: -20px;
  margin-left: -10px;
}
.card__title1{
  margin-left: 20%;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  font-weight: 600;
}
.card__text1{
  font-family: 'Gorditas', cursive;
  font-size: 14px;
}
</style>

