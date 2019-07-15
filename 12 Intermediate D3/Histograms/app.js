let width = 600;
let height = 600;
let barPadding = 1;
let minYear = d3.min(birthData, d => d.year);
let yearData = birthData.filter(d => d.year === minYear);

let xScale = d3.scaleLinear()
                .domain([0, d3.max(yearData, d => d.births)])
                .rangeRound([0, width]);

let histogram = d3.histogram()
                    .domain(xScale.domain())
                    .thresholds(xScale.ticks())
                    .value(d => d.births);

let bins = histogram(yearData)

let barWdith = width / bins.length - barPadding;

let yScale = d3.scaleLinear()
                .domain([0, d3.max(bins, d => d.length)])
                .range([height, 0]);

let bars = d3.select('svg')
                .attr('height', height)
                .attr('width', width)
            .selectAll('.bar')
            .data(bins)
            .enter()
            .append('g')
                .classed('bar', true)

bars
    .append('rect')
        .attr('x', (d,i) => xScale(d.x0))
        .attr('y', d => yScale(d.length))
        .attr('height', d => height - yScale(d.length))
        .attr('width', d => xScale(d.x1) - xScale(d.x0))
        .attr('fill', '#9c27b0');

bars
    .append('text')
        .text(d => `${d.x0} - ${d.x1} (bar height: ${d.length})`)
        .attr('transform', 'rotate(-90)')
        .attr('y', d => (xScale(d.x1) + xScale(d.x0)) / 2)
        .style('alignment-baseline', 'middle')