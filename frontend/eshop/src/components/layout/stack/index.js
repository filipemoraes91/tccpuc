import React from "react";
import { Stack } from "@mui/material";

export function StackCenter(props) {
    return (<Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
    >
        {props.children}
    </Stack>
    )
}

export function StackJustify(props) {
    return (<Stack
        direction={props.direction ? props.direction : "row"}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
    >
        {props.children}
    </Stack>
    )
}

export function StackRight(props) {
    return (<Stack
        direction="row"
        justifyContent="end"
        alignItems="end"
        spacing={2}
    >
        {props.children}
    </Stack>
    )
}