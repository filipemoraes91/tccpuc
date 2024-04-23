import { TextField } from "@mui/material";
import React from "react";


export function TFDefault(props) {
    return <TextField id={props.id} name={props.name} type={props.type} label={props.label} onChange={props.onChange}
        variant="outlined" value={props.value} size="small" color={props.color} fullWidth={props.fullWidth}
        multiline={props.multiline} rows={props.rows}
    />
}

export function TFText(props) {
    return <TFDefault id={props.id} name={props.name} type='text' value={props.value} label={props.label} fullWidth={true} onChange={props.onChange} />
}

export function TFUser(props) {
    return <TFDefault id="Email" name="Email" type='email' value={props.value} label="Email" color="secondary" fullWidth={true} onChange={props.onChange} />
}

export function TFPassword(props) {
    return <TFDefault id="Senha" name="Senha" type="Password" value={props.value} label="Senha" fullWidth={true} onChange={props.onChange} />
}

export function TFPasswordConfirme(props) {
    return <TFDefault id="Senha" name="ConfirmarSenha" type="Password" value={props.value} label="Senha" fullWidth={true} onChange={props.onChange} />
}

export function TFQtde(props) {
    return <input id="qtde" name="qtde" value={props.value} label="Qtde" onChange={props.onChange} style={{ width: '50px', borderRadius: '5px', height: '18px' }} />
}