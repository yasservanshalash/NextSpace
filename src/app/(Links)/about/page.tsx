import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Making socializing fun again"
}

const AboutPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>About page</h1>
    </main>
  );
};

export default AboutPage;
