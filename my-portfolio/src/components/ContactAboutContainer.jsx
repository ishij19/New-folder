import styled from "styled-components";
import ContactSection from "./ContactSection";
import AboutSection from "./AboutSection";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 2rem auto;
  max-width: 1200px;
  padding: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Half = styled.div`
  flex: 1;
`;

export default function ContactAboutContainer() {
  return (
    <Container>
      <Half>
        <ContactSection />
      </Half>
      <Half>
        <AboutSection />
      </Half>
    </Container>
  );
}
