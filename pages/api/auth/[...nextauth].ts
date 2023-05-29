import NextAuth, { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { compare } from 'bcrypt';
import prismadb from '@/lib/prismadb';

export const authOptions : AuthOptions = {
    providers : [
        GithubProvider({
            clientId : process.env.GITHUB_ID || '',
            clientSecret : process.env.GITHUB_SECRET || '',
        }),
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID || '',
            clientSecret : process.env.GOOGLE_CLIENT_SECRET || '',
        }),
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
              email: {
                label: 'Email',
                type: 'email',
              },
              password: {
                label: 'Password',
                type: 'password'
              },              
            },
            async authorize(credentials) {

                //이메일 or 비밀번호 미입력시
                if(!credentials?.email || !credentials?.password){
                    throw new Error("이메일과 비밀번호를 입력해주세요.")
                }

                //해당 이메일의 유저 정보 가져오기
                const user = await prismadb.user.findUnique({
                    where : {
                        email : credentials.email
                    }
                });

                //이메일에 해당하는 유저 정보가 없는 경우
                if(!user || !user.hashedPassword){
                    throw new Error('가입된 이메일이 없습니다.')
                }

                //입력한 비밀번호와 계정 비밀번호(암호화) 비교
                const isCorrectPassword = await compare(
                    credentials.password,
                    user.hashedPassword
                );

                //다른 비밀번호를 입력한 경우
                if(!isCorrectPassword){
                    throw new Error("비밀번호가 맞지않습니다.")
                }

                return user;
            }
        })
    ],
    pages : {
        signIn : '/auth',
    },
    debug : process.env.NODE_ENV === 'development', //오류 발생시 로그표시
    adapter : PrismaAdapter(prismadb),
    session : {
        strategy : 'jwt',
    },
    jwt : {
        secret : process.env.NEXTAUTH_JWT_SECRET
    },
    secret : process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);