# Logo Replacement Guide - CB Building Approval

## Overview
The website has been updated to use a reusable Logo component instead of the text-based "CB" logo. Follow this guide to replace the placeholder logo with your actual company logo.

---

## Current Implementation ✅

### Logo Component Created
- **Location**: `src/components/Logo.jsx`
- **Features**:
  - Reusable across the entire website
  - Multiple size options (xs, sm, md, lg, xl)
  - Optional hover animation
  - Fallback error handling
  - Optimized loading

### Logo Used In:
✅ **Navbar** - Top navigation bar (desktop & mobile)
✅ **Footer** - Company branding section
✅ **Mobile Menu** - Responsive navigation

### Logo Assets Folder:
- **Location**: `src/assets/logo/`
- **Current File**: `company-logo.svg` (placeholder)

---

## How to Replace the Logo

### Step 1: Prepare Your Logo File

#### Recommended Formats:
1. **SVG (Best)** - Scalable, crisp at any size
   - File: `company-logo.svg`
   - Recommended size: 48x48px or larger
   - Transparent background

2. **PNG (Alternative)** - High quality raster
   - File: `company-logo.png`
   - Recommended size: 192x192px or larger
   - Transparent background (PNG-24)

#### Logo Requirements:
- ✅ Square or horizontal orientation
- ✅ Transparent background
- ✅ High resolution (at least 192x192px for PNG)
- ✅ Optimized file size (< 50KB)
- ✅ Works on both light and dark backgrounds

---

### Step 2: Replace the Logo File

#### Option A: Using SVG (Recommended)

1. **Locate your company logo file**
   - Ensure it's named `company-logo.svg`
   - Or rename your logo file to `company-logo.svg`

2. **Replace the placeholder**
   ```bash
   # Navigate to project directory
   cd src/assets/logo/
   
   # Delete placeholder (or rename as backup)
   mv company-logo.svg company-logo-backup.svg
   
   # Copy your actual logo
   cp /path/to/your/logo.svg company-logo.svg
   ```

3. **Verify the file**
   - Check that `src/assets/logo/company-logo.svg` exists
   - Open in browser to verify it displays correctly

#### Option B: Using PNG

1. **Rename your logo**
   - Change filename to `company-logo.png`

2. **Place in assets folder**
   ```bash
   cp /path/to/your/logo.png src/assets/logo/company-logo.png
   ```

3. **Update Logo component**
   - Open `src/components/Logo.jsx`
   - Change line 2:
   ```javascript
   // FROM:
   import companyLogo from '../assets/logo/company-logo.svg'
   
   // TO:
   import companyLogo from '../assets/logo/company-logo.png'
   ```

---

### Step 3: Update Favicon (Optional but Recommended)

#### Create Favicon Files:

1. **Generate favicon from your logo**
   - Use online tool: https://realfavicongenerator.net/
   - Or use: https://favicon.io/
   - Upload your logo
   - Download generated files

2. **Replace favicon files**
   ```bash
   # Replace in public folder
   cp favicon.ico public/favicon.ico
   cp logo192.png public/logo192.png
   cp logo512.png public/logo512.png
   ```

3. **Update manifest.json**
   - Open `public/manifest.json`
   - Verify icon paths are correct:
   ```json
   {
     "icons": [
       {
         "src": "logo192.png",
         "type": "image/png",
         "sizes": "192x192"
       },
       {
         "src": "logo512.png",
         "type": "image/png",
         "sizes": "512x512"
       }
     ]
   }
   ```

---

### Step 4: Test the Logo

1. **Start development server**
   ```bash
   npm run dev
   ```

2. **Check logo appears in:**
   - [ ] Navbar (desktop)
   - [ ] Navbar (mobile)
   - [ ] Footer
   - [ ] Browser tab (favicon)

3. **Verify logo quality:**
   - [ ] Crisp and clear
   - [ ] Not stretched or distorted
   - [ ] Proper spacing
   - [ ] Visible on both light/dark backgrounds
   - [ ] Hover animation works (navbar)

4. **Test responsive design:**
   - [ ] Desktop (1920px)
   - [ ] Laptop (1366px)
   - [ ] Tablet (768px)
   - [ ] Mobile (375px)

---

## Logo Component Usage

### Basic Usage:
```jsx
import Logo from './components/Logo'

// Default (medium size)
<Logo />

// Small size
<Logo size="sm" />

// Large size with animation
<Logo size="lg" animate={true} />

// Custom className
<Logo className="my-custom-class" />
```

### Size Options:
- `xs` - 24px (6rem)
- `sm` - 32px (8rem)
- `md` - 48px (12rem) - **Default**
- `lg` - 64px (16rem)
- `xl` - 80px (20rem)

### Props:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | string | 'md' | Logo size (xs, sm, md, lg, xl) |
| className | string | '' | Additional CSS classes |
| animate | boolean | false | Enable hover scale animation |
| alt | string | 'CB Building Approval Logo' | Alt text for accessibility |

---

## Troubleshooting

### Logo Not Displaying

