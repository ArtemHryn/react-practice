import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'components/Box';
import GlobalStyle from 'components/GlobalStyle';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box>
      <GlobalStyle />
      <AppBar />
      <Outlet />
    </Box>
  );
};
