import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from 'next-auth';

import prismadb from '@/lib/prismadb';
import { authOptions } from "@/pages/api/auth/[...nextauth]";

//서버 세션확인
const serverAuth = async (req : NextApiRequest, res : NextApiResponse) => {
    const session = await getServerSession( req , res , authOptions );
    

    //세션에 유저 이메일 정보 없을 겨우
    if(!session?.user?.email) {
        throw new Error('Not signed in1');
    }

    //현재 유저 정보 가져오기
    const currentUser = await prismadb.user.findUnique({
        where : {
            email : session.user.email,
        }
    })

    //세션에 존재하지만 없는 유저 이메일 정보가 있을 경우
    if(!currentUser){
        throw new Error('Not signed in2')
    }

    return { currentUser }
};

export default serverAuth;