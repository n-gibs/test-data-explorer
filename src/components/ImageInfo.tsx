import React, { ReactElement, FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from '../types/Image';

interface ImageProps {
    image: Image;
}

const ImageInfo: FC<any> = ({ image }: ImageProps): ReactElement => {
    const headers = [
        'id',
        'filename',
        'label',
        'height',
        'width',
        'dimension',
        'size',
        'max_RGB',
        'min_RGB',
        'red',
        'green',
        'blue',
    ];
    return (
        <Box
            sx={{
                flexGrow: 1,
                backgroundColor: 'whitesmoke',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
            }}
        >
            <Grid item xs={6}>
                {headers.map((head, idx) => {
                    return (
                        <Grid item key={idx}>
                            <Typography
                                variant='h6'
                                gutterBottom
                                sx={{ fontWeight: 'bold' }}
                            >
                                {head}
                            </Typography>
                        </Grid>
                    );
                })}
            </Grid>
            <Grid item xs={6} alignItems='flex-start'>
                {headers.map((head, idx) => {
                    type ObjectKey = keyof typeof image;
                    const h = headers[idx] as ObjectKey;

                    return (
                        <Grid item key={idx}>
                            <Typography variant='h6' gutterBottom>
                                {image[h]}
                            </Typography>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default ImageInfo;
