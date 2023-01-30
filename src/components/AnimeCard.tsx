import React from 'react'
import { Anime } from './AnimeList';

const AnimeCard: React.FC<Anime> = (props) => {

    const { rank, title, rating, aired: {string, from, to}, images: {jpg} } = props

    let lastestDay;
    const [releaseDate, LastestDate] = string.split('to')

    const releaseDay = new Date(from).toLocaleString(
        'default', {weekday: 'short'}
    );
    if(to){
         lastestDay = new Date(to).toLocaleString(
            'default', {weekday: 'short'}
          );
    }
    else{
        lastestDay = "";
    }

  return (
    <div className={`relative group w-[200px] h-[300px] shadow-md active:invisible bg-white rounded-md`}>
        <section className='absolute right-0 top-0 bg-violet-900 text-white p-2 text-base rounded'>
            {rank}
        </section>
        <section>
            <img src={`${jpg.image_url}`} className="rounded w-full h-[250px]" />
        </section>
        <section className='text-sm p-1 m-1 text-center line-clamp-2 overflow-ellipsis overflow-hidden'>
            {title}
        </section>

        <div className={`bg-white group-active:w-[300px] group-active:h-[420px] opacity-100 absolute left-[-50px] top-0 group-active:z-10 invisible group-active:visible rounded-md`}>
        <section className='absolute right-0 top-0 bg-violet-900 text-white p-2 text-base rounded'>
            {rank}
        </section>
        <section>
            <img src={`${jpg.image_url}`} className="rounded w-full h-[280px]" />
        </section>
        <section className='text-sm p-1 text-center m-1 line-clamp-2 overflow-ellipsis overflow-hidden'>
            {title}
        </section>
        <section className='flex flex-col items-start gap-[6px] text-sm p-1 mx-2 mt-3 mr-2 overflow-hidden'>
            <span>
                <span className='font-bold'>Release</span> : {releaseDay} {releaseDate}
            </span>
            <span>
                <span className='font-bold'>Lastest</span> : {lastestDay} {LastestDate || "now"}
            </span>
            <span>
                <span className='font-bold'>Rating</span> : {rating}
            </span>
        </section>
        </div>
    </div>
  )
}

export default AnimeCard