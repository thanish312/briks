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
          <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', mr: 1 }}>
            <Box
              component="img"
              src="/briks.png"
              alt="Briks Academy Logo"
              sx={{ height: 38, width: 'auto', mr: 1, p: 0, m: 0, display: 'block' }}
            />
            <Typography variant="h6" sx={{ textDecoration: 'none', color: 'primary.main', fontWeight: 700, ml: 0 }}>
              Briks Academy
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, ml: 2 }}>
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
