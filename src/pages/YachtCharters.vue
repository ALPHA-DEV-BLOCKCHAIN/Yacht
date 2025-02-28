<template>
  <div>
    <Navbar />

    <v-container>
      <h1 class="mb-4">Yacht Charters</h1>
      <v-row>
        <v-col
          v-for="yacht in yachtCharters"
          :key="yacht.id"
          cols="12"
          class="mb-6"
        >
          <v-card class="d-flex" elevation="4">
            <!-- Image on the right -->
            <v-img
              :src="yacht?.photo"
              class="v-img--contained"
              
            ></v-img>

            <!-- Card content -->
            <v-card-title>
              <v-container fluid>
                <v-row>
                  <v-col cols="12">
                    <h2>{{ yacht.name }}</h2>
                  </v-col>
                  <v-col cols="12">
                    <p><strong>Type:</strong> {{ yacht.type }}</p>
                    <p><strong>Range:</strong> {{ yacht.range }}</p>
                    <p><strong>Speed:</strong> {{ yacht.speed }} km/h</p>
                    <p><strong>Number of Passengers:</strong> {{ yacht.number_of_passengers }}</p>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-title>
            <v-card-actions>
              <v-btn @click="enquireByEmail(yacht)" color="blue">Enquire via Email</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <p v-if="!yachtCharters.length">No yacht charters available.</p>
    </v-container>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

// Declare reactive variable
const yachtCharters = ref([]);

// Define async function to fetch yacht charters
const fetchYachtCharters = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/yacht_charters"); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    yachtCharters.value = await response.json();
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

// Function to handle email enquiry
const enquireByEmail = (yacht) => {
  const email = 'info@example.com'; // Replace with your contact email address
  const subject = `Enquiry about ${yacht.name}`;
  const body = `Hello,\n\nI am interested in the yacht named ${yacht.name}. Please provide more information.\n\nBest regards,\n[Your Name]`;
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

// Fetch yacht charters when component is mounted
onMounted(fetchYachtCharters);
</script>

<style scoped>
.v-img--contained {
  object-fit: cover;
}
</style>
