export const dynamic = "force-dynamic"
export const revalidate = 500
interface Post {
    title: string;
    content: string;
    postId: number;
}

interface Props {
    params: { id: number};
}

// export async function generateStaticParams() {
//     const posts: Post[] = await fetch("localhost:3000/api/content").then((response) => response.json());
    
//     return posts.map((post) => ({
//         postId: post.postId,
//     }))
// }

export default async function BlogPostPage({params}: Props) {
    const posts: Post[] = await fetch(`http://localhost:3000/api/content`).then((response: Response) => response.json());
    console.log(posts)
    const post: Post | undefined = posts.find((post) => post.postId === Number(params.id));
    console.log(post)
    return (
        <div>
            <h1>{post?.title}</h1>
            <p>{post?.content}</p>
        </div>
    )
}