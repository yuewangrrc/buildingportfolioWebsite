# Yue Wang Portfolio Website - Assignment 14

A responsive portfolio website built with React, TypeScript, and component library showcasing coursework and development skills. The site is containerized with Docker and serves on localhost:5575.

## Requirements

- Docker
- Node.js (v18+) and npm
- Git

## Quick Start with Docker

```bash
# Build the Docker image
docker build -t wang_yue_coding_assignment14 .

# Run the container
docker run -d -p 5575:5575 --name wang_yue_coding_assignment14 wang_yue_coding_assignment14

# Access the portfolio at http://localhost:5575 or http://127.0.0.1:5575
```

## Local Development

```bash
# Clone and install dependencies
git clone <repository-url>
cd component_library
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
- Title: Full-Stack Developer & Computer Science Student
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

## CI/CD Pipeline

The project includes:
- ESLint for code quality
- Prettier for code formatting
- Vitest for testing
- Docker for containerization
- Automated build pipeline

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

## Stop Container

```bash
# Stop and remove the container
docker stop wang_yue_coding_assignment14
docker rm wang_yue_coding_assignment14

# Remove the image (optional)
docker rmi wang_yue_coding_assignment14
```

## Technologies Used

- **Frontend**: React 19, TypeScript, Styled Components
- **Build Tool**: Vite
- **Testing**: Vitest, React Testing Library
- **Code Quality**: ESLint, Prettier
- **Containerization**: Docker, Nginx
- **Development**: Storybook, Hot Module Replacement

## Author

**Yue Wang**  
Computer Science Student  
Red River College Polytechnic

