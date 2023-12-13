import React from 'react'
import Star from '../Star'
import { AiOutlineStar } from 'react-icons/ai'
import { RxTriangleRight } from "react-icons/rx";
import { useGetMovieQuery } from '../../services/Api'
import { useParams } from 'react-router-dom';
import { CiLocationArrow1 } from 'react-icons/ci'


const Inofrmation = () => {
    const { id } = useParams();
    console.log(id);

    const { data, error, isFetching } = useGetMovieQuery(id);
    return (
        <section className='w-full max-w-[1700px] flex flex-col justify-center items-center lg:flex-row lg:items-start'>
            <div className='w-full flex justify-center items-center lg:w-1/2 '>
                <div className='w-[50%]  my-5 shadow-lg shadow-light-blue rounded-2xl overflow-hidden'>
                    <img
                        src={
                            data?.poster_path
                                ? `http://image.tmdb.org/t/p/w500/${data?.poster_path}`
                                : "https://www.fillmurray.com/200/300"
                        }
                        alt={data?.title}
                    />
                </div>
            </div>
            <div className='w-full text-white flex p-5 flex-col justify-start items-center lg:w-1/2'>
                <div className="w-[70%]">
                    <div className="text-center w-full">
                        <h1 className="font-black text-3xl">{data?.title}</h1>
                        <p className="text-sm mt-2">{data?.tagline}</p>
                    </div>
                    <div className="mt-3 w-full flex flex-col lg:flex-row justify-center items-center lg:justify-between">
                        <Star starVote={data?.vote_average} />
                        <p className="mt-3">
                            {data?.status} | {data?.runtime} min | {data?.release_date} | {data?.original_language}
                        </p>
                    </div>
                    <div className="mt-3 w-full">
                        <h1 className="pb-2 font-bold">Genres:</h1>
                        <div className="flex flex-wrap items-center justify-start">
                            {data?.genres.map((genre, index) => (
                                <p
                                    key={index}
                                    className="mb-4 mr-4 flex items-center justify-center rounded-lg bg-[#227fb4] px-3 py-2 text-sm"
                                >
                                    <span className="mr-2 uppercase">{genre?.name}</span>
                                    <CiLocationArrow1 className="text-sm" />
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="mt-3">

                        <h1 className="font-bold">Information:</h1>
                        <p className="mt-3">
                            {data?.overview}
                        </p>
                    </div>
                    <div className="w-full mt-5">
                        <h1 className="font-bold">Top Cast:</h1>
                        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-2">
                            {data?.credits?.cast
                                .map((character, index) => (
                                    <div
                                        key={index}
                                        className="mt-2 flex w-[100px] flex-col items-center justify-start"
                                    >
                                        <img
                                            className="w-full rounded-2xl"
                                            src={`https://image.tmdb.org/t/p/w500/${character?.profile_path}`}
                                            alt={character?.name}
                                        />
                                        <p className="mt-2 w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-center text-sm">
                                            {character?.name}
                                        </p>
                                    </div>
                                ))
                                .slice(0, 10)}
                        </div>

                    </div>
                    <div className="w-full mt-4 flex justify-start items-center">
                        <button className="">
                            <a href={data?.homepage} target='_blank' className='px-3 py-2 rounded-lg mr-4 flex justify-center items-center hover:bg-light-blue'>
                                <span>Website</span>
                                <RxTriangleRight />
                            </a>
                        </button>
                        <button className="px-3 py-2 rounded-lg flex justify-center items-center ">
                            <span>Trailer</span>
                            <RxTriangleRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inofrmation