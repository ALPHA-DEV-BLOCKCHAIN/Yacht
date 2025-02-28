<template>
  <div id="app">
    <div class="container">
      <!-- Vertical Navigation Menu -->
      <nav class="navbar">
        <ul>
          <li @click="currentPage = 'dashboard'">Dashboard</li>
          <li @click="currentPage = 'payments'">Payments</li>
          <li @click="currentPage = 'bookings'">Bookings</li>
          <li @click="currentPage = 'tours'">Tours</li>
          <li @click="currentPage = 'emptyLegs'">Empty Legs</li>
          <li @click="currentPage = 'profile'">Profile</li>
        </ul>
      </nav>

      <!-- Main Content -->
      <div class="main-content">
        <div v-if="currentPage === 'dashboard'" class="dashboard">
          <!-- Welcome Section -->
          <div class="welcome">
            <h1>Welcome, {{ user.name }}</h1>
            <!-- Profile Picture (optional) -->
            <!-- <img :src="user.profilePicture" alt="Profile Picture" class="profile-picture"> -->
          </div>

          <!-- Upcoming/Recent Trip -->
          <div class="overview">
            <h2>Upcoming/Recent Trip</h2>
            <div class="trip-details">
              <h3>{{ trip.title }}</h3>
              <p><strong>Aircraft:</strong> {{ trip.aircraft }}</p>
              <p><strong>Departure:</strong> {{ trip.departureLocation }}</p>
              <p><strong>Date/Time:</strong> {{ trip.dateTime }}</p>
              <p><strong>Seats Left:</strong> {{ trip.seatsLeft }} of 8</p>
              <p><strong>Price:</strong> {{ trip.price }}</p>
              <p>{{ trip.description }}</p>
            </div>
          </div>

          <!-- Booking Statistics -->
          <div class="stats">
            <h2>Booking Statistics</h2>
            <ul>
              <li>Booked Empty Legs: {{ stats.bookedEmptyLegs }}</li>
              <li>Enquiries Submitted: {{ stats.enquiriesSubmitted }}</li>
              <li>Booked Packaged Tours: {{ stats.bookedPackagedTours }}</li>
              <li>Quotes Received: {{ stats.quotesReceived }}</li>
            </ul>
          </div>

          <!-- On Demand Tours -->
          <div class="on-demand-tours">
            <h2>On Demand Tours</h2>
            <p>{{ onDemandTours.description }}</p>
            <button @click="joinTour">Join Us</button>
          </div>
        </div>

        <!-- Other pages content -->
        <div v-if="currentPage === 'payments'">
          <h1>Payments Page</h1>
          <!-- Add payment-related content here -->
        </div>
        <div v-if="currentPage === 'bookings'">
          <h1>Bookings Page</h1>
          <!-- Add booking-related content here -->
        </div>
        <div v-if="currentPage === 'tours'">
          <h1>Tours Page</h1>
          <!-- Add tours-related content here -->
        </div>
        <div v-if="currentPage === 'emptyLegs'">
          <h1>Empty Legs Page</h1>
          <!-- Add empty legs-related content here -->
        </div>
        <div v-if="currentPage === 'profile'">
          <h1>Profile Page</h1>
          <!-- Add profile-related content here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 'dashboard',
      user: {
        name: 'IBRAHIM MAINA',
        // profilePicture: 'path/to/profile-picture.jpg' // Uncomment if you have a profile picture
      },
      trip: {
        title: 'EXPLORE NAIROBI CITY FROM THE SKY WITH OUR HELICOPTER TOUR',
        aircraft: 'Airbus As350/H125 Helicopter',
        departureLocation: 'Wilson Airport - Suswa Hills',
        dateTime: 'September 8, 2024 2:00 PM',
        seatsLeft: 6,
        price: 'KES 35,000.00',
        description: 'Travel in style while capturing unforgettable moments in the sky. Enjoy a scenic tour over Kibera Slums, Karen, Ngong Hills, and Suswa Hills, with breathtaking views of Nairobi CBD.',
      },
      stats: {
        bookedEmptyLegs: 0,
        enquiriesSubmitted: 0,
        bookedPackagedTours: 0,
        quotesReceived: 0,
      },
      onDemandTours: {
        description: 'Scenic tour over the city is both enjoyable and luxurious. 🔥 Ready to take the skies? Join us in this exploration of the skies!',
      },
    };
  },
  methods: {
    joinTour() {
      alert('Thank you for your interest! We will get back to you with more details.');
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
}

.container {
  display: flex;
  width: 100%;
}

.navbar {
  width: 200px;
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.navbar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.navbar li {
  margin-bottom: 10px;
  cursor: pointer;
}

.navbar li:hover {
  background-color: #444;
  padding: 5px;
  border-radius: 5px;
}

.main-content {
  flex: 1;
  padding: 20px;
}

.welcome {
  margin-bottom: 20px;
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.overview {
  margin-bottom: 20px;
}

.trip-details {
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 5px;
}

.stats ul {
  list-style-type: none;
  padding: 0;
}

.stats li {
  margin-bottom: 10px;
}

.on-demand-tours {
  margin-top: 20px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
