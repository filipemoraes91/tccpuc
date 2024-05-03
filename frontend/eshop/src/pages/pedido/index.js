import React, { useEffect, useState } from "react";
import { ContainerPages } from "../../components/layout/container";
import { Box, Card, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Typography } from "@mui/material";
import { CardItemCar } from "../../components/surfaces/card";
import useCarrinho from "../../hooks/useCarrinho";
import ToolBarPages from "../../components/surfaces/toolBar";
import { StackJustify, StackRight } from "../../components/layout/stack";
import { BtnFinalizar } from "../../components/inputs/button";
import SelectUF, { SelectMun, SelectParc } from "../../components/inputs/select";
import { TFDefault } from "../../components/inputs/textField";
import { getInfUser } from "../../utils";
import useUsuarios from "../../hooks/useUsuarios";

export default function Pedido() {
    const { getItens, itens } = useCarrinho();
    const [tipoEnd, setTipoEnd] = useState('meu');
    const { getUsuario, usuario, isLoading } = useUsuarios();
    const [pedido, setPedido] = useState({ DataPedido: new Date(), TotalPedido: 0, UsuarioID: 0, EntregaID: 0, PagamentoID: 0, });
    const [entrega, setEntrega] = useState({ Estado: '', Cidade: '', Rua: '', CEP: '', Numero: 0, Complemento: '' })
    let total = 0;

    useEffect(() => {
        getItens()
    }, [])

    useEffect(() => {
        AtualizarEntrega()
    }, [tipoEnd, isLoading])

    function AtualizarEntrega() {
        if (tipoEnd === 'meu') {
            getUsuario(getInfUser().ID)
            setEntrega(usuario);
        }
    }

    function ListItens(item, i) {
        total = total + parseFloat(item.Preco);
        return <CardItemCar key={i}
            produto={item}
        />
    }

    const handleChangeEnd = (e) => {
        setTipoEnd('outro');
        const { name, value } = e.target;
        setEntrega({ ...entrega, [name]: value });
    }

    return (
        <ContainerPages>
            <ToolBarPages title='Finalizar Pedido' />
            <p />
            <Card>
                <ToolBarPages title='Itens do Pedido' />
                {itens ? itens.length > 0 ? itens.map(ListItens) : <h4>Não existem itens no carrinho</h4> : <h1>Aguarde...</h1>}
            </Card>
            <p />
            <Card>
                <ToolBarPages title='Endereço de entraga' />
                <Box p={1}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="meu"
                        name="radio-buttons-group"
                        value={tipoEnd}
                        onChange={(e) => setTipoEnd(e.target.value)}
                    >
                        <FormControlLabel value="meu" control={<Radio size="small" />} label="Endereço Principal" />
                        <FormControlLabel value="outro" control={<Radio size="small" />} label="Outro Endereço" />
                    </RadioGroup>
                    <StackJustify>
                        <SelectUF name='Estado' onChange={handleChangeEnd} value={entrega.Estado} />
                        <SelectMun uf={entrega.Estado} name='Cidade' onChange={handleChangeEnd} value={entrega.Cidade} />
                    </StackJustify>
                    <br />
                    <StackJustify>
                        <TFDefault fullWidth={true} label="Número" name='Numero' value={entrega.Numero} onChange={handleChangeEnd} />
                        <TFDefault fullWidth={true} label="Rua" name='Rua' value={entrega.Rua} onChange={handleChangeEnd} />
                        <TFDefault fullWidth={true} label="CEP" name='CEP' value={entrega.CEP} onChange={handleChangeEnd} />
                    </StackJustify>
                    <br />
                    <StackJustify>
                        <TFDefault fullWidth={true} label="Complemento" multiline={true} rows={3} name='Complemento' value={entrega.Complemento} onChange={handleChangeEnd} />
                    </StackJustify>
                </Box>
            </Card>
            <p />
            <Card>
                <ToolBarPages title='Forma de pagamento' />
                <Box p={1}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="meu"
                        name="radio-buttons-group"
                        value={tipoEnd}
                        onChange={(e) => setTipoEnd(e.target.value)}
                    >
                        <FormControlLabel value="boleto" control={<Radio size="small" />} label="Boleto" />
                        <FormControlLabel value="pix" control={<Radio size="small" />} label="Pix" />
                        <FormControlLabel value="credito" control={<Radio size="small" />} label="Crédito" />
                        <FormControlLabel value="debito" control={<Radio size="small" />} label="Débito" />
                    </RadioGroup>
                    <SelectParc />
                </Box>
            </Card>
            <p />
            <Paper elevation={1}>
                <Box p={1}>
                    <Box p={1}>
                        <StackRight>
                            <Typography variant="button" component="div" sx={{ flexGrow: 1, fontSize: 16, fontWeight: '600' }} >Total do Pedido</Typography>
                            <Typography variant="button" component="div" sx={{ fontSize: 16, fontWeight: '600' }} >{total.toFixed(2)}</Typography>
                        </StackRight>
                    </Box>
                    <StackRight>
                        <Box p={1}>
                            <BtnFinalizar />
                        </Box>
                    </StackRight>
                </Box>
            </Paper>
        </ContainerPages >
    )
}