# Paadi Village — Interactive Marketing Plan

🌾 **An interactive single-page website showcasing the 6-month marketing plan for Paadi Village — Kerala's first GI-tagged rice tourism destination.**

[Live Demo](https://paadi-marketing.vercel.app) · [Marketing Plan Source](./MARKETING-PLAN.md) · [Report a Bug](https://github.com/xosbot/paadi-marketing/issues)

---

## ✨ Features

- **All 20 sections** of the marketing plan in one scrollable experience
- **Interactive phase filter** (M1–M6) on the 6-month timeline
- **Live budget calculator** with sliders that update visitor projections
- **Persona segment tabs** (Primary / Secondary / Tertiary / Niche)
- **Interactive competitor matrix** (Paadi vs Pizhala, Cochin Magic, Blue Yonder, Kumbalangi, Kumarakom)
- **KPI hover tooltips** explaining every metric
- **Persistent implementation checklist** (saves to browser localStorage; reset button included)
- **Dark / light theme** toggle
- **Print / Save as PDF** button (full print stylesheet included)
- **Section progress rail** (right-side dots; click to jump)
- **Smooth scroll** + **animated counters** + **fade-in on scroll**
- **Fully responsive** (mobile, tablet, desktop)

## 🛠 Stack

- **HTML5** + **CSS3** (custom properties, grid, flexbox)
- **Vanilla JavaScript** (no build step, no dependencies)
- **Google Fonts** (Playfair Display + Inter)
- **Vercel** for hosting
- **GitHub** for version control

## 🚀 Local Development

```bash
# Clone the repo
git clone https://github.com/xosbot/paadi-marketing.git
cd paadi-marketing

# Option 1: Open directly
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows

# Option 2: Local server (recommended)
python3 -m http.server 8000
# then open http://localhost:8000
```

## 📁 Project Structure

```
paadi-marketing/
├── index.html              # Single-page app shell
├── styles.css              # All styles (light + dark + print)
├── app.js                  # Interactivity (filters, calculator, checklist, theme)
├── vercel.json             # Vercel config (clean URLs, cache headers)
├── README.md               # This file
├── MARKETING-PLAN.md       # The full marketing plan (markdown source)
└── public/
    └── images/             # 17 curated photos of Paadi fields, farmers, food
```

## 🎨 Brand

| Token | Value | Use |
|-------|-------|-----|
| Paadi Green | `#2E5C3E` | Primary, headings, navigation |
| Prawn Gold | `#D4A017` | Accents, CTAs, highlights |
| Rice Cream | `#F5F0E8` | Backgrounds |
| Earth Brown | `#8B5E3C` | Secondary, textures |
| Brackish Blue | `#2B4A5C` | Tertiary, water/sea |

## 📊 Sections Included

1. **Hero** — animated stats counter
2. **Executive Summary** — strategy pillars
3. **Market Opportunity** — Kerala tourism data
4. **Personas** — 6 segments with filterable tabs
5. **USPs** — 8 unique selling propositions
6. **SWOT** — strengths/weaknesses/opportunities/threats
7. **6-Month Timeline** — phase filter (M1–M6)
8. **Channels** — 12 marketing channels
9. **Pricing** — 5 packages + commission model
10. **Competitor Matrix** — vs. 5 competitors, 13 factors
11. **Budget** — interactive calculator
12. **KPIs** — dashboard with hover tooltips
13. **Content Calendar** — 7-day weekly schedule
14. **Partnerships** — 5 tiers, 30+ targets
15. **E-commerce** — 7 SKUs + launch sequence
16. **Launch Playbook** — 3-phase rollout
17. **PR & Media** — 6 outlet tiers
18. **Crisis Communications** — 10 scenarios
19. **Risk Mitigation** — 6 risks
20. **Implementation Checklist** — interactive, persistent

## 🚢 Deployment

This site is configured for **Vercel**. To deploy:

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (from project root)
vercel --prod
```

Or connect the GitHub repo to Vercel for automatic deployments on push.

## 📝 License

© 2026 Paadi Village. An initiative of Palliyakkal Service Cooperative Bank.

Built for the PAADI / Palliyakkal SCB marketing launch.

---

*"Walk the Fields. Ride the Waters. Taste the Story."*
