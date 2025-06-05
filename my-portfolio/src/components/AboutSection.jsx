import styled from "styled-components";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";



const Section = styled.section`
   border: 1px solid #3a3a3a;
  border-radius: 0.375rem;
  padding: 1rem;
  margin-top: 1rem;
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

const Paragraph = styled.p`
  color: #d1d5db; /* text-gray-300 */
  font-size: 1rem; /* text-xs */
  line-height: 1.25rem; /* leading-tight */
  margin-bottom: 1rem;
`;

const List = styled.ul`
  color: #d1d5db; /* text-gray-300 */
  font-size:1rem; /* text-xs */
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* space-y-2 */
  margin-left: 26rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* space-x-2 */
`;

const IconWrapper = styled.span`
  color: #fbbf24; /* yellow-300 */
  width: 1rem; /* w-4 */
  flex-shrink: 0;
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  color: #60a5fa; /* blue-400 */
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const TextSpan = styled.span``;

export default function AboutSection() {
  return (
    <Section id="about">
      <Heading>Contact</Heading>
      
      <List>
        <ListItem>
          <IconWrapper><FaEnvelope /></IconWrapper>
          <TextSpan>Email:</TextSpan>
          <Link href="mailto:ishijain19@gmail.com">ishijain19@gmail.com</Link>
        </ListItem>
        <ListItem>
          <IconWrapper><FaPhoneAlt /></IconWrapper>
          <TextSpan>Contact No:</TextSpan>
          <Link href="tel:+918669197915">+91-8669197915</Link>
        </ListItem>
        <ListItem>
          <IconWrapper><FaLinkedin /></IconWrapper>
          <TextSpan>LinkedIn:</TextSpan>
          <Link href="https://www.linkedin.com/in/ishijain-/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/ishijain-/
          </Link>
        </ListItem>
        <ListItem>
          <IconWrapper><FaMapMarkerAlt /></IconWrapper>
          <TextSpan>Location:</TextSpan>
          <TextSpan>Nagpur, India</TextSpan>
        </ListItem>
      </List>
    </Section>
  );
}
