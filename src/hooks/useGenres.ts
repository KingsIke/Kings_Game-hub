// import { CanceledError } from "axios";
// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string
}

// interface FetchGenresResponse {
//     count: number;
//     results: Genre[]
// }

// const useGenres = () => {
//     const [genres, setGenres] = useState<Genre[]>([]);
//     const [errors, setErrors] = useState('')
//     const [isLoading, setLoading] = useState(false)

//     useEffect(() => {
//         const controller = new AbortController()
//         setLoading(true)
//         apiClient.get<FetchGenresResponse>('/genres', { signal: controller.signal })
//             .then(res => {
//                 setGenres(res.data.results)
//                 setLoading(false)
//                 console.log(genres)
//             })
//             .catch((err) => {
//                 if (err instanceof CanceledError) return;
//                 setErrors(err.message)
//                 setLoading(false)
//             })

//         return () => controller.abort();


//     }, [])
//     return { genres, errors, isLoading };
// }

const useGenres = () => useData<Genre>('/genres')

export default useGenres