<template>
    <div class="markcard">
        <div class="img">
            <animatedPlaceholder width="227px" height="150px" />
        </div>
        <div class="m3d">
            <p class="d">
                <animatedPlaceholder width="60px" height="10px" />
            </p>
        </div>
        <h4>
            <animatedPlaceholder width="200px" height="20px" />
        </h4>
        <h4>
            <animatedPlaceholder width="200px" height="20px" />
        </h4>
        <div class="circle1">
            <h6>
                <animatedPlaceholder width="140px" height="16px" />
            </h6>
        </div>
        <div class="price">
            <h1>
                <animatedPlaceholder width="35px" height="12px" />
            </h1>
        </div>
    </div>
</template>
  
<script>
import animatedPlaceholder from './animatedPlaceholder.vue';

export default {
    name: "markCardSkeleton",
    components: {
        animatedPlaceholder,

    },
    props: {
        courseData: {
            type: Object,
            required: true
        }
    },
};
</script>
  
<style scoped>
.price {
    bottom: 10px;
    right: -150px;
    position: absolute;
}

.price h1 {
    margin-top: 3px;
    margin-left: 200px;
    color: #49BBBD;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 1000;
    line-height: normal;
    letter-spacing: 0.48px;
}

.circle1 h6 {
    margin-top: 30px;
    color: #000;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.36px;
}

.circle1 {
    margin-top: 10px;
    margin-left: 17px;
    width: 100%;
    height: 30px;
    border-radius: 50%;
    display: flex;
    bottom: 5px;
}

.markcard h5 {
    margin-top: 3px;
    margin-left: 17px;
    color: #696984;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
    /* 32.4px */
    letter-spacing: 0.36px;
    grid-row: 4;
    margin-bottom: 0;
}

.markcard h4 {
    color: #252641;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 17px;
    grid-row: 3;
    grid-column: 1;
    margin-bottom: 5px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* Number of lines to display */
    -webkit-box-orient: vertical;
    overflow: hidden;

}

/*.markcard h4::after {
    content: '...';
  
    position: absolute;
  
    bottom: 0;
  
    right: 0;
  
    background-color: white;
  }*/

.markcard p {
    color: #696984;
    font-family: Poppins;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: 180%;
    /* 25.2px */
    letter-spacing: 0.28px;
}

.markcard {
    width: 250px;
    height: 350px;
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0px 18.829999923706055px 47.08000183105469px 0px rgba(47, 50, 125, 0.1);
    display: flex;
    flex-direction: column;
    margin-right: 72px;
    position: relative;
}



.markcard .img {
    margin-top: 12px;
    margin-left: 5%;
    width: 90%;
    height: 150px;
    grid-row: 1;
    border-radius: 20px;
    background-color: #171B41;
}

.d {
    grid-row: 2;
    margin-left: 17px;
}

.m3 {
    margin-left: 130px;
    grid-row: 2;
}

.m3d {
    display: flex;
    flex-direction: row;
}
</style>