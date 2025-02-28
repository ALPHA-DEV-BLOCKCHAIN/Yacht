<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="pa-5" max-width="500">
          <v-card-title class="headline text-center">Register</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="register">
              <v-text-field
                v-model="name"
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                v-model="confirmEmail"
                label="Confirm Email"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append="togglePasswordVisibility"
                required
              ></v-text-field>
              <v-text-field
                v-model="confirmPassword"
                :type="showPassword ? 'text' : 'password'"
                label="Confirm Password"
                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append="togglePasswordVisibility"
                required
              ></v-text-field>
              <v-btn color="primary" type="submit">Register</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
      showPassword: false // Boolean to toggle password visibility
    };
  },
  methods: {
    async register() {
      if (this.email !== this.confirmEmail) {
        alert("Emails do not match!");
        return;
      }
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      try {
        const response = await axios.post("http://localhost:8000/api/register", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword,
        });

        // Check if response and response.data are defined
        if (response && response.data) {
          alert("Registration successful!");
          this.$router.push("/portal");
        } else {
          console.error("Unexpected response format:", response);
          alert("Registration failed. Please try again.");
        }
      } catch (error) {
        // Handle different types of errors
        if (error.response) {
          // Request made and server responded with a status code
          console.error("Registration failed:", error.response.data);
          if (error.response.status === 422) {
            alert(
              "Validation errors: " + JSON.stringify(error.response.data.errors)
            );
          } else {
            alert("Registration failed. Please try again.");
          }
        } else if (error.request) {
          // Request was made but no response received
          console.error("Registration failed: No response received from server.");
          alert("Registration failed. Please try again later.");
        } else {
          // Something happened in setting up the request
          console.error("Registration failed:", error.message);
          alert("Registration failed due to an error.");
        }
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>

<style scoped>
/*  styles  */
</style>
