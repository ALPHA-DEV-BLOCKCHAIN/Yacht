<template>
  <Navbar></Navbar>
  <v-container fluid>
    <v-row class="fill-height" align="center">
      <!-- Image Section -->
      <v-col cols="12" md="6">
        <v-carousel cycle hide-delimiters="false" show-arrows="hover">
          <v-carousel-item src="/images/luxury.jpg" cover></v-carousel-item>
          <v-carousel-item src="/images/yachts.jpg" cover></v-carousel-item>
          <v-carousel-item src="/images/Drinksyacht.jpg" cover></v-carousel-item>
          <v-carousel-item src="/images/girl.jpg" cover></v-carousel-item>
          <v-carousel-item src="/images/Orange.jpg" cover></v-carousel-item>
          <v-carousel-item src="/images/parked yacht.jpg" cover></v-carousel-item>
          <v-carousel-item src="/images/amarina.jpg" cover></v-carousel-item>
        </v-carousel>
      </v-col>

      <!-- Login Form Section -->
      <v-col cols="12" md="6">
        <v-card class="pa-5">
          <v-card-title class="headline text-center">Welcome back</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submit">
              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                prepend-icon="mdi-email"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :type="passwordType"
                label="Password"
                prepend-icon="mdi-lock"
                required
                append-icon="mdi-eye"
                @click:append="togglePasswordVisibility"
              ></v-text-field>
              <v-row>
                <v-col>
                  <v-btn width="100%" color="green" @click="submit">Login</v-btn>
                </v-col>
                <v-col>
                  <v-btn width="100%" color="primary" @click="navigateToRegister">Register</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <Footer></Footer>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: "",
      password: "",
      passwordType: "password", // Default to password type
    };
  },
  methods: {
    async submit() {
      try {
        const response = await axios.post('http://localhost:8000/api/login', {
          email: this.email,
          password: this.password
        });

        // Assuming the response contains a token or some sort of authentication data
        // const { token } = response.data.token;

        // Store token in local storage or state management
        // localStorage.setItem('authToken', token);

        // Redirect to a protected page or dashboard
        this.$router.push('/');
      } catch (error) {
        console.error('Login failed:', error.response.data);
        alert('Login failed. Please check your email and password.');
      }
    },
    navigateToRegister() {
      this.$router.push('/register');
    },
    togglePasswordVisibility() {
      // Toggle password type between 'password' and 'text'
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    }
  }
};
</script>
