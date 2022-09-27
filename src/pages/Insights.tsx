import React, { ReactElement, FC, useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { getImagesAndMetadata, getTotalForFilter } from '../api/image';
import DataTable from '../components/DataTable';
import Image from '../types/Image';
import GoodBadChart from '../components/GoodBadChart';
import GoodBadDashboard from '../components/GoodBadDashboard';

type GraphData = {
    name: string;
    amount: number;
};

const Insights: FC<any> = (): ReactElement => {
    const [images, setImgages] = useState<Image[]>([]);
    const [goodBadData, setGoodBadData] = useState<GraphData[]>([]);
    const [goodTotal, setGoodTotal] = useState(0);
    const [badTotal, setBadTotal] = useState(0);

    useEffect(() => {
        let imgs = getImagesAndMetadata();
        if (imgs.length > 0) {
            setImgages(imgs);
            setGoodTotal(getTotalForFilter('label', 'good'));
            setBadTotal(getTotalForFilter('label', 'bad'));
            setGoodBadData([
                {
                    name: 'Good',
                    amount: goodTotal,
                },
                {
                    name: 'Bad',
                    amount: badTotal,
                },
            ]);
        }
    }, [images, badTotal, goodTotal]);

    const headers = [
        'id',
        'thumbnail',
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
                alignItems: 'center',
            }}
        >
            <Grid
                container
                spacing={2}
                width='95vw'
                justifyContent='space-around'
            >
                <Grid item xs={5}>
                    <GoodBadDashboard
                        goodTotal={goodTotal}
                        badTotal={badTotal}
                        imageTotal={images.length}
                    />
                </Grid>
                <Grid item xs={7}>
                    <GoodBadChart data={goodBadData} />
                </Grid>
                <Grid item xs={12}>
                    <DataTable headers={headers} rows={images} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Insights;
