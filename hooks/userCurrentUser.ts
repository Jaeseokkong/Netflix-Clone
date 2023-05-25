import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

//현재 로그인한 유저의 정보를 가져오는 HOOK
const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher)

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useCurrentUser;