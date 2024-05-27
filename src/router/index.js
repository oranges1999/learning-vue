import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CarView from "../views/CarView.vue";

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
            path:"/car/:id",
            name:"car",
            component: CarView
        }
    ]
})

export default router;