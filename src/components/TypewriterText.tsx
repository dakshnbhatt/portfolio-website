
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  delay = 1000, 
  speed = 50 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, speed]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className="text-cosmic-bright text-2xl md:text-4xl font-bold">
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
        |
      </span>
    </span>
  );
};

export default TypewriterText;
