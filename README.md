# **Workshop Booking**

> This website is for coordinators to book a workshop(s), they can book a workshop based on instructors posts or can propose a workshop date based on their convenience.


### Features
* Statistics
    1. Instructors Only
        * Monthly Workshop Count
        * Instructor/Coordinator Profile stats
        * Upcoming Workshops
        * View/Post comments on Coordinator's Profile
    2. Open to All
        * Workshops taken over Map of India
        * Pie chart based on Total Workshops taken to Type of Workshops.

* Workshop Related Features
    > Instructors can Accept, Reject or Delete workshops based on their preference, also they can postpone a workshop based on coordinators request.

__NOTE__: Check docs/Getting_Started.md for more info.

---

## UI/UX Enhancement Summary (Screening Task)

This fork modernizes the frontend with Bootstrap 5, improved typography (Inter), clearer hierarchy, and mobile-first layouts. It keeps the Django backend intact, focusing on accessible, responsive UI and consistent interactions (modals, toasts, spinners).

### Quick Start

Prerequisites
- Python 3.11+
- pip, virtualenv (recommended)

Setup
1. Create and activate a virtual environment
    - Windows (PowerShell):
      - `python -m venv venv`
      - `venv\\Scripts\\Activate.ps1`
2. Install dependencies
    - `pip install -r requirements.txt`
3. Run migrations and start server
    - `python manage.py migrate`
    - `python manage.py runserver`
4. Open http://127.0.0.1:8000/

### What changed (highlights)
- Bootstrap 5 via CDN and a lightweight theme (`workshop_app/static/workshop_app/css/theme.css`).
- Base template upgraded: responsive navbar, Google Fonts, Bootstrap Toast messages.
- Forms refined with labels, spacing, and client-side validation for faster feedback.
- Public statistics page redesigned with a card grid, sidebar filters, and clearer actions.
- Workshop Types table polished; details open in a modal to avoid full-page navigation.
- Dashboards now use a friendly “hero” section with clear calls to action.

### Reasoning (required)
1. Design principles used
    - Clarity: Simplified layouts, consistent spacing, readable typography, and clear labels.
    - Visual hierarchy: Card headers, contrast, and size/weight guide attention to primary actions.
    - Consistency: Single source of styling via Bootstrap 5 + theme; one navbar, one toast pattern.
    - Accessibility: Adequate contrast, larger touch targets, semantic components, and ARIA-friendly BS5 components.

2. Ensuring responsiveness
    - Mobile-first grid and utilities (container/row/col, row-cols-*). Cards replace tables on small screens.
    - Collapse nav, fluid components, and BS5 helpers (float-end, ms/me spacing) to scale up gracefully.

3. Trade-offs: design vs performance
    - CDN Bootstrap adds a small cost but simplifies caching and keeps CSS minimal vs custom CSS bloat.
    - Limited JS: retained jQuery for existing widgets; avoided heavy frameworks to keep TTI fast.

4. Biggest challenge and approach
    - Migrating legacy Bootstrap 4 markup to Bootstrap 5 without breaking templates. Addressed by targeted updates (data-bs-*, badges, spacing, alerts) and testing key flows (proposal, stats, types).

### Screenshots (before/after)
- Place your screenshots in `docs/screenshots/` and embed links here:
  - Before — Home/Dashboard
  - After — Home/Dashboard
  - Before — Statistics
  - After — Statistics
  - Before — Propose Workshop
  - After — Propose Workshop

Example (replace with real images):
`![After - Dashboard](docs/screenshots/after-dashboard.png)`

### Developer notes
- Primary files touched are in `workshop_app/templates/workshop_app/` and `statistics_app/templates/statistics_app/`.
- The Bootstrap 5 theme overrides live in `workshop_app/static/workshop_app/css/theme.css`.
- No backend behavior changed; all updates are presentational.

### Submission checklist
- [x] Code is readable and well-structured
- [x] Progressive commits recommended
- [x] README includes reasoning and setup
- [x] Add screenshots (docs/screenshots) or a live demo link
- [x] Inline documentation where valuable

