# to-do-txt

A minimalist, privacy-focused Task Manager built on the [todo.txt](http://todotxt.org/) format. This is a single-file Progressive Web App (PWA) that syncs directly with your personal Dropbox.

## ✨ Features
* **Full Sync:** Save and load your `todo.txt` file directly from Dropbox.
* **Offline Ready:** Install as a PWA on iOS, Android, or Desktop.
* **Minimalist UI:** Focus on your tasks with zero distractions.
* **Smart Links:** Use `link:url` to keep your list clean with clickable "link" buttons.
* **Context & Projects:** Full support for `@context` and `+project` tags.
* **Raw Editor:** Quick access to edit your entire list as plain text.

## 🚀 Getting Started
The easiest way to use this is to visit the live site, connect your Dropbox, and start typing.

1. **Launch:** [Visit the App Here](https://to-do-txt.github.io/to-do-txt/)
2. **Connect:** Click "Connect Dropbox" to authorize the app.
3. **Sync:** A folder named `/Apps/to-do-txt/` will be created in your Dropbox containing your `todo.txt` file.

## 📂 How it Works
This app is **serverless**. It runs entirely in your browser and communicates directly with Dropbox. 
* **Your Data:** Stored in `/Apps/to-do-txt/todo.txt`.
* **Privacy:** The developer never sees your tasks; the connection is between your browser and Dropbox.
* **Format:** Follows the standard [todo.txt format](https://github.com/todotxt/todo.txt) for maximum compatibility.

---

## 🛠️ For Developers (Your Own Client ID)
By default, this app uses a shared Client ID. If you want to host this yourself or ensure 100% private API limits, follow these steps:

1. **Fork this Repo:** Enable GitHub Pages in your repository settings.
2. **Create a Dropbox App:** Go to the [Dropbox Developers Console](https://www.dropbox.com/developers/apps).
   - Choose **Scoped Access**.
   - Choose **App Folder** access.
3. **Configure Permissions:** - Set permissions to `files.content.write` and `files.content.read`.
   - Add your GitHub Pages URL to the **Redirect URIs**.
4. **Update Code:** Copy your **Client ID** and replace the `CLIENT_ID` constant at the top of your `index.html`.

## 💡 Pro Tips
* **Clean Links:** Typing `link:https://google.com` will hide the long URL and show a bold **link ↗️** button instead.
* **Mobile App:** On iOS/Android, select "Add to Home Screen" in your browser to use **to-do-txt** as a fullscreen standalone app.

## ⚖️ License & Disclaimer
This project is licensed under the **MIT License**.

**Disclaimer:** This software is provided "as is" for personal use. The developer assumes no responsibility for data loss, Dropbox API issues, or any damages arising from the use of this application. Please maintain regular backups of your `todo.txt` file using the built-in Backup button.
