
<template>
    <div v-if="isOpen" @click.stop class="lessonscont">
        <div @click.stop class="back-course">
            <div @click="goBack" class="back back-hover">
                <fa :icon="['fas', 'arrow-left']" style="color: #ffffff" />
            </div>
            <span class="back-p ">Go back to course</span>
        </div>
        <h3>Lessons</h3>

    </div>
</template>
<script>
//import lessonb from './lessonbotton.vue'
export default {
    components: {
        // lessonb,

    },
    props: ["goBack", "isOpen"],

}
</script>

<style scoped>
.lessonscont {
    width: 700;
    height: 300;

    box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.5), 5px 0px 10px rgba(0, 0, 0, 0.5);
    /* Shadow on top and right sides */
    z-index: 11
}

.lessonscont h3 {
    color: #000;
    font-family: Poppins;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 20px;
    margin-top: 10px;
}

.back-course {
    display: flex;
    flex-direction: row;
}

.back {
    width: 30px;
    padding-top: 6px;
    padding-bottom: 6px;
    background-color: #49BBBD;
    margin-top: 20px;
    margin-left: 20px;
    text-align: center;
    border-radius: 5px;
    transition: background-color 0.3s;
    cursor: pointer;
    /* Add a transition for background-color */
}

.back-hover:hover {
    background-color: #388E8E;
    /* Change the background color on hover */
}

.back-p {
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.36px;
    margin-top: 24px;
    margin-left: 10px;
    color: #49BBBD;
    pointer-events: none;
}
</style>