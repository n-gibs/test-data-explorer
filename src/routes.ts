// pages
import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import Insights from "./pages/Insights";

// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'analyze-route',
        title: 'Analyze',
        path: '/analyze',
        enabled: true,
        component: Analyze
    },
    {
        key: 'insights-route',
        title: 'Insights',
        path: '/Insights',
        enabled: true,
        component: Insights
    }
]