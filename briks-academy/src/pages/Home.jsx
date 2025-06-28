import { Box } from '@mui/material';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <Box component={motion.div} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <Hero />
    </Box>
  );
}
