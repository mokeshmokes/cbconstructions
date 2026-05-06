# ISO Certification Locations - Visual Guide

## Where the Certification Badge Appears

---

## 1. Footer - Company Info Section

```
┌─────────────────────────────────────────────────────────────┐
│  [LOGO] CB Building Approval                               │
│         Your Approval Simplified                           │
│                                                             │
│  Expert guidance for all your building approval needs...   │
│                                                             │
│  ┌──────────────────────────────────────┐                 │
│  │ [CERT] ISO 9001:2015 Certified       │ ← Certification │
│  │        Quality Management System     │                  │
│  └──────────────────────────────────────┘                 │
│                                                             │
│  [f] [📷] [in] [💬] [▶]  ← Social Icons                   │
└─────────────────────────────────────────────────────────────┘
```

**Details**:
- **Location**: Footer company section
- **Size**: Medium (64px)
- **Theme**: Dark
- **Animation**: Hover scale + glow
- **Background**: Glassmorphism

---

## 2. Statistics Section - Bottom CTA

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [500+]  [10+]  [100%]  [300+]  ← Statistics Counters     │
│                                                             │
│  ┌──────────────────────────────────────┐                 │
│  │ [CERT] ISO 9001:2015 Certified       │ ← Certification │
│  │        Quality Management System     │                  │
│  └──────────────────────────────────────┘                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Details**:
- **Location**: Below statistics counters
- **Size**: Medium (64px)
- **Theme**: Dark
- **Animation**: Hover scale + glow
- **Background**: Glass-dark with padding

---

## 3. Why Choose Us Section - Certification Showcase

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌────────────────────────────────────────────┐           │
│  │                                            │           │
│  │  [CERT] ISO 9001:2015 Certified           │ ← Large   │
│  │         Quality Management System         │            │
│  │                                            │           │
│  │  Our certification ensures that every     │           │
│  │  project meets international quality...   │           │
│  │                                            │           │
│  │  [View Our Work]  [Get Started]           │           │
│  │                                            │           │
│  └────────────────────────────────────────────┘           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Details**:
- **Location**: Center of dark section
- **Size**: Large (80px)
- **Theme**: Dark
- **Animation**: Hover scale + glow
- **Prominence**: Featured display

---

## 4. CTA Banner - Trust Indicators

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Need Building Approval?                                   │
│  Leading Building Approval Consultancy                     │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                │
│  │ [CERT]   │  │ 50+      │  │ 7+       │                │
│  │ ISO      │  │ Projects │  │ Years    │                │
│  │ Cert...  │  │ Done     │  │ Exp...   │                │
│  └──────────┘  └──────────┘  └──────────┘                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Details**:
- **Location**: Trust indicators grid
- **Size**: Small (48px)
- **Theme**: Dark
- **Animation**: None (static)
- **Layout**: Compact card

---

## Certification Badge Sizes

### Visual Size Comparison:

```
sm (48px):  [🏆]     ← CTA Banner
md (64px):  [🏆 ]    ← Footer, Statistics (Default)
lg (80px):  [🏆  ]   ← Why Choose Us
xl (96px):  [🏆   ]  ← (Available if needed)
```

---

## Certification Badge States

### 1. Default State
```
[🏆] ISO 9001:2015 Certified
     Quality Management System
```

### 2. Hover State (with animate={true})
```
[🏆 ] ISO 9001:2015 Certified  ← Scales to 1.05x
 ✨   Quality Management System  ← Glow effect appears
```

### 3. Compact State (showText={false})
```
[🏆]  ← Badge only, no text
```

---

## Certification on Different Backgrounds

### Dark Background (Footer, Statistics, Why Choose Us)
```
┌─────────────────────────────┐
│ [CERT] ISO 9001:2015        │ ← White text on dark
│        Quality Management   │
└─────────────────────────────┘
```

### Light Background (if used)
```
┌─────────────────────────────┐
│ [CERT] ISO 9001:2015        │ ← Dark text on light
│        Quality Management   │
└─────────────────────────────┘
```

---

## Responsive Behavior

### Desktop (1920px)
```
[🏆 ] ISO 9001:2015 Certified
      Quality Management System
      ← Full size, horizontal layout
```

