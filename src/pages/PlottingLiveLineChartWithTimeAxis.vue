<template>
	<div>
		<h2>
			Plotting Live Line Chart with Time Axis
		</h2>
		<fusioncharts
			:width="width"
			:height="height"
			:type="type"
			:dataFormat="dataFormat"
			:dataSource="dataSource"
			@initialized="onChartInitialized"
			@disposed="onChartDisposed"
		>
		</fusioncharts>
		<p>
			See more in <a href="https://www.fusioncharts.com/fusiontime/examples/line-chart-with-time-axis">documentation</a>.
		</p>
	</div>
</template>

<script src="./PlottingLiveLineChartWithTimeAxis.ts"></script>