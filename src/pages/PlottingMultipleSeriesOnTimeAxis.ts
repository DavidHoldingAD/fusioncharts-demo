import Vue from "vue";
import { Component } from "vue-property-decorator";
import FusionCharts, * as fusioncharts from "fusioncharts";

@Component({
	name: "plotting-multiple-series-on-time-axis",
})
export default class PlottingMultipleSeriesOnTimeAxis extends Vue {
	protected width: string = "100%";
	protected height: string = "400";
	protected type: string = "timeseries";
	protected dataFormat: fusioncharts.ChartDataFormats = "json";
	protected dataSource: any = {
		chart: {},
		// should be initialized in order to be observed by Vue
		data: null,
		caption: {
			text: "Sales Analysis"
		},
		subcaption: {
			text: "Grocery & Footwear"
		},
		series: "Type",
		yaxis: [
			{
				plot: "Sales Value",
				title: "Sale Value",
				format: {
					prefix: "$"
				}
			}
		]
	};

	public async mounted(): Promise<void> {
		const schemaResponse = await fetch("/plotting-multiple-series-on-time-axis/schema.json");
		const schema = await schemaResponse.json();

		const dataResponse = await fetch("/plotting-multiple-series-on-time-axis/data.json");
		const data = await dataResponse.json();

		// First we are creating a DataStore
		const fusionDataStore = new FusionCharts.DataStore();

		// After that we are creating a DataTable by passing our data and schema as arguments
		const fusionTable = fusionDataStore.createDataTable(data, schema);

		// After that we simply mutated our timeseries datasource by attaching the above
		// DataTable into its data property.
		this.dataSource.data = fusionTable;
	}
}
