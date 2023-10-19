import { TextField } from "@mui/material";
import React from "react";


export function TFDefault(props) {
    return <TextField id={props.id} name={props.name} type={props.type} label={props.label} onChange={props.onChange}
            variant="outlined" value={props.value} size="small" color={props.color} fullWidth={props.fullWidth}/>
}

export function TFUser(props) {
    return <TFDefault id="user" name="user" type='text' value={props.value} label="Usuário" color="secondary"/>
}

export function TFPassword(props) {
    return <TFDefault id="senha" name="senha" type="Password" value={props.value} label="Senha"/>
}