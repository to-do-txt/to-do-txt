# to-do-txt

A minimalist, privacy-focused Task Manager built entirely around the standard [todo.txt](http://todotxt.org/) format. This is a single-file Progressive Web App (PWA) that syncs directly with your personal Dropbox.

## ✨ Features

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
* **Full Sync & Offline Ready:** Instantly saves to Dropbox with granular syncing state cues. Installable as an offline-compatible app on iOS, Android, or Desktop.
* **Raw Editor:** Quick access to bulk-edit or parse your entire plain text stream manually.

## 🚀 Getting Started

The easiest way to use this is to visit the live site, connect your Dropbox, and start typing.

1. **Launch:** [Visit the App Here](https://to-do-txt.github.io/to-do-txt/)
2. **Connect:** Click "Connect Dropbox" to authorize the application.
3. **Sync:** A secure directory loop named `/Apps/to-do-txt/` will automatically initialize inside your Dropbox containing your project base `.txt` files.

## 📂 How it Works

This app is **completely serverless**. It executes in memory in your local browser sandbox and interfaces directly via atomic Dropbox API nodes. 
* **Your Data:** Saved natively as standard text files (e.g., `/Apps/to-do-txt/todo.txt`).
* **Privacy First:** Zero data telemetry or intermediate servers. Your credentials, project layouts, and text streams remain strictly between your browser runtime and Dropbox.
* **Format:** Strict adherence to the standard [todo.txt format spec](https://github.com/todotxt/todo.txt) ensures seamless portability with third-party text streams.

---

## 🛠️ For Developers (Your Own Client ID)

By default, this app uses a shared Client ID. If you want to host this yourself or isolate your API quota limits, follow these simple steps:

1. **Fork this Repo:** Enable **GitHub Pages** within your custom repository deployment settings.
2. **Create a Dropbox App:** Go to the [Dropbox Developers Console](https://www.dropbox.com/developers/apps).
   * Choose **Scoped Access**.
   * Choose **App Folder** access boundaries.
3. **Configure Permissions:** * Navigate to the **Permissions** tab and grant both `files.content.write` and `files.content.read`.
   * Add your custom GitHub Pages live app URL to the **Redirect URIs** field.
4. **Update Code:** Copy your generated **Client ID** string and substitute the `CLIENT_ID` constant parameter sitting at the top of your `index.html`.

## 💡 Pro Tips

* **Clean Links:** Typing `link:https://google.com` inside a row hides the lengthy raw text line and formats a clean, clickable, bold **link ↗** button that opens safely inside a secondary browser tab.
* **Mobile App Integration:** For mobile workflows (iOS or Android Safari/Chrome), select **"Add to Home Screen"** to eliminate browser wrapping bars and run **to-do-txt** as an immersive standalone application shell.
* **Keyboard Navigation:** While interacting with auto-complete containers inside input nodes, click or hit `Tab ⇥` to fast-track keyword tag strings.

## ⚖️ License & Disclaimer

This project is licensed under the terms of the **MIT License**.

**Disclaimer:** This utility is provided "as is" for personal use. The developer assumes no liability for local network data loss, Dropbox API interruptions, or text layout anomalies. Maintain safe backups of your active data streams using the integrated single-click **Backup** download routine regularly.
