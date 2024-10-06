document.addEventListener("DOMContentLoaded", function() {
    const svg = d3.select("#visualization")
        .append("svg")
        .attr("width", 600)
        .attr("height", 400)
        .style("border", "1px solid black");

    // Prueba: Dibujar un rectángulo
    svg.append("rect")
        .attr("x", 50)
        .attr("y", 50)
        .attr("width", 100)
        .attr("height", 100)
        .style("fill", "blue");
});
