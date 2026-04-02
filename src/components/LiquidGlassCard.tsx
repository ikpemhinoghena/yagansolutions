import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface LiquidGlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: 'blue' | 'violet' | 'cyan' | 'none';
}

const LiquidGlassCard = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  glowColor = 'none'
}: LiquidGlassCardProps) => {
  const glowColors = {
    blue: 'hover:shadow-[0_0_40px_rgba(26,86,219,0.3)]',
    violet: 'hover:shadow-[0_0_40px_rgba(108,63,245,0.3)]',
    cyan: 'hover:shadow-[0_0_40px_rgba(0,198,198,0.3)]',
    none: ''
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -8, scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        liquid-glass rounded-2xl p-6
        transition-all duration-500
        ${hoverEffect ? `hover:border-white/20 ${glowColors[glowColor]}` : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default LiquidGlassCard;
