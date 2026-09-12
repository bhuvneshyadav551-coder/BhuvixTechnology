# Google Sheets Integration Guide - BhuvixTechnologies

This guide explains how to connect your **BhuvixTechnologies** website with Google Sheets to:
1. **Manage live content dynamically** (Services, Case Studies / Projects, Careers / Jobs).
2. **Receive form submissions directly** (Contact and project inquiries logged into a Google Sheet).

---

## 🔒 Keeping Your Personal Files Completely Separate

Because you have personal documents and files in your Google Drive, follow this practice to ensure 100% isolation:

1. Open [Google Drive](https://drive.google.com).
2. Click **+ New** > **New folder**.
3. Name the folder: **`BhuvixTechnologies_Data`**.
4. **All files and spreadsheets for this website will live solely inside this folder.**
5. The website and Google Apps Script will **only** have access to the spreadsheet you place in this folder and can never access any other file in your Google Drive.

---

## Step 1: Create the Database Spreadsheet

1. Open your new **`BhuvixTechnologies_Data`** folder in Google Drive.
2. Click **+ New** > **Google Sheets** > **Blank spreadsheet**.
3. Title the spreadsheet: **`BhuvixTechnologies_Database`**.

---

## Step 2: Set Up the Tabs & Column Headers

In the bottom bar of Google Sheets, set up three tabs with the exact names below:

### Tab 1: `Services`
Add these column headers in Row 1:
| id | category | title | description | icon | tags | featured |
|---|---|---|---|---|---|---|
| srv-01 | Artificial Intelligence | Generative AI & LLM Systems | Custom fine-tuned LLMs and RAG pipelines... | cpu | PyTorch, OpenAI, LangChain | TRUE |
| srv-02 | Cloud Engineering | Cloud Migration & DevOps | Full-lifecycle cloud architecture across AWS & Azure... | cloud | Azure, AWS, Docker, Kubernetes | TRUE |

### Tab 2: `Projects`
Add these column headers in Row 1:
| id | category | title | description | client | impact | tech |
|---|---|---|---|---|---|---|
| proj-01 | FinTech & Banking | Autonomous Fraud Engine | Real-time transaction fraud prevention... | Global Financial Services | 94% reduction in false positives | Apache Flink, Python, AWS |
| proj-02 | Healthcare | Patient Care Data Mesh | Cloud infrastructure connecting clinics... | Regional Healthcare Network | 3.8x faster record retrieval | Azure, FHIR, Kubernetes |

### Tab 3: `Careers`
Add these column headers in Row 1:
| id | category | title | department | location | type | experience | description |
|---|---|---|---|---|---|---|---|
| job-01 | Engineering | Senior Cloud Architect | Cloud Practice | Princeton, NJ / Remote | Full-Time | 7+ Years | Lead cloud modernization projects... |
| job-02 | AI & ML | Lead Generative AI Engineer | AI Lab | Remote | Full-Time | 5+ Years | Design custom LLM workflows... |

*(Note: Tab 4 `Inquiries` is created automatically by the Apps Script on first submission).*

---

## Step 3: Make the Sheet Publicly Readable for Dynamic Display

To allow GitHub Pages to display your services and case studies:
1. Click the green **Share** button in the top-right corner.
2. Under **General access**, change from *Restricted* to **"Anyone with the link"**.
3. Set the role to **Viewer**.
4. Click **Done**.
5. Copy the URL from your browser address bar. The Spreadsheet ID is the string between `/d/` and `/edit`:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit
   ```
6. Open `js/config.js` in your website code and paste it:
   ```javascript
   GOOGLE_SHEET_ID: "YOUR_SPREADSHEET_ID",
   ```

---

## Step 4: Deploy the Form Submission Webhook (Google Apps Script)

This allows contact form inquiries to be saved directly into your spreadsheet:

1. Inside your `BhuvixTechnologies_Database` Google Sheet, click **Extensions** in the top menu > **Apps Script**.
2. Delete any existing code in the script editor.
3. Open the file [google-apps-script.js](file:///e:/BhuvixTechnologies/google-apps-script.js) from this repository, copy its entire contents, and paste it into the editor.
4. Click the **Save** icon (diskette or Ctrl+S).
5. In the top right, click **Deploy** > **New deployment**.
6. Click the gear icon next to "Select type" and choose **Web app**.
7. Fill in the deployment details:
   - **Description**: `BhuvixTechnologies Webhook`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone` *(Note: This is required so public website visitors can submit the form)*
8. Click **Deploy**.
9. Google may prompt you to authorize permissions. Click **Authorize access**, choose your Google account, click **Advanced**, and proceed.
10. Copy the **Web App URL** (it starts with `https://script.google.com/macros/s/.../exec`).
11. Open `js/config.js` and paste it into:
    ```javascript
    GOOGLE_APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycb.../exec",
    ```

---

## Step 5: Test the Integration

1. Refresh your BhuvixTechnologies website.
2. You will see the live status indicator turn green: **`LIVE GOOGLE SHEET CONNECTED`**.
3. Fill out the "Have a Project?" form at the bottom of the page and click Submit.
4. Open your `BhuvixTechnologies_Database` Google Sheet: you will see a new tab named **`Inquiries`** with the submission immediately logged with a timestamp!

---

## Need Assistance?
If you haven't set up the Google Sheet yet, don't worry! The website includes high-performance built-in seed data and simulated form submission in demo mode, ensuring that the site always looks stunning and operates smoothly.
