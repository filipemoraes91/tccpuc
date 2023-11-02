import * as React from 'react';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { StackJustify } from '../../layout/stack';
import { TGPageTitle } from '../../dataDisplay/typography';
import { BtnNovo } from '../../inputs/button';

export default function ToolBarPages(props) {
    return (
        <Paper elevation={1}>
            <Box sx={{ backgroundColor: '#e9e9e9', borderRadius: '5px', padding: '5px' }}>
                <StackJustify>
                    <TGPageTitle text={props.title} />
                    <Box style={{display: props.btnVisible ? '' : 'none'}}>
                        <StackJustify>
                            <BtnNovo onClick={props.onClickNovo} />
                        </StackJustify>
                    </Box>
                </StackJustify>
            </Box>
        </Paper>
    );
}