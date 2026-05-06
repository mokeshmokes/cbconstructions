# 🚀 Quick Start Guide - CB Construction Website

## ⚡ Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```
Open http://localhost:3000 in your browser

### Step 3: Build for Production
```bash
npm run build
```

---

## 🌐 Deploy to Vercel (Fastest Method)

### Using Vercel Dashboard:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"
   - Done! ✨

**Time to deploy: ~2 minutes**

---

## 📝 Update Content

All content is in one file: `src/data/content.js`

Edit this file to update:
- Company information
- Services
- Projects
- Testimonials
- Contact details

No need to touch component files!

---

## 🎨 Customize Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#3b82f6', // Change this
  }
}
```

---

## 📱 Test Responsiveness

```bash
npm run dev
```

Then test at:
- Mobile: Resize browser to 375px
- Tablet: 768px
- Desktop: 1440px

Or use browser DevTools (F12) → Device Toolbar

---

## 🐛 Troubleshooting

### Build fails?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port already in use?
Edit `vite.config.js` and change port from 3000 to another number

### Animations not working?
Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

---

## 📚 Need More Help?

- Full deployment guide: `DEPLOYMENT.md`
- Complete upgrade details: `UPGRADE_SUMMARY.md`
- Build verification: `BUILD_VERIFICATION.md`

---

## ✅ You're All Set!

Your premium construction website is ready to go live! 🎉
