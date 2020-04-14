import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home.vue";
import PlottingLiveLineChartWithTimeAxis from "@/pages/PlottingLiveLineChartWithTimeAxis.vue";
import PlottingMultipleSeriesOnTimeAxis from "@/pages/PlottingMultipleSeriesOnTimeAxis.vue";

const routes = [
	{
		name: "home",
		path: "/",
		component: Home,
	},
	{
		name: "plotting-live-line-chart-with-time-axis",
		path: "/plotting-live-line-chart-with-time-axis",
		component: PlottingLiveLineChartWithTimeAxis,
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
