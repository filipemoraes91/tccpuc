import { TextField } from "@mui/material";
import React from "react";


export function TFDefault(props) {
    return <TextField id={props.id} name={props.name} type={props.type} label={props.label} onChange={props.onChange}
        variant="outlined" value={props.value} size="small" color={props.color} fullWidth={props.fullWidth}
        multiline={props.multiline} rows={props.rows}
    />
}

export function TFUser(props) {
    return <TFDefault id="email" name="email" type='email' value={props.value} label="Usuário" color="secondary" fullWidth={true} onChange={props.onChange} />
}

export function TFPassword(props) {
    return <TFDefault id="senha" name="senha" type="Password" value={props.value} label="Senha" fullWidth={true} onChange={props.onChange} />
}

export function TFQtde(props) {
    return <input id="qtde" name="qtde" type="number" min="1" value={props.value} label="Qtde" onChange={props.onChange} style={{ width: '50px', borderRadius: '5px', height: '18px' }} />
}