<template>
    <main>
        <div class="courses-container">
            <h3>{{ categoryName }} Courses</h3>
            <div class="grid-container">
                <courseCard v-for="(course, index) in fetchedCourses" :key="index" :course-data="course" />
            </div>
        </div>
    </main>
</template>

<script>

import courseCard from "@/components/courseCard.vue";
import axios from 'axios';
import Cookies from 'js-cookie';
export default {
    data() {
        return {
            categoryName: '',
            fetchedCourses: [],
        }
    },
    name: "coursesByCategory",
    components: {
        courseCard,

    },
    mounted() {

        axios.post('http://localhost:8000/api/courses/coursesByCategory', { categoryName: this.categoryName })
            .then(response => {
                this.fetchedCourses = response.data; // Update the courses data property with the fetched data

            })
            .catch(error => {
                console.error('Error fetching courses:', error);
            });

    },
    created() {
        this.categoryName = this.$route.params.categoryName;
    },
    methods: {
        getUserToken() {
            // Get the JWT token from the cookie
            return Cookies.get('access-token'); // Replace with your cookie name
        },
    },
};
</script>

<style>
.courses-container {
    width: 100%;
    height: auto;
    margin-bottom: 60px;
    margin-top: 60px;
}

.courses-container h3 {
    margin-left: 60px;
    padding-top: 80px;
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