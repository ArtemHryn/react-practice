import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavItem = styled(NavLink)`
    text-decoration: none;
    font-size: 20px;
    color: blue;
    :first-child{
        margin-right: 20px;
    }
    &.active {
        color: pink;
    }
    :hover {
        scale: 1.1;
    }
`