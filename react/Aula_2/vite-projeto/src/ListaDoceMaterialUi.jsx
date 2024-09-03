import { 
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from "@mui/material";

let listaDoces = [
    {id: 1, nome: "Brigadeiro", tipo: "Chocolate"},
    {id: 2, nome: "Beijinho", tipo: "Coco"},
    {id: 3, nome: "Cajuzinho", tipo: "Amendoim"}
];

export default function TabelaDoces() {
    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nome</TableCell>
                            <TableCell>Tipo</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listaDoces.map((doce, index) => (
                            <TableRow 
                                key={index}
                                sx={{
                                    backgroundColor: index % 2 === 0 ? 'rgba(0, 0, 0, 0.04)' : 'white',
                                }}
                                id={`linha_${doce.id}`}
                            >
                                <TableCell>{doce.id}</TableCell>
                                <TableCell>{doce.nome}</TableCell>
                                <TableCell>{doce.tipo}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <textarea name="Expressões React" rows={4}></textarea>
        </>
    );
}