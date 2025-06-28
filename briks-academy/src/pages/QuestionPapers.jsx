import { Box, Typography, Divider, Button, Stack, Grid, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SchoolIcon from '@mui/icons-material/School';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const papers = {
  '1st PUC': {
    Chemistry: [
      { label: 'Chemistry Paper 1', url: 'https://www.brikskr.com/_files/ugd/f87a8f_8d8fc082705a468cabc26eb190d73598.pdf' },
      { label: 'Chemistry Paper 2', url: 'https://www.brikskr.com/_files/ugd/f87a8f_787633b43aef4cafb06c24cc618a9382.pdf' },

    ],
    Physics: [
      { label: 'Physics Paper 1', url: 'https://www.brikskr.com/_files/ugd/f87a8f_32a3426d08554bd7bb3b098d55ae32ca.pdf' },
      { label: 'Physics Paper 2', url: 'https://www.brikskr.com/_files/ugd/f87a8f_a27a7ad357fc4c63bb16c27649d1aafc.pdf' },

    ],
    Biology: [
      { label: 'Biology Paper 1', url: 'https://www.brikskr.com/_files/ugd/f87a8f_5599b126d1b44919aa29eb561924f3d3.pdf' },
      { label: 'Biology Paper 2', url: 'https://www.brikskr.com/_files/ugd/f87a8f_751a60a64b2b40e691fb9cda91b3b013.pdf' },

    ],
    Maths: [
      { label: 'Maths Paper 1', url: 'https://www.brikskr.com/_files/ugd/f87a8f_761410d86e504be0802d49c5b1e84087.pdf' },
      { label: 'Maths Paper 2', url: 'https://www.brikskr.com/_files/ugd/f87a8f_b4b813ffb41c47d7a8be28531219baeb.pdf' },

    ],
  },
  '2nd PUC': {
    Chemistry: [
      { label: 'Advanced Chemistry 1', url: '#' },
      { label: 'Advanced Chemistry 2', url: '#' },

    ],
    Physics: [
      { label: 'Modern Physics I', url: '#' },
      { label: 'Thermodynamics II', url: '#' },

    ],
    Biology: [
      { label: 'Genetics Paper', url: '#' },
      { label: 'Microbiology Guide', url: '#' },

    ],
    Maths: [
      { label: 'Calculus Paper', url: '#' },
      { label: 'Algebra Paper', url: '#' },

    ],
  },
};

export default function QuestionPapers() {
  const [selected, setSelected] = useState(null);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      sx={{ 
        py: { xs: 4, md: 8 },
        px: { xs: 2, sm: 4 },
        maxWidth: 1200,
        mx: 'auto',
        minHeight: '100vh',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" fontWeight={800} color="primary.main" gutterBottom align="center">
          <LibraryBooksIcon sx={{ fontSize: '2.5rem', verticalAlign: 'middle', mr: 1.5 }} />
          Question Papers
        </Typography>
        <Typography variant="h5" fontWeight={500} color="text.secondary" align="center">
          Access pre-university course materials and test papers
        </Typography>
      </Box>
      <Divider sx={{ my: 4 }} />
      <AnimatePresence mode="wait">
        {!selected && (
          <Grid container spacing={3} justifyContent="center">
            {Object.keys(papers).map((key) => (
              <Grid item xs={12} sm={10} md={6} key={key} display="flex" justifyContent="center">
                <Paper
                  component={motion.div}
                  whileHover={{ scale: 1.03, boxShadow: 6 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  elevation={4}
                  onClick={() => setSelected(key)}
                  sx={{ 
                    p: { xs: 2, sm: 4 }, 
                    borderRadius: 4,
                    textAlign: 'center',
                    cursor: 'pointer',
                    maxWidth: 400,
                    mx: 'auto',
                  }}
                >
                  <SchoolIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
                  <Typography variant="h5" fontWeight={700} color="primary.main" gutterBottom>
                    {key} Question Papers
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Click to view all {key} subject papers
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
        {selected && (
          <Box component={motion.div} key={selected} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.5 }}>
            <Button variant="outlined" onClick={() => setSelected(null)} sx={{ mb: 4 }} startIcon={<ArrowBackIcon />}>
              Back
            </Button>
            <Grid container spacing={4} justifyContent="center">
              {Object.entries(papers[selected]).map(([subject, files]) => (
                <Grid item xs={12} md={6} key={subject} display="flex" justifyContent="center">
                  <Paper elevation={2} sx={{ p: 4, borderRadius: 3, boxShadow: 3, mb: 2, maxWidth: 400, mx: 'auto', textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight={700} color="primary.main" gutterBottom>
                      {subject}
                    </Typography>
                    <Stack spacing={2}>
                      {files.map((file, idx) => (
                        <Button key={idx} variant="contained" color="secondary" href={file.url} target="_blank" sx={{ fontWeight: 600, fontSize: 18 }}>
                          {file.label}
                        </Button>
                      ))}
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </AnimatePresence>
      <Divider sx={{ my: 5 }} />
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
        ©{new Date().getFullYear()} by Briks Academy.
      </Typography>
    </Box>
  );
}
