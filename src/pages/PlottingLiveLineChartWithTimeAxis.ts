import Vue from "vue";
import Component from "vue-class-component";
import FusionCharts, * as fusioncharts from "fusioncharts";

@Component
export default class PlottingLiveLineChartWithTimeAxis extends Vue {
	private static readonly INTERVAL: number = 5000;
	private static readonly MONTHS: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	private static readonly MAX_VALUE: number = 10000;

	private m_dataStore!: fusioncharts.DataStore;
	private m_timeout!: number;

	protected width: string = "100%";
	protected height: string = "400";
	// TODO: changing to "realtimeline" causes a console error
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
			text: "Grocery"
		},
		yaxis: [
			{
				plot: {
					value: "Grocery Sales Value"
				},
				format: {
					prefix: "$"
				},
				title: "Sale Value"
			}
		]
	};

	public async mounted(): Promise<void> {
		const schemaResponse = await fetch("/plotting-live-line-chart-with-time-axis/schema.json");
		const schema = await schemaResponse.json();

		const dataResponse = await fetch("/plotting-live-line-chart-with-time-axis/data.json");
		const data = await dataResponse.json();

		// First we are creating a DataStore
		const fusionDataStore = new FusionCharts.DataStore();

		// After that we are creating a DataTable by passing our data and schema as arguments
		const fusionDataTable: FusionCharts.DataTable = fusionDataStore.createDataTable(data, schema);

		// After that we simply mutated our timeseries datasource by attaching the above
		// DataTable into its data property.
		this.dataSource.data = fusionDataTable;

		this.m_dataStore = fusionDataStore;
	}

	protected onChartInitialized(e: fusioncharts.EventObject, args: any): void {
		const chart: FusionCharts.FusionCharts = e.sender;

		this.m_timeout = window.setTimeout(
			() => this.updateData(chart),
			PlottingLiveLineChartWithTimeAxis.INTERVAL);
	}

	protected onChartDisposed(e: fusioncharts.EventObject, args: any): void {
		clearInterval(this.m_timeout);
	}

	private updateData(chart: FusionCharts.FusionCharts): void {
		const date: Date = new Date();
		const dateString: string = PlottingLiveLineChartWithTimeAxis.formatDate(date);
		const value: number = Math.random() * PlottingLiveLineChartWithTimeAxis.MAX_VALUE;

		const dataStream: string = "&label=" + dateString + "&value=" + value;

		chart.feedData(dataStream);

		//this.m_dataStore.appendRows([
		//	[dateString, "Grocery", value]
		//]);
		this.m_timeout = window.setTimeout(
			() => this.updateData(chart),
			PlottingLiveLineChartWithTimeAxis.INTERVAL);
	}

	private static formatDate(date: Date): string {
		const day: string = date.getDay().toString().padStart(2, "0");
		const month: string = PlottingLiveLineChartWithTimeAxis.MONTHS[date.getMonth()];
		const year: string = (date.getFullYear() % 100).toString().padStart(2, "0");

		return `${day}-${month}-${year}`;
	}
}
