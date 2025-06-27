import { Box, Typography, Divider, Button, Stack, Grid, Paper } from '@mui/material';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const papers = {
  '1st PUC': {
    Chemistry: [
      { label: 'Chemistry Model Paper 1', url: '#' },
      { label: 'Chemistry Model Paper 2', url: '#' },
    ],
    Physics: [
      { label: 'Physics Model Paper 1', url: '#' },
      { label: 'Physics Model Paper 2', url: '#' },
    ],
    Biology: [
      { label: 'Biology Model Paper 1', url: '#' },
      { label: 'Biology Model Paper 2', url: '#' },
    ],
    Maths: [
      { label: 'Math Model Paper 1', url: '#' },
      { label: 'Maths Model Paper 2', url: '#' },
    ],
  },
  '2nd PUC': {
    Chemistry: [
      { label: 'Chemistry Model Paper 1', url: '#' },
      { label: 'Chemistry Model Paper 2', url: '#' },
    ],
    Physics: [
      { label: 'Physics Model Paper 1', url: '#' },
      { label: 'Physics Model Paper 2', url: '#' },
    ],
    Biology: [
      { label: 'Biology Model Paper 1', url: '#' },
      { label: 'Biology Model Paper 2', url: '#' },
    ],
    Maths: [
      { label: 'Math Model Paper 1', url: '#' },
      { label: 'Maths Model Paper 2', url: '#' },
    ],
  },
};

export default function QuestionPapers() {
  const [selected, setSelected] = useState(null);

  return (
    <Box component={motion.div} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
      sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 6 }, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h2" fontWeight={800} color="primary.main" gutterBottom>
        Question Papers
      </Typography>
      <Typography variant="h5" fontWeight={600} color="text.secondary" sx={{ mb: 3 }}>
        You can access 1st PUC and 2nd PUC question papers here. Click to view them now.
      </Typography>
      <Divider sx={{ my: 5 }} />
      <AnimatePresence mode="wait">
        {!selected && (
          <Grid container spacing={5}>
            {Object.keys(papers).map((key) => (
              <Grid item xs={12} md={6} key={key}>
                <Paper component={motion.div} whileHover={{ scale: 1.03, boxShadow: 8 }} elevation={3} sx={{ p: 5, borderRadius: 4, boxShadow: 4, textAlign: 'center', cursor: 'pointer' }} onClick={() => setSelected(key)}>
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
            <Button variant="outlined" onClick={() => setSelected(null)} sx={{ mb: 4 }}>
              Back
            </Button>
            <Grid container spacing={4}>
              {Object.entries(papers[selected]).map(([subject, files]) => (
                <Grid item xs={12} md={6} key={subject}>
                  <Paper elevation={2} sx={{ p: 4, borderRadius: 3, boxShadow: 3, mb: 2 }}>
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
