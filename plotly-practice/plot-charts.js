//Line chart
//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

//Bar chart
/*var trace = {
    x: ["burito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
    };

var layout = {
    title: "Luncheon Survey"
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
    };

Plotly.newPlot("plotArea", [trace], layout);*/

//Bar chart
/*var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
   var data = [trace];
   var layout = {
    title: "'Bar' Chart",
    xaxis: {
        title: "Drinks",     
        showticklabels: true,
        tickangle: "0",
        tickfont: {
          family: 'Old Standard TT, serif',
          size: 12,
          color: 'red'}
        },
    yaxis: {title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea", data, layout);*/

//Pie chart  -- instead of x and y, use labels and values!
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);


