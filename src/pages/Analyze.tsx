import React, { ReactElement, FC, useState, useEffect } from 'react';
import {
    Box,
    Grid,
    MenuItem,
    Select,
    SelectChangeEvent,
    Typography,
} from '@mui/material';
import { getImageById, getImagesAndMetadata, getImagesByLabel } from '../api/image';
import Image from '../types/Image';
import ImageInfo from '../components/ImageInfo';

const Analyze: FC<any> = (): ReactElement => {
    const [images, setImages] = useState<Image[]>([]);
    const [selectedImage, setSelectedImage] = useState<Image>();
    const [filter, setFilter] = useState('all');
    useEffect(() => {
        loadImagesBasedOnFilter('all');
    }, []);


    let isLoading: boolean = images.length <= 0;

    function handleOnClick(id: number) {
        const img = getImageById(id);
        setSelectedImage(img);
    }

    function handleFilterChange(e: SelectChangeEvent<string>) {
        const filter = e.target.value;
        setFilter(filter as string)
        loadImagesBasedOnFilter(filter)
    }

    function loadImagesBasedOnFilter(filter:string) {
      if (filter === 'all') {
        let imgs = getImagesAndMetadata();
        if (imgs.length > 0) {
            setImages(imgs);
            setSelectedImage(imgs[0]);
        }
      } else {
        const filteredImages = getImagesByLabel(filter);
        setImages(filteredImages);
        setSelectedImage(filteredImages[0]);
      }
    }

    return (
        <Grid
            container
            gridTemplateColumns='2fr'
            gridTemplateRows='2fr'
            rowSpacing={1}
            direction='row'
            justifyContent='space-around'
            alignItems='center'
            height='90%'
        >
            <Grid item gridColumn={1} gridRow={1} xs={8}>
                <Typography variant='h4'>Apple Dataset</Typography>
            </Grid>
            <Grid item gridColumn={2} gridRow={1} xs={2}>
                <Select value={filter} label='Filter By Label' onChange={handleFilterChange}>
                    <MenuItem value='all'>All Images</MenuItem>
                    <MenuItem value='good'>Good Images</MenuItem>
                    <MenuItem value='bad'>Bad Images</MenuItem>
                </Select>
            </Grid>
            <Grid
                item
                xs={6}
                gridColumn={1}
                gridRow={2}
                sx={{ overflowY: 'scroll', maxHeight: '90vh' }}
            >
                {images.map((image, index) => {
                    return (
                            <img
                                key={index}
                                width='300'
                                height='300'
                                src={`${process.env.PUBLIC_URL}/images/${image.filename}`}
                                alt={image.label}
                                onClick={() => handleOnClick(image.id)}
                            ></img>
                    );
                })}
            </Grid>
            <Grid item gridColumn={2} gridRow={2} xs={6}>
                {!isLoading ? <ImageInfo image={selectedImage} /> : null}
            </Grid>
        </Grid>
    );
};

export default Analyze;
