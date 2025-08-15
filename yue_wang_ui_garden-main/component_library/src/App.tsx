import { useState } from 'react';
import styled from 'styled-components';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Text } from './components/Text';
import './App.css';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px 60px;
`;

const Header = styled.header`
  position: relative;
  text-align: center;
  padding: 56px 24px;
  color: #0f172a;
  border-radius: var(--radius);
  margin-bottom: 36px;
  background: linear-gradient(135deg, #e9f1ff 0%, #e5fbf7 100%);
  box-shadow: var(--shadow-sm);

  h1 {
    margin: 0 0 6px;
    font-size: 40px;
    letter-spacing: 0.2px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 24px auto 36px;
  flex-wrap: wrap;
`;

const Section = styled.section`
  margin-bottom: 56px;
`;

const SectionTitle = styled.h2`
  color: #0f172a;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 10px 10px 0;
  margin: 0 0 22px;
  border-bottom: 3px solid var(--primary);
`;

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 22px;
  margin-bottom: 22px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TechItem = styled.li`
  background: #f1f5f9; /* slate-100 */
  color: #0f172a;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 13px;
  border: 1px solid #e2e8f0;
`;

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const workProjects = [
    {
      title: "Component Library",
      description: "A comprehensive React component library built with TypeScript, Styled Components, and Storybook. Features reusable components like buttons, cards, tables, and forms with comprehensive testing and documentation.",
      image: "📚",
      link: "https://github.com/yuewangrrc/yue_wang_assignment12_react_component",
      techStack: ["React", "TypeScript", "Styled Components", "Storybook", "Vitest", "ESLint"]
    },
    {
      title: "CI/CD Pipeline Project",
      description: "Implemented continuous integration and delivery pipeline with automated testing, linting, and deployment using GitHub Actions and Docker containerization.",
      image: "🚀",
      link: "https://github.com/yuewangrrc/assignment13_ui_garden_build_checks",
      techStack: ["Docker", "GitHub Actions", "CI/CD", "Nginx", "Automated Testing"]
    },
    {
      title: "Portfolio Website",
      description: "This responsive portfolio website showcasing my development skills and projects, built with React and containerized with Docker for deployment.",
      image: "💼",
      link: "https://github.com/yuewangrrc/buildingportfolioWebsite",
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
            <Text content="I am a passionate developer currently studying at Red River College Polytechnic." />
            <Text content="I specialize in building modern web applications using React, TypeScript, and component-driven development." />
            <Text content="My focus is on creating maintainable, tested, and well-documented code with strong CI/CD practices." />
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
        <h1>Yue(Ada) Wang</h1>
        <Text style={{ fontSize: '18px', margin: '10px 0' }} content='Winnipeg, Manitoba | Full-Stack Developer | adawang6688@gmail.com | 204-963-6688'>
        </Text>
        <Text content='linkedin.com/in/can-ada-wang/'></Text>
      </Header>

      <Navigation>
        <Button
          label="About"
          onClick={() => setActiveSection('about')}
          backgroundColor={activeSection === 'about' ? 'var(--primary)' : '#e2e8f0'}
        />
        <Button
          label="Work"
          onClick={() => setActiveSection('work')}
          backgroundColor={activeSection === 'work' ? 'var(--primary)' : '#e2e8f0'}
        />
        <Button
          label="Skills"
          onClick={() => setActiveSection('skills')}
          backgroundColor={activeSection === 'skills' ? 'var(--primary)' : '#e2e8f0'}
        />
        <Button
          label="Resources"
          onClick={() => setActiveSection('resources')}
          backgroundColor={activeSection === 'resources' ? 'var(--primary)' : '#e2e8f0'}
        />
        {/* <Button
          label="Dev Setup"
          onClick={() => setActiveSection('setup')}
          backgroundColor={activeSection === 'setup' ? 'var(--primary)' : '#e2e8f0'}
        /> */}
      </Navigation>

      {renderContent()}
    </Container>
  );
}

export default App;
