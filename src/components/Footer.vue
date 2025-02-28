<template>
  <v-footer class="bg-blue-lighten-1 text-center py-4">
    <v-container>
      <v-row>
        <!-- Logo -->
        <v-col cols="12" md="2" class="d-flex justify-center align-center">
          <v-img
            src="C:\Users\kim\Desktop\plane\Aerojet\public\logo.png\jetman.png.png"
            alt="Company Logo"
            max-width="120"
            class="mb-2"
          ></v-img>
        </v-col>

        <!-- Company Information -->
        <v-col cols="12" md="2">
          <h5>Company</h5>
          <ul class="footer-links">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </v-col>

        <!-- Services -->
        <v-col cols="12" md="2">
          <h5>Services</h5>
          <ul class="footer-links">
            <li><a href="#">Yacht Sales & Acquisitions</a></li>
            <li><a href="#">Packaged Tours</a></li>
            <li><a href="#">Activities</a></li>
            <li><a href="#">Charter Yacht</a></li>
            <li><a href="#">Charter</a></li>
          </ul>
        </v-col>

        <!-- Contact Information -->
        <v-col cols="12" md="3">
          <h5>Contact</h5>
          <p>+254(0)700077777</p>
          <p>
            For sale:
            <a href="mailto:sales@yachtbusiness.co.ke">sales@business.co.ke</a>
          </p>
          <p>
            For reservations:
            <a href="mailto:reservations@yachtbusiness.co.ke"
              >reservations@yachtbusiness.co.ke</a
            >
          </p>
          <p>
            Have an enquiry?
            <a href="mailto:info@yachtbusiness.co.ke">Email us</a>
          </p>
        </v-col>

        <!-- Footer Bottom -->
        <v-col cols="12" md="3">
          <v-divider></v-divider>
          <p>© 2024 Yacht Business. All rights reserved.</p>
          <p><a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a></p>
          <v-btn
            v-for="icon in socialIcons"
            :key="icon.name"
            :icon="icon.icon"
            class="mx-2"
            variant="text"
            :href="icon.link"
            target="_blank"
          ></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      socialIcons: [
        {
          name: "Facebook",
          icon: "mdi-facebook",
          link: "https://www.facebook.com/yourpage",
        },
        {
          name: "Instagram",
          icon: "mdi-instagram",
          link: "https://www.instagram.com/yourpage",
        },
        {
          name: "Twitter",
          icon: "mdi-twitter",
          link: "https://twitter.com/yourpage",
        },
        {
          name: "LinkedIn",
          icon: "mdi-linkedin",
          link: "https://www.linkedin.com/in/yourpage",
        },
        {
          name: "TikTok",
          icon: "mdi-tiktok",
          link: "https://www.tiktok.com/@yourpage",
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer-links {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 6px;
}

.footer-links a {
  text-decoration: none;
  color: #ffffff;
}

.footer-links a:hover {
  text-decoration: underline;
}

.v-footer {
  background-color: #f5f5f5; /* Example background color */
}

.v-divider {
  margin: 16px 0;
}

.v-btn {
  color: #ffffff; /* Adjust color if needed */
}
</style>
