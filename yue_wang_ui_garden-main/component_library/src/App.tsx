import { useState } from 'react';
import styled from 'styled-components';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Text } from './components/Text';
import './App.css';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
  text-align: center;
  padding: 40px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
  margin-bottom: 40px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const Section = styled.section`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  color: #333;
  border-bottom: 3px solid #667eea;
  padding-bottom: 10px;
  margin-bottom: 30px;
`;

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechItem = styled.li`
  background: #f0f0f0;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 14px;
`;

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const workProjects = [
    {
      title: "Component Library",
      description: "A comprehensive React component library built with TypeScript, Styled Components, and Storybook. Features reusable components like buttons, cards, tables, and forms with comprehensive testing and documentation.",
      image: "📚",
      link: "https://github.com/yuewangrrc/component-library",
      techStack: ["React", "TypeScript", "Styled Components", "Storybook", "Vitest", "ESLint"]
    },
    {
      title: "CI/CD Pipeline Project",
      description: "Implemented continuous integration and delivery pipeline with automated testing, linting, and deployment using GitHub Actions and Docker containerization.",
      image: "🚀",
      link: "https://github.com/yuewangrrc/cicd-project",
      techStack: ["Docker", "GitHub Actions", "CI/CD", "Nginx", "Automated Testing"]
    },
    {
      title: "Portfolio Website",
      description: "This responsive portfolio website showcasing my development skills and projects, built with React and containerized with Docker for deployment.",
      image: "💼",
      link: "https://github.com/yuewangrrc/portfolio",
      techStack: ["React", "TypeScript", "Docker", "Responsive Design", "Component Library"]
    }
  ];

  const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Node.js", "Express", "Styled Components", "Bootstrap"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "Docker", "Vite", "Webpack", "ESLint", "Prettier", "Storybook"]
    },
    {
      category: "Testing",
      items: ["Vitest", "Jest", "React Testing Library", "Unit Testing", "Integration Testing"]
    }
  ];

  const resources = [
    {
      title: "React Documentation",
      icon: "⚛️",
      summary: "Official React documentation - comprehensive guide for building user interfaces",
      link: "https://react.dev/"
    },
    {
      title: "TypeScript Handbook",
      icon: "📘",
      summary: "Complete guide to TypeScript for type-safe JavaScript development",
      link: "https://www.typescriptlang.org/docs/"
    },
    {
      title: "Styled Components",
      icon: "💅",
      summary: "CSS-in-JS library for styling React components with dynamic styles",
      link: "https://styled-components.com/"
    },
    {
      title: "Storybook",
      icon: "📖",
      summary: "Tool for building UI components in isolation and documenting component libraries",
      link: "https://storybook.js.org/"
    }
  ];

  const devSetup = {
    vscode: {
      extensions: ["ES7+ React/Redux/React-Native snippets", "Prettier", "ESLint", "GitLens"],
      settings: "Auto-save enabled, Format on save, Tab size: 2"
    },
    terminal: {
      shell: "PowerShell",
      features: "Git integration, Node.js, npm/yarn package management"
    },
    font: {
      primary: "Fira Code",
      fallback: "Consolas, Monaco, monospace",
      features: "Ligatures enabled for better code readability"
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <Section>
            <SectionTitle>About Me</SectionTitle>
            <Card
              title="Yue Wang"
              content="Full-Stack Developer & Computer Science Student"
              footer="Red River College Polytechnic"
            />
            <Text>
              I am a passionate developer currently studying at Red River College Polytechnic. 
              I specialize in building modern web applications using React, TypeScript, and component-driven development. 
              My focus is on creating maintainable, tested, and well-documented code with strong CI/CD practices.
            </Text>
          </Section>
        );
      
      case 'work':
        return (
          <Section>
            <SectionTitle>My Work</SectionTitle>
            <WorkGrid>
              {workProjects.map((project, index) => (
                <Card
                  key={index}
                  title={project.title}
                  content={
                    <div>
                      <div style={{ fontSize: '48px', textAlign: 'center', margin: '20px 0' }}>
                        {project.image}
                      </div>
                      <Text>{project.description}</Text>
                      <TechList>
                        {project.techStack.map((tech, techIndex) => (
                          <TechItem key={techIndex}>{tech}</TechItem>
                        ))}
                      </TechList>
                    </div>
                  }
                  footer={
                    <Button
                      label="View Project"
                      onClick={() => window.open(project.link, '_blank')}
                      backgroundColor="#667eea"
                    />
                  }
                />
              ))}
            </WorkGrid>
          </Section>
        );
      
      case 'skills':
        return (
          <Section>
            <SectionTitle>Skills & Technologies</SectionTitle>
            <SkillsGrid>
              {skills.map((skillGroup, index) => (
                <Card
                  key={index}
                  title={skillGroup.category}
                  content={
                    <TechList>
                      {skillGroup.items.map((skill, skillIndex) => (
                        <TechItem key={skillIndex}>{skill}</TechItem>
                      ))}
                    </TechList>
                  }
                />
              ))}
            </SkillsGrid>
          </Section>
        );
      
      case 'resources':
        return (
          <Section>
            <SectionTitle>Resources & References</SectionTitle>
            <ResourcesGrid>
              {resources.map((resource, index) => (
                <Card
                  key={index}
                  title={resource.title}
                  content={
                    <div>
                      <div style={{ fontSize: '32px', textAlign: 'center', margin: '15px 0' }}>
                        {resource.icon}
                      </div>
                      <Text>{resource.summary}</Text>
                    </div>
                  }
                  footer={
                    <Button
                      label="Visit Resource"
                      onClick={() => window.open(resource.link, '_blank')}
                      backgroundColor="#764ba2"
                    />
                  }
                />
              ))}
            </ResourcesGrid>
          </Section>
        );
      
      case 'setup':
        return (
          <Section>
            <SectionTitle>Developer Setup</SectionTitle>
            <div style={{ display: 'grid', gap: '20px' }}>
              <Card
                title="VS Code Configuration"
                content={
                  <div>
                    <Text><strong>Extensions:</strong></Text>
                    <TechList>
                      {devSetup.vscode.extensions.map((ext, index) => (
                        <TechItem key={index}>{ext}</TechItem>
                      ))}
                    </TechList>
                    <Text style={{ marginTop: '15px' }}><strong>Settings:</strong> {devSetup.vscode.settings}</Text>
                  </div>
                }
              />
              <Card
                title="Terminal Setup"
                content={
                  <div>
                    <Text><strong>Shell:</strong> {devSetup.terminal.shell}</Text>
                    <Text><strong>Features:</strong> {devSetup.terminal.features}</Text>
                  </div>
                }
              />
              <Card
                title="Preferred Editor Font"
                content={
                  <div>
                    <Text><strong>Primary Font:</strong> {devSetup.font.primary}</Text>
                    <Text><strong>Fallback:</strong> {devSetup.font.fallback}</Text>
                    <Text><strong>Features:</strong> {devSetup.font.features}</Text>
                  </div>
                }
              />
            </div>
          </Section>
        );
      
      default:
        return null;
    }
  };

  return (
    <Container>
      <Header>
        <h1>Yue Wang</h1>
        <Text style={{ fontSize: '18px', margin: '10px 0' }}>
          Full-Stack Developer | Computer Science Student
        </Text>
        <Text>Red River College Polytechnic</Text>
      </Header>

      <Navigation>
        <Button
          label="About"
          onClick={() => setActiveSection('about')}
          backgroundColor={activeSection === 'about' ? '#667eea' : '#ccc'}
        />
        <Button
          label="Work"
          onClick={() => setActiveSection('work')}
          backgroundColor={activeSection === 'work' ? '#667eea' : '#ccc'}
        />
        <Button
          label="Skills"
          onClick={() => setActiveSection('skills')}
          backgroundColor={activeSection === 'skills' ? '#667eea' : '#ccc'}
        />
        <Button
          label="Resources"
          onClick={() => setActiveSection('resources')}
          backgroundColor={activeSection === 'resources' ? '#667eea' : '#ccc'}
        />
        <Button
          label="Dev Setup"
          onClick={() => setActiveSection('setup')}
          backgroundColor={activeSection === 'setup' ? '#667eea' : '#ccc'}
        />
      </Navigation>

      {renderContent()}
    </Container>
  );
}

export default App;
