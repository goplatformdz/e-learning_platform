<template>
    <label v-if="label">{{ label }}</label>
    <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs" />
</template>

<script>

export default {
    props: {
        label: {
            type: [String, Boolean],
            default: false
        },
        modelValue: {
            type: String,
            default: ""
        }
    }
}
</script>


<style>
input {
    width: 84%;
    height: 40px;
    border-radius: 40px;
    border: 1px solid #49BBBD;
    background: #FFF;
    padding-left: 3%;
    padding-right: 3%;
}

label {

    position: relative;
    left: 7%;
    margin-top: 20px;
    margin-bottom: 5px;
    color: #000;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}
</style>