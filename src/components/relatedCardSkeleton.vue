<template>
    <div class="card1" @click="navigateToBlogDetailPage">
        <div class="img">
            <animatedPlaceholder height="100%" width="100%" />
        </div>
        <div class="content">
            <h3>
                <animatedPlaceholder height="30px" width="250px" />
            </h3>
            <h4>
                <animatedPlaceholder height="15px" width="100px" /><span>
                    <animatedPlaceholder height="10px" width="80px" />
                </span> <font-awesome-icon class="font-icon" icon="fa-solid fa-calendar-days" size="xs" />
            </h4>
            <p class="content-p">
                <animatedPlaceholder height="20px" width="300px" />
            </p>
            <p class="content-p">
                <animatedPlaceholder height="20px" width="260px" />
            </p>
            <p><a href="">
                    <animatedPlaceholder height="10px" width="60px" />
                </a></p>
        </div>

    </div>
</template>

<script>
import animatedPlaceholder from './animatedPlaceholder.vue';
export default {
    name: "relatedCardSkeleton",
    components: {
        animatedPlaceholder
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}

span {
    margin-left: 7px;
    font-size: 10px;
}

.content-p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* Number of lines to display */
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.font-icon {
    margin-bottom: -0.95px;
}

.card1 {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 360px;
    height: auto;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 18.829999923706055px 47.08000183105469px 0px rgba(47, 50, 125, 0.1);
    margin-bottom: 60px;
    /* Adjust the margin to reduce space between columns */
    transition: ease-in-out 0.1s;
}

.card1:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
}

.card1 .img {
    width: 100%;
    height: 220px;
    overflow: hidden;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}

.card1 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 15px;
}

h3 {
    color: #000;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.36px;
    margin-top: 5px;
}

.card1 p {
    color: #696984;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
    /* 36px */
    letter-spacing: 0.4px;
}

.card1 h4 {
    color: #252641;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 180%;
    /* 46.8px */
    margin-top: 5px;
}
</style>