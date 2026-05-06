# ISO Certification - Quick Start Guide

## Replace Certification in 3 Easy Steps

---

## Step 1: Get Your Certification File

### Requirements:
- **Format**: SVG (recommended) or PNG
- **Size**: 120x120px minimum (larger is better)
- **Background**: Transparent
- **Quality**: High resolution
- **Content**: Your actual ISO 9001:2015 certification badge/logo

### Recommended:
- SVG format for best quality
- Square format (1:1 aspect ratio)
- Official certification logo from certifying body
- Professional appearance

---

## Step 2: Replace the File

### Option A: Using SVG (Recommended)

```bash
# Copy your certification to the project
cp /path/to/your-iso-cert.svg src/assets/certifications/iso-certification.svg
```

### Option B: Using PNG

```bash
# Copy your certification
cp /path/to/your-iso-cert.png src/assets/certifications/iso-certification.png

# Update CertificationBadge.jsx (line 3)
# Change: import isoCertification from '../assets/certifications/iso-certification.svg'
# To:     import isoCertification from '../assets/certifications/iso-certification.png'
```

---

## Step 3: Test

```bash
# Start development server
npm run dev

# Open browser
http://localhost:5173

# Check certification appears in:
# ✓ Footer (company section)
# ✓ Statistics section (bottom)
# ✓ Why Choose Us section
# ✓ CTA Banner (trust indicators)
```

---

## That's It! 🎉

Your ISO certification now appears throughout the website:
- ✅ Footer
- ✅ Statistics section
- ✅ Why Choose Us section
- ✅ CTA Banner
- ✅ With hover animations
- ✅ Responsive on all devices

---

## Certification Appears In

### 1. Footer
- **Location**: Company info section
- **Size**: Medium (64px)
- **Theme**: Dark
- **Animation**: Yes

### 2. Statistics Section
- **Location**: Bottom CTA
- **Size**: Medium (64px)
- **Theme**: Dark
- **Animation**: Yes

### 3. Why Choose Us
- **Location**: Certification showcase
- **Size**: Large (80px)
- **Theme**: Dark
- **Animation**: Yes

### 4. CTA Banner
- **Location**: Trust indicators
- **Size**: Small (48px)
- **Theme**: Dark
- **Animation**: No

---

## Need Help?

See detailed guides:
- **CERTIFICATION_IMPLEMENTATION_COMPLETE.md** - Technical details
- **CERTIFICATION_REPLACEMENT_GUIDE.md** - Complete instructions

---

## Troubleshooting

### Certification not showing?
1. Check file exists: `src/assets/certifications/iso-certification.svg`
2. Restart dev server: `npm run dev`
3. Clear browser cache: Ctrl+Shift+R

### Certification blurry?
1. Use SVG instead of PNG
2. Increase PNG resolution (min 192x192px)

### Text not visible?
1. Check certification has transparent background
2. Verify theme is set to "dark" for dark backgrounds

---

**Quick Start Complete!**
