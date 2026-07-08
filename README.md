# Dispatch Pro

Dispatch Pro is an interactive web-based dashboard for solving the Economic Load Dispatch (ELD) problem in a practical and visually accessible way. It helps demonstrate how electrical power demand can be distributed among multiple generators to minimize total operating cost while respecting system constraints.

This project combines classical optimization methods with modern metaheuristic techniques in a single, browser-based interface. It is designed not only as a functional tool, but also as a clear academic demonstration of how dispatch problems are modeled and analyzed.

## What this project does

Economic load dispatch is the problem of deciding how much each generator should produce so that total demand is met at the minimum possible cost. In this dashboard, that problem is solved using:

- Lambda-iteration dispatch for the classical deterministic approach
- Metaheuristic algorithms such as Genetic Algorithm (GA), Particle Swarm Optimization (PSO), Grey Wolf Optimizer (GWO), Differential Evolution (DE), and Vortex Search

The app also includes several important power-system features that make the study more realistic:

- Transmission losses using the B-coefficient method
- Valve-point loading effects
- Prohibited operating zones
- Ramp-rate constraints for multi-period dispatch
- Comparison of deterministic and stochastic methods

## Key features

- Interactive generator setup with custom cost coefficients
- Demand input and system-level analysis
- Real-time dispatch results and cost breakdowns
- Visual plots for convergence, cost curves, and method comparison
- Multi-run statistical analysis for metaheuristic algorithms
- PDF report export for presenting results professionally

## How to run it

### Option 1: Open directly
1. Open the repository in your editor.
2. Launch [index.html](index.html) in a browser.

### Option 2: Run locally with a simple server
```bash
cd /workspaces/Power_System
python3 -m http.server 8000
```
Then open:
```text
http://127.0.0.1:8000
```

## How to use it

1. Add generators by entering their cost coefficients and operating limits.
2. Enter the system demand \(P_D\).
3. Choose the dispatch method you want to analyze.
4. View the generated plots, results, and comparison tables.
5. Export the report as a PDF when you want to share your findings.

## Technologies used

- HTML, CSS, and JavaScript
- Plotly.js for interactive charts
- jsPDF and html2canvas for PDF generation

## Why this project is valuable

This project demonstrates both the theoretical foundation and practical implementation of economic dispatch. It shows how traditional optimization methods and modern heuristic approaches can be compared in a single environment, making it especially useful for academic study, presentations, and coursework demonstrations.

## Deployment

For local running and online deployment instructions, see [DEPLOY.md](DEPLOY.md).

The published GitHub Pages site is available at https://rrkcody.github.io/Power_System/.
