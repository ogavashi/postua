import React from 'react';

import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { Header, ScrollTop } from '@/components';
import { SideMenu } from '@/features/sideMenu';

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Toolbar id='back-to-top-anchor' />
      <Box display='flex'>
        <SideMenu sx={{ display: { xs: 'none', md: 'flex' } }} />
        <Container maxWidth='md'>{children}</Container>
      </Box>
      <ScrollTop>
        <Fab size='small' aria-label='scroll back to top' color='primary'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
};
