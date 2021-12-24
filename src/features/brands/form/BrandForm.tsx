import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import { Formik } from 'formik';
import * as Yup from 'yup';


import { Brand } from '../../../app/models/brand';
import { Box, Button, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material';




export default observer(function BrandForm() {


    const history = useHistory();
    const { brandStore } = useStore();
    const { createBrand, updateBrand, loadBrand, loading, loadingInitial } = brandStore;
    const { id } = useParams<{ id: string }>();

    const [brand, setBrand] = useState<Brand>({
        id: '',
        name: '',
        description: '',
    });

    //gets passed to formik
    const validationSchema = Yup.object({
        name: Yup.string().required('The brand name is required'),
        description: Yup.string().required('The brand description is required'),

    })

    useEffect(() => {
        if (id) loadBrand(id).then(brand => setBrand(brand!))
    }, [id, loadBrand])




    function handleFormSubmit(brand: Brand) {
        if (brand.id.length === 0) {


            createBrand(brand).then(() => history.push(`/brands/`))
        } else {
            updateBrand(brand).then(() => history.push(`/editBrand/${brand.id}`))
        }
    }


    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };



    if (loadingInitial) return <LoadingComponent content='Loading activity...' />

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





                <Typography variant="h4" gutterBottom>
                    Create Brand
                </Typography>

                <Box component="form"  autoComplete='off' onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                               
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                autoComplete='off'
                                required
                                fullWidth
                                id="description"
                                label="Description"
                                name="description"
                            />
                        </Grid>
         
              
                    </Grid>
                    <Button
                        type="submit"
                        
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Submit
                    </Button>
                    
                </Box>

            </Container>
        </Box>
    )
})

