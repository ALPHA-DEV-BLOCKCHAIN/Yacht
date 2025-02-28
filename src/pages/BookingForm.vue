<template>
    <div>
      <h1>Booking Form</h1>
      <v-form @submit.prevent="submitBooking">
        <!-- Form fields for booking details -->
        <v-text-field v-model="userId" label="User ID" required></v-text-field>
        <v-text-field v-model="startDate" label="Start Date" required></v-text-field>
        <v-text-field v-model="endDate" label="End Date" required></v-text-field>
        <v-btn type="submit" color="orange">Submit Booking</v-btn>
      </v-form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      packageId: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        userId: '',
        startDate: '',
        endDate: '',
        packageDetails: null
      };
    },
    methods: {
      async fetchPackageDetails() {
        // Fetch package details if needed
        // Example: const response = await axios.get(`http://127.0.0.1:8000/api/packages/${this.packageId}`);
        // this.packageDetails = response.data;
      },
      submitBooking() {
        // Handle booking form submission
        console.log(`Booking for package ${this.packageId} with User ID ${this.userId} from ${this.startDate} to ${this.endDate}`);
        // Submit booking to the server
      }
    },
    created() {
      this.fetchPackageDetails();
    }
  };
  </script>
  