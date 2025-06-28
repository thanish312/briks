import { Box, Typography, Button, Stack, Paper, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 500, md: 700 },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        px: 0,
        py: 0,
        mb: 8,
      }}
    >
      {/* Background Image Full Bleed */}
      <Box
        component="img"
        src="https://static.wixstatic.com/media/f87a8f_3906888eec0c47cd92a4a94e06aeb234~mv2.jpg/v1/fill/w_1265,h_622,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f87a8f_3906888eec0c47cd92a4a94e06aeb234~mv2.jpg"
        alt="Briks Academy Main"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
          filter: (theme) => theme.palette.mode === 'light' ? 'brightness(0.85) blur(0.5px)' : 'brightness(0.6) blur(0.5px)',
          transition: 'filter 0.3s',
        }}
      />
      {/* Overlay for readability */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          background: {
            xs: 'linear-gradient(180deg,rgba(0,0,0,0.45) 0%,rgba(0,0,0,0.7) 100%)',
            md: 'linear-gradient(90deg,rgba(0,0,0,0.65) 0%,rgba(0,0,0,0.25) 100%)',
          },
        }}
      />
      {/* Main Content */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          position: 'relative',
          zIndex: 3,
          maxWidth: 800,
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 8, md: 12 },
          color: 'common.white',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h1"
          fontWeight={900}
          gutterBottom
          sx={{
            fontSize: { xs: 38, sm: 48, md: 64 },
            letterSpacing: -2,
            lineHeight: 1.1,
            mb: 2,
            color: 'common.white',
            textShadow: '0 4px 32px rgba(0,0,0,0.4)',
          }}
        >
          Briks Academy
        </Typography>
        <Typography
          variant="h3"
          fontWeight={700}
          gutterBottom
          sx={{
            fontSize: { xs: 22, sm: 28, md: 36 },
            mb: 3,
            color: 'secondary.main',
            textShadow: '0 2px 16px rgba(0,0,0,0.3)',
          }}
        >
          Win The World
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 5,
            fontWeight: 400,
            color: 'rgba(255,255,255,0.92)',
            fontSize: { xs: 16, sm: 20, md: 24 },
            textShadow: '0 2px 8px rgba(0,0,0,0.25)',
          }}
        >
          A fun and dynamic learning experience for every student. Join a community that inspires, supports, and helps you achieve your dreams.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" sx={{ mb: 6 }}>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/courses"
            sx={{
              px: 6,
              py: 2,
              fontWeight: 700,
              fontSize: 20,
              borderRadius: 3,
              boxShadow: 4,
              textTransform: 'none',
            }}
          >
            View Courses
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={RouterLink}
            to="/contact"
            sx={{
              px: 6,
              py: 2,
              fontWeight: 700,
              fontSize: 20,
              borderRadius: 3,
              color: 'common.white',
              borderColor: 'common.white',
              textTransform: 'none',
              '&:hover': {
                borderColor: 'secondary.main',
                color: 'secondary.main',
              },
            }}
          >
            Contact Us
          </Button>
        </Stack>
        <Paper
          elevation={0}
          sx={{
            bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(30,30,30,0.96)' : 'rgba(255,255,255,0.92)',
            color: (theme) => theme.palette.mode === 'dark' ? 'grey.100' : 'text.primary',
            borderRadius: 4,
            px: { xs: 2, md: 4 },
            py: { xs: 2, md: 3 },
            maxWidth: 600,
            mx: 'auto',
            mt: 4,
            boxShadow: 2,
            textAlign: 'left',
            border: (theme) => theme.palette.mode === 'dark' ? '1.5px solid rgba(255,255,255,0.12)' : '1.5px solid rgba(0,0,0,0.07)',
          }}
        >
          <Typography variant="h6" fontWeight={700} gutterBottom color="primary.main">
            Director's Message
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
            “Teaching is our passion, excellence is our religion, dedication is what we stand for and aim for education at its supremacy, so have the confidence to turn your dreams into reality. ‘Grow with your dreams, never let it grow alone’ is our epigram and to reach the roots of the education is our formula.”
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Hitendra Naik<br />Director, BRIKS Academy
          </Typography>
        </Paper>
        <Typography variant="body2" color="rgba(255,255,255,0.7)" align="center" sx={{ mt: 6 }}>
          ©{new Date().getFullYear()} by Briks Academy.
        </Typography>
      </Box>
    </Box>
  );
}
