# Logo Locations - Visual Guide

## Where the Logo Appears

---

## 1. Navbar (Desktop)

```
┌─────────────────────────────────────────────────────────────┐
│  [LOGO] CB Building Approval    Home About Services ... [Call Now] │
│         Your Approval Simplified                            │
└─────────────────────────────────────────────────────────────┘
```

**Details**:
- **Location**: Top left corner
- **Size**: Medium (48px)
- **Animation**: Hover scale effect
- **Clickable**: Yes (scrolls to home)
- **Background**: Transparent → White (when scrolled)

---

## 2. Navbar (Mobile)

```
┌──────────────────────────────┐
│ [LOGO] CB Building...  [☰]  │
│        Your Approval...      │
└──────────────────────────────┘
```

**Details**:
- **Location**: Top left corner
- **Size**: Medium (48px)
- **Animation**: Hover scale effect
- **Responsive**: Scales properly
- **Menu**: Hamburger icon on right

---

## 3. Mobile Menu (Open)

```
┌──────────────────────────────┐
│ [LOGO] CB Building...  [✕]  │
│        Your Approval...      │
├──────────────────────────────┤
│                              │
│  Home                        │
│  About                       │
│  Services                    │
│  Approvals                   │
│  Process                     │
│  Contact                     │
│                              │
│  [Call Now]                  │
│                              │
└──────────────────────────────┘
```

**Details**:
- **Location**: Top left (same as navbar)
- **Size**: Medium (48px)
- **Visible**: When menu is open
- **Consistent**: Same logo as navbar

---

## 4. Footer (Desktop)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [LOGO] CB Building Approval                               │
│         Your Approval Simplified                           │
│                                                             │
│  Expert guidance for all your building approval needs...   │
│                                                             │
│  [ISO] Trusted Approval Consultancy                        │
│        Quality Certified                                   │
│                                                             │
│  [f] [📷] [in] [💬] [▶]  ← Social Icons                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Details**:
- **Location**: Footer company info section
- **Size**: Medium (48px)
- **Animation**: Hover scale effect
- **Background**: Dark theme
- **Visibility**: Always visible

---

## 5. Footer (Mobile)

```
┌──────────────────────────────┐
│                              │
│  [LOGO] CB Building          │
│         Approval             │
│         Your Approval        │
│         Simplified           │
│                              │
│  Expert guidance for all...  │
│                              │
│  [ISO] Trusted Approval      │
│        Consultancy           │
│                              │
│  [f] [📷] [in] [💬] [▶]     │
│                              │
└──────────────────────────────┘
```

**Details**:
- **Location**: Footer top section
- **Size**: Medium (48px)
- **Stacked**: Text wraps on mobile
- **Centered**: On smaller screens

---

## Logo Component Sizes

### Visual Size Comparison:

```
xs (24px):  [🏢]
sm (32px):  [🏢 ]
md (48px):  [🏢  ]  ← Used in Navbar & Footer
lg (64px):  [🏢   ]
xl (80px):  [🏢    ]
```

---

## Logo States

### 1. Default State
```
[🏢] ← Normal size, no animation
```

### 2. Hover State (with animate={true})
```
[🏢] → [🏢 ] ← Scales to 1.05x (5% larger)
```

### 3. Loading State
```
[⏳] ← Shows while loading (if implemented)
```

### 4. Error State
```
[❌] ← Hidden if logo fails to load
```

---

## Logo on Different Backgrounds

### Light Background (Navbar Scrolled)
```
┌─────────────────────────────┐
│ [LOGO] CB Building Approval │ ← Logo on white background
│        Your Approval...     │
└─────────────────────────────┘
```

### Dark Background (Navbar Top)
```
┌─────────────────────────────┐
│ [LOGO] CB Building Approval │ ← Logo on dark gradient
│        Your Approval...     │
└─────────────────────────────┘
```

### Dark Background (Footer)
```
┌─────────────────────────────┐
│ [LOGO] CB Building Approval │ ← Logo on dark footer
│        Your Approval...     │
└─────────────────────────────┘
```

---

## Responsive Behavior

### Desktop (1920px)
- Logo: 48px
- Spacing: Generous
- Layout: Horizontal

### Laptop (1366px)
- Logo: 48px
- Spacing: Normal
- Layout: Horizontal

### Tablet (768px)
- Logo: 48px
- Spacing: Compact
- Layout: Horizontal

### Mobile (375px)
- Logo: 48px (same size)
- Spacing: Minimal
- Layout: Stacked text

---

## Logo Spacing

### Navbar:
```
[LOGO] ←→ [Company Name]
  ↑         ↑
 48px    space-x-3 (12px)
```

### Footer:
```
[LOGO] ←→ [Company Name]
  ↑         ↑
 48px    space-x-3 (12px)
```

---

## Logo Alignment

### Navbar:
- **Horizontal**: Left aligned
- **Vertical**: Centered in navbar
- **With text**: Aligned to top

### Footer:
- **Horizontal**: Left aligned
- **Vertical**: Top aligned
- **With text**: Aligned to top

---

## Logo Animation Timeline

### Hover Animation (300ms):
```
0ms:   Scale 1.0   [🏢]
150ms: Scale 1.025 [🏢]
300ms: Scale 1.05  [🏢 ]
```

### Hover Out (300ms):
```
0ms:   Scale 1.05  [🏢 ]
150ms: Scale 1.025 [🏢]
300ms: Scale 1.0   [🏢]
```

---

## Logo Click Behavior

### Navbar Logo:
```
Click → Smooth scroll to top (home section)
```

### Footer Logo:
```
No click action (static display)
```

---

## Logo File Structure

```
src/
├── assets/
│   └── logo/
│       └── company-logo.svg  ← Logo file location
└── components/
    ├── Logo.jsx              ← Logo component
    ├── Navbar.jsx            ← Uses Logo
    └── Footer.jsx            ← Uses Logo
```

---

## Logo Implementation Code

### Navbar:
```jsx
<Logo size="md" animate={true} />
```

### Footer:
```jsx
<Logo size="md" animate={true} />
```

---

## Logo Visibility Matrix

| Location | Desktop | Tablet | Mobile | Always Visible |
|----------|---------|--------|--------|----------------|
| Navbar   | ✅      | ✅     | ✅     | ✅             |
| Footer   | ✅      | ✅     | ✅     | ✅             |

---

## Logo Quality Checklist

When replacing with actual logo:

- [ ] Logo visible in navbar (desktop)
- [ ] Logo visible in navbar (mobile)
- [ ] Logo visible in footer (desktop)
- [ ] Logo visible in footer (mobile)
- [ ] Logo crisp and clear
- [ ] Logo not stretched
- [ ] Logo maintains aspect ratio
- [ ] Logo visible on light background
- [ ] Logo visible on dark background
- [ ] Hover animation smooth
- [ ] Click action works (navbar)
- [ ] Proper spacing maintained
- [ ] Responsive on all devices

---

## Summary

### Total Logo Instances: 2
1. **Navbar** - Top navigation (desktop & mobile)
2. **Footer** - Company branding section

### Logo Component: 1
- **Reusable** - Same component used everywhere
- **Consistent** - Same appearance across site
- **Maintainable** - Update once, changes everywhere

### Logo File: 1
- **Location**: `src/assets/logo/company-logo.svg`
- **Format**: SVG (scalable)
- **Size**: 48x48px (or larger)
- **Background**: Transparent

---

**Status**: Logo locations documented
**Next Step**: Replace placeholder logo with actual company logo
