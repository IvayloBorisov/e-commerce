import { NavLink as RouterNavLink, Link as RouterLink } from "react-router-dom";
import { Link as ChakraUILink } from "@chakra-ui/react";

const ChakraRouterCustomLink = ({ to, children, navLink, ...rest }) => {

    const linkContext = navLink ? RouterNavLink : RouterLink
    return (
        <ChakraUILink to={to} as={linkContext} {...rest} _hover={{textDecoration: 'none'}}>
            {children}
        </ChakraUILink>
    )
}

export default ChakraRouterCustomLink;
