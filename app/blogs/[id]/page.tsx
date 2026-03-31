import Link from 'next/link';
import { blogData } from '@/modules/blogs/lib/data';
import { notFound } from 'next/navigation';
import { ArrowLeft, Bookmark, Share2, Quote, Satellite, Brain } from 'lucide-react';
import { PageAnimator } from '@/modules/blogs/components/page-animator';
import Image from 'next/image';

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = blogData.find((p) => p.id === id);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-12 pb-32 bg-surface text-on-surface font-body selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
            <PageAnimator>
                <article className="max-w-4xl mx-auto px-6 lg:px-0">
                    <nav className="mb-16">
                        <Link href="/blogs" className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors group">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-label text-sm uppercase tracking-widest font-bold">Back to Blogs</span>
                        </Link>
                    </nav>

                    <header className="space-y-8 mb-20">
                        <div className="space-y-4">
                            <span className="inline-block px-3 py-1 bg-surface-container text-tertiary-fixed font-label text-[10px] uppercase tracking-[0.2em] rounded-full">
                                {post.tags[0] || 'Editorial'}
                            </span>
                            <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface leading-[1.1]">
                                {post.title}
                            </h1>
                        </div>
                        <div className="flex items-center gap-6 pt-6">
                            <div className="h-14 w-14 rounded-full bg-surface-container-high flex items-center justify-center font-headline text-2xl text-primary font-bold overflow-hidden ring-2 ring-outline-variant/20">
                                {post.author.charAt(0)}
                            </div>
                            <div className="flex flex-col">
                                <span className="font-headline font-bold text-2xl text-white">{post.author}</span>
                                <span className="font-label text-sm text-zinc-300 uppercase tracking-wider">Published {post.date}</span>
                            </div>
                        </div>
                    </header>

                    <section className="relative mb-24 -mx-6 lg:-mx-20">
                        <div className="aspect-[21/9] rounded-xl overflow-hidden editorial-shadow bg-surface-container-low relative">
                            {post.imageUrl && (
                                <>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    {/*<img className="w-full h-full object-cover" alt={post.title} src={post.imageUrl} />*/}
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </>
                            )}
                        </div>
                        <div className="absolute -bottom-6 -right-6 hidden lg:block p-8 bg-surface-container-highest/60 backdrop-blur-xl rounded-xl max-w-xs border border-white/5">
                            <p className="text-xs italic text-on-surface-variant leading-relaxed">
                                "The intersection of deep tech and the soil is where the next revolution begins."
                            </p>
                        </div>
                    </section>

                    <div className="flex flex-col lg:flex-row gap-16">
                        <aside className="hidden lg:flex flex-col gap-8 w-12 sticky top-12 h-fit">
                            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-all text-on-surface-variant hover:text-primary">
                                <Bookmark className="w-5 h-5" />
                            </button>
                            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-all text-on-surface-variant hover:text-primary">
                                <Share2 className="w-5 h-5" />
                            </button>
                            <div className="h-24 w-[2px] bg-surface-container mx-auto rounded-full overflow-hidden">
                                <div className="h-1/3 w-full bg-tertiary-fixed"></div>
                            </div>
                        </aside>

                        <section className="flex-1 space-y-10">
                            <p className="text-xl leading-relaxed text-on-surface font-body font-normal opacity-90 first-letter:text-7xl first-letter:font-headline first-letter:font-extrabold first-letter:mr-3 first-letter:float-left first-letter:text-primary">
                                In the heart of Bangalore, a revolution is brewing that isn't about the latest social app or fintech disruption. It's about something far more fundamental: the soil beneath our feet and the food on our plates. Kunal Prasad, the visionary behind Cropin, saw a world where the most vital industry—agriculture—was also the most technologically neglected.
                            </p>
                            <p className="text-lg leading-relaxed text-on-surface-variant">
                                For centuries, farming has relied on intuition, tradition, and the unpredictable whims of weather. But as global populations soar and climate change destabilizes once-reliable seasonal patterns, intuition is no longer enough. Cropin is turning every acre of farmland into a data point, using satellite imagery and artificial intelligence to predict yields with surgical precision.
                            </p>

                            <div className="relative py-12 my-16">
                                <div className="absolute inset-0 bg-surface-container-low rounded-[3rem] -rotate-1"></div>
                                <div className="relative px-12 text-center">
                                    <Quote className="text-tertiary-fixed w-10 h-10 mb-4 mx-auto fill-current" />
                                    <blockquote className="font-headline text-3xl font-bold text-on-surface italic leading-snug">
                                        Lesson: In agriculture, data is not an advantage. It is survival.
                                    </blockquote>
                                    <cite className="block mt-6 font-label text-xs uppercase tracking-widest text-on-surface-variant">
                                        — Kunal Prasad, Founder of Cropin
                                    </cite>
                                </div>
                            </div>

                            <h2 className="font-headline text-3xl font-bold text-primary pt-6">The Power of Intelligence</h2>
                            <p className="text-lg leading-relaxed text-on-surface-variant">
                                The challenge wasn't just building the technology; it was the adoption. Farmers in remote regions needed a platform that was accessible yet powerful. Cropin’s "SmartFarm" platform acts as a digital twin of the farm, tracking everything from seed health to soil moisture levels in real-time.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                <div className="p-8 bg-surface-container rounded-xl space-y-4 hover:bg-surface-container-high transition-colors">
                                    <Satellite className="text-tertiary-fixed w-8 h-8" />
                                    <h3 className="font-headline font-bold text-xl text-on-surface">Satellite Insights</h3>
                                    <p className="text-sm text-on-surface-variant">Real-time monitoring of crop health across millions of hectares globally.</p>
                                </div>
                                <div className="p-8 bg-surface-container rounded-xl space-y-4 hover:bg-surface-container-high transition-colors">
                                    <Brain className="text-tertiary-fixed w-8 h-8" />
                                    <h3 className="font-headline font-bold text-xl text-on-surface">Predictive AI</h3>
                                    <p className="text-sm text-on-surface-variant">Forecasting harvest windows and yield volume to optimize the supply chain.</p>
                                </div>
                            </div>

                            <p className="text-lg leading-relaxed text-on-surface-variant">
                                By digitizing the farming process, Cropin has created a transparent ecosystem where banks can lend with more confidence, insurance companies can assess risk more accurately, and most importantly, farmers can secure their livelihoods against an increasingly volatile environment. The future of food isn't just organic; it's intelligent.
                            </p>

                            <div className="flex flex-wrap gap-3 pt-12 border-t border-outline-variant/10">
                                {post.tags.map(tag => (
                                    <span key={tag} className="px-4 py-2 bg-surface-container text-on-surface-variant text-xs rounded-full cursor-default transition-all">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>
                </article>
            </PageAnimator>
        </main>
    );
}
