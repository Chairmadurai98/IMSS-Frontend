import { Button, Typography } from "@mui/material";
import Link from "next/link";

 export default  function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={'/auth/sign-in'} >
          Login
      </Link>

      <Link href={'/user-list'} >
          Redux Think User
      </Link>
      <Typography size="small" variant="subtitle3">Helo</Typography>
    </main>
  );
}
