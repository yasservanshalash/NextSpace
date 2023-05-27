'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
export function SignInButton() {
    const { data: session, status} = useSession();
    console.log(session, status);

    if (status === 'loading') {
        return <><h1>Loading</h1></>
    }
    if (status === 'authenticated') {
        return (
            <Link href={'/'}>
                <Image src={session.user?.image ?? "../../../public/next.svg"}
                width={32}
                height={32}
                alt={session.user?.name || "name"}
                />
            </Link>
        )
    }
    return <button onClick={() => signIn()}>Sign in</button>
}

export function SignOutButton() {
    return <button onClick={() => signOut()}>Sign out</button>
}