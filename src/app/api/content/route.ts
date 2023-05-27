const dummyPosts = [
    {
      postId: 1,
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      postId: 2,
      title: "Praesent Eget",
      content: "Praesent eget tincidunt neque. Curabitur tristique diam ac urna faucibus, vel commodo sapien pellentesque."
    },
    {
      postId: 3,
      title: "Nulla Ullamcorper",
      content: "Nulla ullamcorper vestibulum malesuada. Donec interdum elit sit amet fermentum condimentum."
    },
    {
      postId: 4,
      title: "Suspendisse Id",
      content: "Suspendisse id lacus sollicitudin, consectetur velit ut, fringilla metus."
    },
    {
      postId: 5,
      title: "Duis In Malesuada",
      content: "Duis in malesuada erat. Integer in justo at quam facilisis lobortis in non neque."
    }
  ];

import { getServerSession } from "next-auth";
  import { NextResponse } from "next/server";

  export async function GET() {
    const session = await getServerSession();
    return NextResponse.json(dummyPosts)
  }