### Tablet (768px)
```
[🏆] ISO 9001:2015 Certified
     Quality Management System
     ← Slightly smaller, may wrap
```

### Mobile (375px)
```
[🏆] ISO 9001:2015
     Certified
     Quality Mgmt
     ← Compact, text wraps
```

---

## Certification Badge Spacing

### Footer:
```
[LOGO] ←→ [Company Name]
         ↓
[Description text]
         ↓
[CERT] ←→ [Certification Text]
  ↑         ↑
 64px    space-x-3 (12px)
```

### Statistics:
```
[Counter Cards]
       ↓
  (spacing)
       ↓
[CERT Badge]
```

### Why Choose Us:
```
[Dark Section]
       ↓
[CERT Badge] ← Centered
       ↓
[Description]
       ↓
[CTA Buttons]
```

---

## Certification Badge Animation Timeline

### Hover Animation (300ms):
```
0ms:   Scale 1.0, Glow 0%     [🏆]
150ms: Scale 1.025, Glow 50%  [🏆]
300ms: Scale 1.05, Glow 100%  [🏆 ]
                               ✨
```

### Hover Out (300ms):
```
0ms:   Scale 1.05, Glow 100%  [🏆 ]
                               ✨
150ms: Scale 1.025, Glow 50%  [🏆]
300ms: Scale 1.0, Glow 0%     [🏆]
```

---

## Certification File Structure

```
src/
├── assets/
│   └── certifications/
│       └── iso-certification.svg  ← Certification file
└── components/
    ├── CertificationBadge.jsx     ← Reusable component
    ├── Footer.jsx                 ← Uses badge
    ├── Statistics.jsx             ← Uses badge
    ├── WhyChooseUs.jsx            ← Uses badge
    └── CTABanner.jsx              ← Uses badge
```

---

## Certification Implementation Code

### Footer:
```jsx
<CertificationBadge 
    size="md" 
    animate={true}
    theme="dark"
    showText={true}
/>
```

### Statistics:
```jsx
<CertificationBadge 
    size="md" 
    animate={true}
    theme="dark"
    showText={true}
    className="glass-dark px-8 py-6"
/>
```

### Why Choose Us:
```jsx
<CertificationBadge 
    size="lg" 
    animate={true}
    theme="dark"
    showText={true}
/>
```

### CTA Banner:
```jsx
<CertificationBadge 
    size="sm" 
    animate={false}
    theme="dark"
    showText={true}
/>
```

---

## Certification Visibility Matrix

| Location       | Desktop | Tablet | Mobile | Animation | Size |
|----------------|---------|--------|--------|-----------|------|
| Footer         | ✅      | ✅     | ✅     | Yes       | md   |
| Statistics     | ✅      | ✅     | ✅     | Yes       | md   |
| Why Choose Us  | ✅      | ✅     | ✅     | Yes       | lg   |
| CTA Banner     | ✅      | ✅     | ✅     | No        | sm   |

---

## Certification Quality Checklist

When replacing with actual certification:

- [ ] Badge visible in Footer
- [ ] Badge visible in Statistics section
- [ ] Badge visible in Why Choose Us section
- [ ] Badge visible in CTA Banner
- [ ] Badge crisp and clear
- [ ] Badge not stretched
- [ ] Badge maintains aspect ratio
- [ ] Text readable on dark background
- [ ] Hover animation smooth (where enabled)
- [ ] Glow effect appears on hover
- [ ] Proper spacing maintained
- [ ] Responsive on all devices

---

## Summary

### Total Badge Instances: 4
1. **Footer** - Company info section
2. **Statistics** - Bottom CTA
3. **Why Choose Us** - Certification showcase
4. **CTA Banner** - Trust indicators

### Badge Component: 1
- **Reusable** - Same component used everywhere
- **Consistent** - Same appearance across site
- **Maintainable** - Update once, changes everywhere

### Badge File: 1
- **Location**: `src/assets/certifications/iso-certification.svg`
- **Format**: SVG (scalable)
- **Size**: 120x120px (or larger)
- **Background**: Transparent

---

**Status**: Certification locations documented
**Next Step**: Replace placeholder with actual ISO certification
