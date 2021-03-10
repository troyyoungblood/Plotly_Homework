
// function to load pull down menu upon page initialization
window.onload = popIdNo ()

// get id numbers (names) that will be passed
// to other functions to select designated data for presentation
function popIdNo () {
  d3.json("./data/samples.json").then((hwData) => {
  // console.log(hwData); 
  // this creates an array with the id numbers (names)       
  let idNo = hwData.names;
  // console.log(idNo);

  // this uses the array idNo to create the pull down menu
  let select = document.getElementById('selDataset');
  for (var i = 0; i < idNo.length; i++) {
      let opt = idNo[i];
      let el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    }
  });
}

// this function captures the "optionChange" in the index.html
// which is represented by a selection of a different idNo
// the newly selected idNo is passed to variable dataSet and 
// and passed to function used to create visualizations
function optionChanged() {
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  let dataSet = parseInt(dropdownMenu.property("value"));
  // console.log(dataSet);
  buildVizdata (dataSet);
}

// function that receives dataset from optionChange
// and creates visualizations
function  buildVizdata(dataSet) {
  console.log(dataSet);
  d3.json("./data/samples.json").then((hwData) => {

    // building visualization for Demographics table 
    // using metadata with id === dataSet number 
    // this not a true table - it is a "table in the panel"
    let table = d3.select("#sample-metadata");
    
    let demoData = [];
    //blanks out the "table" in the demo panel
    table.html("");

    // this selects the demo data for specific idNo 
    // matching user selected value
    for (var i = 0; i < hwData.metadata.length; i++) {
        if (hwData.metadata[i].id === dataSet) {
        demoData = [hwData.metadata[i]];
        console.log(demoData);
        console.log(demoData[0].id);

      // Get the entries for each object in the array
      Object.entries(demoData[0]).forEach(([key, value]) => {
        // Log the key and value
        // console.log(`Key: ${key} and Value ${value}`);
        table.append("h5").text(`${key} : ${value}`)
        });
        }
      }

    // end of Demographic table 

    // beginning horizontal bar chart
    // the gets the respective data from the sample data set
    // that matches the idNo selected by the user
    let barChartData = [];
    for (var i = 0; i < hwData.samples.length; i++) {
        if (parseInt(hwData.samples[i].id) === dataSet) {
        barChartData = [hwData.samples[i]];
        // console.log(barChartData);
        }
      }
    
      // the slice gets the top 10 - the data was reviewed and determined to be in descending order
      // the reverse for xData results in getting desired presentation orientation
      // the reverse amd map to OTU for the yData gets the oreientation and axis label
      let xDataSliced = barChartData[0].sample_values.slice(0,10).reverse();
      let yDataSlicedNum = barChartData[0].otu_ids.slice(0,10).map(ele=> `OTU ${ele}`).reverse();
      let hoverTextSliced = barChartData[0].otu_labels.slice(0,10).reverse();

      // console.log(xDataSliced);
      // console.log(yDataSlicedNum);
      // console.log(hoverTextSliced);

      let trace1 = {
          x: xDataSliced,
          y: yDataSlicedNum,
          text: hoverTextSliced,
          type: "bar",
          orientation: 'h'
      };

      let layout = {
        title : "Top 10 OTUs In Belly Button",
        xaxis: {showticklabels: true}
      }

      Plotly.newPlot("bar", [trace1], layout);

    //end of horizontal bar chart

    // beginning of bubble chart
    // the collects the data for the bubble chart
    let bubbleChartData = [];
    for (var i = 0; i < hwData.samples.length; i++) {
        if (parseInt(hwData.samples[i].id) === dataSet) {
        bubbleChartData = [hwData.samples[i]];
        // console.log(bubbleChartData);
        }
      }

      let markerSizeBubble = bubbleChartData[0].sample_values;
      let yDataBubble = bubbleChartData[0].sample_values;
      let xDataBubble = bubbleChartData[0].otu_ids;
      let markerColorsBubble = bubbleChartData[0].otu_ids;      
      let text = bubbleChartData[0].otu_labels;

      // console.log(markerSizeBubble);
      // console.log(yDataBubble);
      // console.log(xDataBubble);
      // console.log(markerColorsBubble);
      // console.log(text);

      let trace2 = {
          x: xDataBubble,
          y: yDataBubble,
          text: text,
          mode: "markers",
          marker : {
            color : markerColorsBubble,
            size : markerSizeBubble
          }
      };

      let layout2 = {
        title : "OTUs In Belly Button Bubble Chart",
        showlegend : false,
        xaxis : {title : { text: "OTU ID"}},
      }

      Plotly.newPlot("bubble", [trace2], layout2); 

      // End bubble chart

      // Start gauge chart
      // this collects the data for the gauge chart
      let gaugeData = [];
      for (var i = 0; i < hwData.metadata.length; i++) {
        if (hwData.metadata[i].id === dataSet) {
        gaugeData = [hwData.metadata[i]];
        console.log(gaugeData);
        console.log(gaugeData[0].wfreq);
        }
      }

      let gaugeValue = gaugeData[0].wfreq;
      // console.log(gaugeValue);

      let trace3 = {

        type: "pie",
        showlegend: false,
        // this creates the donut hole in the pie
        hole: 0.5,
        // this step spins the wheel to the appropriate setting to match wfreq
        // 16 degrees is the starting point 0 wfreq, 
        // the 36 degrees is the spacing between panels and
        // and wfreq is the gaugeValue multiplier
        rotation: (gaugeValue*36)+16,
        values: [36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36],
        text: ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
        direction: "clockwise",
        textinfo: "text",
        textposition: "inside",
        marker: {
          colors: ["rgb(0, 100, 0)", "rgb(34, 139, 34)", "rgb(154, 205, 50)", "rgb(173, 255, 47)", 
                  "rgb(204, 255, 53)", "rgb(255, 255, 0)", "rgb(255, 215, 0)", "rgb(255, 99, 71)",
                  "rgb(255, 69, 0)", "rgb(255, 0, 0)"]
          },
        labels: ["HAPPY BELLY BUTTON", "A LITTLE EXTRA EFFORT", "ALMOST THERE", 
                  "GETTING THERE", "DOING BETTER", "ALMOST POST CAVEMAN", 
                  "REALLY- THAT'S ALL", "PIZZA REMNANTS FOR ALL", "DEFCOM 6", 
                  "WARNING WARNING - BAD BELLY BUTTON"],

        hoverinfo: "label"
        };

        let layout3 = {

      // the sets the pointer position and
      // becomes x1 and y1 data (the top) for the pointer 
          shapes: [
            {
              type: 'line',
              x0: 0.5,
              y0: 0.5,
              x1: 0.495,
              y1: 0.80,
              line: {
                color: 'black',
                width: 6
              }
            }
        ],

        title: { text: "Belly Button Washing Frequency"} 
        };

      Plotly.plot(gauge, [trace3], layout3);
        
        

      // end of gauge

  });
}

// opening screen populating with id:940 data
buildVizdata(940);
