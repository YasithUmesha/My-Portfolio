# Yasith Umesha — Personal Portfolio Website

A modern, high-performance developer portfolio built with **Next.js (App Router)**, **React**, **Tailwind CSS**, and **Lucide Icons**, inspired by cosmic dark glassmorphism aesthetics.

Designed specifically for **Yasith Umesha** — Full-Stack Developer & BSc (Hons) in Information Systems undergraduate at Sabaragamuwa University of Sri Lanka.

---

## 🚀 Features

- **Cosmic Dark Design System:** Deep space palette (`#030014`), ambient radial flares, glassmorphism panels, and glowing gradient borders.
- **Dynamic Typewriter & Live Terminal:** Hero section features an interactive role typewriter and a mock `yasith.config.ts` code inspection window.
- **Centralized Data Architecture:** All personal information, biography, skills, projects, experience, certificates, and social links reside in one single file (`src/data/portfolioData.ts`).
- **Smooth Navigation & Scrollspy:** Floating navbar with blur glass backdrop, active section detection, and responsive mobile menu.
- **Categorized Skills Grid:** Filter technical competencies across Frontend, Backend, Databases, Tools, and Core Competencies.
- **Project Showcase Gallery:** Interactive cards featuring tech stacks, live links, GitHub repos, and detailed modal views for **MealMate**, **SmartRent**, and **Personal Portfolio**.
- **Experience Timeline:** Clean timeline with clearly marked placeholders for your internship role.
- **Education & Credentials:** Dedicated BSc (Hons) in Information Systems card alongside interactive certificate previews.
- **Interactive Contact Form:** Complete with client-side validation, error handling, quick clipboard email copy, and direct links.
- **CV / Resume Modal:** Dedicated modal guiding you on linking your official CV without displaying broken or fake files.
- **Full SEO & Responsive Support:** OpenGraph tags, semantic HTML5, accessible contrast, reduced-motion compliance, and mobile optimization.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Library:** React
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Icons:** Lucide React + Custom Optimized SVG Brand Icons
- **Language:** TypeScript / JavaScript

---

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── avatar.svg                    # Developer avatar illustration
│   ├── certificates/
│   │   └── cert-placeholder.svg      # Credential preview vector
│   └── projects/
│       ├── mealmate.svg              # MealMate app UI illustration
│       ├── smartrent.svg             # SmartRent platform UI illustration
│       └── portfolio.svg             # Portfolio website UI preview
├── src/
│   ├── app/
│   │   ├── globals.css               # Cosmic theme variables, glow, and animations
│   │   ├── layout.tsx                # Metadata, viewport, and OpenGraph tags
│   │   └── page.tsx                  # Single-page portfolio structure
│   ├── components/
│   │   ├── About.tsx                 # Academic info, metrics, and bio
│   │   ├── Certificates.tsx          # Education card & certificate gallery
│   │   ├── Contact.tsx               # Contact form with validation & social links
│   │   ├── CVModal.tsx               # Resume download helper modal
│   │   ├── Experience.tsx            # Career & internship milestones timeline
│   │   ├── Footer.tsx                # Minimal footer with quick links & copyright
│   │   ├── Hero.tsx                  # Greeting, typewriter, code window, CTAs
│   │   ├── Icons.tsx                 # High-res vector icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx                # Fixed glass navigation with scrollspy
│   │   └── Skills.tsx                # Filterable technical skills grid
│   └── data/
│       └── portfolioData.ts          # ⭐ CENTRAL CONFIG FILE FOR ALL CONTENT
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.ts
```

---

## 💻 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## ✏️ How to Customize Your Content

All personal data is decoupled from the UI components. You only need to edit **`src/data/portfolioData.ts`**:

1. **Personal Information:** Edit `portfolioData.personal` (name, titles, bio, university, location).
2. **Social Links:** Update your GitHub and LinkedIn URLs in `portfolioData.contact` and `portfolioData.socials`.
3. **Internship / Experience:** Replace `[Company / Organization Name - Editable Placeholder]` in `portfolioData.experience` with your real employer, job title, and dates.
4. **Projects:** Add or edit project screenshots, descriptions, and repositories under `portfolioData.projects`.
5. **Certificates:** Replace the placeholder certificates in `portfolioData.certificates` with your actual certificate titles and credential verification URLs.
6. **CV / Resume:** Drop your `Yasith_Umesha_CV.pdf` inside `public/`, then set `hasRealCV: true` and `cvUrl: "/Yasith_Umesha_CV.pdf"` in `portfolioData.personal`.

---

## ☁️ Deploying to Vercel

1. Push your code to a GitHub repository:
   ```bash
   git add .
   git commit -m "Complete portfolio website for Yasith Umesha"
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click **"Add New..."** -> **"Project"**.
4. Import your portfolio repository.
5. In **Framework Preset**, select **Next.js**.
6. Click **Deploy**. Vercel will automatically build and publish your portfolio with a live HTTPS URL.
