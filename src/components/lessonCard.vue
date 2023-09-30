<template>
    <div class="lessonb" @click="fetchLesson()" v-for="(lesson, index) in fetchedCourses" :key="index">
        <fa :icon="['fas', 'book-open']" class="book" style="color: #252641" />
        <h4 class="h3">{{ lesson.lessonName }}</h4>
    </div>
</template>

<script>
export default {
    name: "lessons",
    props: [],
    data() {
        return {}
    },
    methods: {

    },

};

</script>

<style scoped></style>