import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const List = () => {
    const rows = [
        {
            id: 1631484,
            product: 'iPhone 13',

            img:
                ' https://img.freepik.com/photos-gratuite/composition-elegante-du-smartphone_23-2149437106.jpg?size=626&ext=jpg&ga=GA1.1.129745204.1674652457&semt=ais',
            name: 'Jean La Tour',
            date: '12 Avril 2023',
            amount: 909,
            method: 'Paypal',
            status: 'Approuvé',
        },
        {
            id: 12589425,
            product: 'Acer Predator Helios 300 ',
            img:
                'https://images.acer.com/is/image/acer/Predator-Helios-300-PH-315-54-Backliton-Black-01a?$Product-Cards-XL$',
            name: 'Maxime Aubert',
            date: '12 Avril 2023',
            amount: 2500,
            method: 'Virement bancaire',
            status: 'EnCours',
        },
        {
            id: 13452147,
            product: 'Xiaomi Mi 11',
            img:
                'https://images.pexels.com/photos/1631484/pexels-photo-1631484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Zakaria Abid',
            date: '12 Avril 2023',
            amount: 2500,
            method: 'Virement bancaire',
            status: 'Approuvé',
        },
        {
            id: 19852331,
            product: 'Xiaomi Mi 11',
            img:
                'https://images.pexels.com/photos/1631484/pexels-photo-1631484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Stéphane Leclercq',
            date: '12 Avril 2023',
            amount: 2500,
            method: 'Paypal',
            status: 'EnCours',
        },
        {
            id: 17489642,
            product: 'Xiaomi Mi 11',
            img:
                'https://images.pexels.com/photos/1631484/pexels-photo-1631484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Noémie David',
            date: '12 Avril 2023',
            amount: 2500,
            method: 'Paypal',
            status: 'Approuvé',
        },
        {
            id: 14520132,
            product: 'Xiaomi Mi 11',
            img:
                'https://images.pexels.com/photos/1631484/pexels-photo-1631484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Hamid Zyed',
            date: '12 Avril 2023',
            amount: 2500,
            method: 'Virement bancaire',
            status: 'Approuvé',
        },
        {
            id: 14520132,
            product: 'Xiaomi Mi 11',
            img:
                'https://images.pexels.com/photos/1631484/pexels-photo-1631484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Romane Doisneau',
            date: '12 Avril 2023',
            amount: 2500,
            method: 'Virement bancaire',
            status: 'Approuvé',
        },
    ];

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell className="tableCell">Product</TableCell>
                        <TableCell className="tableCell">Customer</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Amount</TableCell>
                        <TableCell className="tableCell">Payment Method</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell">{row.id}</TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className="image" />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">{row.name}</TableCell>
                            <TableCell className="tableCell">{row.date}</TableCell>
                            <TableCell className="tableCell">{row.amount}</TableCell>
                            <TableCell className="tableCell">{row.method}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;