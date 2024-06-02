import React, { useEffect, useState } from "react";
import { ContainerPages } from "../../components/layout/container";
import { Box, Card, FormControlLabel, Paper, Radio, RadioGroup, Typography } from "@mui/material";
import { CardItemCar } from "../../components/surfaces/card";
import useCarrinho from "../../hooks/useCarrinho";
import ToolBarPages from "../../components/surfaces/toolBar";
import { StackJustify, StackRight } from "../../components/layout/stack";
import { BtnFinalizar } from "../../components/inputs/button";
import { SelectEndereco, SelectParc } from "../../components/inputs/select";
import { TFDefault } from "../../components/inputs/textField";
import useEnderecos from "../../hooks/useEnderecos";
import { iniEndereco, iniPedido } from "../../inicialization/initial";
import { formatDateSQL, getInfUser } from "../../utils";
import usePedido from "../../hooks/usePedido";
import { Link } from "react-router-dom";

export default function Pedido() {
    const { getItens, itens } = useCarrinho();
    const [pedido, setPedido] = useState(iniPedido);
    const { postPedido } = usePedido();
    const { getEndereco, endereco, isLoading } = useEnderecos();
    const [entrega, setEntrega] = useState(iniEndereco);
    let total = 0;

    useEffect(() => {
        getItens();
    }, [])

    useEffect(() => {
        if (pedido.EntregaID > 0) {
            getEndereco(pedido.EntregaID)
            setEntrega(endereco)
        }
    }, [pedido.EntregaID, isLoading])


    function ListItens(item, i) {
        total = total + parseFloat(item.Preco);
        return <CardItemCar key={i}
            produto={item}
        />
    }

    const handleChangeEnd = (e) => {
        setPedido({ ...pedido, EntregaID: e.target.value })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPedido({ ...pedido, [name]: value })
    }

    const finalizaPedido = (e) => {
        if (pedido.EntregaID > 0) {
            const ped = {
                DataPedido: formatDateSQL(pedido.DataPedido),
                EntregaID: pedido.EntregaID,
                FormaPagto: pedido.FormaPagto,
                QtdeParcelas: pedido.QtdeParcelas,
                TotalPedido: parseFloat(total.toFixed(2)),
                UsuarioID: getInfUser().ID,
                Itens: itens
            }
            // console.log(ped)
            postPedido(ped);
        } else{
            alert('Obrigatório selecionar um endereço! Caso não possua nenhum cadastro acesse seu perfil e realize o cadastro.');
        }
    }

    return (
        <ContainerPages>
            <Box pb={1}>
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
                        <StackJustify>
                            <SelectEndereco name="EntregaID" value={pedido.EntregaID} onChange={handleChangeEnd} />
                        </StackJustify>
                        <p />
                        <StackJustify>
                            <TFDefault fullWidth={true} label="Estado" name='Estado' value={entrega.Estado} />
                            <TFDefault fullWidth={true} label="Cidade" name='Cidade' value={entrega.Cidade} />
                        </StackJustify>
                        <br />
                        <StackJustify>
                            <TFDefault fullWidth={true} label="Número" name='Numero' value={entrega.Numero} />
                            <TFDefault fullWidth={true} label="Rua" name='Rua' value={entrega.Rua} />
                            <TFDefault fullWidth={true} label="CEP" name='CEP' value={entrega.CEP} />
                        </StackJustify>
                        <br />
                        <StackJustify>
                            <TFDefault fullWidth={true} label="Complemento" multiline={true} rows={3} name='Complemento' value={entrega.Complemento} />
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
                            name="FormaPagto"
                            value={pedido.FormaPagto}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="boleto" control={<Radio size="small" />} label="Boleto" />
                            <FormControlLabel value="pix" control={<Radio size="small" />} label="Pix" />
                            <FormControlLabel value="debito" control={<Radio size="small" />} label="Débito" />
                            <FormControlLabel value="credito" control={<Radio size="small" />} label="Crédito" />
                        </RadioGroup>
                        <SelectParc name="QtdeParcelas" onChange={handleChange} value={pedido.QtdeParcelas} disabled={pedido.FormaPagto !== 'credito'} />
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
                                <BtnFinalizar onClick={finalizaPedido} />
                            </Box>
                        </StackRight>
                    </Box>
                </Paper>
            </Box>
        </ContainerPages >
    )
}