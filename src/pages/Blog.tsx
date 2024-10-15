import React from 'react';
import { Calendar } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of IoT in Smart Homes',
    excerpt: 'Exploring the latest trends and technologies shaping the future of smart home automation.',
    date: '2024-03-15',
    author: 'Your Name'
  },
  {
    title: 'Building Scalable Backend Systems with FastAPI',
    excerpt: 'A deep dive into creating efficient and scalable backend systems using FastAPI and modern best practices.',
    date: '2024-03-01',
    author: 'Your Name'
  },
  {
    title: 'Data Science in Action: Real-world Applications',
    excerpt: 'Examining practical applications of data science across various industries and their impact.',
    date: '2024-02-15',
    author: 'Your Name'
  },
  {
    title: 'Integrating AI into Web Applications: A Practical Guide',
    excerpt: 'Step-by-step guide on how to incorporate AI capabilities into your web applications for enhanced functionality.',
    date: '2024-02-01',
    author: 'Your Name'
  }
];

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar size={16} className="mr-2" />
              <span>{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;