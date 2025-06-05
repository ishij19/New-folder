import styled from "styled-components";

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Input = styled.input`
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  border: none;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  border: none;
  font-size: 1rem;
  resize: vertical;
`;

const Button = styled.button`
  background-color: #3b82f6; /* blue-500 */
  color: white;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2563eb; /* blue-600 */
  }
`;

export default function ContactSection() {
  return (
    <Section id="contact">
      <Heading>Let's Connect</Heading>
      <Form>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea placeholder="Your Message" rows={4} required />
        <Button type="submit">Send</Button>
      </Form>
    </Section>
  );
}
