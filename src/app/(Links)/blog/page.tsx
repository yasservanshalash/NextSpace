import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog",
    description: "Here you can see all the postings."
}

interface Post {
    title: string;
    content: string;
    postId: number;
}

const BlogPage = async () => {

    const posts = await fetch("http://localhost:3000/api/content").then((response) => response.json())
    console.log(posts)
  return (
    <main className="flex min-h-screen flex-col">
      <h1>Posts</h1>
      {
        posts.map((post: Post) => {
            return (
                <Link href={`/blog/${post.postId}`}><h1>{post.title}</h1></Link>
            )
        })
      }
    </main>
  );
};

export default BlogPage;
