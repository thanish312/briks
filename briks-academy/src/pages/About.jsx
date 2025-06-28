import { Box, Typography, Divider } from '@mui/material';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Box component={motion.div} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
      sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 6 }, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h2" fontWeight={800} color="primary.main" gutterBottom align="center">
        Our College & Tuition
      </Typography>
      <Typography variant="h4" fontWeight={700} gutterBottom align="center">
        A Fun and Dynamic Learning Experience
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: { xs: 18, md: 20 } }} align="center">
        BRIKS Academy was founded in the year 2014 by Hitendra Naik who has been in the teaching field for 10 years. We started BRIKS ACADEMY as a tuition center for PUC science students, but on the recommendation of parents and students, we are aspiring to be an independent college. In the process, we are proposed to be the knowledge partner of Indian National PU College.
      </Typography>
      <Divider sx={{ my: 5 }} />
      <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }} align="center">
        Why Choose Us Over Others?
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 5, fontSize: { xs: 16, md: 18 } }} align="center">
        Success is a dividend of sweat, the more you sweat the more successful you are. We had a humble start in the year 2014 with a handful of 12 students but had a greater vision. Crossing all the hurdles since 2014, today BRIKS is a home for 150 students with gradual increase. Success is a battle in which each warrior has his/her own contribution. This success over the years was achieved by the constant cooperation and support of all the students and parents of the BRIKS family. Also achieved because of the commitment and dedication of all the faculties of the BRIKS family.
      </Typography>
      <Divider sx={{ my: 5 }} />
      <Typography variant="h5" fontWeight={700} gutterBottom align="center">
        Courses We Offer
      </Typography>
      <Typography variant="subtitle1" fontWeight={700} sx={{ mt: 1 }} align="center">
        Tuition:
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: 16, md: 18 } }} align="center">
        10th std: Coaching for ICSE, CBSE and State.<br />
        PUC: Coaching for 1st PUC and 2nd PUC with competitive exams like KCET, NEET and JEE.
      </Typography>
      <Typography variant="subtitle1" fontWeight={700} sx={{ mt: 2 }} align="center">
        College:
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: 16, md: 18 } }} align="center">
        Knowledge partner with Indian National PU College, RR Nagar
      </Typography>
      <Divider sx={{ my: 5 }} />
      <Typography variant="h5" fontWeight={700} gutterBottom align="center">
        Our Branches At:
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: { xs: 16, md: 18 } }} align="center">
        KR Road & Padmanabhanagar
      </Typography>
      <Divider sx={{ my: 5 }} />
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
        ©{new Date().getFullYear()} by Briks Academy.
      </Typography>
    </Box>
  );
}
