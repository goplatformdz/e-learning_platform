<template>
    <div class="placeholder">
        &nbsp;
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
    height: {
        type: String,
    },
    width: {
        type: String,
    },
    borderRadius: {
        type: String,
    },
})
</script>

<style scoped>
@keyframes bgAnimate {
    0% {
        background-position: 100% 50%;
    }

    100% {
        background-position: -100% 50%;
    }
}

.placeholder {
    height: v-bind(height);
    width: v-bind(width);
    border-radius: v-bind(borderRadius);
    background: linear-gradient(90deg,
            #f0f0f0 25%,
            #e0e0e0 50%,
            #f0f0f0 75%);
    background-size: 200% 100%;
    animation: bgAnimate 1.2s linear infinite;
}
</style>




