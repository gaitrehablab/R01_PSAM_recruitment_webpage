# USC Post-Stroke Apathy & Mobility Study — Recruitment Website

Recruitment website for NIH R01 project (1R01HD115526-01A1).  
IRB Study #: UP-24-00213

## How to Replace Placeholder Content

### Images
Place your images in the `images/` folder:

| What | Filename | Where it appears |
|------|----------|-----------------|
| Hero banner | `images/hero.jpg` | Top of homepage |
| PI headshot | `images/pi-photo.jpg` | Study Team section |
| Team photo | `images/team-photo.jpg` | Study Team section (optional) |

After adding images, update the `src` attributes in `index.html`:
- Hero: find `hero-image` div, replace the placeholder `<p>` with `<img src="images/hero.jpg" alt="Study lab photo">`
- PI photo: find `team-photo` div, replace `<span>` with `<img src="images/pi-photo.jpg" alt="Dr. Kristan Leech">`

### Contact Info
In `index.html`, search for `placeholder` and replace:
- `grmllab@usc.edu` → actual study email
- `(XXX) XXX-XXXX` → actual phone number

### Contact Form URL
In `screener.html`, search for `#CONTACT_FORM_URL` and replace with the actual contact form link.

### Video
In `index.html`, replace the `video-placeholder` div content with:
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" allowfullscreen></iframe>
```

## Local Preview
```
python -m http.server 8080
```
Then open http://localhost:8080

## Deploy to GitHub Pages
1. Create a new GitHub repository
2. Push this folder to the repo
3. Go to Settings → Pages → Source: main branch
4. Your site will be live at `https://yourusername.github.io/repo-name/`
