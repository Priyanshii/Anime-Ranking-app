import React, { useEffect, useState } from 'react'
import AnimeChart from '../components/AnimeChart';
import AnimeList from '../components/AnimeList';

const Home = () => {
    const [AnimeData, setAnimeData] = useState([]);

    const getAnimeData = async() => {
        const response = await fetch("https://api.jikan.moe/v4/top/anime?limit=20");
        const result = await response.json();

        setAnimeData(result.data);
        console.log(result.data);
    }

    useEffect(() =>{
        getAnimeData();
    },[])

  return (
    <div className='bg-gray-200'>
        <section>
            <AnimeList animes={AnimeData}/>
        </section>
        <section>
            <AnimeChart animes={AnimeData}/>
        </section>
    </div>
  )
}

export default Home