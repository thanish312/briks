import { Box, Typography, Divider, Stack, Button } from '@mui/material';

const papers = [
  {
    subject: 'Chemistry',
    files: [
      { label: 'Chemistry Model Paper 1', url: '#' },
      { label: 'Chemistry Model Paper 2', url: '#' },
    ],
  },
  {
    subject: 'Physics',
    files: [
      { label: 'Physics Model Paper 1', url: '#' },
      { label: 'Physics Model Paper 2', url: '#' },
    ],
  },
  {
    subject: 'Biology',
    files: [
      { label: 'Biology Model Paper 1', url: '#' },
      { label: 'Biology Model Paper 2', url: '#' },
    ],
  },
  {
    subject: 'Maths',
    files: [
      { label: 'Math Model Paper 1', url: '#' },
      { label: 'Maths Model Paper 2', url: '#' },
    ],
  },
];

export default function PUC1Papers() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, md: 6 }, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h4" fontWeight={700} color="primary.main" gutterBottom>
        1st PUC Question Paper
      </Typography>
      <Divider sx={{ my: 4 }} />
      <Stack spacing={4}>
        {papers.map((subject, idx) => (
          <Box key={idx}>
            <Typography variant="h6" fontWeight={600} gutterBottom>{subject.subject}</Typography>
            <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
              {subject.files.map((file, i) => (
                <Button key={i} variant="outlined" href={file.url} target="_blank">
                  {file.label}
                </Button>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h6" fontWeight={700} sx={{ mt: 3 }}>
        Contact
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Like what you see? Get in touch to learn more.
      </Typography>
      {/* Contact form can be added here in the future */}
      <Divider sx={{ my: 4 }} />
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
        ©{new Date().getFullYear()} by Briks Academy.
      </Typography>
    </Box>
  );
}
