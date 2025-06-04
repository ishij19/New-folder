import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid #3a3a3a;
  border-radius: 0.375rem;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;



const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 33%;

  @media(min-width: 768px) {
    justify-content: flex-start;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 15rem;   /* 48 * 4px = 192px */
  height: 15rem;
  object-fit: cover;
`;

const Info = styled.div`
  flex-basis: 67%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.p`
  color: #fbbf24; /* text-yellow-300 */
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  margin-left: -3.5rem;
`;

const Name = styled.h1`
  color: white;
  font-size: 2.3rem;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  margin-left: -3.5rem;
`;

const Role = styled.h2`
  color: #d1d5db; /* text-gray-300 */
  font-size: 1.135rem;
  font-weight: 600;
  line-height: 1.7;
  margin: 0;
  margin-left: -3.5rem;
`;

const Description = styled.p`
  color: #d1d5db;
  font-size: 1.2rem;
  line-height: 1.3;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: -3.5rem;
`;

const ContactButton = styled.button`
  background-color: #3a5bdb;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  margin-top: 0.5rem;
  margin-left: -3.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #2a44b0;
  }
`;

const ProfileSection = () => {
  return (
    <Section id="profile-section">
      <ImageWrapper>
        <ProfileImage
          src="\public\images\your-photo.jpg"
          alt="Image"
          width={250}
          height={250}
        />
      </ImageWrapper>
      <Info>
        <Label>I AM</Label>
        <Name>Ishi Jain</Name>
        <Role>Designer</Role>
        <Description>
          I am a web developer with a creative twist – someone who writes code by day and brings ideas to life through graphic design and 3D modeling by night.
          <br />
          <br />
          Skilled in web, full-stack, and graphic design, I believe that web applications, my true passion, come from crafting visuals that speak without words. From designing posters and digital art to building detailed 3D models and editing videos, I find joy in the artistic side of work. I believe design is more than how things look — it's how they feel and function. Combining logic with creativity, I thrive at the intersection of design and development, learning concepts for clients, completing experiences – whether it's an e-commerce or 3D space.
        </Description>
        <ContactButton>CONTACT ME</ContactButton>
      </Info>
    </Section>
  );
};

export default ProfileSection;
