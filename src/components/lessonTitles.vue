<template>
    <h4 class="lessonname">{{ lesson.lessonName }}</h4>
</template>
  
<script>
export default {
    name: "lessonTitles",
    props: ["lesson"],

}
</script>

<style scoped>
.lessonname {
    color: #696984;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
    word-wrap: break-word;
    padding-left: 30px;
    padding-right: 30px;

}
</style>