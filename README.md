# NFTme - UI Engineering Assignment

This repository contains the pixel-perfect implementation of the NFTme landing page based on the provided Figma design. The project focuses on exact UI replication for desktop while ensuring a fully fluid and accessible experience across tablet and mobile devices.

Additionally, the design system has been extended to include **About** and **Contact** pages to demonstrate scalability.

🔗 **[Live Preview](INSERT_YOUR_VERCEL_OR_NETLIFY_LINK_HERE)**

## 📋 Assignment Objectives

- **Recreate Landing Page:** Exact replication of the Figma design.
- **Responsiveness:** Critical evaluation of layout reflow, typography scaling, and spacing.
- **Extension:** Creation of two additional pages (About & Contact) adhering to the design language.

## 🛠 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/) (Button, Card, Avatar, Input)
- **Fonts:** Clash Display (Custom) & Poppins (Google Fonts)

## 📱 Implementation Strategy (Hybrid Layout)

To meet the strict requirement of **"Pixel-Accurate Layout"** from the Figma file while ensuring **"Strong Responsiveness"**, a hybrid CSS strategy was implemented:

1.  **Desktop (lg/xl breakpoints):**

    - Utilizes `absolute` positioning and specific pixel coordinates derived directly from the design file.
    - Ensures 1:1 visual fidelity with the original mockup.

2.  **Mobile & Tablet:**
    - Reverts to standard `relative` positioning, `flexbox`, and `grid` layouts.
    - Elements stack naturally with adjusted margins and padding.
    - Typography scales dynamically for readability.

This approach guarantees that the desktop view is an exact mirror of the design artifact, while mobile users get a native, scrollable experience.

## 📂 Project Structure

```bash
├── app/
│   ├── layout.tsx       # Global layout & Font configuration
│   ├── page.tsx         # Home / Landing Page (Figma Replica)
│   ├── about/           # About Us Page (Extended Design)
│   └── contact/         # Contact Us Page (Extended Design)
├── components/
│   └── ui/              # Reusable UI components (Buttons, Inputs, etc.)
├── public/              # Static assets (Blobs, Images, Icons)
└── tailwind.config.ts   # Configuration & Theme extension
```

## 🚀 Getting Started

Clone the repository:

```bash

git clone [https://github.com/YOUR_USERNAME/nftme-ui-assignment.git](https://github.com/YOUR_USERNAME/nftme-ui-assignment.git)
cd nftme-ui-assignment
```

Install dependencies:

```bash

npm install
# or
yarn install
```

Run the development server:

```bash

npm run dev

```

Open the browser: Navigate to http://localhost:3000 to view the application.

## 📸 Deliverables & Screenshots

1. Desktop View (Pixel Perfect)
   Exact replication of the Figma file using absolute positioning.

2. Tablet View (Adaptive)
   Layout adapts to 2-column grids and scaled typography.

3. Mobile View (Fluid Stack)
   Elements stack vertically with optimized touch targets and spacing.
