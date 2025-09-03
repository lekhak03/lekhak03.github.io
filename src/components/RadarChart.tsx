import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const RadarChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    const width = 500;
    const height = 500;
    const margin = 60;
    const radius = Math.min(width, height) / 2 - margin;

    const data = [
      { skill: 'Machine Learning', value: 85 },
      { skill: 'Data Visualization', value: 90 },
      { skill: 'Statistical Analysis', value: 80 },
      { skill: 'Python/R', value: 95 },
      { skill: 'SQL/Databases', value: 88 },
      { skill: 'Big Data Tools', value: 75 },
      { skill: 'Cloud Platforms', value: 82 },
      { skill: 'Deep Learning', value: 78 }
    ];

    const angleSlice = (Math.PI * 2) / data.length;

    // Create scales
    const rScale = d3.scaleLinear()
      .domain([0, 100])
      .range([0, radius]);

    // Create the container
    const g = svg
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width/2}, ${height/2})`);

    // Create the circular grid
    const levels = 5;
    for (let level = 1; level <= levels; level++) {
      const levelRadius = radius * (level / levels);
      
      g.append('circle')
        .attr('r', levelRadius)
        .attr('fill', 'none')
        .attr('stroke', '#e5e7eb')
        .attr('stroke-width', 1)
        .attr('opacity', 0.5);

      // Add level labels
      g.append('text')
        .attr('x', 4)
        .attr('y', -levelRadius + 4)
        .attr('fill', '#6b7280')
        .attr('font-family', 'Inter, sans-serif')
        .attr('font-size', '12px')
        .attr('font-weight', '500')
        .text(`${(level * 20)}%`);
    }

    // Create the axis lines
    data.forEach((d, i) => {
      const angle = angleSlice * i - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      g.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', x)
        .attr('y2', y)
        .attr('stroke', '#d1d5db')
        .attr('stroke-width', 1)
        .attr('opacity', 0.6);

      // Add skill labels
      const labelX = Math.cos(angle) * (radius + 20);
      const labelY = Math.sin(angle) * (radius + 20);

      g.append('text')
        .attr('x', labelX)
        .attr('y', labelY)
        .attr('text-anchor', labelX > 0 ? 'start' : 'end')
        .attr('dominant-baseline', 'middle')
        .attr('fill', '#374151')
        .attr('font-family', 'Inter, sans-serif')
        .attr('font-size', '14px')
        .attr('font-weight', '600')
        .text(d.skill);
    });

    // Create the data area
    const line = d3.line<any>()
      .x((d, i) => {
        const angle = angleSlice * i - Math.PI / 2;
        return Math.cos(angle) * rScale(d.value);
      })
      .y((d, i) => {
        const angle = angleSlice * i - Math.PI / 2;
        return Math.sin(angle) * rScale(d.value);
      })
      .curve(d3.curveLinearClosed);

    // Add the area
    g.append('path')
      .datum(data)
      .attr('d', line)
      .attr('fill', 'url(#radarGradient)')
      .attr('fill-opacity', 0.3)
      .attr('stroke', '#8b5cf6')
      .attr('stroke-width', 3);

    // Add gradient definition
    const defs = svg.append('defs');
    const gradient = defs.append('linearGradient')
      .attr('id', 'radarGradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '100%');
    
    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#8b5cf6')
      .attr('stop-opacity', 0.8);
    
    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#ec4899')
      .attr('stop-opacity', 0.8);

    // Add data points
    data.forEach((d, i) => {
      const angle = angleSlice * i - Math.PI / 2;
      const x = Math.cos(angle) * rScale(d.value);
      const y = Math.sin(angle) * rScale(d.value);

      g.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 6)
        .attr('fill', '#8b5cf6')
        .attr('stroke', '#ffffff')
        .attr('stroke-width', 3)
        .style('filter', 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))');
    });

  }, []);

  return (
    <div className="flex justify-center">
      <svg ref={svgRef} className="max-w-full h-auto"></svg>
    </div>
  );
};