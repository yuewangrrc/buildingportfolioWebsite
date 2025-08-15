# Yue Wang Portfolio Website — Assignment 14

A responsive portfolio website built with React + TypeScript using a reusable component library. The site is dockerized and served by Nginx at http://localhost:5575.

## Table of Contents

- Requirements
- Quick Start (Docker)
- Local Development
- Portfolio Features
- Docker Configuration
- CI/CD Pipeline
- Project Structure
- Stop & Clean Up
- Troubleshooting
- Rubric Mapping
- Author

## Requirements

- Docker
- Node.js (v18+) and npm
- Git

## Quick Start with Docker

```bash
# 0) Ensure Docker Desktop is running

# 1) Build the Docker image
docker build -t wang_yue_coding_assignment14 .

# 2) Run the container
docker run -d -p 5575:5575 --name wang_yue_coding_assignment14 wang_yue_coding_assignment14

# 3) Open the site in your browser
# http://localhost:5575 or http://127.0.0.1:5575
```

## Local Development

```bash
# Clone and install dependencies
git clone https://github.com/yuewangrrc/buildingportfolioWebsite.git
cd buildingportfolioWebsite/yue_wang_ui_garden-main/component_library
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Code quality checks
npm run lint          # ESLint
npm run format:check  # Prettier
npm test             # Tests
```

## Portfolio Features

The portfolio website includes the following sections:

### 1. Basic Information
- Name: Yue Wang
- Title: Full-Stack Developer & Full Stack Web Development Student
- Institution: Red River College Polytechnic

### 2. Work Portfolio
Each project includes:
- **Title**: Project name
- **Description**: Detailed project overview
- **Image**: Visual representation/emoji
- **Link**: GitHub repository link
- **Tech Stack**: Technologies and frameworks used

Featured Projects:
- Component Library (React, TypeScript, Styled Components, Storybook)
- CI/CD Pipeline Project (Docker, GitHub Actions, Testing)
- Portfolio Website (React, TypeScript, Responsive Design)

### 3. Skills & Technologies
Organized by categories:
- **Languages**: JavaScript, TypeScript, Python, HTML5, CSS3, SQL
- **Frameworks & Libraries**: React, Node.js, Express, Styled Components, Bootstrap
- **Tools & Technologies**: Git, Docker, Vite, Webpack, ESLint, Prettier, Storybook
- **Testing**: Vitest, Jest, React Testing Library, Unit Testing, Integration Testing

### 4. Resources & References
Learning resources with:
- **Title**: Resource name
- **Icon**: Visual identifier
- **Summary**: Brief description
- **Link**: External resource link

### 5. Developer Setup
Personal development environment details:
- **VS Code Configuration**: Extensions and settings
- **Terminal Setup**: Shell and features
- **Preferred Editor Font**: Font choices and features

## Docker Configuration

- **Container Name**: `wang_yue_coding_assignment14`
- **Working Directory**: `/wang_yue_final_site`
- **Port**: 5575
- **Web Server**: Nginx
- **Build**: Production React build

Container naming follows the required format: `lastName_firstName_coding_assignment14`.

## CI/CD Pipeline

- GitHub Actions workflow at `.github/workflows/ci.yml`
	- Node 18/20 matrix build
	- Install dependencies (cached)
	- Run ESLint and Prettier checks
	- Run tests (Vitest)
	- Build the production app
	- Build and smoke-test the Docker image

Local quality checks:

```bash
npm run lint
npm run format:check
npm test
```

## Project Structure

```
component_library/
├── src/
│   ├── components/          # Reusable UI components
│   ├── App.tsx             # Main portfolio application
│   └── main.tsx            # Application entry point
├── public/                 # Static assets
├── Dockerfile             # Docker configuration
├── nginx.conf             # Nginx server configuration
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## Stop & Clean Up

```bash
# Stop and remove the container
docker stop wang_yue_coding_assignment14
docker rm wang_yue_coding_assignment14

# Remove the image (optional)
docker rmi wang_yue_coding_assignment14
```

## Troubleshooting

- Docker build fails with esbuild host/binary version mismatch
	- Symptom: `Cannot start service: Host version "x" does not match binary version "y"`
	- Fix (already handled in Dockerfile): esbuild is pinned and rebuilt during image build. For local dev: `npm rebuild esbuild` and ensure Node 18+.

- Port already in use (5575)
	- Stop or change the conflicting service. Or run with a different host port: `-p 8888:5575` and open http://localhost:8888.

- Docker Desktop isn’t running
	- Start Docker Desktop first, then retry the build/run commands.

## Rubric Mapping

- Complete Submission
	- Includes Dockerfile, README, and this public GitHub repo link.
- Pipeline Implementation
	- GitHub Actions workflow runs ESLint, Prettier, Tests, Build, and Docker smoke test.
- Style and Content
	- Portfolio includes all required sections (Basic Info, Work, Skills, Resources, Developer Setup) with multi-section navigation and clean, error-free content.

## Technologies Used

- **Frontend**: React 19, TypeScript, Styled Components
- **Build Tool**: Vite
- **Testing**: Vitest, React Testing Library
- **Code Quality**: ESLint, Prettier
- **Containerization**: Docker, Nginx
- **Development**: Storybook, Hot Module Replacement

## Author

**Yue Wang**  
Full Stack Web Development Student  
Red River College Polytechnic

