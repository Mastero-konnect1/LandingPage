import React, { useState } from 'react';
import './Services.css'

const colors = ['#1A5319', '#EB5B00', '#FFC436', '#3FA2F6', '#37B7C3'];

const Hexagon = ({ x, y, color, text, headerText, footerText, belowHeaderText, belowFooterText }) => {
  const height = 120.4; // 3 cm in pixels
  const width = 120.4;  // 3 cm in pixels

  const hexagonPoints = [
    [0, -height / 2],             
    [width / 2, -height / 4],     
    [width / 2, height / 4],      
    [0, height / 2],              
    [-width / 2, height / 4],     
    [-width / 2, -height / 4]     
  ]
  .map(point => [point[0] + x, point[1] + y].join(',')).join(' ');

  const linesAndCircles = [
    { x1: 0, y1: -height / 2, x2: 0, y2: -height / 2 - 43.4 },
    { x1: 0, y1: height / 2, x2: 0, y2: height / 2 + 43.4 },
  ].map(line => ({
    ...line,
    x1: line.x1 + x,
    y1: line.y1 + y,
    x2: line.x2 + x,
    y2: line.y2 + y,
  }));

  return (
    <g>
      <polygon points={hexagonPoints} fill={color} stroke={color} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />

      {linesAndCircles.map((line, index) => (
        <g key={index}>
          <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="white" strokeWidth="2" />
          <circle cx={line.x2} cy={line.y2} r="8" fill={color} />
        </g>
      ))}

      {/* Editable Text Inside Hexagon with Line Breaks */}
      <text x={x} y={y} fill="white" fontSize="13" textAnchor="middle" dominantBaseline="middle">
        {text.split('\n').map((line, index) => (
          <tspan key={index} x={x} dy={index === 0 ? 0 : 15}>{line}</tspan>
        ))}
      </text>

      {/* Editable Header Text Above Hexagon */}
      <text 
        x={x - 90} 
        y={y - height / 2 - 100} 
        fill={color} 
        fontSize="16" 
        textAnchor="middle">
        {headerText.split('\n').map((line, index) => (
          <tspan key={index} x={x - 80} dy={index === 0 ? 0 : 20}>{line}</tspan>
        ))}
      </text>

      {/* Editable Footer Text Above Hexagon */}
      <text 
        x={x - 80} 
        y={y - height / 2 - 70} 
        fill="white" 
        fontSize="9" 
        textAnchor="middle">
        {footerText.split('\n').map((line, index) => (
          <tspan key={index} x={x - 70} dy={index === 0 ? 0 : 20}>{line}</tspan>
        ))}
      </text>

      {/* Header Text Below Hexagon to the Right of Circle */}
      <text 
        x={x + 90} 
        y={y + height / 2 + 100} // Increased Y value for visibility
        fill={color} 
        fontSize="16" 
        textAnchor="middle">
        {belowHeaderText.split('\n').map((line, index) => (
          <tspan key={index} x={x + 20} dy={index === 0 ? 0 : 15}>{line}</tspan>
        ))}
      </text>

      {/* Footer Text Below Hexagon to the Right of Circle */}
      <text 
        x={x + 10} 
        y={y + height / 2 + 120} // Increased Y value for visibility
        fill="white" 
        fontSize="9" 
        textAnchor="middle">
        {belowFooterText.split('\n').map((line, index) => (
          <tspan key={index} x={x + 20} dy={index === 0 ? 0 : 12}>{line}</tspan>
        ))}
      </text>
    </g>
  );
};

const Services = () => {
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);
  const hexagonHeight = 120.4;

  const texts = [
    "Achievements",
    "Grow with the\ncommunity",
    "Building\nconnections",
    "Building\nprofile",
    "Connecting\nwith our\ncommunity"
  ];

  const headerTexts = [
    "Tangible outcomes and\nsuccess",
    "Support and Resources",
    "It's time to\nconnect",
    "Getting\nstarted",
    "Mentor"
  ];

  const footerTexts = [
    "\n\nHighlighting achievements and\nmilestones.",
    "Participate in community\ndiscussions.",
    "\n\nUse Search filters to find\npotential matches based on\nskills,intrest,location,etc.",
    "\n\nAdd details such as biography,\nskils, intrest and guest.",
    "Industry Expert."
  ];

  const belowHeaderTexts = [
    "Invitation",
    "Encouragement",
    "Community\nInvolvement",
    "Mentorship",
    "Mentee"
  ];

  const belowFooterTexts = [
    "Inviting other professionals to\njoin the platform as mentor.",
    "Offering certificates or badges\nfor completed mentorship\nprograms",
    "\n\n\n\nMechanism for giving and\nreceiving feedback to ensure\ncontinous improvement",
    "Your personalized dashboard\nshowing Mentee\nrecommendations,upcoming\nsessions and community\nupdates",
    "A learner seeking guidance"
  ];

  React.useEffect(() => {
    const handleResize = () => {
      setCanvasWidth(window.innerWidth);
      setCanvasHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const hexagonSpacing = 250.6;
  const angle = 9;
  const angleRad = angle * (Math.PI / 180);

  const xOffset = hexagonSpacing * Math.cos(angleRad);
  const yOffset = hexagonSpacing * Math.sin(angleRad);

  const hexagons = [];
  const topMargin = 200; // Adjust this value for top margin
  const rightMargin = 0; // Right margin for the first hexagon

  for (let i = 0; i < colors.length; i++) {
    const x = canvasWidth - (100 + i * xOffset) + (i === 0 ? rightMargin : 0);
    const y = topMargin + i * yOffset;
    hexagons.push({ x, y, text: texts[i], headerText: headerTexts[i], footerText: footerTexts[i], belowHeaderText: belowHeaderTexts[i], belowFooterText: belowFooterTexts[i] });
  }

  // Calculate the total height needed for the SVG canvas
  const totalHeight = topMargin + (hexagons.length - 1) * yOffset + hexagonHeight + 200; // Add extra space if needed

  return (
    <div className="App2" style={{ width: '100%', height: '100vh', backgroundColor: 'black', overflow: 'auto' }}>
      <svg width="100%" height={totalHeight}>
        {hexagons.map((hex, index) => (
          <Hexagon
            key={index}
            x={hex.x}
            y={hex.y}
            color={colors[index % colors.length]}
            text={hex.text}
            headerText={hex.headerText}
            footerText={hex.footerText}
            belowHeaderText={hex.belowHeaderText}
            belowFooterText={hex.belowFooterText}
          />
        ))}
      </svg>
    </div>
  );
};

export default Services;
