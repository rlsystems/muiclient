import { Link, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

export default observer(function BrandListTable() {
    const { brandStore } = useStore();
    const { brandsSorted } = brandStore;



    return (
        <>

            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    Brands
                </Typography>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>GUID</TableCell>

                            <TableCell align="right">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {brandsSorted.map((brand) => (
                            <TableRow key={brand.id}>
                                <TableCell>{brand.name}</TableCell>
                                <TableCell>{brand.description}</TableCell>
                                <TableCell>{brand.id}</TableCell>
                                <TableCell>EDIT</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                    See more orders
                </Link>
            </Paper>


        </>

    )
})
