import React, { useContext, FunctionComponent } from 'react';
import { Box, Card, CardContent, CardMedia, Container, Typography } from '@material-ui/core';
import { AppContext } from '../Store/AppContext';

export const VehicleInfoCard: FunctionComponent = () => {
    const { state } = useContext(AppContext);
    const { vehicleData } = state;
    return (
        <>
            {vehicleData ?
                <Container maxWidth='lg' style={{ padding: '80px' }}>
                    <Box display='flex' justifyContent='space-around' flexWrap='wrap'>
                        <Card style={{ width: '700px', padding: '10px' }}>
                            <CardMedia
                                image='https://i.ibb.co/Q6dKpdp/car.jpg'
                                title='Car Image'
                                style={{ height: 0, paddingTop: '35%' }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">Your Vehicle Information</Typography>
                                <Box display="flex" justifyContent='flex-start' width='100%'>
                                    <Typography variant='body2' color='textSecondary' component='div' style={{ wordWrap: 'break-word', wordBreak: 'break-all' }}>
                                        Year: {vehicleData?.year}<br />
                                        Make: {vehicleData?.make}<br />
                                        Make: {vehicleData?.model}<br />
                                        Body Style: {vehicleData?.body_style}<br />
                                        Vehicle Services Id: {vehicleData?.vehicle_services_id}<br />
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Container >
                : undefined
            }
        </>
    )
};
