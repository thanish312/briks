import { AppBar, Toolbar, Typography, IconButton, Box, Button, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Faculty', path: '/faculty' },
  { label: 'Student Life', path: '/student-life' },
  { label: 'Question Papers', path: '/question-papers' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar({ mode, toggleColorMode }) {
  const theme = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component={RouterLink} to="/" sx={{ textDecoration: 'none', color: 'primary.main', fontWeight: 700, mr: 4 }}>
            Briks Academy
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                component={RouterLink}
                to={link.path}
                color={location.pathname === link.path ? 'primary' : 'inherit'}
                sx={{ fontWeight: 500 }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
