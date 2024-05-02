import React, { useEffect, useState } from "react";
import { ContainerPages } from "../../components/layout/container";
import { Box, Card, Paper, Typography } from "@mui/material";
import { CardItemCar } from "../../components/surfaces/card";
import useCarrinho from "../../hooks/useCarrinho";
import ToolBarPages from "../../components/surfaces/toolBar";
import { StackJustify, StackRight } from "../../components/layout/stack";
import { BtnFinalizar } from "../../components/inputs/button";
import SelectUF, { SelectMun } from "../../components/inputs/select";
import { TFDefault } from "../../components/inputs/textField";

export default function Pedido() {
    const { getItens, deleteItens, isLoading, itens } = useCarrinho();
    const [pedido, setPedido] = useState();
    let total = 0;

    useEffect(() => {
        getItens()
    }, [])

    function ListItens(item, i) {
        total = total + parseFloat(item.Preco);
        return <CardItemCar key={i}
            produto={item}
            onClickDelete={() => deleteItens(item.ID)}
        />
    }

    const handleInputChange = (e) => {

    }

    return (
        <ContainerPages>
            <ToolBarPages title='Finalizar Pedido' />
            <p />
            <ToolBarPages title='Itens do Pedido' />
            {itens ? itens.length > 0 ? itens.map(ListItens) : <h4>Não existem itens no carrinho</h4> : <h1>Aguarde...</h1>}
            <ToolBarPages title='Endereço de entraga' />
            <p />
            <Card>
                <StackJustify>
                    <SelectUF name='Estado' onChange={handleInputChange} value={pedido.Estado} />
                    <SelectMun uf={pedido.Estado} name='Cidade' onChange={handleInputChange} value={pedido.Cidade} />
                </StackJustify>
                <br />
                <StackJustify>
                    <TFDefault fullWidth={true} label="Número" name='Numero' value={pedido.Numero} onChange={handleInputChange} />
                    <TFDefault fullWidth={true} label="Rua" name='Rua' value={pedido.Rua} onChange={handleInputChange} />
                    <TFDefault fullWidth={true} label="CEP" name='CEP' value={pedido.CEP} onChange={handleInputChange} />
                </StackJustify>
                <br />
                <StackJustify>
                    <TFDefault fullWidth={true} label="Complemento" multiline={true} rows={3} name='Complemento' value={pedido.Complemento} onChange={handleInputChange} />
                </StackJustify>
            </Card>
            <p />
            <ToolBarPages title='Forma de pagamento' />
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