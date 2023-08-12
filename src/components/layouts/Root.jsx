import { Outlet } from 'react-router-dom';
import {Box} from '@chakra-ui/react';
import Navbar from '../navbar/Navbar';
import PromotionBanner from '../promotionBanner';
import Footer from '../footer/Footer';

const Root = () => {

    return (
        <Box>
            <Navbar />
            <PromotionBanner />
            <Outlet />
            <Footer />
        </Box>
    )
}

export default Root;