**Issue**: Logo shows broken image icon

**Solutions**:
1. Check file path is correct
2. Verify file exists in `src/assets/logo/`
3. Check file extension matches import statement
4. Clear browser cache (Ctrl+Shift+R)
5. Restart development server

### Logo Looks Blurry

**Issue**: Logo appears pixelated or blurry

**Solutions**:
1. Use SVG format instead of PNG
2. If using PNG, increase resolution (min 192x192px)
3. Ensure logo is not being stretched
4. Check `object-contain` class is applied

### Logo Too Large/Small

**Issue**: Logo size doesn't match design

**Solutions**:
1. Adjust size prop: `<Logo size="sm" />` or `<Logo size="lg" />`
2. Modify size classes in Logo.jsx:
   ```javascript
   const sizeClasses = {
       sm: 'w-8 h-8',   // Adjust these values
       md: 'w-12 h-12',
       lg: 'w-16 h-16',
   }
   ```

### Logo Not Visible on Dark Background

**Issue**: Logo disappears on dark navbar/footer

**Solutions**:
1. Ensure logo has transparent background
2. Add white/light colored elements to logo
3. Or create two versions:
   - `company-logo-light.svg` (for dark backgrounds)
   - `company-logo-dark.svg` (for light backgrounds)
4. Update Logo component to switch based on theme

### Animation Not Working

**Issue**: Hover animation doesn't trigger

**Solutions**:
1. Ensure `animate={true}` prop is set
2. Check Framer Motion is installed: `npm install framer-motion`
3. Verify no CSS conflicts with `transform` property

---

## Advanced Customization

### Multiple Logo Versions

If you need different logos for light/dark themes:

1. **Add both logo files:**
   ```
   src/assets/logo/
   ├── company-logo-light.svg
   └── company-logo-dark.svg
   ```

2. **Update Logo component:**
   ```jsx
   import logoLight from '../assets/logo/company-logo-light.svg'
   import logoDark from '../assets/logo/company-logo-dark.svg'
   
   const Logo = ({ theme = 'light', ...props }) => {
       const logoSrc = theme === 'dark' ? logoLight : logoDark
       
       return (
           <img src={logoSrc} alt="Company Logo" {...props} />
       )
   }
   ```

3. **Use in components:**
   ```jsx
   // Navbar (light background when scrolled)
   <Logo theme={isScrolled ? 'light' : 'dark'} />
   
   // Footer (always dark background)
   <Logo theme="dark" />
   ```

### Custom Logo Styling

Add custom styles to specific logo instances:

```jsx
// Navbar - with shadow
<Logo 
    size="md" 
    animate={true}
    className="drop-shadow-lg"
/>

// Footer - with glow effect
<Logo 
    size="md"
    className="filter drop-shadow-[0_0_10px_rgba(102,126,234,0.5)]"
/>
```

---

## File Structure

```
project/
├── src/
│   ├── assets/
│   │   └── logo/
│   │       ├── company-logo.svg          ← Your actual logo here
│   │       └── company-logo-backup.svg   ← Placeholder backup
│   └── components/
│       ├── Logo.jsx                      ← Reusable logo component
│       ├── Navbar.jsx                    ← Uses Logo component
│       └── Footer.jsx                    ← Uses Logo component
├── public/
│   ├── favicon.ico                       ← Browser tab icon
│   ├── logo192.png                       ← PWA icon (small)
│   └── logo512.png                       ← PWA icon (large)
└── index.html                            ← References favicon
```

---

## Quick Checklist

Before deploying:

- [ ] Actual company logo file added to `src/assets/logo/`
- [ ] Logo displays correctly in navbar
- [ ] Logo displays correctly in footer
- [ ] Logo displays correctly on mobile
- [ ] Favicon updated in `public/` folder
- [ ] Logo is crisp and clear at all sizes
- [ ] Logo works on light and dark backgrounds
- [ ] Hover animation works (if enabled)
- [ ] No console errors related to logo
- [ ] Logo file size optimized (< 50KB)

---

## Support

### Common Logo Formats:

**SVG (Recommended)**
- Scalable Vector Graphics
- Crisp at any size
- Small file size
- Best for web

**PNG**
- Raster image format
- Supports transparency
- Good for photos/complex graphics
- Larger file size

**WebP**
- Modern format
- Better compression
- Not supported in older browsers

### Logo Optimization Tools:

**For SVG:**
- SVGOMG: https://jakearchibald.github.io/svgomg/
- SVG Optimizer: https://www.svgviewer.dev/svg-optimizer

**For PNG:**
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/

**Favicon Generators:**
- RealFaviconGenerator: https://realfavicongenerator.net/
- Favicon.io: https://favicon.io/

---

## Next Steps

1. **Replace placeholder logo** with your actual company logo
2. **Test on localhost** to verify appearance
3. **Update favicon** for professional branding
4. **Build for production** when satisfied
5. **Deploy** to live website

---

**Status**: Ready for Logo Replacement
**Priority**: High
**Estimated Time**: 10-15 minutes
