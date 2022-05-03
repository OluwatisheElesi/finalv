document.addEventListener('DOMContentLoaded', function(main) {
  var tooltip =  [120978,
    47610,
    243164,
    57502,
    122572,
    83982,
    85000,
    41063,
    134465,
    96285,
    239729,
    75148];
;
            
  d3.select('svg').selectAll('rect').data(tooltip).attr('height', function(d) {
      return d;
  })
  
  d3.select("body").transition()
    .style("background-color", "pink");
  
         function onMouseOver(d,i){
          d3.select(this).attr('class', 'highlight')}
          function main() {
            var tooltip = d3.select("svg"),
                  margin = 200,
                  width = svg.attr("width") - margin,
                  height = svg.attr("height") - margin;
          
              svg.append("text")
                 .attr("transform", "translate(100,0)")
                 .attr("x", 30)
                 .attr("y", 50)
                 .attr("font-size", "24px")
                 
          
              var xScale = d3.scaleBand().range([0, width]).padding(0.4),
                  yScale = d3.scaleLinear().range([height, 0]);
          
              var g = svg.append("bar")
                      .attr("transform", "translate(" + 100 + "," + 100 + ")");
          
              d3.csv("./Data Science Jobs Salaries.csv").then( function(data) {
                  xScale.domain(data.map(function(d) { return d.selectAll; }));
                  yScale.domain([0, d3.max(data, function(d) { return d.value; })]);
          
                  g.append("g")
                   .attr("transform", "translate(0," + height+ ")")
                   .call(d3.axisBottom(xScale))
                   .append("text")
                   .attr("y", height - 250)
                   .attr("x", width - 100)
                   .attr("text-anchor", "end")
                   .attr("stroke", "black")
                   .text("Year");
          
                  g.append("g")
                   .call(d3.axisLeft(yScale).tickFormat(function(d){return "$" + d;}).ticks(10))
             .append("text")
             .attr("transform", "rotate(-90)")
             .attr("y", 10)
             .attr('dy', '-5em')
             .attr('text-anchor', 'end')
             .attr('stroke', 'black')
             .text('Level of Experience')
          
                  g.selectAll(".bar")
                   .data(data)
                   .enter().append("rect")
                   .attr("class", "bar")
             .on("mouseover", onMouseOver) // Add listener for event
             .on("mouseout", onMouseOut)
                   .attr("x", function(d) { return xScale(d.year); })
                   .attr("y", function(d) { return yScale(d.value); })
                   .attr("width", xScale.bandwidth())
             .transition()
             .ease(d3.easeLinear)
             .duration(500)
             .delay(function(d,i){ return i * 50})
                   .attr("height", function(d) { return height - yScale(d.value); });
            })
                
           // Mouseover event handler
          
            function onMouseOver(d, i) {
              // Get bar's xy values, ,then augment for the tooltip
              var xPos = parseFloat(d3.select(this).attr('x')) + xScale.bandwidth() / 2;
              var yPos = parseFloat(d3.select(this).attr('y')) / 2 + height / 2
          
              // Update tooltip's position and value
              // d3.select('#tooltip')
              //   .style('left', xPos + 'px')
              //   .style('top', yPos + 'px')
              //   .select('#value').text(i.value)
              
              //   d3.select('#tooltip').class('hidden', false);
          
          
              d3.select(this).attr('class','highlight')
              d3.select(this)
                .transition() // I want to add animnation here
                
                .duration(800)
                .attr('width', xScale.bandwidth() + 5)
                .attr('y', function(d){return yScale(d.value) - 10;})
                .attr('height', function(d){return height - yScale(d.value) + 10;})
          
            }
          
            // Mouseout event handler
            function onMouseOut(d, i){
              d3.select(this).attr('class','bar')
              d3.select(this)
                .transition()
                .duration(500)
                .attr('width', xScale.bandwidth())
                .attr('y', function(d){return yScale(d.value);})
                .attr('height', function(d) {return height - yScale(d.value)})
              
              // d3.select('#tooltip').classed('hidden', true);
            }
          } 
});
//   // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

