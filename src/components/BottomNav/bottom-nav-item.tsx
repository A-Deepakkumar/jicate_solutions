'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BottomNavItemProps } from './types';

const tapSpring = { type: 'spring' as const, stiffness: 600, damping: 25 };
const iconSpring = { type: 'spring' as const, stiffness: 500, damping: 20 };
const indicatorSpring = { type: 'spring' as const, stiffness: 600, damping: 30 };

export function BottomNavItem({ href, label, isActive, icon }: BottomNavItemProps) {
  return (
    <Link href={href} className="flex-1">
      <motion.div
        className={`relative flex flex-col items-center justify-center px-1 py-2 min-h-[56px] transition-colors duration-150 ${
          isActive ? 'text-[#0066cc]' : 'text-gray-400'
        }`}
        whileTap={{ scale: 0.92 }}
        transition={tapSpring}
      >
        {/* Icon with spring scale + wobble on activation */}
        <motion.div
          className="relative"
          animate={{
            scale: isActive ? 1.15 : 1,
            y: isActive ? -3 : 0,
          }}
          transition={iconSpring}
        >
          <motion.div
            animate={{ rotate: isActive ? [0, -5, 5, 0] : 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {icon}
          </motion.div>
        </motion.div>

        {/* Label */}
        <motion.span
          className={`text-[9px] mt-1 font-medium truncate max-w-full leading-tight ${
            isActive ? 'font-semibold' : ''
          }`}
          animate={{ opacity: isActive ? 1 : 0.7, y: isActive ? 1 : 0 }}
          transition={{ duration: 0.15 }}
        >
          {label}
        </motion.span>

        {/* Active indicator bar — shared layoutId for smooth sliding */}
        {isActive && (
          <motion.div
            layoutId="bottomNavActiveIndicator"
            className="absolute bottom-0 h-0.5 w-8 rounded-full bg-[#0066cc]"
            transition={indicatorSpring}
          />
        )}
      </motion.div>
    </Link>
  );
}
