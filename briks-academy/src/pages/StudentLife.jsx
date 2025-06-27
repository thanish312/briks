import { Box, Typography, Divider, Stack, Link, Paper } from '@mui/material';
import { motion } from 'framer-motion';

export default function StudentLife() {
  return (
    <Box component={motion.div} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
      sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 6 }, maxWidth: 1100, mx: 'auto' }}>
      <Typography variant="h2" fontWeight={800} color="primary.main" gutterBottom>
        Life at College & Tuition
      </Typography>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Get Involved
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: { xs: 18, md: 20 } }}>
        At Briks Academy, we pay close attention and develop caring relationships with our students, allowing for the adaptation of curricula to meet the social, emotional, and educational needs of everyone. Our student experience is enriched by athletics, volunteer opportunities, class trips, and other exciting extracurricular activities.
      </Typography>
      <Divider sx={{ my: 5 }} />
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4, boxShadow: 4, mb: 5, bgcolor: 'background.default' }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Our Valuable Students
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Click on the arrow key to view the images of all the batches
        </Typography>
        <Typography variant="h6" fontWeight={700} sx={{ mt: 4 }}>
          Gallery (Coming Soon)
        </Typography>
      </Paper>
      <Divider sx={{ my: 5 }} />
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4, boxShadow: 4, bgcolor: 'background.default' }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Contact
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Hitendra Naik (HN) - 9481953005 / 9900084667<br />
          14/81, 2nd floor, Girija Shankar Complex, Padmanabhanagar, Bangalore - 560070.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Link href="https://facebook.com/BriksAcademy" target="_blank" rel="noopener" underline="none">
            <Typography color="primary">Facebook</Typography>
          </Link>
          <Link href="https://instagram.com/BriksAcademy" target="_blank" rel="noopener" underline="none">
            <Typography color="secondary">Instagram</Typography>
          </Link>
        </Stack>
      </Paper>
      <Divider sx={{ my: 5 }} />
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
        ©{new Date().getFullYear()} by Briks Academy.
      </Typography>
    </Box>
  );
}
