import React from "react";
import Link from "next/link";

interface Post {
  title: string;
  url: string;
  description: string;
  tags: string[]; // New tags array
}

interface BlogPostsProps {
  posts: Post[];
}

export const BlogPosts: React.FC<BlogPostsProps> = ({ posts }) => (
  <div>
    {posts.map((post, index) => (
      <div key={index} className="mb-6">
        <h2 className="text-2xl font-bold mb-2">
          <Link href={post.url} passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {post.title}
            </a>
          </Link>
        </h2>
        <div className="flex flex-wrap mt-2">
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-blue-500 hover:bg-blue-400 px-2 py-0.5 rounded-md text-sm mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <p>{post.description}</p>
      </div>
    ))}
  </div>
);
