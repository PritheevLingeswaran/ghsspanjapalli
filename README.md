# Govt. Higher Secondary School, Panjapalli — Website

Official website for **Government Higher Secondary School, Panjapalli**, Dharmapuri District, Tamil Nadu. Built as a lightweight, bilingual (Tamil/English) static site with no backend or build process required.

**Live site:** [ghsspanjapalli.vercel.app](https://ghsspanjapalli.vercel.app/)

## Features

- **Bilingual UI** — instant Tamil/English toggle across the entire site, with the user's preference remembered on return visits.
- **Question Papers** — Term 1, Term 2, and Annual/Public Exam papers for Classes 8–12, organized by class, subject, and year.
- **Textbooks** — Samacheer Kalvi textbooks (English Medium) for Classes 8–12, including stream-specific subjects for Classes 11–12.
- **Live Notice Board** — automatically pulls the latest official exam notifications from the Directorate of Government Examinations, Tamil Nadu (DGE TN).
- **Academic Calendar** — term dates, holidays, and exam schedules for 2026–27.
- **In-browser PDF viewer** — view any question paper or textbook inline, with a one-click download option.
- **Contact & Location** — address, phone, email, and a scannable QR code linking to the school's map location.

## Tech Stack

- Plain **HTML, CSS, and vanilla JavaScript** — no framework, no build step.
- [AOS](https://michalsnik.github.io/aos/) for scroll animations, [tsParticles](https://particles.js.org/) for the hero background, [Font Awesome](https://fontawesome.com/) for icons.
- Hand-written utility CSS (a self-contained Tailwind-style system) to avoid a runtime CDN dependency.

## Papers & Textbooks Hosting

Question papers and textbooks are large in aggregate (multiple GB across hundreds of PDFs), well past what's practical to store in a Git repository. Instead:

- All PDFs are hosted on **Google Drive**.
- [`papers_drive_manifest.js`](./papers_drive_manifest.js) and [`textbooks_drive_manifest.js`](./textbooks_drive_manifest.js) map each file's expected path to its Google Drive file ID.
- The site resolves these IDs at runtime to load files directly into the in-page PDF viewer via Drive's embeddable preview, with a direct-download link alongside it.

## Deployment

The site auto-deploys via **Vercel** on every push to `main` — no build command or output directory needed since it's plain static HTML.

## Project Structure

```
index.html                    Entire site (markup, styles, and logic)
papers_drive_manifest.js      Path → Google Drive file ID map for question papers
textbooks_drive_manifest.js   Path → Google Drive file ID map for textbooks
images/                       Government emblem, Thiruvalluvar image, location QR code
robots.txt, sitemap.xml       Search engine crawling/indexing config
```

## Credits

Developed by **Pritheev Lingeswaran**, Student of SRM Institute of Science and Technology.
