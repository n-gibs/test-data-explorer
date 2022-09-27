import * as React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination,
    TableFooter,
} from '@mui/material';
import TablePaginationActions from './TablePaginationActions';

interface DataTableProps {
    headers: string[];
    rows: any[];
}

const DataTable: React.FC<any> = ({
    headers,
    rows,
}: DataTableProps): React.ReactElement => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
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
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map(row => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component='th' scope='row'>
                                {row.id}
                            </TableCell>
                            <TableCell align='right'>
                                <img
                                    width='25'
                                    height='25'
                                    src={`${process.env.PUBLIC_URL}/images/${row.filename}`}
                                ></img>
                            </TableCell>
                            <TableCell align='right'>{row.filename}</TableCell>
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
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
