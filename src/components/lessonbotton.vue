<template>
  <button class="lessonb">
    <fa :icon="['fas', 'book-open']" style="color: #252641" />
    <h4 class="h3">lesson 01:lesson name</h4>
  </button>
</template>

<script>
export default {};
</script>

<style >
.lessonb {
  margin-left: 20px;
  margin-top: 10px;
  position: relative;
  width: 90%;
  height: 45px;
  border-radius: 12px;
  background: rgba(244, 140, 6, 0.3);
  text-align: left;
}
.h3 {
  color: #252641;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: inline;
}
</style>