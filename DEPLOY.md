# Deploy Power_System Dashboard

## Run locally

1. Open a terminal in the repository root:
   ```bash
   cd /workspaces/Power_System
   ```
2. Start a simple local web server:
   ```bash
   python3 -m http.server 8000
   ```
3. Open the dashboard in your browser:
   ```
   http://127.0.0.1:8000
   ```

> Using a local server is recommended because the page loads Plotly from a CDN, and some browser features work more reliably over HTTP than `file://`.

## Publish with GitHub Pages

This is the easiest way to open the dashboard directly from GitHub in a browser.

1. Make sure the repository is committed and pushed to GitHub:
   ```bash
   git add .
   git commit -m "Add dashboard and deploy instructions"
   git push origin main
   ```
2. Open your repository on GitHub.
3. Go to `Settings` → `Pages`.
4. Under `Source`, choose:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click `Save`.
6. Wait a minute or two for GitHub to publish the site.

Once published, your dashboard will be available at:

```text
https://<your-github-username>.github.io/Power_System/
```

You can now open that URL anytime from your browser without using Codespaces.

## Publish with Netlify or Vercel

1. Sign in to Netlify or Vercel with your GitHub account.
2. Connect the `Power_System` repository.
3. Choose the `main` branch and deploy.
4. The service will provide a live URL for your dashboard.

## Notes

- `index.html` is the main dashboard page.
- The dashboard is client-side only and does not require a backend.
- The PDF export feature uses external CDN libraries for Plotly, html2canvas, jsPDF, and jspdf-autotable, so the page should be opened with internet access for charts and report export to work properly.
