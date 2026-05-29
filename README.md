# USC Post-Stroke Apathy & Mobility Study — Recruitment Website

Recruitment website for NIH R01 project (1R01HD115526-01A1).
IRB Study #: UP-24-00213

Built with plain HTML + CSS + vanilla JavaScript (no build tools). Hosted on GitHub Pages.

## File Structure
```
index.html        Main single-page site (all sections)
css/style.css     All styling
js/screener.js    (Unused — eligibility now links to external REDCap form)
images/           Logos and photos
materials/        Source files (not on web), e.g. QR code
```

## How to Replace Placeholder Content

### Images
Place image files in the `images/` folder, then replace the matching placeholder in `index.html`.
A placeholder looks like `<span>[ ... ]</span>` or a `<div class="...placeholder">`.
Replace it with `<img src="images/FILENAME.jpg" alt="description">`.

| What | Suggested filename | Section |
|------|--------------------|---------|
| Hero carousel photos (4) | `slide-1.jpg` … `slide-4.jpg` | Hero |
| Visit 1 photo | `visit-1.jpg` | What to Expect |
| Home monitoring photo | `visit-home.jpg` | What to Expect |
| Visit 2 photo | `visit-2.jpg` | What to Expect |
| Visit 3 / MRI photo | `visit-3.jpg` | What to Expect |
| PI headshot | `pi-photo.jpg` (already added) | Team |
| Team member photos | any name | Team |

Note: image file extension must match exactly (`.jpg` vs `.png`).

### Team members
Each member is a `<div class="team-member">` block in the Team section.
To add info, insert a line inside the block:
- Title: `<p class="title">Role here</p>`
- Email: `<p class="team-email"><a href="mailto:x@usc.edu">x@usc.edu</a></p>`

### Interest Form link
The "Interest Form" / "Check Your Eligibility" buttons link to the REDCap survey.
To change it, search `index.html` for `redcapsurveys.med.usc.edu` and replace the URL (appears in 3 places: nav, hero, eligibility section).

### Video
The About section embeds a YouTube video via `<iframe>`.
To change it, search for `youtube.com/embed/` in `index.html` and replace the video ID.

### Contact info
Already set: email `gaitrehablab@pt.usc.edu`, phone `(323) 577-5556`, address Room G31, 1540 Alcazar St.
Search `index.html` for these strings to update.

## Local Preview
```
python -m http.server 8080
```
Then open http://localhost:8080

## Deploy to GitHub Pages
Already deployed. To update after editing:
```
git add .
git commit -m "your message"
git push
```
GitHub Pages serves from the `main` branch root. Live URL:
`https://gaitrehablab.github.io/R01_PSAM_recruitment_webpage/`

Note: video files over 100 MB cannot be pushed to GitHub — host them on YouTube and embed instead (`.mp4` is git-ignored).
