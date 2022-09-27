import React, { ReactElement, FC, useState, useEffect } from 'react';
import {
    Box,
    FormControl,
    Grid,
    InputLabel,
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

    function handleFilterChange(e: SelectChangeEvent) {
        const filter = e.target.value;
        setFilter(filter as string);
        loadImagesBasedOnFilter(filter);
    }

    function loadImagesBasedOnFilter(filter: string) {
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
        <Box
            sx={{
                flexGrow: 1,
                backgroundColor: 'whitesmoke',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Grid
                container
                gridTemplateColumns='2fr'
                gridTemplateRows='2fr'
                rowSpacing={1}
                columnSpacing={1}
                justifyContent='space-around'
                alignItems='center'
                width='95vw'
            >
                <Grid item gridColumn={1} gridRow={1} xs={9}>
                    <Typography variant='h4'>Select A Picture</Typography>
                </Grid>
                <Grid item gridColumn={2} gridRow={1} xs={3}>
                    <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id='select-label'>Filter By Label</InputLabel>
                        <Select
                            value={filter}
                            labelId='select-label'
                            label='Filter By Label'
                            onChange={handleFilterChange}
                        >
                            <MenuItem value='all'>All Images</MenuItem>
                            <MenuItem value='good'>Good Images</MenuItem>
                            <MenuItem value='bad'>Bad Images</MenuItem>
                        </Select>
                    </FormControl>
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
                          <Box>
                            <img
                                key={index}
                                width='300'
                                height='300'
                                src={`${process.env.PUBLIC_URL}/images/${image.filename}`}
                                alt={image.label}
                                onClick={() => handleOnClick(image.id)}
                            ></img>
                            </Box>
                        );
                    })}
                </Grid>
                <Grid item gridColumn={2} gridRow={2} xs={6}>
                    {!isLoading ? <ImageInfo image={selectedImage} /> : null}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Analyze;
