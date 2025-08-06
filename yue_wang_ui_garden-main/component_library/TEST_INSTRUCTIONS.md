# Portfolio Website Test Instructions

## Prerequisites
1. Docker Desktop must be installed and running
2. Git must be available

## Testing the Portfolio

### Method 1: Using Docker (Recommended)

1. Open terminal/command prompt
2. Navigate to the project directory:
   ```bash
   cd "d:\aa_studyinRRC\term3\testandbuild\assignment14_buildingportfolioWebsite\yue_wang_ui_garden-main\component_library"
   ```

3. Build and run using the provided scripts:
   
   **Windows:**
   ```cmd
   run.bat
   ```
   
   **Linux/Mac:**
   ```bash
   chmod +x run.sh
   ./run.sh
   ```

4. Or manually with Docker commands:
   ```bash
   # Build the image
   docker build -t wang_yue_coding_assignment14 .
   
   # Run the container
   docker run -d -p 5575:5575 --name wang_yue_coding_assignment14 wang_yue_coding_assignment14
   ```

5. Open browser and visit:
   - http://localhost:5575
   - http://127.0.0.1:5575

### Method 2: Local Development (Alternative)

If Docker is not available:

1. Install Node.js (version 18 or higher)
2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps --ignore-scripts
   ```
3. Build the application:
   ```bash
   npm run build
   ```
4. Serve the build (requires a local server)

## Expected Features

The portfolio should display:

1. **Header Section**: Name, title, and institution
2. **Navigation**: Buttons to switch between sections
3. **About Section**: Personal information and introduction
4. **Work Section**: Project cards with:
   - Component Library project
   - CI/CD Pipeline project
   - Portfolio Website project
5. **Skills Section**: Technology categories with skills listed
6. **Resources Section**: Development resources with links
7. **Developer Setup Section**: VS Code, terminal, and font preferences

## Stopping the Container

```bash
docker stop wang_yue_coding_assignment14
docker rm wang_yue_coding_assignment14
```

## Troubleshooting

- **Docker not found**: Ensure Docker Desktop is installed and running
- **Port 5575 in use**: Stop any existing containers or change the port
- **Build fails**: Check Node.js version compatibility (use Node 18+)
- **Dependencies issue**: Use `--legacy-peer-deps --ignore-scripts` flags
