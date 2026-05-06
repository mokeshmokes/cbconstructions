# Logo Quick Start Guide

## Replace Logo in 3 Easy Steps

---

## Step 1: Get Your Logo File

### Requirements:
- **Format**: SVG (recommended) or PNG
- **Size**: 48x48px minimum (larger is better)
- **Background**: Transparent
- **Quality**: High resolution

### Recommended:
- SVG format for best quality
- Square or horizontal orientation
- Works on both light and dark backgrounds

---

## Step 2: Replace the File

### Option A: Using SVG (Recommended)

```bash
# Copy your logo to the project
cp /path/to/your-logo.svg src/assets/logo/company-logo.svg
```

### Option B: Using PNG

```bash
# Copy your logo
cp /path/to/your-logo.png src/assets/logo/company-logo.png

# Update Logo.jsx (line 2)
# Change: import companyLogo from '../assets/logo/company-logo.svg'
# To:     import companyLogo from '../assets/logo/company-logo.png'
```

---

## Step 3: Test

```bash
# Start development server
npm run dev

# Open browser
http://localhost:5173

# Check logo appears in:
# ✓ Navbar (top left)
# ✓ Footer (company section)
```

---

## That's It! 🎉

Your logo now appears throughout the website:
- ✅ Navbar (desktop & mobile)
- ✅ Footer
- ✅ With hover animation
- ✅ Responsive on all devices

---

## Need Help?

See detailed guides:
- **LOGO_REPLACEMENT_GUIDE.md** - Complete instructions
- **LOGO_IMPLEMENTATION_COMPLETE.md** - Technical details
- **LOGO_LOCATIONS.md** - Where logo appears

---

## Troubleshooting

### Logo not showing?
1. Check file exists: `src/assets/logo/company-logo.svg`
2. Restart dev server: `npm run dev`
3. Clear browser cache: Ctrl+Shift+R

### Logo blurry?
1. Use SVG instead of PNG
2. Increase PNG resolution (min 192x192px)

---

**Quick Start Complete!**
