<template>
  <Navbar></Navbar>
  <app>
    <div>
      <v-carousel cycle hide-delimiters="false" show-arrows="hover">
        <v-carousel-item src="/images/yachts.jpg" cover>
          <div
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            <div
              class="overlay-text"
              style="
                position: relative;
                z-index: 10;
                padding: 20px;
                text-align: center;
              "
            >
              <h1>Private Charter</h1>
              Enjoy the luxury and convenience of personalized private sea
              travel, tailored to your schedule, needs, and preferences.
            </div>
          </div>
        </v-carousel-item>

        <v-carousel-item src="/images/luxury.jpg" cover></v-carousel-item>
        <v-carousel-item src="/images/yachts.jpg" cover></v-carousel-item>

        <v-carousel-item src="/images/Drinksyacht.jpg" cover></v-carousel-item>
        <v-carousel-item src="/images/girl.jpg" cover></v-carousel-item>

        <v-carousel-item src="/images/Orange.jpg" cover></v-carousel-item>

        <v-carousel-item src="/images/parked yacht.jpg" cover></v-carousel-item>
        <v-carousel-item src="/images/amarina.jpg" cover></v-carousel-item>
      </v-carousel>
      
      <v-container style="margin-top: -100px">
        <v-row >
          <v-col cols="12" md="4"v-for="yachts in yacht">
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="align-end text-white"
                height="200"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
              >
                <v-card-title>{{ yachts.name }}</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-4"
                >{{ yachts.price }}
              </v-card-subtitle>

              <v-card-text>
                <div>description</div>

                <div>{{ yachts.descrption }}</div>
              </v-card-text>
               <v-card-text>
                <div>status</div>

                <div>{{ yachts.status }}</div>
              </v-card-text> 

              <v-card-actions>
                <v-btn color="orange" text="Share"></v-btn>

                <v-btn color="orange" text="Explore"></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

  </app>
  <Footer></Footer>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  data() {
    return {
      yacht: [],
    };
  },
  methods: {
    async getyacht() {
      const response = await axios.get("http://127.0.0.1:8000/api/yachts");
      this.yacht = response.data;
    },
  },

  created() {
    this.getyacht();
  },
};
</script>
