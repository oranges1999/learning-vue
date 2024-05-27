import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CarView from "../views/CarView.vue";
import ContactView from "../views/ContactView.vue";
import NotFoundView from "../views/404View.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/about",
            name:"home",
            component:AboutView
        },
        {
            path:"/",
            name:"about",
            component:HomeView
        },
        {
            path:"/home",
            redirect:"/"
        },
        {
            path:"/car/:id",
            name:"car",
            component: CarView,
            children: [
                {
                    path:"contact",
                    component:ContactView,
                }
            ]
        },
        {
            path:"/:catchall(.*)*",
            name:"not-found",
            component:NotFoundView,
        }
    ]
})

export default router;