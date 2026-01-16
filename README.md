# Caleigh Paster Portfolio

Personal portfolio website for [caleighpaster.com](https://caleighpaster.com)

## Features

- Innovative, creative design with lavender/purple aesthetic
- Dynamic animations and scroll effects
- Custom cursor with follower effect
- Embedded video productions (YouTube, Spotify)
- Responsive design for all devices
- Smooth scroll navigation
- Intersection Observer scroll reveals

## Tech Stack

- Pure HTML5, CSS3, JavaScript (no frameworks)
- Google Fonts: Playfair Display, Inter, Space Mono
- CSS Custom Properties for theming
- Intersection Observer API for scroll animations
- CSS Grid & Flexbox for layouts

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Name it `portfolio` (or any name you prefer)
3. Make it public
4. Don't initialize with README (we already have files)

### Step 2: Push Code to GitHub

```bash
cd /Users/Caleigh/Desktop/creatif/portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** > **Pages** (in the left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Select **main** branch and **/ (root)** folder
5. Click **Save**

### Step 4: Configure Custom Domain (caleighpaster.com)

#### In GitHub:
1. In **Settings** > **Pages**
2. Under "Custom domain", enter: `caleighpaster.com`
3. Click **Save**
4. Check "Enforce HTTPS" once DNS is configured

#### In Your Domain Registrar (DNS Settings):

Add these DNS records:

**Option A: A Records (Recommended)**
```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153
```

**Option B: CNAME Record (for www subdomain)**
```
Type: CNAME
Host: www
Value: YOUR_GITHUB_USERNAME.github.io
```

DNS changes can take up to 48 hours to propagate.

## Customizing Video Embeds

The portfolio includes placeholders for some videos. To add your actual videos:

### YouTube Videos
Replace the placeholder div with an iframe:
```html
<div class="video-embed">
    <iframe
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        title="Video Title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>
```

### Vimeo Videos
```html
<div class="video-embed">
    <iframe
        src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
        title="Video Title"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>
```

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── style.css       # All styles
├── script.js       # JavaScript interactions
├── CNAME           # Custom domain configuration
└── README.md       # This file
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Lavender Light | `#F5F0FF` | Background |
| Lavender | `#E8DFFF` | Secondary background |
| Violet | `#9B7FD1` | Accent light |
| Purple | `#7C5CBF` | Primary accent |
| Purple Deep | `#5B3FA0` | Hover states |
| Coral | `#FF7B6B` | Documentary accent |
| Mint | `#A8E6CF` | Training accent |
| Peach | `#FFB8A8` | Warm accent |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Personal portfolio - All rights reserved.

---

Built with care by Caleigh Paster
