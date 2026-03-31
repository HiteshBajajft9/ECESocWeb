
***

# 📄 Technical Blueprint: 

## 🎯 Project Objective
Implement a high-performance, data-driven blog system in **Next.js** (App Router) using **shadcn/ui**. The system must strictly follow the **Master-Detail Pattern** and enforcing brand design skill in .agent folder in root directory

---

## 📂 Modular Architecture & File Paths
Antigravity must follow this specific file structure to maintain the "Stitch" design:

| File Role | Absolute Path |
| :--- | :--- |
| **Type Definition** | `modules/blogs/types/index.ts` |
| **Card Component** | `modules/blogs/components/blog-card.tsx` |
| **Main Feed Page** | `app/blogs/page.tsx` |
| **Blog Detail Page** | `app/blogs/[id]/page.tsx` |
| **Mock Data Store** | `lib/data.ts` |

---

## 🛠️ Implementation Specs

### 1. Data Schema (`modules/blogs/types/index.ts`)
**Pattern:** Strict Interface. 
```typescript
export interface BlogPost {
  id: string;      // Unique slug for routing (e.g., "has to be keyword from heading,   no spaces, no hyphens, a single word, make sure it is easily modifiable")
  title: string;
  author: string;
  date: string;
  tags: string[];    // Array of strings for the bottom chips
  excerpt: string; // Preview text (no CSS clamping required)
  content: string; // Full body content (Raw Markdown string)
}
```

### 2. The Blog Card (`modules/blogs/components/blog-card.tsx`)
**Pattern:** Prop-Object Composition.
- **Data Flow:** Pass the entire `post: BlogPost` object as a single prop.
- **Styling:**
  - Background: `#1A1A1A` (Secondary Noir).
  - Hover: Border changes to `#2DD4BF` (Tertiary Mint).
  - Shape: `rounded-[2rem]` (Heavy rounding).
- **Layout:** Use `flex flex-col h-full` and `flex-grow` on content so card heights remain uniform in a grid.
- **Interaction:** Entire card wrapped in a Next.js `Link`.

### 3. Routing & Logic
- **Feed (`app/blogs/page.tsx`):**
  - Background: `#080808`.
  - Grid: `grid-cols-1 md:grid-cols-3 gap-8`.
  - Logic: `.map()` through `blogData` array and render `<BlogCard />`.
- **Detail (`app/blogs/[id]/page.tsx`):**
  - Logic: `const post = blogData.find(p => p.id === params.id)`.
  - Fallback: Use `notFound()` if `post` is undefined.

---

## 🎨 Design Constants (Landio Noir)
**Take reference from the brand design skill**
---

## 🤖 Instructions for Antigravity (Planning Mode)
1. **Initialize Types:** Create `modules/blogs/types/index.ts` first.
2. **Scaffold Component:** Build the `BlogCard` in the modular path. Use the `post` object directly for the `excerpt` preview.
3. **Assemble Pages:** In `app/blogs/page.tsx`, import the component from the `modules` directory.
4. **Validation:** Ensure all hover states use the Mint accent (`#2DD4BF`) and that routing points to `[id]`.

To get your blog looking exactly like the high-fidelity screenshot using **Raw Markdown**, we will use the **Tailwind Typography (`prose`)** plugin. This is the "magic" that takes an unformatted string and applies your brand's font sizes, colors, and spacing automatically.

Add these specific rendering instructions to your **Technical Blueprint** for Antigravity:

---

### 4. Content Rendering Logic (`app/blogs/[id]/page.tsx`)

**Pattern:** The "Prose Transformer"
Instead of manually styling every paragraph or heading, use the `prose` utility. Antigravity must implement the following:

* **Processor:** Use `react-markdown` to convert the `post.content` string into HTML.
* **Styling Engine:** Apply Tailwind’s `prose` classes to a wrapper `div`. This ensures the raw content inherits the **Landio Noir** aesthetic without extra interfaces.

#### The Rendering Snippet:
```tsx
import ReactMarkdown from 'react-markdown';

// Inside the detail page component:
<article className="bg-[#080808] min-h-screen text-white p-6 md:p-20">
  {/* Header & Banner Image logic here */}

  <div className="prose prose-invert prose-zinc max-w-none 
                  prose-headings:text-white prose-headings:font-bold
                  prose-p:text-zinc-400 prose-p:leading-relaxed
                  prose-strong:text-[#2DD4BF] 
                  prose-blockquote:border-l-4 prose-blockquote:border-[#2DD4BF] 
                  prose-blockquote:bg-[#1A1A1A] prose-blockquote:p-6 prose-blockquote:rounded-r-2xl
                  prose-img:rounded-[2rem] prose-img:border prose-img:border-zinc-800">
    <ReactMarkdown>{post.content}</ReactMarkdown>
  </div>
  
  {/* Footer Tag logic here */}
</article>
```

### 5. Essential Setup for Antigravity
Before Antigravity starts coding, it must ensure these dependencies are present:
1.  **Install Command:** `npm install react-markdown @tailwindcss/typography`
2.  **Tailwind Config:** Add `require('@tailwindcss/typography')` to the `plugins` array in `tailwind.config.js`, if file not present create one using command `npx tailwindcss init -p`.

---

## 🤖 Final Instructions for Antigravity (Updated)
1.  **Data Source:** Read the raw string from `post.content` in `lib/data.ts`.
2.  **Visual Hierarchy:** Use `prose-headings:text-4xl` for H1 and `text-2xl` for H2 within the markdown wrapper.
3.  **Accent Integration:** Any text wrapped in `**bold**` in the markdown must automatically render in the Tertiary Mint color (`#2DD4BF`).
4.  **Blockquotes:** Format `> quote` lines to have the Mint left-border and the Secondary Noir (`#1A1A1A`) background as shown in the screenshot.
5.  **Tags:** Render the `tags` array at the bottom of the page as small, non-clickable pills: `bg-zinc-900 text-zinc-400 px-3 py-1 rounded-full text-xs`.

***
# Once you've generated the file, update with this final instruction:
- "Antigravity: Ensure the content array in tailwind.config.js includes the path ./modules/**/*.{ts,tsx} so that the custom Noir styles are applied to the blog components."

# Create sample blog data only one object in data.ts and render it
***

