import React from 'react'
import AnimeCard from './AnimeCard';

export interface Anime {
    mal_id: number;
    rank: number;
    title: string;
    rating: string; 
    year?: number;
    images:{
        jpg:{
            image_url: string;
        }
    };
    aired:{
        string: string;
        from: string;
        to?: string;
    };
}

export interface AnimeListProps {
    animes: Anime[]
}

const AnimeList: React.FC<AnimeListProps> = (props) => {
  return (
    <div className={`relative flex flex-row flex-wrap items-center justify-center p-4 w-full h-full gap-x-6 gap-y-8`}>
        {
         props.animes.map((anime)=> {
            return(
                <AnimeCard {...anime}/>
            )
        })
        }
    </div>
  )
}

export default AnimeList