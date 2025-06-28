import {
  AppBar, Toolbar, Typography, IconButton, Box, Button, useTheme,
  Drawer, List, ListItem, ListItemIcon, ListItemText, useMediaQuery
} from '@mui/material';
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material';
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
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box
      sx={{ 
        width: 280,
        height: '100%',
        bgcolor: 'background.paper',
        pt: 2
      }}
      role="presentation"
    >
      <List>
        {navLinks.map((link) => (
          <ListItem
            button
            key={link.path}
            component={RouterLink}
            to={link.path}
            selected={location.pathname === link.path}
            onClick={toggleDrawer}
            sx={{
              py: 1.5,
              '&.Mui-selected': {
                backgroundColor: theme.palette.action.selected,
                color: theme.palette.primary.main,
              },
              '&.Mui-selected:hover': {
                backgroundColor: theme.palette.action.selected,
              },
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              }
            }}
          >
            <ListItemText 
              primary={link.label}
              primaryTypographyProps={{
                fontWeight: 500,
                fontFamily: theme.typography.fontFamily,
                color: 'text.primary'
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="static" 
        color="default" 
        elevation={0} 
        sx={{ 
          borderBottom: 1, 
          borderColor: 'divider', 
          bgcolor: 'background.paper' 
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box 
              component={RouterLink} 
              to="/" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                textDecoration: 'none', 
                mr: 1 
              }}
            >
              <Box
                component="img"
                src="/briks.png"
                alt="Briks Academy Logo"
                sx={{ height: 38, width: 'auto', mr: 1 }}
              />
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'primary.main', 
                  fontWeight: 700,
                  fontFamily: theme.typography.fontFamily
                }}
              >
                Briks Academy
              </Typography>
            </Box>
          </Box>

          {isMobile ? (
            <IconButton 
              edge="end" 
              color="inherit" 
              onClick={toggleDrawer}
              sx={{
                color: 'text.primary'
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2, ml: 2 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  color={location.pathname === link.path ? 'primary' : 'inherit'}
                  sx={{ 
                    fontWeight: 500,
                    fontFamily: theme.typography.fontFamily,
                    color: location.pathname === link.path ? 
                      'primary.main' : 'text.primary'
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <IconButton 
                onClick={toggleColorMode} 
                sx={{ color: 'text.primary' }}
              >
                {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer 
        anchor="right" 
        open={mobileOpen} 
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            bgcolor: 'background.paper'
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
