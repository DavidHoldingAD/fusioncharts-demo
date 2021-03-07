<template>
	<div id="app">
		<h1>
			FusionCharts for Vue
		</h1>
		<p>
			<router-link :to="{ name: 'home' }">
				Home
			</router-link>
			|
			<router-link :to="{ name: 'plotting-live-line-chart-with-time-axis' }">
				Plotting Live Line Chart with Time Axis
			</router-link>
			|
			<router-link :to="{ name: 'plotting-multiple-series-on-time-axis' }">
				Plotting Multiple Series on Time Axis
			</router-link>
		</p>
		<router-view>
		</router-view>
	</div>
</template>

<script src="./App.ts"></script>