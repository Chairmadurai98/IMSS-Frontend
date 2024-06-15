'use client'
import { SessionProvider } from 'next-auth/react';
import React from 'react'
import { Toaster } from 'sonner';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

type NextAuthProviderProps = {
  children?: React.ReactNode
};

const NextAuthProvider = ({
  children,
}: NextAuthProviderProps) => {

  return (
    <SessionProvider>
      <Provider store={store}>
        <Toaster richColors />
        {children}
      </Provider>
    </SessionProvider>
  )
}

export default NextAuthProvider