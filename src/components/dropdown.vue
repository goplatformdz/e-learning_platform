<template>
    <div v-if="dropOpen" @click.stop class="container">
        <div class="profile">
            <span>Profile Settings <font-awesome-icon class="font-icon" icon="fa-solid fa-gear" /></span>
        </div>
        <div class="logout">
            <span @click="logOut">Log out <font-awesome-icon class="font-icon"
                    icon="fa-solid fa-arrow-right-from-bracket" /></span>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
import { useAuthStore } from '../store/auth';

export default {
    name: "dropdown",
    props: ["dropOpen", "toggleDropdown"],
    components: {
        FontAwesomeIcon
    },
    setup() {
        const authStore = useAuthStore()
        return { authStore }
    },
    methods: {

        async logOut() {
            try {
                const response = await axios.get('http://localhost:8000/api/users/logoutUser', { withCredentials: true });
                console.log(response);
                await useAuthStore().checkLoginStatus();
                this.toggleDropdown();
                this.$router.push("/");
            } catch (error) {
                console.error(error);
                // Handle the error here
            }
        }


    }
}
</script>

<style scoped >
.container {
    height: 120px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 9px;
    background: #F0F0F0;
    box-shadow: 0px 30px 60px 0px rgba(47, 50, 125, 0.3);
    margin-left: 71.5%;
    margin-top: 55px
}

.profile {
    margin-bottom: 20px;
    position: relative;
}

span:hover {
    color: #49BBBD;
    cursor: pointer;
}

.profile::after {
    content: "";
    display: block;
    height: 1px;
    width: 100%;
    background-color: #000;
    position: absolute;
    bottom: -15px;
    left: 0;

}

.logout {
    padding-top: 10px
}

span {
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #000000b2;
    letter-spacing: 0.6px;
}

.font-icon {
    margin-left: 5px
}
</style>