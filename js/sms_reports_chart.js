let smsReportsChart = am4core.create("sms_reports_chart", am4charts.XYChart);
smsReportsChart.paddingBottom = 0;
smsReportsChart.rtl = true;
smsReportsChart.data = [
  {
    xData: "נשלחו",
    yData: 6.2,
  },
  {
    xData: "הקלקות",
    yData: 3,
  },
  {
    xData: "שגיאות",
    yData: 3,
  },
  {
    xData: "DLR",
    yData: 6.2,
  },
];

//console.log('chart', chart);

// Create axes
let categoryAxis = smsReportsChart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "xData";
categoryAxis.renderer.grid.template.location = 50;
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.grid.template.strokeWidth = 0;
categoryAxis.renderer.labels.template.fontSize = 18;
categoryAxis.renderer.labels.template.textAlign = "middle";
if (window.innerWidth < 525) {
  categoryAxis.renderer.labels.template.fontSize = 15;
}

let valueAxis = smsReportsChart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 8;
valueAxis.strictMinMax = true;
valueAxis.renderer.labels.template.fontSize = 16;
valueAxis.numberFormatter = new am4core.NumberFormatter();
valueAxis.numberFormatter.numberFormat = "#.000";
valueAxis.adjustLabelPrecision = false;

// Create series
let series = smsReportsChart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "yData";
series.dataFields.categoryX = "xData";
series.stacked = true;
series.columns.template.width = am4core.percent(45);

window.addEventListener("resize", () => {
  if (window.innerWidth < 525) {
    categoryAxis.renderer.labels.template.fontSize = 15;
  }
});
