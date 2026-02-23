# to-do-txt

A minimalist, privacy-focused Task Manager built on the [todo.txt](http://todotxt.org/) format. This is a single-file Progressive Web App (PWA) that syncs directly with your personal Dropbox.

![to-do-txt icon](assets/todo_txt_icon_256x256.png)

## ✨ Features
* **Full Sync:** Save and load your `todo.txt` file directly from Dropbox.
* **Offline Ready:** Install as a PWA on iOS, Android, or Desktop.
* **Minimalist UI:** Focus on your tasks with zero distractions.
* **Context & Projects:** Full support for `@context` and `+project` tags.
* **Raw Editor:** Quick access to edit your entire list as plain text.

## 🚀 Getting Started
1. **Fork or Download:** Host this `index.html` on GitHub Pages or any static host.
2. **Dropbox Setup:** - Create an app in the [Dropbox Developers Console](https://www.dropbox.com/developers/apps).
   - Set the permissions to `files.content.write` and `files.content.read`.
   - Add your URL to the **Redirect URIs**.
   - Copy your **Client ID** into the `index.html` file.
3. **Launch:** Open your URL, connect your account, and start typing.

## ⚖️ License & Disclaimer
This project is licensed under the **MIT License**.

**Disclaimer:** This software is provided "as is" for personal use. The developer assumes no responsibility for data loss, Dropbox API issues, or any damages arising from the use of this application. Please maintain regular backups of your `todo.txt` file using the built-in Backup button.
