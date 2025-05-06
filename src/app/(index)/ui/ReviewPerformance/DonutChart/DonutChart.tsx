'use client'
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export const colors = [
  "#131E57",
  "#5E7FE3",
  "#FB8800",
  "#FDD795",
  "#9D0C74",
  "#EB6CC1",
  "#0E9B82",
  "#9EDED7",
  "#E80210",
  "#FE837D",
]

const durations = {
  entryAnimation: 2000
};

export const color = d3.scaleOrdinal(colors);

export const DonutChart = ({ data, width, height, innerText, className, delay }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Clear existing SVG
    d3.select(chartRef.current).select("svg").remove();

    // Dimensions
    const radius = Math.min(width, height) / 2;

    // Create SVG
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Create pie and arc
    const pie = d3.pie().value((d) => d.value);
    const arc = d3.arc().innerRadius(radius - 50).outerRadius(radius);

    // Create paths
    const arcs = svg
      .selectAll("path")
      .data(pie(data))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i))
      .attr("stroke", "white")
      .style("stroke-width", "2px");

    // Add inner text
    const text = svg
      .append("text")
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text(innerText)
      .style("opacity", 0);

    const generator = d3.pie().sort(null);

    const angleInterpolation = d3.interpolate(generator.startAngle()(), generator.endAngle()());

    const handleScroll = () => {
      const rect = chartRef.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        arcs
          .transition()
          .delay(delay * 1000)
          .duration(durations.entryAnimation)
          .attrTween("d", d => {
            const originalEnd = d.endAngle;
            return t => {
              const currentAngle = angleInterpolation(t);
              if (currentAngle < d.startAngle) {
                return "";
              }

              d.endAngle = Math.min(currentAngle, originalEnd);

              return arc(d);
            };
          })
          .on(
            "end", () =>
            text
              .transition()
              .style("opacity", 1)
          );
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

  }, [data, width, height, innerText]);

  return <div className={className} ref={chartRef}></div>;
};
