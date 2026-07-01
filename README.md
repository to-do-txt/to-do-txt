# to-do-txt

A minimalist, privacy-focused Task Manager built entirely around the standard [todo.txt](http://todotxt.org/) format. This is a single-file Progressive Web App (PWA) that syncs directly with your personal Dropbox **or** a folder on your own device — no server, no account required for the local option.

## ✨ Features

* **Two Sync Backends:** Choose **Dropbox** for access across devices, or **Local Folder** to keep everything on-device via the browser's File System Access API. Switch between them anytime from the sidebar.
* **Multi-Project File Manager:** Create, swap, and manage isolated list files (e.g., `todo.txt`, `WORK`, `PERSONAL`) directly from the Registry sidebar without cluttering a single workspace.
* **Date & Priority Dashboards:** Fluidly parse, cross-filter, and track tasks via unified sidebar blocks categorized by:
  * **Date Category** (Overdue, Today, Upcoming, No Due Date)
  * **Due Dates** (Specific task due dates extracted from `due:YYYY-MM-DD`)
  * **Created Dates** (Standard format creation dates extracted dynamically)
  * **Priorities, Projects (`+`), and Contexts (`@`)**
* **3-Way Completion Mode:** Toggle visibility effortlessly using a three-state cyclic filter: **Show All** (Active & Completed), **Active Only** (Completed Hidden), or **Completed Only**.
* **Visual Sorting Engine:** Instantly change viewports by sorting tasks dynamically by File Order, Priority letter, Due Date, Created Date, or Completed Date—all while preserving your raw file sequence in storage.
* **Inline Auto-complete:** Smart tag recommendations drop down in real-time as you type a `+Project` or `@Context` tag—fully integrated into both the **Main Input** field and the **Inline Task Editor**. Supports `Tab` key completion.
* **Task Insertion Placement Control:** Choose whether new items land exactly where you want them with a dedicated **"Add to Top"** insertion state configuration toggle.
* **Structural Spacing "Sweep":** Reorganize files cleanly with a single click using **"Sweep Done"**. This engine groups completed (`x `) lines together and drops them at the bottom of the file, cleanly anchoring empty line splits and headers right where you left them.
* **Full Sync & Offline Ready:** Instantly saves to Dropbox or your local folder with granular syncing state cues. Installable as an offline-compatible app on iOS, Android, or Desktop.
* **Raw Editor:** Quick access to bulk-edit or parse your entire plain text stream manually.

## 🚀 Getting Started

The first time you launch the app, it won't assume anything — you'll be asked to choose a sync method before it touches any data.

1. **Launch:** [Visit the App Here](https://to-do-txt.github.io/to-do-txt/)
2. **Choose a Sync Method:**
   * **Connect Dropbox** — authorizes the app and initializes a secure directory named `/Apps/to-do-txt/` inside your Dropbox containing your project base `.txt` files.
   * **Connect Local Folder** — opens your browser's native folder picker so you can point the app at any folder on your device. Requires Chrome, Edge, or another Chromium-based browser (see [Local Folder Sync](#-local-folder-sync) below).
3. **Sync:** Start typing. Your choice is remembered for next time via `localStorage`, so you won't be asked again unless you disconnect or log out.

You can switch backends at any point from the **Sync** section in the sidebar.

## 📂 How it Works

This app is **completely serverless**. It executes in memory in your local browser sandbox and talks directly to whichever backend you choose — no intermediate server ever sees your data.

* **Dropbox mode:** Interfaces via atomic Dropbox API calls. Your data is saved natively as standard text files (e.g., `/Apps/to-do-txt/todo.txt`).
* **Local Folder mode:** Interfaces via the browser's [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API), reading and writing `todo*.txt` files directly in a folder you select — nothing ever leaves your device.
* **Privacy First:** Zero data telemetry or intermediate servers, in either mode. Your credentials, project layouts, and text streams remain strictly between your browser runtime and the backend you chose.
* **Format:** Strict adherence to the standard [todo.txt format spec](https://github.com/todotxt/todo.txt) ensures seamless portability with third-party text streams.

## 💻 Local Folder Sync

An alternative to Dropbox for anyone who'd rather keep tasks fully on-device (or sync a folder some other way, like Syncthing or an existing cloud-drive desktop client pointed at that folder).

* **Browser support:** Chrome, Edge, and other Chromium-based browsers only. Safari and Firefox don't yet implement the File System Access API, so the option is automatically disabled there.
* **Multi-file support:** Any `todo*.txt` file already in the folder is picked up automatically, the same way project files are discovered in Dropbox mode.
* **Permissions:** The browser remembers the folder you granted access to, but for security reasons it may need you to tap **Reconnect Folder** after a browser restart to re-confirm write access. This is a browser-level restriction, not a bug.
* **No live file-watching:** Like Dropbox mode, the app polls every 30 seconds rather than reacting instantly to external changes. If you edit the file directly in a text editor while the app is open, give it a moment to catch up.
* **Disconnecting:** Use **Disconnect Folder** in the sidebar to forget the folder and fall back to choosing a sync method again.

---

## 🛠️ For Developers (Your Own Client ID)

By default, this app uses a shared Client ID for Dropbox. If you want to host this yourself or isolate your API quota limits, follow these simple steps:

1. **Fork this Repo:** Enable **GitHub Pages** within your custom repository deployment settings.
2. **Create a Dropbox App:** Go to the [Dropbox Developers Console](https://www.dropbox.com/developers/apps).
   * Choose **Scoped Access**.
   * Choose **App Folder** access boundaries.
3. **Configure Permissions:** * Navigate to the **Permissions** tab and grant both `files.content.write` and `files.content.read`.
   * Add your custom GitHub Pages live app URL to the **Redirect URIs** field.
4. **Update Code:** Copy your generated **Client ID** string and substitute the `CLIENT_ID` constant parameter sitting at the top of your `index.html`.

Local Folder sync needs no configuration or Client ID — it's entirely client-side.

## 💡 Pro Tips

* **Clean Links:** Typing `link:https://google.com` inside a row hides the lengthy raw text line and formats a clean, clickable, bold **link ↗** button that opens safely inside a secondary browser tab.
* **Mobile App Integration:** For mobile workflows (iOS or Android Safari/Chrome), select **"Add to Home Screen"** to eliminate browser wrapping bars and run **to-do-txt** as an immersive standalone application shell. Note: Local Folder sync isn't available on iOS/Android browsers today — use Dropbox mode for mobile.
* **Keyboard Navigation:** While interacting with auto-complete containers inside input nodes, click or hit `Tab ⇥` to fast-track keyword tag strings.
* **Switching Backends Mid-Project:** Moving from Dropbox to Local Folder (or back) doesn't migrate your files automatically — use the **Backup** button first if you want a copy of your current task list to bring along.

## ⚖️ License & Disclaimer

This project is licensed under the terms of the **MIT License**.

**Disclaimer:** This utility is provided "as is" for personal use. The developer assumes no liability for local network data loss, Dropbox API interruptions, or text layout anomalies. Maintain safe backups of your active data streams using the integrated single-click **Backup** download routine regularly.
