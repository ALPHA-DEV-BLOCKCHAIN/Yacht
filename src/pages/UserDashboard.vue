<template>
    <div>
      <Navbar />
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="pa-5" max-width="500">
              <v-card-title class="headline">Profile Details</v-card-title>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="name"
                    label="Full Name"
                    readonly
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    label="Email"
                    readonly
                  ></v-text-field>
                 
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="pa-5" max-width="500">
              <v-card-title class="headline">Purchase History</v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item-group v-if="purchases.length">
                    <v-list-item
                      v-for="purchase in purchases"
                      :key="purchase.id"
                    >
                      <v-list-item-content>
                        <v-list-item-title>{{ purchase.yacht_name }}</v-list-item-title>
                        <v-list-item-subtitle>
                          Purchase Date: {{ purchase.purchase_date }}
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                          Price: ${{ purchase.price }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                  <v-alert v-else type="info">No purchases found.</v-alert>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  
  // Reactive variables for user profile and purchases

  const purchases = ref([]);
  
  // Fetch profile and purchases when component is mounted
  const fetchUserDetails = async () => {
    try {
      const userResponse = await axios.get('http://127.0.0.1:8000/api/users', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });
      user.value = userResponse.data;
  
    
    } catch (error) {
      console.error('Error fetching user details:', error);
      alert('Failed to fetch user details. Please try again.');
    }
  };
  
  onMounted(fetchUserDetails);
  </script>
  
  <style scoped>
  /* Add custom styles here if needed */
  </style>
  