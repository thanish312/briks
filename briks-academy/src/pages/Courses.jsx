import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const courses = [
  {
    title: '10th Std Tuition',
    desc: 'Coaching for ICSE, CBSE, and State boards. Focused, interactive, and result-oriented sessions.'
  },
  {
    title: 'PUC Science',
    desc: 'Coaching for 1st and 2nd PUC with competitive exam prep (KCET, NEET, JEE).'
  },
  {
    title: 'College Partnership',
    desc: 'Knowledge partner with Indian National PU College, RR Nagar.'
  }
];

export default function Courses() {
  return (
    <Box component={motion.div} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
      sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 6 }, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h2" fontWeight={800} color="primary.main" gutterBottom align="center">
        Our Courses
      </Typography>
      <Typography variant="h5" fontWeight={600} color="text.secondary" sx={{ mb: 5 }} align="center">
        Explore a variety of courses designed to help you succeed.
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {courses.map((c, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card component={motion.div} whileHover={{ scale: 1.04, boxShadow: 8 }} sx={{ borderRadius: 4, boxShadow: 4, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" fontWeight={700} gutterBottom color="primary.main">{c.title}</Typography>
                <Typography variant="body1" color="text.secondary">{c.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
