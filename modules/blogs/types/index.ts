export interface BlogPost {
  id: string;      // Unique slug for routing
  title: string;
  author: string;
  date: string;
  tags: string[];    // Array of strings for the bottom chips
  excerpt: string; // Preview text
  content: string; // Full body content (Raw Markdown string)
  imageUrl?: string; // Image URL for the Stitch design replication
}
