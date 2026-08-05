# Changelog

All notable changes to this project are documented here. Format loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [4.3.0] - Unreleased

### Added
- Optional **Notifications** (off by default): get pinged via [ntfy](https://ntfy.sh) or a custom webhook when a task is overdue, due today, or due tomorrow.
- Notification settings sync as `.notify.json` alongside task files, using whichever sync backend (Dropbox or Local Folder) is already active.
- "Send Test" button to verify a ntfy topic or webhook URL before relying on it.
- Random topic-name generator (🎲) for ntfy, so no signup or pre-existing account is needed.

### Notes
- Additive and non-breaking: no changes to task parsing, file formats, or existing sync behavior. Trigger checks piggyback on the existing 30s poll cycle rather than adding a new one.

## [4.2.0]

- Local Folder sync (File System Access API) alongside existing Dropbox sync.
- Light/dark mode toggle.
- Fix: first-time visitors no longer auto-redirect to Dropbox OAuth before a sync method is chosen.

---

_Earlier versions were not tracked in this file. This log starts at 4.2.0._
