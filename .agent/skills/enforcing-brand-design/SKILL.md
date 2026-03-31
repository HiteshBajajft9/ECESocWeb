---
name: enforcing-brand-design
description: Applies the official brand design system to UI components. Use when the user asks to implement UI, update styles, or refers to the brand design skill.
---

# Brand Design System

## When to use this skill
- When creating a new page or component.
- When updating styles for any Next.js/React component.
- When the user asks to apply the "brand design", "design guidelines", or refers to the design system.

## Workflow
- [ ] **Check active component**: Ensure the component being edited uses Tailwind styling and follows `shadcn/ui` conventions if applicable.
- [ ] **Verify global aesthetic**: Make sure the container has the correct deep dark background (`#080808`). 
- [ ] **Apply standard palette**: Replace generic or randomly generated colors with the exact brand hex codes listed below.
- [ ] **Verify border radiuses**: Update corners to match the heavily rounded (`rounded-full`) aesthetic for interactive elements, and `rounded-2xl` for cards.
- [ ] **Review hierarchy**: Check contrast levels for headers, body, and labels.

## Instructions

### Color Palette
- **Primary**: `#FFFFFF` (White) - Used for primary text/foreground, active icons, and high-contrast elements.
- **Secondary**: `#1A1A1A` (Dark Grey) - Used for surface backgrounds, cards, secondary UI elements, and input fields.
- **Tertiary / Accent**: `#2DD4BF` (Teal) - The main brand accent color. Used for primary action buttons, active states, highlights, and accented icons.
- **Neutral / Background**: `#080808` (Deep Black/Grey) - The absolute lowest layer background color for the application.

### Typography
- **Font Family**: Modern, clean Sans-Serif (e.g., Inter, Geist, or Roboto).
- **Styling Rules**:
  - **Headline**: High contrast (`text-white`), bold weights, clean metrics.
  - **Body**: Medium contrast (e.g., `text-neutral-400` or slightly transparent white).
  - **Label**: Smaller, concise metadata.

### Component Styling Guidelines
- **Buttons & Interactive Elements**: Heavily rounded corners (`rounded-full`).
  - **Primary/Inverted**: `bg-white text-black`.
  - **Brand**: `bg-[#2DD4BF] text-black`.
  - **Secondary**: `bg-[#1A1A1A] text-white`.
  - **Outlined**: Transparent backgrounds with subtle borders (`border-white/10` or `border-[#333]`).
- **Cards & Surfaces**: Use `bg-[#1A1A1A]` for top-level cards or floating panels. Smooth rounding (`rounded-xl` or `rounded-2xl`), minimal or highly transparent borders (`border-white/5`).
- **Inputs**: Pill-shaped layout (`rounded-full`), dark grey backgrounds, integrated icons (like Lucide icons) aligned inside the input.
- **Interactions**: Implement smooth interactive hover states (e.g., adding `hover:bg-white/10`) to make the UI engaging.
