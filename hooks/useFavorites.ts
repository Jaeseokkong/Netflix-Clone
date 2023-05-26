import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

//로그인한 계정이 좋아요를 누른 모든 영상을 가져옴
const useFavorites = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/favorites', fetcher, {
        revalidateIfStale : false,
        revalidateOnFocus : false,
        revalidateOnReconnect :false
    });
 
    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useFavorites;