import React, { useEffect } from "react";
import { Box, Card, Divider, FormControlLabel, Grid, List, Paper, Radio, RadioGroup, Typography } from "@mui/material";
import { CardItemCar } from "../../../components/surfaces/card";
import ToolBarPages from "../../../components/surfaces/toolBar";
import { StackJustify, StackRight } from "../../../components/layout/stack";
import { BtnFinalizar } from "../../../components/inputs/button";
import { SelectEndereco, SelectParc } from "../../../components/inputs/select";
import { TFDefault } from "../../../components/inputs/textField";
import { formatDate, formatDateSQL, getInfUser } from "../../../utils";
import { useParams } from "react-router-dom";
import usePedido from "../../../hooks/usePedido";
import { ContainerPages } from "../../../components/layout/container";
import { TGMedio, TGMenuDivider, TGPageTitle } from "../../../components/dataDisplay/typography";

export default function DetailPedido() {
    const { getPedido, pedido } = usePedido();
    const { id } = useParams()

    useEffect(() => {
        getPedido(id);
        console.log(pedido)
    }, [])

    // useEffect(() => {
    //     if (pedido.EntregaID > 0) {
    //         getEndereco(pedido.EntregaID)
    //         setEntrega(endereco)
    //     }
    // }, [pedido.EntregaID, isLoading])


    function ListItens(item, i) {
        console.log(item);
        return <CardItemCar key={i}
            produto={item}
        />
    }



    return (
        <ContainerPages>
            <Box pb={1}>
                <ToolBarPages title='Detalhes do Pedido' />
                <p />
                {pedido ?
                    <Card>
                        <Box p={1}>
                            <TGPageTitle text='Dados do Pedido' />
                            <Divider />
                            <Grid container>
                                <Grid item xs={6}>
                                    <TGMedio text={<b>Número</b>} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TGMedio text={<b>Data de Emissão</b>} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TGMedio text={pedido.ID} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TGMedio text={formatDate(pedido.DataPedido)} />
                                </Grid>
                            </Grid>
                            <p />
                            <TGPageTitle text='Endereço' />
                            <Divider />
                            {pedido.Endereco ?
                                <Grid container>
                                    <Grid item xs={6}>
                                        <TGMedio text={<b>Estado</b>} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TGMedio text={<b>Município</b>} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TGMedio text={pedido.Endereco.Estado} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TGMedio text={pedido.Endereco.Cidade} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TGMedio text={<b>CEP</b>} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TGMedio text={<b>Número</b>} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TGMedio text={pedido.Endereco.CEP} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TGMedio text={pedido.Endereco.Numero} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TGMedio text={<b>Complemento</b>} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TGMedio text={pedido.Endereco.Complemento} />
                                    </Grid>
                                </Grid>
                                : ''}
                            <p />
                            <TGPageTitle text='Itens' />
                            <Divider />
                            <List>
                                {pedido.Itens?.length > 0 ? pedido.Itens.map(ListItens) : 'Nenhum item encontrado.'}
                            </List>
                            <p />
                            <TGPageTitle text='Total' />
                            <Divider />
                            <Grid container>
                                <Grid item xs={4}>
                                    <TGMedio text={<b>Qtde Parcelas</b>} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TGMedio text={<b>Forma de Pagamento</b>} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TGMedio text={<b>Total</b>} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TGMedio text={pedido.QtdeParcelas} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TGMedio text={pedido.FormaPagto} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TGMedio text={pedido.TotalPedido} />
                                </Grid>
                            </Grid>
                        </Box>
                    </Card>
                    : ''}
            </Box>
        </ContainerPages >
    )
}