import { Box, Typography, Divider, Paper, Stack, Button, Link, Avatar } from '@mui/material';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'NISCHAL V. CHADAGA [2016-17]',
    text: '“I was an average student when I joined BRIKS but with personal attention, it helped me get distinction in board exam and score well in CET. Teachers not only supported me in studies but also encouraged me to reach great heights in the field of sports and helped me to build my personality and career.”',
    extra: 'National Level Baseball & Softball Player. VTU Team captain',
    img: 'https://static.wixstatic.com/media/f87a8f_30d62b3d819248a4ac618ee34129c13f~mv2.jpg/v1/fill/w_460,h_460,al_c,lg_1,q_80,enc_avif,quality_auto/WhatsApp%20Image%202021-09-17%20at%205_37_edited.jpg',
  },
  {
    name: 'Samarth Sudhakar',
    text: '"Really the best place for good education... It not only teaches us what is there in the book but also teaches us about life... BRIKS has well-experienced teachers."',
    img: 'https://static.wixstatic.com/media/f87a8f_0a56e85a556b46969eb8b2b5459aa3e7~mv2.jpg/v1/crop/x_0,y_0,w_264,h_264/fill/w_370,h_370,al_c,lg_1,q_80,enc_avif,quality_auto/IMG-20210514-WA0015.jpg',
  },
  {
    name: 'Ashitha',
    text: '"Briks is not just a coaching center it feels more like a home now. The teachers there make learning fun and interesting and they guide us in every step. I am very glad to have been a part of this."',
    img: 'https://static.wixstatic.com/media/f87a8f_a40b9f27dd304437ab8779a371c540d0~mv2.jpg/v1/crop/x_0,y_7,w_998,h_998/fill/w_920,h_920,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20210515-WA0001.jpg',
  },
  {
    name: 'Usha Raghavendra',
    text: '"Briks is a place where children not only get knowledge but they get well educated and they learn discipline and will be readily able to face all challenges in life. For coaching wise the best tutorials for both boards and competitive. One of the best coaching institutions in Bangalore."',
  },
  {
    name: 'Vijayalakshmi Shetty',
    text: '"Very dedicated teachers. Each and every student has been given equal importance. The students are trained to be disciplined and organized. Weekly tests help the students in regular preparations and boost their confidence. Very happy to be a part of this institution."',
  },
  {
    name: 'SAVITHA B.S., Parent',
    text: '"HN sir and the teachers at BRIKS have taken up the initiative of providing study hours at tuition apart from the normal teaching hours. Learning with their friends, analyzing a problem in multiple ways makes the students’ increase interest towards the subject, thereby making it an enjoyable process. The institution organizes a 3-day trip and 1-day trip to make sure that students enjoy to the fullest, relax their mind to concentrate more on their studies.”',
  },
  {
    name: 'ANUSHA RAJ D. [2015-16]',
    text: '"For once I made the right choice, that is to join BRIKS academy. This is not a mere tutorial center but a complete package of all-round development. I could not have handled PUC better than this because the right balance between academic pressure & enjoyment factor was something that was greatly taken care of. The emotional bond with BRIKS glues permanently with us forever.”',
  },
];

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 5);

  return (
    <Box component={motion.div} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
      sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 6 }, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h2" fontWeight={800} color="primary.main" gutterBottom>
        Testimonials
      </Typography>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        What They’re Saying
      </Typography>
      <Divider sx={{ my: 5 }} />
      <Stack spacing={5}>
        <AnimatePresence>
          {visibleTestimonials.map((t, i) => (
            <Paper key={i} component={motion.div} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.5 }} elevation={3} sx={{ p: 4, borderRadius: 4, boxShadow: 4 }}>
              <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 2 }}>
                {t.img && <Avatar src={t.img} alt={t.name} sx={{ width: 80, height: 80, boxShadow: 2, border: '2px solid', borderColor: 'primary.main' }} />}
                <Box>
                  <Typography variant="subtitle1" fontWeight={700}>{t.name}</Typography>
                  {t.extra && <Typography variant="caption" color="text.secondary">{t.extra}</Typography>}
                </Box>
              </Stack>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: 16, md: 18 } }}>
                {t.text}
              </Typography>
            </Paper>
          ))}
        </AnimatePresence>
      </Stack>
      <Stack direction="row" justifyContent="center" sx={{ mt: 4 }}>
        <Button variant="outlined" onClick={() => setShowAll((v) => !v)}>
          {showAll ? 'Show Less' : 'Show More'}
        </Button>
      </Stack>
      <Divider sx={{ my: 5 }} />
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
        ©{new Date().getFullYear()} by Briks Academy.
      </Typography>
    </Box>
  );
}
