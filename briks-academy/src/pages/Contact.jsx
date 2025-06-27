import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <Box component={motion.div} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
      sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 6 }, maxWidth: 700, mx: 'auto' }}>
      <Paper elevation={3} sx={{ p: 5, borderRadius: 4, boxShadow: 4, textAlign: 'center', bgcolor: 'background.default' }}>
        <Typography variant="h2" fontWeight={800} color="primary.main" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h5" fontWeight={600} color="text.secondary" sx={{ mb: 3 }}>
          Get in touch with Briks Academy for more information.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: 18, md: 20 } }}>
          Email: info@briksacademy.com<br />
          Phone: 9481953005 / 9900084667
        </Typography>
      </Paper>
    </Box>
  );
}
