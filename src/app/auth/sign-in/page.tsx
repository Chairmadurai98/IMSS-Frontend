'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'


const SignIn = () => {

    //Hooks 
    const router = useRouter()

    //Hook Forms
    const { register, handleSubmit } = useForm<AuthCredentials>()
    const onSubmit = async (formData: AuthCredentials) => {
        try {
            const res = await signIn('custom-email', {
                redirect: false,
                ...{
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
                }
            })
            if (res?.error) {
                throw new Error(res?.error)
            } else {
                router.push('/')
            }

        } catch (error: any) {
            toast.error(error?.message as string)
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register('email')} />
            <input type="password"  {...register('password')} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default SignIn