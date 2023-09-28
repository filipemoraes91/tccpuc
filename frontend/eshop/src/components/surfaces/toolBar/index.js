import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Paper } from '@mui/material';
import { StackJustify } from '../../layout/stack';
import { TGPageTitle } from '../../dataDisplay/typography';
import { BtnNovo, BtnVoltar } from '../../inputs/button';

export default function ToolBarPages(props) {
    return (
        <Paper elevation={1}>
            <Box sx={{ backgroundColor: '#3e3e3e', borderRadius: '5px', padding: '5px' }}>
                <StackJustify>
                    <TGPageTitle text={props.title} />
                    <Box>
                        <StackJustify>
                            <BtnNovo />
                            <BtnVoltar />
                        </StackJustify>
                    </Box>
                </StackJustify>
            </Box>
        </Paper>
    );
}