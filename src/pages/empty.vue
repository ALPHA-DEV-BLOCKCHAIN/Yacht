 <template>
    <v-container fluid>
      <!-- Header Section -->
      <v-row class="align-center">
        <v-col>
          <v-avatar size="64">
            <img src="C:\Users\kim\Desktop\plane\Aerojet\public\logo.png\jetman.png.png" alt="Logo">
          </v-avatar>
        </v-col>
        <v-col class="text-center">
          <v-btn @click="toggleMenu" icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-col>
        <v-col class="text-right">
          <v-btn text @click="navigateToProfile">Welcome, IBRAHIM MAINA</v-btn>
          <v-btn icon @click="toggleMore">
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </v-col>
      </v-row>
  
      <!-- Sidebar Menu -->
      <v-navigation-drawer v-model="showMenu" app>
        <v-list>
          <v-list-item link @click="navigateTo('dashboard')">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="navigateTo('payments')">
            <v-list-item-icon>
              <v-icon>mdi-cash-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Payments</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="navigateTo('bookings')">
            <v-list-item-icon>
              <v-icon>mdi-calendar-check</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Bookings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="navigateTo('tours')">
            <v-list-item-icon>
              <v-icon>mdi-map</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Tours</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="navigateTo('empty-legs')">
            <v-list-item-icon>
              <v-icon>mdi-plane</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Empty Legs</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="navigateTo('profile')">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <!-- Main Content -->
      <v-main>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-card class="pa-5">
                <v-card-title class="headline">Upcoming/Recent Trip</v-card-title>
                <v-card-subtitle>
                  EXPLORE NAIROBI CITY FROM THE SKY WITH OUR HELICOPTER TOUR
                </v-card-subtitle>
                <v-card-text>
                  <v-img src="/images/luxuryyacht.jpg" height="200px"></v-img>
                  <div>
                    <p>Airbus As350/H125 Helicopter . Wilson Airport - Suswa Hills</p>
                    <p><strong>September 8, 2024 2:00 PM</strong></p>
                    <p><strong>6 of 8 Seats left</strong></p>
                    <v-chip color="primary">KES 35,000.00</v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
  
            <v-col cols="12" md="6">
              <v-card class="pa-5">
                <v-card-title class="headline">Statistics</v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col>
                      <v-card class="pa-3">
                        <v-card-title>Booked Empty Legs</v-card-title>
                        <v-card-subtitle>0</v-card-subtitle>
                      </v-card>
                    </v-col>
                    <v-col>
                      <v-card class="pa-3">
                        <v-card-title>Enquiries Submitted</v-card-title>
                        <v-card-subtitle>0</v-card-subtitle>
                      </v-card>
                    </v-col>
                    <v-col>
                      <v-card class="pa-3">
                        <v-card-title>Booked Packaged Tours</v-card-title>
                        <v-card-subtitle>0</v-card-subtitle>
                      </v-card>
                    </v-col>
                    <v-col>
                      <v-card class="pa-3">
                        <v-card-title>Quotes Received</v-card-title>
                        <v-card-subtitle>0</v-card-subtitle>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
  
          <!-- On Demand Tours -->
          <v-row>
            <v-col>
              <v-card class="pa-5">
                <v-card-title class="headline">On Demand Tours</v-card-title>
                <v-card-text>
                  <p>
                    Scenic tour over the city in a Helicopter is both enjoyable and luxurious 🔥 
                  </p>
                  <p>
                    Travel in style while capturing unforgettable moments in the sky hovering over Kibera Slums, Karen, all the way to Ngong Hills, overlooking Suswa Hills one way and viewing of the Nairobi CBD skyline on your way back🏙 
                  </p>
                  <p>
                    Ready to take the skies? Join us in this exploration of the skies🏙
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-container>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const showMenu = ref(false);
      const showMore = ref(false);
      const router = useRouter();
  
      const toggleMenu = () => {
        showMenu.value = !showMenu.value;
      };
  
      const toggleMore = () => {
        showMore.value = !showMore.value;
      };
  
      const navigateTo = (page) => {
        router.push(`/${page}`);
      };
  
      const navigateToProfile = () => {
        router.push('/profile');
      };
  
      return {
        showMenu,
        showMore,
        toggleMenu,
        toggleMore,
        navigateTo,
        navigateToProfile
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add your scoped styles here if needed */
  </style>
  