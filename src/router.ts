import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home";
import PlottingMultipleSeriesOnTimeAxis from "@/pages/PlottingMultipleSeriesOnTimeAxis";

const routes = [
	{
		name: "home",
		path: "/",
		component: Home,
	},
	{
		name: "plotting-multiple-series-on-time-axis",
		path: "/plotting-multiple-series-on-time-axis",
		component: PlottingMultipleSeriesOnTimeAxis,
	},
];

const router = new VueRouter({
	mode: "history",
	routes,
});

export default router;

Vue.use(VueRouter);
