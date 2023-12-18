document.addEventListener("DOMContentLoaded", function () {
    // Get the counter element
    var counter = document.getElementById('counter');

    // Delay for 1 second, then start counting to 500 in 2 seconds
    setTimeout(function () {
        countUp(counter, 450, 1550);
    }, 200);
});

function countUp(element, target, duration) {
    var start = 0;
    var startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        var percentage = Math.min(progress / duration, 1);
        var value = Math.floor(percentage * target);

        element.textContent = value;

        if (percentage < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}
document.addEventListener('DOMContentLoaded', function () {
    // Get the element to be observed
    const storyPoint1 = document.querySelector('.storypoint1');

    // Create an intersection observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'highlighted' class when the element is in view
                entry.target.classList.add('highlighted');
            }
        });
    }, { threshold: [0.2] }); // Adjust threshold as needed

    // Start observing the element
    observer.observe(storyPoint1);
});



// D3.js script
document.addEventListener('DOMContentLoaded', function () {
    const data = [
        { name: 'James Harden', PTS: 30.4 },
        { name: 'Anthony Davis', PTS: 28.1 },
        { name: 'LeBron James', PTS: 27.5 },
        { name: 'Giannis Ante.', PTS: 26.9 },
        { name: 'Damian Lillard', PTS: 26.9 }
    ];

    // Set dimensions and margins for the graph
    const margin = { top: 20, right: 30, bottom: 40, left: 90 },
        width = 640 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

    // Append the svg object to the div called 'd3-container'
    const svg = d3.select("#d3-container")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // X axis
    const x = d3.scaleLinear()
        .domain([0, 35])
        .range([0, width]);
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

    // Y axis
    const y = d3.scaleBand()
        .range([0, height])
        .domain(data.map(d => d.name))
        .padding(.1);
    svg.append("g")
        .call(d3.axisLeft(y));

    // Bars with hover functionality
    svg.selectAll("myRect")
        .data(data)
        .join("rect")
        .attr("x", x(0))
        .attr("y", d => y(d.name))
        .attr("width", d => x(d.PTS))
        .attr("height", y.bandwidth())
        .attr("fill", "darkslategray")
        .on("mouseover", function (event, d) {
            d3.select(this)
                .attr("fill", "black");

            svg.append("text")
                .attr("class", "value-text")
                .attr("x", x(d.PTS) - 250) // Position inside the bar towards the end
                .attr("y", y(d.name) + y.bandwidth() / 2) // Vertically center in the bar
                .attr("dy", ".35em") // Center-align the text vertically
                .attr("fill", "white") // Text color
                .text(d.PTS);
        })
        .on("mouseout", function (d) {
            d3.select(this)
                .attr("fill", "darkslategray");

            svg.selectAll(".value-text").remove();
        });
});



document.addEventListener('DOMContentLoaded', function () {
    const data_2 = [
        { name: 'LeBron James', MP: 36.9 },
        { name: 'Giannis Ante.', MP: 36.7 },
        { name: 'Damian Lillard', MP: 36.6 },
        { name: 'Anthony Davis', MP: 36.4 },
        { name: 'James Harden', MP: 35.4 }
    ];

    // Set dimensions and margins for the graph
    const margin = { top: 20, right: 30, bottom: 40, left: 90 },
        width = 640 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

    // Append the svg object to the div with id 'd3-container-2'
    const svg = d3.select("#d3-container-2")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // X axis
    const x = d3.scaleLinear()
        .domain([0, d3.max(data_2, d => d.MP)])
        .range([0, width]);
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

    // Y axis
    const y = d3.scaleBand()
        .range([0, height])
        .domain(data_2.map(d => d.name))
        .padding(.1);
    svg.append("g")
        .call(d3.axisLeft(y));

    // Bars with hover functionality
    svg.selectAll("myRect")
        .data(data_2)
        .join("rect")
        .attr("x", x(0))
        .attr("y", d => y(d.name))
        .attr("width", d => x(d.MP))
        .attr("height", y.bandwidth())
        .attr("fill", "darkslategray")
        .on("mouseover", function (event, d) {
            d3.select(this).attr("fill", "black");
            svg.append("text")
                .attr("class", "value-text")
                .attr("x", x(d.MP) - 300) // Adjust position based on bar width
                .attr("y", y(d.name) + y.bandwidth() / 2)
                .attr("dy", ".35em")
                .attr("fill", "white")
                .text(d.MP);
        })
        .on("mouseout", function (d) {
            d3.select(this).attr("fill", "darkslategray");
            svg.selectAll(".value-text").remove();
        });
});




