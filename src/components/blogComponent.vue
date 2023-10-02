<template>
    <div class="start-learning">
        <h3>By {{ blogData.author }} - {{ formattedCreatedAt }}</h3>
        <div class="blog-content">
            <h1>{{ blogData.title }}</h1>
            <p>{{ blogData.content }}</p>
            <button class="btn-start">Read more</button>
        </div>
        <div class="img"><img :src="blogData.photo1" alt="" /></div>
    </div>
</template>
  
<script>
import moment from 'moment';

export default {
    name: "blogCard",
    data() {
        return {
            formattedCreatedAt: "",
        };
    },
    props: ["blogData"],
    mounted() {
        this.formatCreatedAt();
        console.log(this.blogData)
    },
    methods: {
        formatCreatedAt() {
            // Format the createdAt field using Moment.js
            this.formattedCreatedAt = moment(this.blogData.createdAt).format('DD/MM/YYYY');
        },
    },
};
</script>
  

<style>
h5 {
    margin-left: 60px;
    color: rgba(0, 0, 0, 0.8);
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.img {
    margin-top: 40px;
    margin-left: 35px;
    height: 80%;
    width: 80%;
    grid-column: 2;
    grid-row-start: 1;
    /* Start at the second row */
    grid-row-end: 5;
    position: absolute;
}

.blog-content {
    position: absolute;
    left: 20px;
    top: 80px
}

.start-learning {
    margin-top: 80px;
    position: relative;
    width: 100%;
    height: 460px;
    background-color: rgb(197, 220, 245);
    display: grid;
    border-radius: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr 1fr 2fr;
    /* Four rows */
    gap: 0px;
    box-shadow: 0px 30px 60px 0px rgba(47, 50, 125, 0.1);

}

h3 {
    color: #000;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: inline;
    position: absolute;
    top: 65px;
    left: 85px;
}

h4 {
    color: #49BBBD;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: inline;
}

.text1 {
    grid-column: 1;
    grid-row: 1;
    left: 0;
    margin-left: 60px;
    margin-top: 15px;
}

h1 {
    color: #2F327D;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    grid-column: 1;
    grid-row: 2;
    margin: 0;
    margin-left: 60px;
    margin-top: 5px;
}

p {
    color: #696984;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
    /* 43.2px */
    letter-spacing: 0.48px;
    grid-column: 1;
    grid-row: 3;
    margin: 0;
    margin-left: 60px;
    margin-top: 15px;
}

.btn-start {
    margin-left: 60px;
    margin-top: 20px;
    width: 150px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #49BBBD;
    color: #FFF;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    grid-column: 1;
    grid-row: 4;
    border: 0;
}

.btn-start:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
}

img {
    width: 100%;
    height: 100%;
}
</style>