'use client'
import { useRef, useEffect } from "react"
import * as d3 from "d3";

import styles from './Chart.module.css'
import { Block } from "@/shared/ui/Block";
import { Typography } from "@/shared/ui/Typography";

const NAMES_LINE = Object.freeze({
  SPRING: "SPRING",
  SL_ALL: "SL All",
  SL_PE: "SL PE"
})

const data = [
  {
    "date": new Date("2022-09-30T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 100,
    [NAMES_LINE.SL_ALL]: 100,
    [NAMES_LINE.SL_PE]: 100
  },
  {
    "date": new Date("2022-10-31T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 109.59,
    [NAMES_LINE.SL_ALL]: 101.65,
    [NAMES_LINE.SL_PE]: 101.72
  },
  {
    "date": new Date("2022-11-30T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 114.94,
    [NAMES_LINE.SL_ALL]: 102.77,
    [NAMES_LINE.SL_PE]: 102.87
  },
  {
    "date": new Date("2022-12-31T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 132.11,
    [NAMES_LINE.SL_ALL]: 105.44,
    [NAMES_LINE.SL_PE]: 105.51
  },
  {
    "date": new Date("2023-01-31T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 131.48,
    [NAMES_LINE.SL_ALL]: 105.82,
    [NAMES_LINE.SL_PE]: 105.87
  },
  {
    "date": new Date("2023-02-28T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 131.55,
    [NAMES_LINE.SL_ALL]: 106.71,
    [NAMES_LINE.SL_PE]: 106.8
  },
  {
    "date": new Date("2023-03-31T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 131.94,
    [NAMES_LINE.SL_ALL]: 106.99,
    [NAMES_LINE.SL_PE]: 107
  },
  {
    "date": new Date("2023-04-30T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 131.9,
    [NAMES_LINE.SL_ALL]: 107.33,
    [NAMES_LINE.SL_PE]: 107.34
  },
  {
    "date": new Date("2023-05-31T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 135,
    [NAMES_LINE.SL_ALL]: 109.03,
    [NAMES_LINE.SL_PE]: 109.1
  },
  {
    "date": new Date("2023-06-30T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 135.7,
    [NAMES_LINE.SL_ALL]: 111.15,
    [NAMES_LINE.SL_PE]: 111.27
  },
  {
    "date": new Date("2023-07-31T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 142.33,
    [NAMES_LINE.SL_ALL]: 111.32,
    [NAMES_LINE.SL_PE]: 111.34
  },
  {
    "date": new Date("2023-08-31T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 143.07,
    [NAMES_LINE.SL_ALL]: 112.61,
    [NAMES_LINE.SL_PE]: 112.23
  },
  {
    "date": new Date("2023-09-30T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 146.65,
    [NAMES_LINE.SL_ALL]: 113.48,
    [NAMES_LINE.SL_PE]: 112.27
  },
  {
    "date": new Date("2023-10-31T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 147.31,
    [NAMES_LINE.SL_ALL]: 115.26,
    [NAMES_LINE.SL_PE]: 113.89
  },
  {
    "date": new Date("2023-11-30T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 153.98,
    [NAMES_LINE.SL_ALL]: 117.3,
    [NAMES_LINE.SL_PE]: 116.13
  },
  {
    "date": new Date("2023-12-31T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 153.24,
    [NAMES_LINE.SL_ALL]: 117.81,
    [NAMES_LINE.SL_PE]: 116.72
  },
  {
    "date": new Date("2024-01-31T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 155.16,
    [NAMES_LINE.SL_ALL]: 118.9,
    [NAMES_LINE.SL_PE]: 117.88
  },
  {
    "date": new Date("2024-02-29T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 159.61,
    [NAMES_LINE.SL_ALL]: 120.45,
    [NAMES_LINE.SL_PE]: 119.68
  },
  {
    "date": new Date("2024-03-31T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 159.13,
    [NAMES_LINE.SL_ALL]: 121.56,
    [NAMES_LINE.SL_PE]: 120.86
  },
  {
    "date": new Date("2024-04-30T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 161.66,
    [NAMES_LINE.SL_ALL]: 122.51,
    [NAMES_LINE.SL_PE]: 121.73
  },
  {
    "date": new Date("2024-05-31T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 165.54,
    [NAMES_LINE.SL_ALL]: 123.63,
    [NAMES_LINE.SL_PE]: 122.99
  },
  {
    "date": new Date("2024-06-30T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 166.5,
    [NAMES_LINE.SL_ALL]: 124.4,
    [NAMES_LINE.SL_PE]: 123.64
  },
  {
    "date": new Date("2024-07-31T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 169.3,
    [NAMES_LINE.SL_ALL]: 125.42,
    [NAMES_LINE.SL_PE]: 124.63
  },
  {
    "date": new Date("2024-08-31T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 169.69,
    [NAMES_LINE.SL_ALL]: 126.42,
    [NAMES_LINE.SL_PE]: 125.56
  },
  {
    "date": new Date("2024-09-30T21:00:00.000Z"),
    [NAMES_LINE.SPRING]: 170.61,
    [NAMES_LINE.SL_ALL]: 127.62,
    [NAMES_LINE.SL_PE]: 126.75
  }
]




// Colors
const colors = {
  [NAMES_LINE.SPRING]: "#FB880080",
  [NAMES_LINE.SL_ALL]: "#9D0C74",
  [NAMES_LINE.SL_PE]: "#3953D4",
};

// Dimensions
const margin = { top: 20, right: 50, bottom: 50, left: 50 };
const width = 620 - margin.left - margin.right;
const height = 420 - margin.top - margin.bottom;


export const Chart = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // Clear any existing SVG
    d3.select(svgRef.current).select("svg").remove();

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      // .append("svg")
      .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scales 
    const x = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date))
      .range([0, width]);

    const y = d3.scaleLinear().domain([100, 180]).range([height, 0]);

    // Axes
    const xAxis = d3.axisBottom(x).tickFormat(d3.timeFormat("%b %y"));
    const yAxis = d3.axisLeft(y).ticks(5);

    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(xAxis)
      .call((g) =>
        g.selectAll(".tick text")
          .attr("font-weight", "500")
          .attr("font-size", "var(--font-size-xs)")
          .attr("fill", "var(--color-primary-70)"));
    svg.append("g")
      .call(yAxis)
      .call((g) =>
        g.selectAll(".tick text")
          .attr("font-weight", "800")
          .attr("font-size", "var(--font-size-xs)")
          .attr("font-family", "var(--font-manrope)")
      )
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g.selectAll(".tick line")
          .attr("x2", width)
          .attr("stroke-opacity", 0.1));

    // Line generator
    const lineGenerator = d3
      .line()
      .x((d) => x(d.date))
      .y((d) => y(d.value));



    // Add lines
    Object.keys(colors).forEach((key, index) => {
      const path = svg
        .append("path")
        .datum(data.map((d) => ({ date: d.date, value: d[key] })))
        .attr("class", "line")
        .attr("d", lineGenerator)
        .attr("stroke", colors[key])
        .attr("fill", "none")
        .attr("stroke-width", 4)

      const length = path.node().getTotalLength();

      path
        .attr("stroke-dasharray", `${length} ${length}`)
        .attr("stroke-dashoffset", length);

      const handleScroll = () => {
        const rect = svgRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          path
            .transition()
            .delay(index * 250)
            .ease(d3.easeLinear)
            .attr("stroke-dashoffset", 0)
            .duration(1500);
          window.removeEventListener('scroll', handleScroll);
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();
    });
  }, []);


  return (
    <Block className={styles.chart}>
      <Block className={styles.chartBody}>
        <Block className={styles.chartSwitcher}>

          {Object.entries(colors).map(([key, color]) => (
            <Block key={key} className={styles.chartSwitch}>
              <span className={styles.chartSwitchIcon} style={{
                backgroundColor: color
              }} />
              <Typography as="h4" fontFamily="manrope" fontWeight={800}>{key}</Typography>
            </Block>
          ))}


        </Block>
        <svg ref={svgRef} />
      </Block>
    </Block>
  )
}