<template>
  <el-container>
    <h3>D3 Flow</h3>
    <svg ref="mysvg" width="500" height="300"></svg>
  </el-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as d3 from "d3";

const mysvg = ref(null)

onMounted(() => {
  const svg = d3.select(mysvg.value);
  const width = +svg.attr("width");
  const height = +svg.attr("height");

  const nodes = [
    { id: 'A' },
    { id: 'B' },
    { id: 'C' },
    { id: 'D' }
  ];

  const links = [
    { source: 'A', target: 'B' },
    { source: 'A', target: 'C' },
    { source: 'B', target: 'D' },
    { source: 'C', target: 'D' }
  ];

  // Force simulation setup
  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(200))
    .force("charge", d3.forceManyBody().strength(-500))
    .force("center", d3.forceCenter(width / 2, height / 2));

  // Add static links with light gray color
  const staticLink = svg.append("g")
    .attr("class", "static-links")
    .selectAll("line")
    .data(links)
    .enter().append("line")
    .attr("stroke-width", 2)
    .attr("stroke", "#cccccc"); // Light gray color

  // Add nodes
  const node = svg.append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(nodes)
    .enter().append("circle")
    .attr("r", 10)
    .attr("fill", "#708090");

  // Add node labels
  const label = svg.append("g")
    .attr("class", "labels")
    .selectAll("text")
    .data(nodes)
    .enter().append("text")
    .attr("dy", -15)
    .attr("text-anchor", "middle")
    .attr("fill", "var(--el-menu-text-color)")
    .text(d => d.id);

  // Apply the force simulation to update node and link positions
  simulation.on("tick", () => {
    staticLink
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

    label
      .attr("x", d => d.x)
      .attr("y", d => d.y);
  });

  // Function to animate data flow
  function animateFlow() {
    const flow = svg.append("g")
      .attr("class", "flows")
      .selectAll("circle")
      .data(links)
      .enter().append("circle")
      .attr("r", 5)
      .attr("fill", "#87CEEB"); // Red color

    function repeat() {
      flow
        .attr("cx", d => d.source.x)
        .attr("cy", d => d.source.y)
        .transition()
        .duration(2000)
        .attrTween("cx", function(d) {
          const interpolate = d3.interpolateNumber(d.source.x, d.target.x);
          return t => interpolate(t);
        })
        .attrTween("cy", function(d) {
          const interpolate = d3.interpolateNumber(d.source.y, d.target.y);
          return t => interpolate(t);
        })
        .on("end", repeat);
    }

    repeat();
  }

  // Start the animation
  animateFlow();

  // Function to randomize data flow
  function randomizeFlows() {
    setInterval(() => {
      links.forEach(link => {
        const targets = nodes.filter(node => node.id !== link.source.id);
        link.target = targets[Math.floor(Math.random() * targets.length)];
      });
      animateFlow();
    }, 3000);
  }

  // Randomize data flow periodically
  // randomizeFlows();
})
</script>