<template>
<div class="main">
  <v-app>
  
    <!-- Jumbotron Starts -->
    <v-jumbotron 
    src="https://hdqwalls.com/download/material-design-social-1326x557.jpg"
    :gradient="gradient"
    height="557px">
      <!-- <v-container fill-height>
        <v-layout row-wrap>
          <v-flex text-xs-center>
          </v-flex>
        </v-layout>
      </v-container> -->
    </v-jumbotron>
  <!-- Jumbotron Ends -->

        <!-- Card 1(Basic) Starts -->
          <v-content>
            <div class="columnBasic">
              <div class="title">
                <i class="fas fa-home"></i>
                <h2>Basic</h2>
              </div>

              <div class="price">
                <h4>₹ <span>999</span></h4>
              </div>

              <hr class="costDivide"/>

              <div class="option">
                <ul>
                  <li>Feature 1</li>
                  <hr>
                  <li>Feature 2</li>
                  <v-divider></v-divider>
                  <li>Feature 3</li>
                  <v-divider></v-divider>
                  <li>Feature 4</li>
                  <v-divider></v-divider>
                  <li> - </li>
                  <v-divider></v-divider>
                  <li> - </li>
                  <v-divider></v-divider>
                  <li> - </li>
                  <v-divider></v-divider>
                  <li> - </li>
                  <v-divider></v-divider>
                </ul>
              </div>

              <v-layout align-center mt-3>
                <v-flex xs12 sm4 text-xs-center mt-5 ml-3>
                  <div>
                    <v-btn round large absolute color="blue darken-3">Buy Now</v-btn>
                  </div>
                </v-flex>
              </v-layout>

            </div>
          </v-content>
    <!-- Card 1(Basic) Ends -->

    <!-- Card 2(Extended) Starts -->
          <v-content>
            <div class="columnExtended">
              <div class="title">
                <i class="fas fa-building"></i>
                <h2>Extended</h2>
              </div>

              <div class="price">
                <h4>₹ <span>1499</span></h4>
              </div>

              <hr class="costDivide"/>

              <div class="option">
                <ul>
                  <li>Feature 1</li>
                  <v-divider></v-divider>
                  <li>Feature 2</li>
                  <v-divider></v-divider>
                  <li>Feature 3</li>
                  <v-divider></v-divider>
                  <li>Feature 4</li>
                  <v-divider></v-divider>
                  <li>Feature 5</li>
                  <v-divider></v-divider>
                  <li>Feature 6</li>
                  <v-divider></v-divider>
                  <li> - </li>
                  <v-divider></v-divider>
                  <li> - </li>
                  <v-divider></v-divider>
                </ul>
              </div>

              <v-layout align-center mt-3>
                <v-flex xs12 sm4 text-xs-center mt-5 ml-3>
                  <div>
                    <v-btn large round absolute color="deep-purple darken-2">Buy Now</v-btn>
              </div>
            </v-flex>
          </v-layout>
        </div>
          </v-content>
    <!-- Card 2(Extended) Ends -->

    <!-- Card 3(Premium) Starts -->
    <v-content>
      <div class="columnPremium">
              <div class="title">
                <i class="fab fa-fort-awesome"></i>
                <h2>Premium</h2>
              </div>

              <div class="price">
                <h4>₹ <span>1999</span></h4>
              </div>

              <hr class="costDivide"/>

              <div class="option">
                <ul>
                  <li>Feature 1</li>
                  <v-divider></v-divider>
                  <li>Feature 2</li>
                  <v-divider></v-divider>
                  <li>Feature 3</li>
                  <v-divider></v-divider>
                  <li>Feature 4</li>
                  <v-divider></v-divider>
                  <li>Feature 5</li>
                  <v-divider></v-divider>
                  <li>Feature 6</li>
                  <v-divider></v-divider>
                  <li>Feature 7</li>
                  <v-divider></v-divider>
                  <li>Feature 8</li>
                  <v-divider></v-divider>
                </ul>
              </div>

              <v-layout align-center mt-3>
                <v-flex xs12 sm4 text-xs-center mt-5 ml-4>
                  <div>
                    <v-btn round large absolute color="indigo darken-4">Buy Now</v-btn>
                  </div>
                </v-flex>
              </v-layout>
          </div>
    </v-content>
      <!-- Card 3(Premium) Ends -->
    <!-- </v-container> -->
  </v-app>
  </div>
</template>

<script>
  export default {
    data: () => ({
      gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)'
    })
  }
</script>

<style>
/*The Main Div in which the card is made(Basic)*/
.main{
  max-width:100%;
} 
.columnBasic{
  border: solid black 2px; 
  width: 250px;
  position: absolute;
  height: 800px;
  margin-top: -186px;
  margin-bottom: 250px;
  margin-left:334px;
  text-align: center;
  border-radius: 16px;
  overflow: hidden;
  float: left;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.7);
}
/*The Main Div in which the card is made(Extended)*/
.columnExtended{
  border: solid black 2px; 
  width: 250px;
  position: absolute;
  height: 800px;
  margin-top: -235px;
  margin-bottom: 250px;
  margin-left:684px;
  text-align: center;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.7);
}
/*The Main Div in which the card is made(Premium)*/
.columnPremium{
  border: solid black 2px; 
  width: 250px;
  position: absolute;
  height: 800px;
  margin-top: -288px;
  margin-bottom: 250px;
  margin-left:1035px; 
  text-align: center;
  border-radius: 16px;
  overflow: hidden;
  float: right;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.7);
}
/*This Div contains the icon and the Package Name*/
.columnBasic .title{
  border-bottom: solid black 1px; 
  padding: 13px;
  background: #1565C0;
}
/*This Div contains the icon and the Package Name*/
.columnExtended .title{
  border-bottom: solid black 1px; 
  padding: 13px;
  background: #512DA8;
}
/*This Div contains the icon and the Package Name*/
.columnPremium .title{
  border-bottom: solid black 1px; 
  padding: 13px;
  background: #1A237E;
}
/*Font-Awesome for Basic*/
.title .fa-home{
  font-size: 40px;
}
/*Font-Awesome for Extended*/
.title .fa-building{
  font-size: 40px;
}
/*Font-Awesome for Premium*/
.title .fa-fort-awesome{
  font-size: 40px;
}
/*Package name is written in h2*/
h2{
  padding-top: 15px;
  font-size: 25px;
  font-family: 'Delius Swash Caps', cursive;
  font-weight: 700;
  text-transform: uppercase;
}
/*The price is mentioned in this div*/
.price{
  /*Comment the border code*/
/*   border: solid black 1px; */
background-color: #fff;
}
/*The '₹' is written in h4*/
.price h4{
  font-family: 'Loved by the King', cursive;
  font-size: 40px;
/*   color: #009688; */
  font-weight: 400;
}
/*The actual package cost is written in this span with h4*/
.price h4 span{
  font-weight: 500;
  font-size: 50px;
}
/*In Option div , we have the features */
.option ul li{
  list-style: none;
  padding: 15px 10px;
  font-family: 'Lemonada', cursive;
  font-size: 14px;
}
/*It is an hr to bring in a line between the cost and the features*/
.costDivide{
  border-top: 3px solid black;
  width: 80%;
  margin-left: 30px;
}
</style>
