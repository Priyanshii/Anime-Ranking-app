import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { AnimeListProps } from './AnimeList';
import CustomTooltip from "./CustomTooltip";

type ChartData = {
    year: number;
    number: number;
    list: Array<string>;
}

const AnimeChart: React.FC<AnimeListProps> = (props) => {

    const data = props.animes.reduce((acc:Array<ChartData>,curr)=> {
        let year = curr.year;
        if(year){
            let found = acc.find((elem:ChartData) => elem.year === year)
            if (found) {
                found.number++;
                found["list"].push(curr.title);
            }
            else {
                acc.push({
                    "year": year,
                    "number" : 1,
                    "list":[`${curr.title}`]
                })
            }
        }
            return acc;  
    },[]);

    data.sort((obj1:ChartData, obj2:ChartData) => obj1.year - obj2.year);

  return (
    <div className='flex items-center justify-center m-6'>
        <AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
            <linearGradient id="animeChart" x1="0" y1="0">
            <stop offset="45%" stopColor="#82ca9d" stopOpacity={0.9}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.9}/>
            </linearGradient>
        </defs>
        <XAxis dataKey="year" />
        <YAxis dataKey="number"/>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip content= {<CustomTooltip />}/>
        <Area type="monotone" dataKey="number" stroke="#8884d8" fillOpacity={1} fill="url(#animeChart)" />
        </AreaChart>
    </div>
  )
}

export default AnimeChart