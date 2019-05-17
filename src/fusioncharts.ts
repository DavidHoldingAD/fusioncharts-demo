import Vue from "vue";
import VueFusionCharts from "vue-fusioncharts";

// import FusionCharts modules and resolve dependency
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";

Vue.use(VueFusionCharts, FusionCharts, Charts, TimeSeries);
