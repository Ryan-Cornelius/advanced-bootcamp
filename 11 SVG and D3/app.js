let minYear = birthData[0].year;
let maxYear = birthData[birthData.length -1].year;
let width = 600;
let height = 600;
let barWidth = 25;

d3.select('input')
    .property('min', minYear)
    .property('max', maxYear)
    .property('value', minYear);

d3.select('svg')
        .attr('width', width)
        .attr('height', height)
    .selectAll('rect')
    .data(birthData.filter(d => {
        return d.year === minYear;
    }))
    .enter()
    .append('rect')
        .attr('width'. barWidth)
        .attr('height'. height)
        .attr('y', 0)
        .attr('x', (d,i) => {
            return barWidth * i;
        })

    