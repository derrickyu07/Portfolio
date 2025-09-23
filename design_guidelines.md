# Design Guidelines for Derrick Yu's Personal Portfolio Website

## Design Approach
**System-Based Approach**: Following modern developer portfolio conventions with dark-first design principles. The site prioritizes technical credibility and professional presentation for software engineering roles.

## Core Design Elements

### A. Color Palette
**Dark Mode (Primary)**:
- Background: 10 15% 8% (deep charcoal)
- Surface: 10 10% 12% (elevated dark surface)
- Primary: 220 90% 65% (professional blue)
- Text Primary: 0 0% 95% (near white)
- Text Secondary: 0 0% 70% (muted gray)
- Accent: 150 60% 55% (subtle green for success states)

**Light Mode (Secondary)**:
- Background: 0 0% 98% (off-white)
- Surface: 0 0% 100% (pure white)
- Primary: 220 90% 50% (deeper blue)
- Text Primary: 0 0% 15% (dark gray)
- Text Secondary: 0 0% 45% (medium gray)

### B. Typography
**Primary Font**: Inter (Google Fonts)
- Headings: 600-700 weight, tight line-height
- Body: 400-500 weight, comfortable reading line-height
- Code/Technical: JetBrains Mono for code snippets and technical details

**Hierarchy**:
- H1: 3xl-4xl for name and main headings
- H2: 2xl-3xl for section headers
- H3: xl-2xl for subsection headers
- Body: base-lg for optimal readability

### C. Layout System
**Spacing Units**: Consistent use of Tailwind spacing - primarily 4, 6, 8, 12, 16, 24
- Container: max-w-6xl centered with responsive padding
- Section spacing: py-16 to py-24 for clear separation
- Component spacing: gap-6 to gap-8 for related elements
- Content margins: mb-4 to mb-8 for text hierarchy

### D. Component Library

**Navigation**:
- Sticky header with blur backdrop
- Clean horizontal navigation with subtle hover states
- Dark/light mode toggle with smooth transitions

**Content Sections**:
- Hero: Full-height with name, title, and brief tagline
- Experience: Timeline-style layout with company logos and achievements
- Projects: Card-based grid with hover effects revealing tech stacks
- Skills: Organized tag clouds or progress indicators
- Contact: Clean form with prominent CTA buttons

**Interactive Elements**:
- Buttons: Rounded corners, subtle shadows, clear hierarchy
- Cards: Minimal borders, hover elevations, smooth transitions
- Links: Underline on hover for accessibility

### E. Visual Enhancements
**Minimal Animations**:
- Smooth scroll navigation between sections
- Subtle fade-in animations on scroll
- Hover state transitions (200-300ms duration)
- Theme toggle animation

**Background Treatments**:
- Subtle gradient overlays on hero section
- Clean section dividers
- Optional subtle dot patterns or grid overlays

## Images
**Professional Headshot**: Circular or rounded-square format in the hero/about section. Should be high-quality, professional attire, well-lit with neutral background.

**Project Screenshots**: Rectangular cards showcasing application interfaces. Include mobile and desktop views where applicable.

**No Large Hero Image**: The design focuses on typography and clean layouts rather than large imagery, maintaining the professional developer aesthetic.

## Key Design Principles
1. **Technical Credibility**: Design choices reflect modern development practices
2. **Scannable Content**: Easy for recruiters to quickly assess qualifications
3. **Mobile-First**: Responsive design with touch-friendly interactions
4. **Performance-Focused**: Minimal assets, optimized loading
5. **Accessibility**: High contrast ratios, semantic structure, keyboard navigation

## Special Considerations
- Resume download should be prominently featured with clear CTA
- GitHub and LinkedIn integration should be seamless
- Contact section should encourage direct outreach
- Optional blog section prepared for future content expansion