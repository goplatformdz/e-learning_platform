<template>
    <main>
        <div class="courses-container">
            <h3>{{ categoryName }} Courses</h3>
            <div v-if="!loading" class="grid-container">
                <markCard v-for="(course, index) in fetchedCourses" :key="index" :course-data="course" />
            </div>
            <div v-else class="grid-container">
                <markCardSkeleton v-for="index in 4" :key="index" />
            </div>
        </div>
    </main>
</template>

<script>

import markCard from "@/components/markCard.vue";
import markCardSkeleton from "@/components/markCardSkeleton.vue";
import axios from 'axios';
import Cookies from 'js-cookie';
import { API_BASE_URL } from "../config";
export default {
    data() {
        return {
            categoryName: '',
            fetchedCourses: [],
            loading: true,
        }
    },
    name: "coursesByCategory",
    components: {
        markCard,
        markCardSkeleton

    },
    mounted() {

        axios.post(`${API_BASE_URL}/api/courses/coursesByCategory`, { categoryName: this.categoryName })
            .then(response => {
                this.fetchedCourses = response.data;
                this.loading = false;
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
                this.loading = false;
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

<style scoped>
.courses-container {
    width: 100%;
    height: auto;
    margin-bottom: 60px;
    margin-top: 40px;
    margin-left: 70px;
}

.courses-container h3 {
    margin-left: 20px;
    padding-bottom: 20px;
    padding-top: 40px;
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