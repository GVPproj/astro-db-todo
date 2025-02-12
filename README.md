# Astro DB Todo-App

A simple todo/habit tracking app with streak checks. The exercise here is to create a database driven application using HTML forms in Astro and avoiding client-side JavaScript.

The backend runs on a SQLite database leveraging [Astro DB](https://docs.astro.build/en/guides/astro-db/).

Authentication via GitHub OAuth.

Modals using the [HTML Dialog API](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog).

DB deployed at [Turso](https://docs.turso.tech/introduction).

## Functions

- pnpm i
- npx astro db push --remote --force-reset (to reset the db with new tables)

## Roadmap

- differentiate todos and workouts in db
- make workouts a separate table and seed data

- streaks reset to 0 if not updated yesterday
<!-- - Astro <ClientRouter /> for UI transitions  -->
- document installation and deployment process for other users
