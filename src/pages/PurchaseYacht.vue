<template>
    <div>
      <Navbar></Navbar>
      <app>
        <v-container>
          <v-form v-model="valid" ref="form">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="userDetails.name"
                  :rules="[rules.required]"
                  label="Full Name"
                  required
                ></v-text-field>
  
                <v-text-field
                  v-model="userDetails.email"
                  :rules="[rules.required, rules.email]"
                  label="Email"
                  required
                ></v-text-field>
  
                <v-text-field
                  v-model="userDetails.phone"
                  :rules="[rules.required, rules.phone]"
                  label="Phone Number"
                  required
                ></v-text-field>
  
                <v-text-field
                  v-model="userDetails.address"
                  :rules="[rules.required]"
                  label="Address"
                  required
                ></v-text-field>
  
                <v-text-field
                  v-model="paymentDetails.card_number"
                  :rules="[rules.required, rules.card_number]"
                  label="Card Number"
                  type="number"
                  required
                ></v-text-field>
  
                <v-text-field
                  v-model="paymentDetails.expiry_date"
                  :rules="[rules.required, rules.expiryDate]"
                  label="Expiry Date (MM/YY)"
                  required
                ></v-text-field>
  
                <v-text-field
                  v-model="paymentDetails.cvc"
                  :rules="[rules.required, rules.cvc]"
                  label="CVC"
                  type="number"
                  required
                ></v-text-field>
  
                <v-btn
                  :disabled="!valid"
                  color="orange"
                  @click="submitForm"
                >
                  Submit Payment
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
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
    props: ['id'], // This will receive the id from the route params
  
    data() {
      return {
        valid: false,
        userDetails: {
          name: '',
          email: '',
          phone: '',
          address: '',
        },
        paymentDetails: {
          card_number: '',
          expiry_date: '',
          cvc: '',
        },
        rules: {
          required: value => !!value || 'Required.',
          email: value => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
          phone: value => /^[0-9]{10}$/.test(value) || 'Phone number must be 10 digits.',
          card_number: value => /^[0-9]{16}$/.test(value) || 'Card number must be 16 digits.',
          expiry_date: value => /^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(value) || 'Expiry date must be in MM/YY format.',
          cvc: value => /^[0-9]{3}$/.test(value) || 'CVC must be 3 digits.',
        },
      };
    },
    methods: {
      async submitForm() {
        if (this.$refs.form.validate()) {
          try {
            // Send the user and payment details to the server
            const response = await axios.post("http://127.0.0.1:8000/api/purchase", {
              yacht_id: this.$route.params.id, // Include the yacht_id
              ...this.userDetails, // Spread userDetails properties
              ...this.paymentDetails, // Spread paymentDetails properties
            });
            // Handle successful response
            console.log("Purchase successful:", response.data);
            // Redirect or show confirmation
            this.$router.push('/');
        } catch (error) {
            // Handle error
            console.error("Error during purchase:", error);
            if (error.response) {
              alert("Error: " + JSON.stringify(error.response.data));
            } else {
              alert("Error: " + error.message);
            }
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles here if needed */
  </style>
  