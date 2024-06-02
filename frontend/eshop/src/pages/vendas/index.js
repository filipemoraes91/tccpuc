import React, { useEffect, useState } from "react";
import { ContainerPages } from "../../../components/layout/container";
import { Box, Card, FormControlLabel, List, ListItem, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { CardItemCar } from "../../../components/surfaces/card";
import useCarrinho from "../../../hooks/useCarrinho";
import ToolBarPages from "../../../components/surfaces/toolBar";
import { StackJustify, StackRight } from "../../../components/layout/stack";
import { BtnFinalizar, ButtonDetalhes } from "../../../components/inputs/button";
import { SelectEndereco, SelectParc } from "../../../components/inputs/select";
import { TFDefault } from "../../../components/inputs/textField";
import useEnderecos from "../../../hooks/useEnderecos";
import { iniEndereco, iniPedido } from "../../../inicialization/initial";
import { formatDate, getInfUser } from "../../../utils";
import usePedido from "../../../hooks/usePedido";
import { useParams } from "react-router-dom";

export default function MeusPedidos() {
    const { getPedidos, listPedidos } = usePedido();
    const { id } = useParams();
    let total = 0;

    useEffect(() => {
        getPedidos(id);
    }, [])

    function ListPedidos(pedido) {
        total = total + parseFloat(pedido.TotalPedido);
        return <TableRow key={pedido.ID}>
            <TableCell>{pedido.ID}</TableCell>
            <TableCell>{formatDate(pedido.DataPedido)}</TableCell>
            <TableCell>{pedido.FormaPagto}</TableCell>
            <TableCell>{pedido.QtdeParcelas}</TableCell>
            <TableCell>{pedido.TotalPedido}</TableCell>
            <TableCell align="right"><ButtonDetalhes onClick={() => window.location.href = `/meuspedidos/${id}/pedido/${pedido.ID}`}/></TableCell>
        </TableRow>
    }

    return (
        <ContainerPages>
            <Box pb={1}>
                <ToolBarPages title='Lista de Pedidos' />
                <p />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead >
                            <TableRow style={{ background: 'gray', fontWeight: 'bold' }}>
                                <TableCell>Número</TableCell>
                                <TableCell>Data</TableCell>
                                <TableCell>Forma de Pagto</TableCell>
                                <TableCell>Qtde Parcelas</TableCell>
                                <TableCell>Total</TableCell>
                                <TableCell/>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listPedidos?.length > 0 ? listPedidos.map(ListPedidos) : 'Nenhum pedido finalizado'}
                        </TableBody>
                    </Table>
                </TableContainer>
                <p />
                <Paper elevation={1}>
                    <Box p={1}>
                        <StackRight>
                            <Typography variant="button" component="div" sx={{ flexGrow: 1, fontSize: 16, fontWeight: '600' }} >Total do Pedido</Typography>
                            <Typography variant="button" component="div" sx={{ fontSize: 16, fontWeight: '600' }} >{total.toFixed(2)}</Typography>
                        </StackRight>
                    </Box>
                </Paper>
            </Box>
        </ContainerPages >
    )
}