<template>
  <Navbar></Navbar>
  <app>
    <div>
      <!-- Hero Image and Overlay Text -->
      <v-img
        :width="1400" 
        :height="800"
        aspect-ratio="16/9"
        cover
        src="/images/surfing.jpg"
      >
        <div class="overlay-text">
          <h1>Your Gateway to</h1>
          <h1>General Maritime </h1>
          <p>We simplify, enhance, and tailor yacht-related services to meet your unique needs, making maritime experiences more convenient and accessible.</p>
          <v-btn
          href="/#atAGlance"
          color="primary"
        class="text-white"
        sizes="large"
        >Learn More!</v-btn>
        </div>
      </v-img>

      <!-- Content Section with Image and Text Side-by-Side -->
      <v-row class="d-flex align-center">
        <v-col cols="12" md="8">
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

        <v-col cols="12" md="4">
          <v-card class="mx-auto" width="100%" color="white">
            <v-card-text>
              <h1>About<br>The Yacht Business</h1>
              <p>
                The Yacht Business is a premier luxury yachting company dedicated to crafting extraordinary experiences on the water. With an unwavering commitment to excellence, we offer a curated selection of meticulously maintained yachts, each a masterpiece of design and engineering.
                <br><br>
                Whether you seek the thrill of adventure or the tranquility of relaxation, our diverse fleet caters to every desire. From sleek performance yachts that glide effortlessly through the waves to opulent superyachts that redefine luxury living, we have the perfect vessel to elevate your maritime journey.
                <br><br>
                Our services extend beyond yacht ownership. Our experienced team of yachting experts provides comprehensive yacht management, charter services, and bespoke itineraries tailored to your preferences. We handle every detail, ensuring your time on the water is seamless and unforgettable.
                <br><br>
                Discover a world of unparalleled luxury and service with The Yacht Business. Let us curate your dream yachting experience.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </app>
  <Footer></Footer>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<style scoped>
.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  text-align: center;
  z-index: 10;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5); /* Add a semi-transparent background for better text readability */
}

.v-row {
  margin: 0;
}

.v-card {
  margin: 16px 0;
}

.v-img {
  border-radius: 8px;
}

.v-card-text {
  padding: 16px;
}
</style>
