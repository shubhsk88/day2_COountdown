import React from 'react';
import './Countdown.css';
//using the stack overflow
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  var d = [
    'M',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y
  ].join(' ');

  return d;
}

const CountDown = ({ radius, name, title }) => {
  return (
    <div>
      <svg className="base-timer-svg">
        <path
          fill="none"
          stroke="#9B59B6"
          strokeWidth="8"
          d={describeArc(80, 80, 60, 0, radius)}
        />
      </svg>
      <div className="baseCountdown">{name}</div>

      <span>{title}</span>
    </div>
  );
};

export default CountDown;
