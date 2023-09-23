<template>
    <div class="loader"></div>
</template>

<script>

export default {
    name: "spinner",
    data() {
        return {};
    },

};
</script>

<style scoped>
.loader {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 3px solid #fff;
    border-top-color: transparent;
    animation: rot1 1.2s linear infinite;
}

@keyframes rot1 {
    to {
        transform: rotate(360deg);
    }
}
</style>