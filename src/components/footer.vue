<template>
  <div class="foot">
    <div>
      <center>
        <table class="tab1">
          <tr>
            <td>
              <div class="img"><img src="@/assets/rifk.png" alt="" /></div>

            </td>
            <td>
              <div class="line"></div>
            </td>
            <td>
              <h3>
                Virtual Class <br />
                for Zoom
              </h3>
            </td>
          </tr>
        </table>
        <br />
        <br />

        <h4>Subscribe to get our Newsletter</h4>
        <br />
        <input class="input" type="email" placeholder="Your Email" v-model="email">
        <div class="btn" @click="subscribeToNewsletter">Subscribe</div>
        <table class="tab2">
          <tr>
            <td>Careers</td>
            <td>
              <div class="line2"></div>
            </td>
            <td>Privacy Policy</td>
            <td>
              <div class="line2"></div>
            </td>
            <td>Terms & Conditions</td>
          </tr>
        </table>
        <h5>© 2023 GO Platform Inc.</h5>
      </center>
    </div>
  </div>
</template>
<script>
import axios from 'axios'; // Import Axios
import { API_BASE_URL } from '../config';

export default {
  name: "footerr",
  data() {
    return {
      email: '', // Store the user's email
    };
  },
  methods: {
    subscribeToNewsletter() {
      // Validate email (you can add more thorough validation)
      if (!this.email.trim()) {
        alert('Please enter a valid email.');
        return;
      }

      // Make an HTTP POST request to your backend API
      axios
        .post(`${API_BASE_URL}/api/users/subscribe-newsletter`, { email: this.email })
        .then((response) => {
          alert(response.data.message); // Show a success message
          this.email = ''; // Clear the email input
        })
        .catch((error) => {
          console.error(error);
          alert('Error subscribing to newsletter'); // Show an error message
        });
    },
  },
};
</script>









<style  scoped>
.tab1 {
  padding-top: 45px;
}

.tab1 td {
  padding-right: 25px;
  padding-left: 25px;
}

.foot {
  position: relative;
  width: 100%;
  height: auto;
  flex-shrink: 0;
  background: #252641;
}

.foot h4 {
  color: #B2B3CF;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.04px;
}

.input {
  width: 210px;
  height: 41px;
  flex-shrink: 0;
  border-radius: 80px;
  border: 1px solid #83839A;
  background: #252641;
  padding-left: 15px;
}

.btn {
  width: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-shrink: 0;
  border-radius: 80px;
  background: #49BBBD;
  border: 0;
  color: #FFF;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: inline-block;
  margin-left: 20px;
  transition-duration: 0.3s;
}

.btn:hover,
.btn:active,
.btn:focus {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: scale(1.1);
  background-color: rgb(40, 161, 163);
}

.line {
  width: 1px;
  height: 70px;
  background: #626381;
}

.foot h3 {
  color: #FFF;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.88px;
}

.input ::placeholder {
  color: #83839A;
  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.8px;
}

.tab2 {
  margin-top: 60px;
  color: #B2B3CF;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.88px;
}

.img {

  width: 60px;
  height: 60px;
}

img {
  width: 100%;
  height: 100%;
}

.line2 {
  width: 1px;
  height: 14px;
  background: #626381;
}

h5 {
  margin-top: 10px;
  color: #B2B3CF;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.88px;
}

.tab2 td {
  padding-left: 5px;
  padding-right: 5px;
}
</style>