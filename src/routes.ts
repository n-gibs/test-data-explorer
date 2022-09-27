// pages
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
        key: 'analyze-route',
        title: 'Analyze',
        path: '/',
        enabled: true,
        component: Analyze
    },
    {
        key: 'insights-route',
        title: 'Insights',
        path: '/insights',
        enabled: true,
        component: Insights
    }
]