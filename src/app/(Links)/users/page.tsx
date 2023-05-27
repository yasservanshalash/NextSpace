import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Users",
    description: "Find people you can relate to."
}


const UsersPage = () => {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Users    page</h1>
      </main>
    );
  };
  
  export default UsersPage;
  