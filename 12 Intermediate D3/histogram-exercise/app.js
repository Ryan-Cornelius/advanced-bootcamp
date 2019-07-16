let height = 800;
let width = 600;
let padding = 50;
let barPadding = 1;
let ageData = regionData.filter(d => d.medianAge !== null);

let xScale = d3.scaleLinear()
                .domain(d3.extent(ageData, d => d.medianAge))
                .rangeRound([padding, width - padding]);

let histogram = d3.histogram()
                    .domain(xScale.domain())
                    .thresholds(xScale.ticks())
                    .value(d => d.medianAge);

let bins = histogram(ageData);

let yScale = d3.scaleLinear()
                .domain([0, d3,max(bins, d=> d.length)])
                .range([height - padding, padding]);

const svg = d3.select('svg')
                .attr('width', width)
                .attr('height', height);

svg.selectAll('rect')
    .data(bins)
    enter()
    .append('rect')
        .attr('x', d => xScale(d.x0))
        .attr('y', d => yScale(d.length))
        .attr('height', d => height - padding - yScale(d.length))
        .attr('width', d => xScale(d.x1) - xScale(d.x0) - barPadding)
        .attr('fill', 'blue');

