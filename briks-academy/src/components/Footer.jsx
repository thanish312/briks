import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, textAlign: 'center', bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider', mt: 8 }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Briks Academy. All rights reserved.
      </Typography>
    </Box>
  );
}
