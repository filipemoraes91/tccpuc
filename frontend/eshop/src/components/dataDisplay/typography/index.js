import React from "react";
import Typography from '@mui/material/Typography';

function TGDefault(props) {
    return <Typography variant={props.variant} gutterBottom color={props.color} sx={props.sx} fontSize={props.fontSize}>
        {props.text}
    </Typography>
}

export function TGLogin() {
    return <TGDefault variant="h4" text="Login" color='#000' />
}

export function TGMenuDivider(props) {
    return <TGDefault variant="overline" text={props.text} color='#5e5e5e' />
}

export function TGPageTitle(props) {
    return <TGDefault variant="button" component="div" sx={{ flexGrow: 1, fontSize: 18 }} text={props.text} color='#000' />
}

export function TGMedio(props) {
    return <TGDefault variant="button" component="div" sx={{ flexGrow: 1 }} text={props.text} color='#000' />
}
