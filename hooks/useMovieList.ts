import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

//모든 영화 정보를 가져오는 훅
const useMovieList = () => {
    const { data, error, isLoading } = useSWR('/api/movies', fetcher, {
        revalidateIfStale : false,
        revalidateOnFocus : false,
        revalidateOnReconnect : false,
    });

    return {
        data,
        error,
        isLoading
    }
}

export default useMovieList;