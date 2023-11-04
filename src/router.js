import { createRouter, createWebHistory } from "vue-router";
import blog from "@/views/blog.vue";
import home from "@/views/home.vue";
import courses from "@/views/courses.vue";
import blogdetail from "@/views/blogdetail.vue";
import coursedetail from "@/views/coursedetail.vue";
import fullcourse from "@/views/fullcourse.vue";
import coursesByCategory from "@/views/coursesByCategory.vue";
import resetPassword from "@/views/resetPassword.vue";
import PdfView from "@/views/PdfView.vue";

const routes = [
  { path: "/", name: "home", component: home },
  { path: "/blog", component: blog },
  { path: "/courses", component: courses },
  { path: "/blogdetail/:id", name: "blogdetail", component: blogdetail },
  { path: "/coursedetail/:course_id", name: "coursedetail", component: coursedetail },
  { path: "/fullcourse/:courseId/:id", name: "fullcourse", component: fullcourse },
  { path: "/api/users/resetPassword/:token", name: "resetPassword", component: resetPassword },
  { path: "/coursesByCategory/:categoryName", name: "coursesByCategory", component: coursesByCategory },
  { path: "/pdf", component: PdfView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
