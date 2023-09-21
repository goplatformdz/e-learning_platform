<template>
    <div class="main">
        <center>
            <div class="iconcateg">
                <animatedPlaceholder width="60px" height="60px" />
            </div>
            <h1>
                <animatedPlaceholder width="200px" height="25px" />
            </h1>

        </center>
    </div>
</template>

<script>
import animatedPlaceholder from './animatedPlaceholder.vue';
export default {
    name: "categCardSkeleton",
    components: {
        animatedPlaceholder
    }


}
</script>

<style scoped>
.main {
    margin-top: 30px;
    margin-left: 60px;
    width: 250px;
    height: 180px;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 30px 60px 0px rgba(47, 50, 125, 0.1);
    display: grid;
    grid-template-rows: 1fr 1fr;
}

.main h1 {
    margin-top: 50px;
    color: #000;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.6px;

}

.iconcateg {
    margin-top: 30px;
    margin-bottom: 20px;
    grid-row: 1;
}
</style>