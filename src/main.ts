import Vue from "vue";
import VueFusionCharts from "vue-fusioncharts";

// import FusionCharts modules and resolve dependency
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";

Vue.use(VueFusionCharts, FusionCharts, Charts, TimeSeries);

import App from "./App.vue";

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount("#app")
