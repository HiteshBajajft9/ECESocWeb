import { Hero } from "@/modules/home/components/hero";
import { AboutSection } from "@/modules/home/components/about-section";
import { BlogSection } from "@/modules/home/components/blog-section";
import { GallerySection } from "@/modules/home/components/gallery-section";
import { EventsSection } from "@/modules/home/components/events-section";
import { SocialSection } from "@/modules/home/components/social-section";
import { FacultyTestimonials } from "@/modules/home/components/faculty-testimonials";

export default function Home() {
  return (
    <main className="min-h-screen pb-32 selection:bg-tertiary/30 selection:text-tertiary bg-surface text-on-surface flex flex-col">
      <Hero />
      <AboutSection />
      <BlogSection />
      <GallerySection />
      <EventsSection />
      <SocialSection />
      <FacultyTestimonials />
    </main>
  );
}
