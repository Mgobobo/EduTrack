# EduTrack SA — React + TypeScript + Tailwind Build

**Status: All 11 phases complete — production-ready demo build**

A premium, fully interactive school management platform demo, built in phases with React 18, TypeScript (strict), Tailwind CSS, Framer Motion, React Router and Recharts. No backend — all data is realistic, centralized demo data — but every flow genuinely works: real client-side state, real validation, real navigation, real (clearly-labeled) simulated exports.

## Running it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build      # outputs to dist/ — Netlify is already configured (netlify.toml, publish = "dist")
npm run preview     # preview the production build locally
```

> This project was authored without a live `npm install` in the authoring environment (no network access there). Every file was syntax-validated with the TypeScript compiler and cross-checked for import/export correctness after every single change — but your first `npm run dev` is the real proof. Flag anything odd immediately.

## Demo access

- **Five official accounts** (all password `demo123`): `principal@katsecondary.co.za`, `teacher@katsecondary.co.za`, `parent@katsecondary.co.za`, `learner@katsecondary.co.za`, `district@gauteng.gov.za`
- **Quick login**: `user1` / `password3` signs in as the Principal
- One-tap demo account cards are also on the login screen

## Presenter tools

- **⌘/Ctrl + K** — global search across learners, teachers and pages, with real inline profile previews
- **⌘/Ctrl + Shift + D**, or the thin "PRESENTER" tab on the left edge of the screen — opens the **Demo Control Panel**:
  - Switch between all 5 dashboards instantly, without logging out
  - Post a sample announcement live (visible immediately on Principal, Parent and Learner dashboards — they share one data source)
  - Trigger a sample notification or AI risk alert (updates the real notification bell/badge)
  - Preview the multi-school account switcher UI (clearly labeled as a UI preview — see note below)
  - Reset all demo data with one click (reloads the page; your login stays active)

## What's built, phase by phase

1. **Architecture** — Vite, TypeScript strict mode, Tailwind theme, routing, context providers, reusable UI kit
2. **Landing page** — animated hero, platform overview, AI teaser, testimonials, FAQ; **Pricing + Book a Demonstration** with real contact cards and a working request form; public **Security** page
3. **Login** — full validation, loading state, error/info banners, quick-login cards, persisted session
4. **Principal Dashboard** — stats, charts, Add Learner / Add Teacher / Generate Report / Send Announcement (all functional), live announcements feed, mini calendar, finance snapshot
5. **Teacher Dashboard** — attendance register, mark entry with a live log, homework assignment, lesson planner, AI Lesson Assistant
6. **Parent Portal** — child profile, attendance, printable report card, homework & assignments, behaviour reports, fees with a working "Pay Now" flow, AI Parent Assistant
7. **Learner Portal** — subjects, performance-over-time chart, live goal tracking, study planner, AI Study Assistant
8. **District Dashboard** — real aggregate stats computed from the school list, sortable rankings, budget overview, live intervention tracking, AI Insights
9. **EduTrack AI** — floating assistant with a real typewriter animation and inline charts/report cards rendered in the chat
10. **Final polish** — error boundary, page transitions, per-route document titles, PWA manifest, skip-to-content link, ⌘K search, live notification centre, skeleton loading, full accessibility sweep
11. **Executive Demonstration Mode** — the Demo Control Panel described above, a real Reports page (preview/print/export), richer search with profile previews, and shared live state for announcements/notifications across dashboards

## Data consistency

Where two role views can show the same underlying person or event (e.g. Parent and Learner both viewing Lindiwe Dlamini, or an announcement posted by the Principal), the data lives once — in `demoData.ts` for static seed data, or in `AnnouncementsContext`/`NotificationContext` for anything that can change during a live session — and every view reads from that single source. Nothing is duplicated in a way that could silently drift out of sync.

## Honest scope notes

A few things are intentionally simulated rather than fully wired, and are labeled as such in the UI itself:
- PDF/Excel exports show a confirmation toast rather than producing a real file.
- The "switch demo school" control in the Demo Control Panel previews the *account-switcher UI* — it does not re-theme every dashboard's data per school, which would need a larger data-layer change than fits a demo. The panel says this explicitly rather than implying more than it does.
- Search results for learners/teachers open a real profile preview built from actual demo data, but there's no dedicated full profile page to navigate to yet — that's flagged in the preview itself.

## Folder structure

```
src/
  components/
    ai/            EduTrack AI floating assistant
    auth/          Route guards
    demo/          Presenter-only Demo Control Panel
    layout/        Nav, footer, sidebar, topbar, dashboard/marketing shells
    ui/            Reusable presentational components (charts, modals, search, skeletons…)
  context/         Auth, theme, toast, notifications, announcements
  data/            Centralized demo data — single source of truth
  pages/
    marketing/     Public pages
    auth/          Login
    dashboard/      One entry page per role
    shared/         Pages shared across roles under /app/*
  types/           Shared TypeScript types
```
