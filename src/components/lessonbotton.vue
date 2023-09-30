<template>
  <button @click="sendId" class="lessonb" :class="{ 'current-lesson': currentLesson }">
    <fa :icon="['fas', 'book-open']" class="book" style="color: #252641" />
    <div class="h3-wrapper">
      <h4 class="h3">{{ lesson.lessonName }}</h4>
    </div>
    <span class="duration">{{ formattedDuration }}</span>
  </button>
</template>

<script>
export default {
  name: "lessonb",
  props: ["lesson", "fetchLesson"],
  data() {
    return {
      currentLesson: false
    }
  },
  computed: {
    formattedDuration() {
      const duration = this.lesson.duration;
      if (duration.includes('hours')) {
        return duration.replace('hours', 'hrs');
      } else if (duration.includes('minutes')) {
        return duration.replace('minutes', 'mns');
      } else {
        return duration; // No change if neither 'hours' nor 'minutes' is found
      }
    }
  },
  methods: {
    sendId() {
      this.$router.push({ params: { courseId: this.lesson.course_id._id, id: this.lesson._id } })
        .then(() => window.location.reload())
    },

  },
  created() {
    if (this.lesson._id === this.$route.params.id) {
      this.currentLesson = true;
    }
  }
}
</script>

<style scoped>
.lessonb {
  margin-left: 20px;
  margin-top: 10px;
  position: relative;
  width: 90%;
  height: 45px;
  border-radius: 12px;
  background: rgba(244, 140, 6, 0.3);
  text-align: left;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 0 transparent;
  cursor: pointer;
  padding-top: 5px;
}

.current-lesson {
  background-color: rgba(244, 140, 6, 0.5);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.lessonb:hover {
  background-color: rgba(244, 140, 6, 0.5);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.duration {
  position: absolute;
  right: 10px;
  bottom: 14px;
}

/* Apply the ellipsis effect to the h3-wrapper */
.h3-wrapper {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  display: inline-block;
  /* Ensure inline alignment */
  vertical-align: middle;
  /* Align vertically in the middle */
  padding-bottom: 3px;
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

.book {
  margin-right: 10px;
  margin-left: 5px;
}
</style>