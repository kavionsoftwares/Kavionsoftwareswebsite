
import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    {
      tag: "Engineering",
      title: "Optimizing React for Sub-100ms TTI",
      date: "Feb 24, 2025"
    },
    {
      tag: "Strategy",
      title: "Why Most MVPs Fail Their First Scale",
      date: "Feb 18, 2025"
    },
    {
      tag: "UI/UX",
      title: "Dark Mode: Beyond Just Color Inversion",
      date: "Feb 10, 2025"
    }
  ];

  return (
    <section id="lab" className="py-32 bg-black/40 relative">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter">ENGINEERING LAB</h2>
          <a href="#top" className="font-mono text-xs uppercase tracking-widest text-[#19E76E] hover:underline">All Articles</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <a href="#top" key={i} className="group border border-white/5 p-8 hover:border-[#19E76E]/30 transition-all bg-white/[0.01]">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#19E76E] mb-4 block">{post.tag}</span>
              <h3 className="text-xl font-bold mb-6 group-hover:text-white transition-colors">{post.title}</h3>
              <div className="flex justify-between items-center mt-auto opacity-40 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-mono">{post.date}</span>
                <span className="text-xs font-mono">Read More →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
