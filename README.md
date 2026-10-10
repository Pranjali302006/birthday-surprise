# Biceppps — Birthday QR Surprise ❤️

A six-screen romantic birthday website (HTML + CSS + vanilla JS). No backend, no paid services.

## 1. Download and extract
Unzip `birthday-surprise.zip`. You should see `index.html`, `style.css`, `script.js`, `assets/`.

## 2. Open in VS Code
VS Code → File → Open Folder → choose `birthday-surprise`.

## 3. Run locally
Easiest: install the free **Live Server** extension, right-click `index.html` → *Open with Live Server*.
(Double-clicking `index.html` also works, but music loading is more reliable through a server.)

## 4. Replace photos
Copy your photos into `assets/images/` (descriptive file names, e.g. `birthday-dinner.jpg`).
Then edit `CONFIG.hero`, `CONFIG.gallery` and `CONFIG.finalPhoto` at the top of `script.js`.
Each entry is `{ src, alt, caption }`. A photo that fails to load is skipped automatically.

## 5. Edit letters and messages
All text is in `CONFIG` in `script.js`: `letter`, `openWhen` (4 letters), `finale`, `gallery` captions, `interludes`.
**The gallery captions are placeholders** — replace them with real memories. Optionally set `sender` and `birthday` (`"MM-DD"`, e.g. `"03-14"`) to show your name and a countdown. Leave `birthday` empty to hide the countdown.

## 6. Add music (optional)
Save an MP3 you have permission to use as `assets/music/birthday-music.mp3` (or change `CONFIG.music`).
Music only starts after she taps "Open Your Little Surprise". **If no file is added, a built-in music-box "Happy Birthday" plays automatically** (generated in the browser, no file needed).

**Countdown:** set `birthday: "MM-DD"` in `script.js`, or add it to the link without editing code: `https://YOUR-URL/?bday=MM-DD`.

## 7. Test on your phone
With Live Server running, open `http://YOUR-COMPUTER-IP:5500` on a phone on the same Wi-Fi, or test after deploying (step 8–10). Check all six screens, the photo viewer, all four envelopes, the candles and the replay buttons.

## 8. Upload to GitHub
1. Create a free account at github.com → **New repository** (e.g. `birthday-surprise`), Public.
2. Click **uploading an existing file**, drag in everything *inside* the folder (index.html, style.css, script.js, README.md, assets), then **Commit changes**.

## 9. Deploy with GitHub Pages
Repository → **Settings → Pages** → Source: *Deploy from a branch* → Branch `main`, folder `/ (root)` → Save. Wait 1–2 minutes.
(Alternatives: Netlify Drop at app.netlify.com/drop or Cloudflare Pages — both free, just drag the folder.)

## 10. Get your public URL
It appears at the top of the Pages screen, usually `https://YOUR-USERNAME.github.io/birthday-surprise/`. Open it and confirm it works.

## 11. Make the QR code
Use any free generator (e.g. qr-code-generator.com or a QR option in your browser/phone), paste **that exact public URL**, download the PNG. Never encode a local file path or `localhost`.

## 12. Test from a different phone
Scan with a phone that is not yours, ideally on mobile data. Confirm the envelope, photos and (if added) music work.

## Privacy
Anyone who scans the QR code or has the link can view the site. Only include photos and messages you have permission to share. If a repository is public, the photos are public too.

## Files
`index.html` structure · `style.css` design · `script.js` config + behaviour · `assets/images` photos · `assets/music` optional audio.
