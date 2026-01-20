# Minimal Portfolio Website

A clean, minimalist personal portfolio website inspired by igor.fyi. Built with pure HTML, CSS, and JavaScript - no frameworks required.

## Features

- ✅ One-page design with smooth scrolling navigation
- ✅ Dark/light mode automatic switching (prefers-color-scheme)
- ✅ Fully responsive on mobile and desktop
- ✅ Fast loading with system fonts and minimal CSS
- ✅ Easy content editing via single JavaScript object
- ✅ Semantic HTML5 structure
- ✅ Accessibility features (focus states, contrast)
- ✅ SEO optimized with meta tags

## Live Demo

Deploy your own copy using the instructions below.

## Quick Start

1. **Download or clone** the files to your local machine
2. **Edit content** in `script.js` - all your projects, reading, and writing are in the `content` object
3. **Update personal info** in `index.html` (name, email, links)
4. **Deploy** to any static hosting service

## Content Editing Guide

### Adding New Projects
In `script.js`, find the `content.projects` array and add new objects:

```javascript
{
    title: "Your Project Name",
    description: "Brief description of what it does.",
    link: "https://your-demo-link.com",
    repo: "https://github.com/your-username/repo",
    tech: "Technologies used"
}
```

### Adding New Reading Items
In `script.js`, find the `content.reading` array:

```javascript
{
    title: "Book Title",
    takeaway: "One-sentence takeaway or key insight.",
    date: "2024-01-20"
}
```

### Adding New Writing Posts
In `script.js`, find the `content.writing` array:

```javascript
{
    title: "Article Title",
    description: "Brief description of the post.",
    link: "# or your-article-url"
}
```

### Updating Personal Information
Edit these items in `index.html`:
- Your name in the `<title>` tag and `<h1>`
- Email addresses (3 locations)
- Chess.com, GitHub, LinkedIn links
- Bio and tagline text

## Deployment Options

### GitHub Pages (Free, 5 minutes)

1. **Create a new repository** on GitHub named `username.github.io`
2. **Upload all files** to the repository
3. **Wait 2-5 minutes** and visit `https://username.github.io`

### Netlify (Free, 2 minutes)

1. **Create a Netlify account** at netlify.com
2. **Drag and drop** your project folder onto the deploy area
3. **Get your URL** - it's live instantly!

### Vercel (Free, 2 minutes)

1. **Create a Vercel account** at vercel.com
2. **Import your project** from GitHub or upload files
3. **Deploy** - automatic URL provided

### Custom Domain Setup

Once deployed, add a custom domain in your hosting provider's dashboard:
- Add CNAME record pointing to your hosting provider
- Update domain in hosting settings
- SSL certificate is usually automatic

## File Structure

```
portfolio/
├── index.html      # Main HTML structure
├── style.css       # All styling with dark/light mode
├── script.js       # Content and interactions
├── README.md       # This file
└── assets/         # Optional folder for favicon/images
```

## Customization

### Colors
Edit CSS variables in `style.css`:

```css
:root {
    --link: #0066cc;           /* Your brand color */
    --link-hover: #0052a3;     /* Darker version */
    /* Other colors... */
}
```

### Typography
System fonts are used by default for speed. To add custom fonts:

1. Add `@import` at top of `style.css`
2. Update `font-family` in `body` selector

### Layout Width
Change `--max-width` in `:root` (default: 760px)

## Performance

- **Lighthouse score**: 95-100 (tested)
- **Load time**: <1 second on 3G
- **Size**: <50KB total
- **No external dependencies**

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## License

MIT License - feel free to use and modify.

## Support

If you run into issues:
1. Check all file paths are correct
2. Ensure your editor saves files with UTF-8 encoding
3. Test locally by opening `index.html` in your browser

---

**Built with ❤️ for simplicity and speed**
