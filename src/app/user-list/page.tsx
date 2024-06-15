import { getUserListApiRedux } from '@/redux/services/userServices'
import { store } from '@/redux/store'
import React from 'react'

type UserParams = {
    searchParams: {
        page?: number
    }
}

async function UserList({ searchParams }: UserParams) {
    const  data = await store.dispatch(getUserListApiRedux()).unwrap()
  return (
    <div>{data?.data?.map(({email})=>email)}</div>
  )
}

export default UserList