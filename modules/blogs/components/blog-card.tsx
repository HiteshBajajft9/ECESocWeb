import Link from 'next/link';
import { BlogPost } from '../types';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blogs/${post.id}`} className="flex flex-col group p-6 rounded-2xl border border-outline-variant/10 bg-surface-container-low/30 hover:bg-surface-container-low transition-all h-full">
      <div className="aspect-[4/5] mb-8 overflow-hidden rounded-xl bg-surface-container-low relative">
        {post.imageUrl && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/*
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={post.imageUrl}
              alt={post.title}
              loading="lazy"
            />
            */}
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </>
        )}
      </div>
      <div className="flex items-center space-x-3 text-on-surface-variant font-label text-[11px] uppercase tracking-widest mb-4">
        <span>{post.date}</span>
        <span className="text-outline-variant">/</span>
        <span>{post.author}</span>
      </div>
      <h3 className="font-headline text-2xl font-bold text-on-surface mb-4 leading-snug group-hover:text-tertiary transition-colors">
        {post.title}
      </h3>
      <p className="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-3">
        {post.excerpt}
      </p>
      <div className="mt-auto inline-flex items-center space-x-2 text-white text-base group/link relative">
        <span>Read Article</span>
        <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
      </div>
    </Link>
  );
}
