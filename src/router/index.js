import {createRouter, createWebHistory} from 'vue-router';
import QuizView from '@/views/QuizView.vue';
import QuizesView from '@/views/QuizesView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/quiz/:id",
            name:"quiz",
            component: QuizView,
        },
        {
            path:"/",
            name:"quizes",
            component: QuizesView,
        }
    ]
})

export default router;