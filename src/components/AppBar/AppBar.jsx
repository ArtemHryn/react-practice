import { Box } from 'components/Box';
import { NavItem } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Box
      as="header"
      display="flex"
      borderBottom="1px solid black"
    >
      <h1>English</h1>
      <Box as="nav" display="flex" ml="30px">
        <NavItem to="/">Home</NavItem>
        <NavItem to="learn_words">Lear Words</NavItem>
      </Box>
    </Box>
  );
};
