# Louie Morland - Portfolio

A responsive React portfolio focused on product design, UI/UX work and front-end implementation.

## Featured case studies

- Community Film Platform - research, Figma prototyping, heuristic evaluation, user testing and full-stack delivery.
- Feline Adoption Agency - mobile UI, filtering, reusable Jetpack Compose components and work within an existing codebase.

Both case studies include accessible image carousels, project context, key findings, outcomes and honest technical trade-offs. Additional development projects are presented beneath them.

## Run locally

```bash
npm install
npm run dev
```

The development address will be printed in the terminal. This command works in Windows PowerShell, Command Prompt, macOS and Linux.

## Production build

```bash
npm run build
npm run preview
```

## Main files

- `src/components/Projects.jsx` - case-study content and interactions.
- `src/Projects.css` - case-study and project presentation styles.
- `src/components/home.jsx` - homepage introduction.
- `src/index.css` - global layout and light/dark theme variables.
- `public/images/case-studies/` - film-platform and Android-app screenshots.

## Before publishing

Replace `YOUR_FORM_ENDPOINT_HERE` in `src/components/contact.jsx` with the endpoint for the contact-form service you intend to use.
