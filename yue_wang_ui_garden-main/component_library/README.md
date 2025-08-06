# wang_yue_ui_garden_build_checks - Component Library

React UI component library with automated code quality checks (Husky + ESLint + Prettier) and CI/CD pipeline.

## Requirements

- Docker
- Node.js (v20+) and npm
- Git

## Quick Start with Docker

```bash
# Build the Docker image
docker build -t wang_yue_ui_garden_build_checks .

# Run the container
docker run -d -p 8018:8018 --name wang_yue_coding_assignment13 wang_yue_ui_garden_build_checks

# Access at http://localhost:8018
```

## Local Development

```bash
# Clone and install
git clone https://github.com/yuewangrrc/assignment13_ui_garden_build_checks.git
cd assignment13_ui_garden_build_checks/component_library
npm install

# Run Storybook
npm run storybook

# Code quality checks
npm run lint          # ESLint
npm run format:check  # Prettier
npm test             # Tests
```

## Code Quality Features

- **Pre-commit Hooks**: Automatically runs ESLint, Prettier, and tests before each commit
- **GitHub Actions**: CI/CD pipeline runs quality checks on every push/PR
- **Docker**: Serves on port 8018 with container name `wang_yue_coding_assignment13`

## Stop Container

```bash
docker stop wang_yue_coding_assignment13
docker rm wang_yue_coding_assignment13
```

