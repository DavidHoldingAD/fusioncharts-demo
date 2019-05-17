<template>
	<div id="app">
		<h1>FusionCharts for Vue</h1>
		<p>
			<router-link :to="{ name: 'plotting-multiple-series-on-time-axis' }">
				Plotting Multiple Series on Time Axis
			</router-link>
		</p>
		<router-view>
		</router-view>
	</div>
</template>

<script src="./App.ts">
</script>