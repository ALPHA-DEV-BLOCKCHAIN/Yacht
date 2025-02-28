<template>
  <div>
    <Navbar></Navbar>
    <app>
      <v-carousel
        cycle
        hide-delimiters="false"
        show-arrows="hover"
        height="300"
      >
        <v-carousel-item
          v-for="(image, index) in carouselImages"
          :key="index"
          :src="image"
          cover
        ></v-carousel-item>
      </v-carousel>

      <v-container style="margin-top: -100px">
        <v-row>
          <v-col
            v-for="(yacht, index) in yachts"
            :key="index"
            cols="12"
            md="4"
          >
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="align-end text-white"
                height="200"
                :src="yacht.imageUrl"
                cover
              >
                <v-card-title>{{ yacht.name }}</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-4">
                {{ yacht.price }}
              </v-card-subtitle>

              <v-card-text>
                <div>Description</div>
                <div>{{ yacht.description }}</div>
              </v-card-text>
              <v-card-text>
                <div>Yacht status</div>
                <div>{{ yacht.status }}</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text @click="shareYacht(yacht)">View Details</v-btn>
                <v-btn color="orange" text @click="exploreYacht(yacht)">Purchase</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </app>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      yachts: [],
      carouselImages: [
        "/images/yachts.jpg",
        "/images/parked_yacht.jpg",
        "/images/nice.jpg",
        "/images/captain.jpg",
        "/images/amarina.jpg",
        "/images/habour.jpg"
      ]
    };
  },
  methods: {
    async getYachts() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/yachts");
        this.yachts = response.data;
      } catch (error) {
        console.error("Error fetching yachts:", error);
      }
    },
    shareYacht(yacht) {
      // Implement share functionality here
      console.log("Share yacht:", yacht);
    },
    exploreYacht(yacht) {
      // Implement explore functionality here, e.g., navigate to yacht details page
      this.$router.push({ name: 'PurchaseYacht', params: { id: yacht.id } });
    }
  },
  created() {
    this.getYachts();
  }
};
</script>
