<template>
  <Navbar></Navbar>
  <app>
    <div>
      <v-carousel cycle hide-delimiters="false" show-arrows="hover">
        <v-carousel-item src="/images/Drinksyacht.jpg" cover>
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
              <h1>Packaged tours</h1>
              <h2>
                A luxury once enjoyed,<br />
                becomes a necessity
              </h2>
              Embark on unforgettable adventures and explore the world's most
              stunning destinations with your personalized yacht.
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>

      <v-row>
        <v-col cols="12" md="4">
          <v-card class="mx-auto" width="100%">
            <v-img
              width="100%"
              :height="400"
              aspect-ratio="16/9"
              cover
              src="/images/nice.jpg"
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="mx-auto" width="100%" color="white">
            <v-card-text>
              <h1>
                Experience the Magic of Mombasa: A Luxury Yacht Charter<br />
                Indulge in Coastal Opulence
              </h1>
              Escape the ordinary and embark on an unforgettable journey aboard
              a luxurious yacht in the heart of Mombasa. Immerse yourself in the
              breathtaking beauty of the Kenyan coast as you explore pristine
              waters, pristine beaches, and vibrant marine life. Unwind in Style
              Our meticulously crafted yacht charter packages offer an
              unparalleled experience tailored to your desires. Whether you seek
              adventure, relaxation, or a combination of both, we have the
              perfect itinerary for you. Package Highlights: Luxurious Yacht:
              Choose from a fleet of elegant yachts, each equipped with modern
              amenities and spacious accommodations. Personalized Itineraries:
              Create your own adventure with customizable itineraries, including
              snorkeling, diving, fishing, or simply lounging in the sun.
              World-Class Cuisine: Savor exquisite culinary delights prepared by
              our onboard chefs, using the freshest local ingredients. Expert
              Crew: Our dedicated and experienced crew will ensure your every
              need is met, providing exceptional service throughout your
              journey. Stunning Scenery: Discover hidden coves, secluded
              beaches, and vibrant coral reefs along the stunning Mombasa
              coastline. Sample Itinerary Morning: Depart from Mombasa's vibrant
              harbor and set sail towards the pristine waters of the Indian
              Ocean. Afternoon: Enjoy a leisurely swim in the crystal-clear
              waters, followed by a delicious lunch prepared by our onboard
              chef. Evening: Unwind with a glass of champagne as you watch the
              sun dip below the horizon, painting the sky with breathtaking
              colors. Additional Activities Deep-sea fishing Dolphin and whale
              watching Island hopping Snorkeling and diving Beach picnics
              Romantic sunset cruises Let us create a bespoke yacht charter
              experience that exceeds your expectations. Contact us today to
              start planning your dream vacation. [Your Company Name][Contact
              Information][Website].</v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
    </div>
   

    <v-sheet>
      <v-container style="margin-top: -100px">
        <v-row >
          <v-col cols="12" md="4"v-for="packagess in packages">
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="align-end text-white"
                height="200"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
              >
                <v-card-title>{{ packagess.name }}</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-4">{{
                packagess.price
              }}</v-card-subtitle>

              <v-card-text>
                <div>Whitehaven Beach</div>

                <div>{{ packagess.description }}</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text @click="bookSeats">Book Seats</v-btn>
    <v-btn color="orange" text @click="viewAmenities">View Amenities</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </app>
  <Footer></Footer>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  data() {
    return {
      packages: [],
    };
  },
  methods: {
    async getPackages() {
      const response = await axios.get("http://127.0.0.1:8000/api/packages");
      this.packages = response.data;
    },
  },

  created() {
    this.getPackages();
  },
};
</script>

<!-- <div>
        <v-sheet :height="200" :width="200" color="white"></v-sheet>
      </div> -->
