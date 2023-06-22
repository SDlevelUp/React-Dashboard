import "./chart.scss";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Djarin',
        total: 1000,
    },
    {
        name: 'Yanis',
        total: 1500,
    },
    {
        name: 'Maurice',
        total: 3450,
    },
    {
        name: 'Ahmed',
        total: 1000,
    },
    {
        name: 'Pascale',
        total: 2800,
    },
    {
        name: 'Fred',
        total: 1500,
    },
];
const Chart = () => {

    return (
        <div className="chart">
            <div>Revenus (Sur les 6 derniers mois)</div>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="green" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div >

    )
}

export default Chart
