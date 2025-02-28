<template>
  <app>
    <v-app-bar :elevation="2" color="white">
      <h1>The Yacht Business</h1>

      <v-spacer></v-spacer>

      <v-btn to="/">Home</v-btn>

      <v-btn to="Yacht">Yacht Sales</v-btn>
      <v-btn to="packages">Packaged Tours</v-btn>

      <v-btn to="/charter">Charter</v-btn>

      <v-btn to="/YachtCharters">International Stock</v-btn>
     

      <v-btn to="/contact">Contact US</v-btn>
      <v-btn to="/portal" variant="outlined">Portal</v-btn>
      <!-- <v-btn to="/profile">dashboard</v-btn> -->
      <!-- <v-btn to="empty">Empty Legs</v-btn> -->
      <!-- <v-btn to="/register">Register</v-btn> -->
      <!-- <v-btn  to="/packages">Yatch Sales</v-btn> -->
    </v-app-bar>
  </app>
</template>
<script setup></script>
