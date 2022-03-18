import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import Box from '@mui/material/Box';

import BrandListTable2 from './BrandListTable2';
import { Container } from '@mui/material';
import BrandHeader from './BrandHeader';




export default observer(function BrandDashboard() {


    const { brandStore } = useStore();
    const { loadBrands, brandRegistry } = brandStore;

    useEffect(() => {
        if (brandRegistry.size <= 1) loadBrands();
    }, [brandRegistry.size, loadBrands])


    if (brandStore.loadingInitial) return <LoadingComponent content='Loading Brands...' />

    return (
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
                <BrandHeader/>
                <BrandListTable2 />
            </Container>


        </Box>



    )
})