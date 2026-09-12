# BhuvixTechnologies - Official Website

> **Pioneering Intelligent Enterprise Solutions & Next-Gen Software Engineering**

A modern, high-performance enterprise consulting and digital technology website built for **BhuvixTechnologies**. Combines the futuristic neo-tech aesthetic of *Frontline Intelligence System* with the robust solutions and consulting architecture of *Pioneer IT Consulting*, backed by **Google Sheets** for real-time dynamic data and contact form submissions, and engineered for zero-build deployment on **GitHub Pages**.

---

## ✨ Key Features

- **Futuristic & Modern Aesthetics**: Curated typography (Cabinet Grotesk, Plus Jakarta Sans, JetBrains Mono), electric blue accents, glowing status indicators, hairline borders, and glassmorphic micro-interactions.
- **Enterprise Consulting Architecture**:
  - **Areas of Specialization**: AI/ML, Cloud & DevOps, Enterprise Modernization, Web & Mobile Platforms, Data Intelligence, IoT & Edge.
  - **Interactive "What We Do" Showcase**: Multi-level tabbed navigation across Technology, Consulting & Staffing, and Training Enablement.
  - **Industries We Empower**: FinTech, Healthcare, Retail, Supply Chain, and Enterprise SaaS.
  - **Social Proof**: Enterprise partners bar, metrics track record, and client testimonials.
- **Google Sheets as Data Backend**:
  - **Live Dynamic CMS**: Reads Services, Case Studies, and Job Openings directly from Google Sheets via Google Visualization API with instant local fallback.
  - **Inquiry Submissions**: Contact forms log submissions straight into your Google Sheet via Google Apps Script Web App.
  - **Folder Isolation**: Designed to run inside a dedicated Google Drive folder (`BhuvixTechnologies_Data`) to guarantee 100% privacy from personal files.
- **GitHub Pages Ready**: 100% vanilla HTML5, CSS3, and modern JavaScript. Zero build steps, zero node_modules dependencies, loads under 1 second.

---

## 🚀 How to Deploy on GitHub Pages

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com/new) and create a repository (e.g. `BhuvixTechnologies` or `bhuvixtechnologies.github.io`).
2. **Push This Code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for BhuvixTechnologies"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - In your GitHub repository, go to **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and `/ (root)`, then click **Save**.
   - Your website will be live in ~1 minute at `https://<your-username>.github.io/<your-repo-name>/`!

---

## 📊 Connecting Your Google Sheet

See [GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md) for full instructions.

### Quick Setup:
1. In Google Drive, create a dedicated folder named **`BhuvixTechnologies_Data`** (to keep your personal files completely separate).
2. Create a spreadsheet inside it named **`BhuvixTechnologies_Database`**.
3. Share the spreadsheet as "Anyone with the link can view".
4. Add the provided [google-apps-script.js](google-apps-script.js) via Extensions > Apps Script and deploy as a Web App.
5. Paste your `Spreadsheet ID` and `Web App URL` into `js/config.js`.

---

## 📂 Project Structure

```
BhuvixTechnologies/
├── index.html              # Core semantic HTML5 landing page
├── css/
│   └── style.css           # Full modern design system & animations
├── js/
│   ├── config.js           # Configuration for Sheet ID & Webhooks
│   ├── data.js             # Rich fallback seed data
│   ├── sheets.js           # Google Sheets reader & form handler
│   └── main.js             # UI controller & tab interactions
├── google-apps-script.js   # Ready-to-paste webhook for Google Sheets
├── GOOGLE_SHEETS_SETUP.md  # Detailed setup guide with folder isolation
└── README.md               # Project documentation
```

---

## 🛡️ License & Copyright
© BhuvixTechnologies. All rights reserved.
