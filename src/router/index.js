import { createRouter, createWebHistory } from "vue-router";
import dashboardPage from "@/pages/master/dashboardPage.vue";
import homePage from "@/pages/homePage.vue";
import profilePage from "@/pages/profilePage.vue";
import messagesPage from "@/pages/messagesPage.vue";
import settingPage from "@/pages/settingPage.vue";
import downloadPage from "@/pages/downloadPage.vue";




const routes = [
    {
        path: "/",
        name: "DashboardPage",
        component: dashboardPage,
        children: [
            {
                path: "/homePage",
                name: "homePage",
                component: homePage,
            },
            {
                path: "/profilePage",
                name: "profilePage",
                component: profilePage,
            },
            {
                path: "/messagesPage",
                name: "messagesPage",
                component: messagesPage,
            },
            {
                path: "/settingPage",
                name: "settingPage",
                component: settingPage,
            },
            {
                path: "/downloadPage",
                name: "downloadPage",
                component: downloadPage,
            },
        ]
    },

];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}



