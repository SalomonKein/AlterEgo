import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



function ResponsiveAppBar() {
    const isAuth = false
    // useSelector(state => state.auth.isAuth )
  const navigate = useNavigate()
  
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> 
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           <Button
                onClick={() => navigate('/')}
                sx={{ my: 2, mx: 3, color: 'white', display: 'block' }}
              >
                Main page
              </Button>
              <Button
                onClick={() => navigate('/News')}
                sx={{ my: 2,  color: 'white', display: 'block' }}
              >
                News
              </Button>
           
          </Box>

          {isAuth?
            <Box sx={{ fflexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
             <Button
                onClick={() => navigate('/Profile')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Profile
              </Button>
              <Button
                onClick={() => navigate('/')}
                sx={{ my: 2, mx: 3, color: 'white', display: 'block' }}
              >
                Sign out
              </Button>
           
          </Box>
:
          <Box sx={{ fflexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
             <Button
                onClick={() => navigate('/auth')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Sign in
              </Button>
              <Button
                onClick={() => navigate('/registration')}
                sx={{ my: 2, mx: 3, color: 'white', display: 'block' }}
              >
                Sign up
              </Button>
           
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;