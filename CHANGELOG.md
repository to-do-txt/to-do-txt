# Changelog

All notable changes to this project are documented here. Format loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [4.10.0] - 2026-10-05

### Added
- **Example task** on an empty list: shows `(A) Call mom +Project @context example` as a preview. Nothing is saved until you tap **Add to my list**.

### Changed
- **Phone suggestions:** tapping a +project or @context suggestion completes it and keeps the keyboard open. The "Tab ⇥" hint now shows only on desktop.

## [4.9.0] - 2026-10-05

### Added
- **Installable app (PWA):** add to your home screen or install from the browser. Includes a web app manifest, home-screen icons and a service worker.
- **Offline start:** the app opens without a connection. Local Folder sync works offline; cloud changes made offline are sent when you reconnect.
- **Update prompt:** when a new version is ready, an **Update** button appears instead of changing the app under you.

## [4.8.0] - 2026-10-05

### Added
- **Help guide:** a **?** button next to the theme toggle opens a guide to the task format: adding tasks, priorities, projects and contexts, due dates, finishing and editing tasks, links, lists, and saving. Closes with the ✕ button, Escape, or a click outside.

## [4.7.0] - 2026-10-05

### Added
- **Google Drive** sync as a second cloud backend, alongside Dropbox. Files live in a `to-do-txt` folder in My Drive, created on first use. Requires a client ID; see README, "Google Drive setup".
- Dropbox and Google Drive logos on the sync buttons (Local Folder is labelled "Local").

### Changed
- **Light theme is the default** on first visit. A stored choice still wins.
- **Header redesign:** one row for the title, sync status, file, theme toggle and **View** menu, and one row for search, the task input and Add. Sort, the completed filter, headers, add-to-top, sweep, bulk edit, backup and print moved into the View menu.
- **Phone layout:** the header fits on one row, the title no longer wraps, and the sidebar shadow only appears while the sidebar is open.

### Fixed
- Dropbox and Google Drive sync no longer overwrite each other. Saves carry the revision they were based on; if another device saved first, the two versions are merged line by line.
- Edits made offline (or during a failed save) are kept and sent when the connection returns, instead of being dropped by the next 30-second refresh. Pending edits survive page reloads and sign-in redirects.
- Tabs open in the same browser no longer overwrite each other's unsaved edits.
- Uploads time out instead of stalling sync indefinitely.
- Dropbox HTTP 400 responses no longer force a sign-in.
- Switching sync backends clears the previous backend's list before loading the new one.
- The list refreshes when the tab becomes visible again.

## [4.3.0 – 4.6.0]

Not logged individually. The entries below are the 4.3.0 work; notifications and the email digest were removed in 4.6.0.

### Added
- Optional **Notifications** (off by default): get pinged via [ntfy](https://ntfy.sh) or a custom webhook when a task is overdue, due today, or due tomorrow.
- **Email Digest** (manual): a "Generate Email" button builds a formatted plain-text digest of matching tasks and opens it as a pre-filled draft in your default mail app via `mailto:`. Nothing sends automatically. "Copy Text" fallback for devices without a configured mail app.
- Notification settings sync as `.notify.json` alongside task files, using whichever sync backend (Dropbox or Local Folder) is already active.
- "Send Test" button to verify a ntfy topic or webhook URL before relying on it.
- Random topic-name generator (🎲) for ntfy, so no signup or pre-existing account is needed.

---

## [4.2.0]

- Local Folder sync (File System Access API) alongside existing Dropbox sync.
- Light/dark mode toggle.
- Fix: first-time visitors no longer auto-redirect to Dropbox OAuth before a sync method is chosen.

---

_Versions before 4.2.0 were not tracked in this file._
