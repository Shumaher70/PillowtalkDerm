'use client';
import { motion } from 'framer-motion';

import React from 'react';

const motionDiv = ({ children }: { children: React.ReactNode }) => {
   return <motion.div>{children}</motion.div>;
};

export default motionDiv;
