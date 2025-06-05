import React from "react";
import styled from "styled-components";

const Section = styled.section`
  max-width: 1200px;
  padding: 20px;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  color: #f0f0f0;
  font-family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 5px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin: 0 0 12px;
  width: fit-content;
  color: #fbbf24;
`;

const Description = styled.p`
  max-width: 1000px;
  font-size: 1.1rem;
  line-height: 1.3;
  color: #e0e0e0;
  margin-bottom: 40px;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  justify-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 4rem;
  }

  @media (min-width: 1024px) {
    gap: 150px;
  }
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  color: #dcdcdc;
  width: 120px;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #ffffff;
  }
`;

const SkillIcon = styled.i`
  font-size: 48px;
  background-color: rgba(255, 255, 255, 0.15);
  padding: 9px;
  border-radius: 50%;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 14px;
`;

const SkillLabel = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  white-space: nowrap;
`;

const ProficiencySection = () => {
  const skills = [
    { icon: "fas fa-paint-brush", label: "Graphic Designing" },
    { icon: "fas fa-cube", label: "3D Modeling" },
    { icon: "fas fa-video", label: "Video Editing" },
    { icon: "fas fa-code", label: "Web Development" },
  ];

  return (
    <Section>
      <Header>
        <Title>Proficiency</Title>
        <Description>
          Skilled in a variety of creative and technical domains that bring ideas
          to life with passion and precision.
        </Description>
      </Header>

      <SkillsContainer>
        {skills.map(({ icon, label }) => (
          <SkillCard key={label}>
            <SkillIcon className={icon}></SkillIcon>
            <SkillLabel>{label}</SkillLabel>
          </SkillCard>
        ))}
      </SkillsContainer>
    </Section>
  );
};

export default ProficiencySection;
