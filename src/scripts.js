import Alpine from 'alpinejs'
import barchart from './components/barChart.js'
import settings from './components/settings.js'
// import lineChart from './components/lineChart.js'

Alpine.data('barchart', barchart)
Alpine.data('settings', settings)
// Alpine.data('lineChart', lineChart)

Alpine.start()