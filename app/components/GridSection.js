'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} direction="row">
                <Grid item xs={4}>
                    
                    <Item>
                        <a href="https://example.com/image1">
                            <img src="https://th.bing.com/th/id/OIP.XQ57-8zhoGaFRcp039MHlwHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="Example 1" style={{ width: '100%' }} />
                        </a>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <a href="https://example.com/image2">
                            <img src="https://th.bing.com/th/id/OIP.pjmWaqqu2esXdN13UUJseAHaEx?rs=1&pid=ImgDetMain" alt="Example 2" style={{ width: '100%' }} />
                        </a>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <a href="https://example.com/image3">
                            <img src="https://3.bp.blogspot.com/-pQ2VDveSFok/VKxlww9ITHI/AAAAAAAAAGc/2Oom-eJGO4Q/s1600/Y.jpg" alt="Example 3" style={{ width: '100%' }} />
                        </a>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
