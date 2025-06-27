import { Box, Typography, Button, Stack, Grid, Paper, Divider, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

export default function Hero() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, md: 6 }, maxWidth: 1100, mx: 'auto' }}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <Typography variant="h2" fontWeight={700} gutterBottom color="primary.main">
          Briks Academy
        </Typography>
        <Typography variant="h4" fontWeight={600} color="secondary.main" gutterBottom>
          Win The World
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          <Button variant="contained" size="large" component={RouterLink} to="/courses">
            View Courses
          </Button>
          <Button variant="outlined" size="large" component={RouterLink} to="/contact">
            Contact Us
          </Button>
        </Stack>
        <Divider sx={{ my: 4 }} />
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              A Fun and Dynamic Learning Experience
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              BRIKS Academy was founded in the year 2014 by Hitendra Naik who has been in the teaching field for 10 years. We started BRIKS ACADEMY as a tuition center for PUC science students, but on the recommendation of parents and students, we are aspiring to be an independent college. In the process, we are proposed to be the knowledge partner of Indian National PU College.
            </Typography>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mt: 3, mb: 1 }}>
              Why Choose Us Over Others?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              “Success is a dividend of sweat, the more you sweat the more successful you are” is the motto of BRIKS. We had a humble start in the year 2014 with a handful of 12 students but had a greater vision. Crossing all the hurdles since 2014, today BRIKS is a home for 150 students with gradual increase. Success is a battle in which each warrior has his/her own contribution. This success over the years was achieved by the constant cooperation and support of all the students and parents of the BRIKS family. Also achieved because of the commitment and dedication of all the faculties of the BRIKS family.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <Box
                component="img"
                src="https://static.wixstatic.com/media/f87a8f_3906888eec0c47cd92a4a94e06aeb234~mv2.jpg/v1/fill/w_1265,h_622,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f87a8f_3906888eec0c47cd92a4a94e06aeb234~mv2.jpg"
                alt="Briks Academy Main"
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  height: 'auto',
                  borderRadius: 3,
                  boxShadow: 3,
                  objectFit: 'cover',
                  mb: { xs: 2, md: 0 }
                }}
              />
            </Box>
            <Paper elevation={2} sx={{ p: 3, bgcolor: 'background.default', mt: 3 }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Director's Message
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                “Teaching is our passion, excellence is our religion, dedication is what we stand for and aim for education at its supremacy, so have the confidence to turn your dreams into reality. ‘Grow with your dreams, never let it grow alone’ is our epigram and to reach the roots of the education is our formula.”
              </Typography>
              <Typography variant="subtitle2" fontWeight={600}>
                Hitendra Naik<br />Director, BRIKS Academy
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Courses We Offer
            </Typography>
            <Typography variant="subtitle2" fontWeight={600} sx={{ mt: 1 }}>
              Tuition:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              10th std: Coaching for ICSE, CBSE and State.<br />
              PUC: Coaching for 1st PUC and 2nd PUC with competitive exams like KCET, NEET and JEE.
            </Typography>
            <Typography variant="subtitle2" fontWeight={600} sx={{ mt: 2 }}>
              College:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Knowledge partner with Indian National PU College, RR Nagar
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Our Branches At:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              KR Road & Padmanabhanagar
            </Typography>
            <Typography variant="h6" fontWeight={700} sx={{ mt: 3 }}>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hitendra Naik (HN) - 9481953005 / 9900084667<br />
              14/81, 2nd floor, Girija Shankar Complex, Padmanabhanagar, Bangalore - 560070.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Link href="https://wa.me/919481953005" target="_blank" rel="noopener" underline="none">
                <Button variant="outlined" color="success">WhatsApp</Button>
              </Link>
              <Link href="https://facebook.com/BriksAcademy" target="_blank" rel="noopener" underline="none">
                <Button variant="outlined" color="primary">Facebook</Button>
              </Link>
              <Link href="https://instagram.com/BriksAcademy" target="_blank" rel="noopener" underline="none">
                <Button variant="outlined" color="secondary">Instagram</Button>
              </Link>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
          ©{new Date().getFullYear()} by Briks Academy.
        </Typography>
      </motion.div>
    </Box>
  );
}
