import useSWR from 'swr';
import fetcher from '@/lib/fetcher';


//랜덤으로 매인에 보여줄 영상 가져옴
const useBillboard = () => {
    const { data, error, isLoading } = useSWR('/api/random', fetcher, {
        revalidateIfStale : false,
        revalidateOnFocus : false,
        revalidateOnReconnect : false
    });

    return {
        data,
        error,
        isLoading
    }
}

export default useBillboard;