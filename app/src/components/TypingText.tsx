import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingTextProps {
  words: string[];
  prefix?: string;
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypingText = ({ 
  words, 
  prefix = '', 
  className = '', 
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000 
}: TypingTextProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        const deleteTimer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(deleteTimer);
      }
    } else {
      if (currentText === currentWord) {
        setIsPaused(true);
      } else {
        const typeTimer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(typeTimer);
      }
    }
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  const getWordColor = (word: string) => {
    const colors: { [key: string]: string } = {
      'Websites': 'text-[#1A56DB]',
      'SEO': 'text-[#6C3FF5]',
      'Performance': 'text-[#00C6C6]',
      'Digital Presence': 'gradient-text-animated',
      'Business Growth': 'text-[#1A56DB]',
    };
    return colors[word] || 'text-white';
  };

  return (
    <span className={className}>
      {prefix && <span className="text-white">{prefix} </span>}
      <motion.span
        key={currentWordIndex}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        className={`${getWordColor(words[currentWordIndex])} font-bold`}
      >
        {currentText}
      </motion.span>
      <span className="typing-cursor text-[#00C6C6]" />
    </span>
  );
};

export default TypingText;
