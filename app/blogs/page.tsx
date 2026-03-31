"use client";

import { blogData } from "@/modules/blogs/lib/data";
import { BlogCard } from "@/modules/blogs/components/blog-card";
import { motion } from "framer-motion";

export default function BlogListingPage() {
  const featuredPost = blogData[0];
  const regularPosts = blogData.slice(1);

  return (
    <main className="min-h-screen pt-24 pb-32 px-6 md:px-12 lg:px-16 max-w-[1800px] mx-auto selection:bg-tertiary/30 selection:text-tertiary bg-surface text-on-surface">
      <motion.header 
        className="mb-20 md:mb-32 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/15">
          <span className="text-tertiary font-label text-[10px] uppercase tracking-[0.1em] font-semibold">Editorial Journal</span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.9]">
            Insights & Stories
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl font-body leading-relaxed max-w-2xl">
            Exploring the intersection of modern design, architectural philosophy, and digital craftsmanship through deep-dive narratives and industry perspectives.
        </p>
      </motion.header>
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <motion.div
          className="h-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <BlogCard post={featuredPost} />
        </motion.div>
        {regularPosts.map((post, index) => (
          <motion.div 
            key={post.id}
            className="h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          >
            <BlogCard post={post} />
          </motion.div>
        ))}
      </section>
    </main>
  );
}