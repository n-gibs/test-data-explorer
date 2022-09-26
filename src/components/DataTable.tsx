import * as React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';

interface DataTableProps {
    headers: string[];
    rows: any[];
}

const DataTable: React.FC<any> = ({
    headers,
    rows,
}: DataTableProps): React.ReactElement => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        {headers.map(head => {
                            return <TableCell align='right'>{head}</TableCell>;
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component='th' scope='row'>
                                {row.id}
                            </TableCell>
                            <TableCell component='th' scope='row'>
                                {row.filename}
                            </TableCell>
                            <TableCell align='right'>{row.label}</TableCell>
                            <TableCell align='right'>{row.height}</TableCell>
                            <TableCell align='right'>{row.width}</TableCell>
                            <TableCell align='right'>{row.dimension}</TableCell>
                            <TableCell align='right'>{row.size}</TableCell>
                            <TableCell align='right'>{row.max_RGB}</TableCell>
                            <TableCell align='right'>{row.min_RGB}</TableCell>
                            <TableCell align='right'>{row.red}</TableCell>
                            <TableCell align='right'>{row.green}</TableCell>
                            <TableCell align='right'>{row.blue}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
