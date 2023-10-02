<template>
    <div v-if="fetchedCourses[0] || auth.isLoggedIn" class="courses-container">
        <h3>My Courses</h3>
        <div class="grid-container">
            <markCard v-for="(course, index) in fetchedCourses[0]" :key="index" :course-data="course" />
        </div>

    </div>
</template>
<script>
import markCard from "@/components/markCard.vue";
import axios from 'axios';
import { API_BASE_URL } from "../config";
import { useAuthStore } from "../store/auth";
export default {
    name: "myCourses",
    components: {
        markCard,
    },
    data() {
        return {
            fetchedCourses: [],

        };
    },
    setup() {
        const auth = useAuthStore()

        return { auth }
    },
    mounted() {

        axios.get(`${API_BASE_URL}/api/courses/my-courses`, { withCredentials: true })
            .then(response => {
                this.fetchedCourses = response.data;
                console.log(this.fetchedCourses) // Update the courses data property with the fetched data

            })
            .catch(error => {
                console.error('Error fetching courses:', error);
            });


        useAuthStore()
            .checkLoginStatus()
            .catch((error) => {
                console.error('Error checking login status:', error);
            })

    },
};
</script>
<style scoped>
.courses-container {
    width: 100%;
    height: auto;
    margin-bottom: 60px;
    margin-top: -10px;
    margin-left: 70px;
}

.courses-container h3 {
    margin-left: 20px;
    padding-bottom: 20px;
    padding-top: 0px;
    color: #252641;
    font-family: Poppins;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}


.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    /* Adjust the column width as needed */
    gap: 20px;
    /* Adjust the gap between grid items */
}
</style>