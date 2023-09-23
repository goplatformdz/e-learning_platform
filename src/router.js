import { createRouter, createWebHistory } from "vue-router";
import blog from "@/views/blog.vue";
import home from "@/views/home.vue";
import courses from "@/views/courses.vue";
import blogdetail from "@/views/blogdetail.vue";
import coursedetail from "@/views/coursedetail.vue";
import fullcourse from "@/views/fullcourse.vue";
import coursesByCategory from "@/views/coursesByCategory.vue";

const routes = [
  { path: "/", component: home },
  { path: "/blog", component: blog },
  { path: "/courses", component: courses },
  { path: "/blogdetail", component: blogdetail },
  { path: "/coursedetail/:course_id", name: "coursedetail", component: coursedetail},
  { path: "/fullcourse/:courseId",name:"fullcourse", component: fullcourse },
  { path: "/coursesByCategory/:categoryName", name: "coursesByCategory", component: coursesByCategory },

];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
