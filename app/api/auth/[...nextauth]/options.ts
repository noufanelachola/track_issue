import type { NextAuthOptions } from "next-auth"
import GithubProvder from "next-auth/providers/github"
import CridentialsProvider from "next-auth/providers/credentials"

export const options : NextAuthOptions = {
    providers : [
        GithubProvder({
            clientId : process.env.GITHUB_ID as string,
            clientSecret : process.env.GIHUB_SECRET as string
        })
    ]
}