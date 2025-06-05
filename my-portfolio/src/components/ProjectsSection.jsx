import styled from "styled-components";

const Section = styled.section`
  border: 1px solid #3a3a3a;
  border-radius: 0.375rem;
  padding: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Heading = styled.h2`
  color: #fbbf24;
  font-size: 2rem;
  font-weight: 500;
  border-radius: 0.375rem;
  width: fit-content;
  margin-bottom: 0.5rem;
  margin-top: -0.5rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0 auto;
    text-align: center;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 1rem;
`;

const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ProjectCard = styled.div`
  background-color: #9aa6d0;
  border-radius: 0.375rem;
  overflow: hidden;
  color: #000;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  height: auto;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
  }

   @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-left: 0;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 85%;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 0.375rem;
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(10, 10, 10, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  padding: 0.5rem;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectTitle = styled.h3`
  font-weight: 600;
  font-size: 0.95rem;
  margin: 0.5rem 1rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    text-align: center;
  }
`;

const MoreLink = styled.div`
  color: #1d4ed8;
  font-size: 0.75rem;
  font-weight: 600;
  margin: -0.5rem 1rem 0.5rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    justify-content: center;
    display: flex;
    margin-top: 0.5rem;
  }
`;

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <HeaderRow>
        <Heading>Projects</Heading>
      </HeaderRow>
      <ProjectsGrid>
        {/* Project Card 1 */}
        <CardLink href="https://drive.google.com/drive/folders/1H3V8b7sY_zlXnqOfD1tkj4C5NoWwTLoq?usp=sharing" target="_blank" rel="noopener noreferrer">
          <ProjectCard>
            <ImageContainer>
              <ProjectImage src="/images/0264.png" alt="Project 1" />
              <HoverOverlay>Donut Battle Animation</HoverOverlay>
            </ImageContainer>
            <ProjectTitle>Yes the Donut Project</ProjectTitle>
            <MoreLink>More Info →</MoreLink>
          </ProjectCard>
        </CardLink>

        {/* Project Card 2 */}
        <CardLink href="https://your-project-link-2.com" target="_blank" rel="noopener noreferrer">
          <ProjectCard>
            <ImageContainer>
              <ProjectImage src="/images/donuts.png" alt="Project 2" />
              <HoverOverlay>Sweet Chaos: Blender Project</HoverOverlay>
            </ImageContainer>
            <ProjectTitle>Donut World</ProjectTitle>
            <MoreLink>More Info →</MoreLink>
          </ProjectCard>
        </CardLink>
      </ProjectsGrid>
    </Section>
  );
}