document.addEventListener('DOMContentLoaded', function () {
    const data_3 = [
        { name: 'LeBron James', FG: 10.5 },
        { name: 'Anthony Davis', FG: 10.4 },
        { name: 'Giannis Ante.', FG: 9.9 },
        { name: 'James Harden', FG: 9.1 },
        { name: 'Damian Lillard', FG: 8.5 }
    ];

    // Set dimensions and margins for the graph
    const margin = { top: 20, right: 30, bottom: 40, left: 90 },
        width = 640 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

    // Append the svg object to the div with id 'd3-container-3'
    const svg = d3.select("#d3-container-3")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // X axis
    const x = d3.scaleLinear()
        .domain([0, d3.max(data_3, d => d.FG)])
        .range([0, width]);
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

    // Y axis
    const y = d3.scaleBand()
        .range([0, height])
        .domain(data_3.map(d => d.name))
        .padding(.1);
    svg.append("g")
        .call(d3.axisLeft(y));

    // Bars with hover functionality
    svg.selectAll("myRect")
        .data(data_3)
        .join("rect")
        .attr("x", x(0))
        .attr("y", d => y(d.name))
        .attr("width", d => x(d.FG))
        .attr("height", y.bandwidth())
        .attr("fill", "darkslategray")
        .on("mouseover", function (event, d) {
            d3.select(this).attr("fill", "black");
            svg.append("text")
                .attr("class", "value-text")
                .attr("x", x(d.FG) - 300) // Adjust position based on bar width
                .attr("y", y(d.name) + y.bandwidth() / 2)
                .attr("dy", ".35em")
                .attr("fill", "white")
                .text(d.FG);
        })
        .on("mouseout", function (d) {
            d3.select(this).attr("fill", "darkslategray");
            svg.selectAll(".value-text").remove();
        });
});





document.addEventListener('DOMContentLoaded', function () {
    var data4 = [
        { name: 'Lebron James', score: 3 },
        { name: 'James Harden', score: 1.5 },
        { name: 'Anthony Davis', score: 2.25 }
    ];

    var width = 450,
        height = 450,
        margin = 40;

    var scaleFactor = 1.3; // Scale factor (1.5 means 150% size)

    var radius = Math.min(width, height) / 2 - margin;

    var svg = d3.select("#d3-container4")
        .append("svg")
        .attr("width", width * scaleFactor)  // Adjust the SVG element size
        .attr("height", height * scaleFactor)
        .append("g")
        .attr("transform", "translate(" + (width / 2) * scaleFactor + "," + (height / 2) * scaleFactor + ") scale(" + scaleFactor + ")");

    var color = d3.scaleOrdinal()
        .domain(data4.map(d => d.score))
        .range(["#a8a8a8", "#787878", "#505050"]);

    var pie = d3.pie()
        .value(function (d) { return d.score; });

    var arcGenerator = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

    var arcHover = d3.arc()
        .innerRadius(0)
        .outerRadius(radius + 40);

    var totalScore = d3.sum(data4, d => d.score);

    var arc = svg.selectAll('slices')
        .data(pie(data4))
        .enter()
        .append('g')
        .attr('class', 'arc');

    arc.append('path')
        .attr('d', arcGenerator)
        .attr('fill', function (d) { return color(d.data.score); })
        .on('mouseover', function (event, d) {
            d3.select(this).transition()
                .duration(200)
                .attr('d', arcHover);
            d3.select(this.parentNode).append("text")
                .attr('class', 'hover-text')
                .attr("transform", function () {
                    var centroid = arcHover.centroid(d);
                    centroid[0] -= 20; // Move to the left
                    return "translate(" + centroid + ")";
                })
                .text(`${d.data.score} (${((d.data.score / totalScore) * 100).toFixed(1)}%)`);
            d3.select(this.parentNode).select('.name-text').remove();
        })
        .on('mouseout', function (event, d) {
            d3.select(this).transition()
                .duration(200)
                .attr('d', arcGenerator);
            d3.select(this.parentNode).selectAll('.hover-text').remove();
            addNameText(this.parentNode, d);
        });

    function addNameText(parentNode, d) {
        d3.select(parentNode).append('text')
            .attr('class', 'name-text')
            .attr("transform", function () {
                var centroid = arcGenerator.centroid(d);
                centroid[0] -= 10;
                return "translate(" + centroid + ")";
            })
            .text(d.data.name)
            .style("text-anchor", "middle")
            .style("font-size", 14);
    }

    arc.each(function (d) {
        addNameText(this, d);
    });
});

