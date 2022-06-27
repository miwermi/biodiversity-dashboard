var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

var cityGrowths = sortedCities.slice(0,5);

var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);


/*var sortedCities = cityPopulation.sort((a,b) => a.population - b.population).reverse();

var cityPopulations = sortedCities.slice(0,7);

var topSevenCityNames = cityPopulation.map(city => city.City);
var topSevenCityPopulation = cityPopulation.map(city => parseInt(city.population));

var trace = {
    x: topSevenCityNames,
    y: topSevenCityPopulation,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Largest Cities By Population",
    xaxis: {title: "City" },
    yaxis: {title: "Population"}
  };
  Plotly.newPlot("bar-plot", data, layout);*/