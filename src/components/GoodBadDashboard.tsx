import { Box, Typography } from '@mui/material';
import React from 'react';

type Props = {
    goodTotal: number;
    badTotal: number;
    imageTotal: number;
};

const GoodBadDashboard = (props: Props) => {
    return (
        <Box border='3px solid' marginTop='10px'
        sx={{ borderRadius: '5px' }}>
            <Typography
                gutterBottom
                variant='h3'
            >
                Good Images: {props.goodTotal}
            </Typography>
            <Typography gutterBottom variant='h3'
            >
                Bad Images: {props.badTotal}
            </Typography>
            <Typography variant='h3'>
                Total Images: {props.imageTotal}
            </Typography>
        </Box>
    );
};

export default GoodBadDashboard;
