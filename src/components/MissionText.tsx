"use client";

import { useEffect, useRef, useState } from "react";

export const MissionText = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [letterStates, setLetterStates] = useState<boolean[]>([]);
  
  const text = "Наша миссия - создавать инновационные веб-решения, которые помогают бизнесу расти и развиваться в цифровую эпоху. Мы объединяем современные технологии с креативным дизайном для создания продуктов мирового класса.";

  useEffect(() => {
    setLetterStates(new Array(text.length).fill(false));
    
    const handleScroll = () => {
      if (!textRef.current) return;
      
      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      
      // Check if element is in viewport
      if (elementTop < windowHeight && elementBottom > 0) {
        // Calculate how much of the element is visible
        const visibleHeight = Math.min(elementBottom, windowHeight) - Math.max(elementTop, 0);
        const totalHeight = rect.height;
        const scrollProgress = Math.max(0, Math.min(1, visibleHeight / totalHeight));
        
        // Calculate which letters should be white
        const lettersToShow = Math.floor(scrollProgress * text.length);
        
        setLetterStates(prev => 
          prev.map((_, index) => index < lettersToShow)
        );
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [text.length]);

  return (
    <p ref={textRef} className="text-2xl md:text-3xl lg:text-4xl leading-relaxed max-w-5xl mx-auto">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="transition-colors duration-300"
          style={{
            color: letterStates[index] ? "oklch(0.98 0 0)" : "oklch(0.40 0 0)"
          }}
        >
          {char}
        </span>
      ))}
    </p>
  );
};