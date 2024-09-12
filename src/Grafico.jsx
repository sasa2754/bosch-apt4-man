import { App } from "./App"
import { BarChart, Bar,LineChart, Line, XAxis, YAxis, CartesianGrid, Rectangle, Tooltip, Legend } from 'recharts';
import style from './App.module.css'

function Grafico () {

    const data = [
        {
          name: 'Celular',
          2022: 5000,
          2024: 3400
        },
        {
          name: 'Televisão',
          2022: 2000,
          2024: 1398
        },
        {
          name: 'Relógio',
          2022: 7000,
          2024: 2800
        },
        {
          name: 'Computador',
          2022: 2780,
          2024: 3908
        },
        {
          name: 'Tablet',
          2022: 1890,
          2024: 4800
        }
      ];

      const data2 = [
        {
          name: 'Bob Esponja',
          Adultos: 4600,
          Crianças: 2400
        },
        {
          name: 'Rick and Morty',
          Adultos: 8400,
          Crianças: 398
        },
        {
          name: 'Gravity Falls',
          Adultos: 2000,
          Crianças: 9800
        },
        {
          name: 'Ben 10',
          Adultos: 2780,
          Crianças: 3908
        }
      ];

    return (
        <div className={style.wrapPage}>
        <App/>
        <BarChart
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
          <Bar dataKey="2022" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="2024" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>

        <LineChart width={500} height={300} data={data2}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Legend />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey="Adultos" stroke="#8884d8" />
            <Line type="monotone" dataKey="Crianças" stroke="#82ca9d" />
        </LineChart>
        </div>

    )

}
export default Grafico