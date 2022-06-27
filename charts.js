//Biodiversity Belly Button Dashboard

//Pull ids from json sample data and place in dropdown <options>
function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");
  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}


//BUILDING CHARTS **************************************************************

// 1. Create the buildCharts function.
function buildCharts(sample) {
// 2. Use d3.json to load and retrieve the samples.json file 
  //d3.json("samples.json").then((data) => {
// 3. Create a variable that holds the samples array. 
  //var samples = data.names;
// 4. Create a variable that filters the samples for the object with the desired sample number.
  //samples.forEach(sample).filter((sampleObj) => sampleObj.id == sample);
  //console.log(data);
// 5. Create a variable that holds the first sample in the array.
  //var sample = samplesArray[0]

//2-5 above, combined...
  d3.json('samples.json').then(function({samples, metadata}) {
    var data = samples.filter((sampleObj) => sampleObj.id == sample)[0];
    console.log(data);

// 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIDS = data.otu_ids.map((row) => `OTU ID ${row}`);
    var sampleLabels = data.otu_labels.map((label) => label);
    var sampleValues = data.sample_values;

//BAR CHART DATA ******************************************************************

// 7. Create the yticks for the bar chart as the top 10 otu_ids mapped in descending order (otu_ids with the most bacteria FIRST vs. Last (?) @TOP) 
  //(all of these could have been combined above, but separating all for consistency - 
  //note: when just yticks were sliced and sorted, the other variables did not change order)
    var yticks = otuIDS.slice(0, 10).reverse();
    var xticks = sampleValues.slice(0, 10).reverse();
    var hoverinfo = sampleLabels.slice(0, 10).reverse();

// 8. Create the trace for the bar chart. 
    var barData = [
      {
        type: 'bar',
        orientation: 'h',
        x: xticks,
        y: yticks,
        text: hoverinfo, //the instructions say this should be the OTU info, but I think they mean bacteria info (?)
        hoverinfo: 'text',
      },
    ];
// 9. Create the layout for the bar chart. 
    var barLayout = {
      margin: {
        t: 50,
        r: 0,
        l: 125,
      },
      title: {
        text: "Top 10 Bacteria Cultures Found"
      }
    };
// 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot('bar', barData, barLayout);


//BUBBLE DATA ******************************************************************

//New variable for bubble chart (otu_id without row mapping and label)   
    var otuID = data.otu_ids;
    //sampleLabel = data.sample_labels, data.otu_ids.map((row) => `OTU ID ${row}`);

// 1. Create the trace for the bubble chart 
    var bubbleData = [
      {
        x: otuID,
        y: sampleValues,
        mode: 'markers',
        text: sampleLabels,
        marker: {
          size: sampleValues,
          color: otuID, 
          //colorscale: 'Earth'
        }
      }
    ];

// 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      xaxis: {title: 'OTU ID'},
      title: {
        text: "Bacteria Cultures Per Sample"
      },
      hovermode: "closest"
    };

// 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);

//GUAGE DATA ******************************************************************

// 1. Create a variable that filters the metadata array for the object with the desired sample number.
//added 'metatdata' to original json pull (line 68)

// 2. Create a variable that holds the first sample in the metadata array.
    var mData = metadata.filter((sampleObj) => sampleObj.id == sample)[0];

// 3. Create a variable that holds the washing frequency.
    var washFreq = mData.wfreq;

// 4. Create the trace for the gauge chart.
    var gaugeData = [
      {
        value: washFreq,
        title: {
          text: '<span style="font-size: 17px;">Belly Button Washing Frequency<br />Scrubs Per Week<br />&nbsp;</span>',
        },
        type: 'indicator',
        mode: 'gauge+number',
        gauge: {
          axis: {range: [null, 10]},
          bar: {color: "black"},
          steps: [
            {range: [0, 2], color: "#336699"},
            {range: [2, 4], color: "turquoise"},
            {range: [4, 6], color: "lavender"},
            {range: [6, 8], color: "pink"},
            {range: [8, 10], color: "#f76e90"}
          ]
        }
      }
    ];
    
    // 5. Create the layout for the gauge chart  (it's fine without any tweaking)
    var gaugeLayout = {
      //width: 350,
      //height: 450,
      //margin: {t:0, b:0}
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot('gauge', gaugeData, gaugeLayout);
  });
}

