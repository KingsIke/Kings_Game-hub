import { CanceledError } from 'axios';
import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import useData from './useData';
import { Genre } from './useGenres';


export interface Platform {
    id: number
    name: string
    slug: string
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];

    metacritic: number;
}


// interface FetchGamesResponse {
//     count: number;
//     results: Game[]

// }

// export const useGames = () => {

//     const [games, setGames] = useState<Game[]>([]);
//     const [errors, setErrors] = useState('')
//     const [isLoading, setLoading] = useState(false)

//     useEffect(() => {
//         const controller = new AbortController()
//         setLoading(true)
//         apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
//             .then(res => {
//                 setGames(res.data.results)
//                 setLoading(false)
//                 console.log(games)
//             })
//             .catch((err) => {
//                 if (err instanceof CanceledError) return;
//                 setErrors(err.message)
//                 setLoading(false)
//             })

//         return () => controller.abort();


//     }, [])
//     return { games, errors, isLoading };
// }
export const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games', { params: { genres: selectedGenre?.id, Platforms: selectedPlatform?.id } }, [selectedGenre?.id, selectedPlatform?.id])