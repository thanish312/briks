import { Box, Typography, Grid, Paper, Divider, Stack, Link } from '@mui/material';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Box component={motion.div} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
      sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 6 }, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h2" fontWeight={800} color="primary.main" gutterBottom>
        Our College & Tuition
      </Typography>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        A Fun and Dynamic Learning Experience
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: { xs: 18, md: 20 } }}>
        BRIKS Academy was founded in the year 2014 by Hitendra Naik who has been in the teaching field for 10 years. We started BRIKS ACADEMY as a tuition center for PUC science students, but on the recommendation of parents and students, we are aspiring to be an independent college. In the process, we are proposed to be the knowledge partner of Indian National PU College.
      </Typography>
      <Divider sx={{ my: 5 }} />
      <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
        Why Choose Us Over Others?
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 5, fontSize: { xs: 16, md: 18 } }}>
        “Success is a dividend of sweat, the more you sweat the more successful you are” is the motto of BRIKS. We had a humble start in the year 2014 with a handful of 12 students but had a greater vision. Crossing all the hurdles since 2014, today BRIKS is a home for 150 students with gradual increase. Success is a battle in which each warrior has his/her own contribution. This success over the years was achieved by the constant cooperation and support of all the students and parents of the BRIKS family. Also achieved because of the commitment and dedication of all the faculties of the BRIKS family.
      </Typography>
      <Grid container spacing={5} alignItems="stretch">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, bgcolor: 'background.default', height: '100%', borderRadius: 4, boxShadow: 4 }}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Director's Message
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: { xs: 16, md: 18 } }}>
              “Teaching is our passion, excellence is our religion, dedication is what we stand for and aim for education at its supremacy, so have the confidence to turn your dreams into reality. ‘Grow with your dreams, never let it grow alone’ is our epigram and to reach the roots of the education is our formula.”
            </Typography>
            <Typography variant="subtitle1" fontWeight={700}>
              Hitendra Naik<br />Director, BRIKS Academy
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, bgcolor: 'background.default', height: '100%', borderRadius: 4, boxShadow: 4 }}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Courses We Offer
            </Typography>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mt: 1 }}>
              Tuition:
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: 16, md: 18 } }}>
              10th std: Coaching for ICSE, CBSE and State.<br />
              PUC: Coaching for 1st PUC and 2nd PUC with competitive exams like KCET, NEET and JEE.
            </Typography>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mt: 2 }}>
              College:
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: 16, md: 18 } }}>
              Knowledge partner with Indian National PU College, RR Nagar
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Divider sx={{ my: 5 }} />
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Our Branches At:
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: { xs: 16, md: 18 } }}>
        KR Road & Padmanabhanagar
      </Typography>
      <Divider sx={{ my: 5 }} />
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
        ©{new Date().getFullYear()} by Briks Academy.
      </Typography>
    </Box>
  );
}
