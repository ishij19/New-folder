import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

// Rotation keyframe
const rotate = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const ToolsSectionWrapper = styled.section`
  border: 1px solid #3a3a3a;
  border-radius: 0.375rem;
  width: 1245px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
`;

const ToolItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
`;

const ToolImageWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: rgba(255, 255, 255, 0.08);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgb(11, 14, 12);
  }
`;

const ToolImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  ${({ inView }) =>
    inView &&
    css`
      animation: ${rotate} 5s linear infinite;
    `}
`;

const ToolLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  transition: color 0.3s ease;

  ${ToolItem}:hover & {
    color:rgb(255, 254, 252);
  }
`;



export default function ToolSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Start animation when 30% visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <ToolsSectionWrapper ref={sectionRef}>
      {/* <ToolItem>
        <ToolImage
          src="/images/blender.png"
          alt="Blender logo"
          inView={inView}
        />
        <ToolLabel>BLENDER</ToolLabel>
      </ToolItem> */}


<ToolItem>
  <ToolImageWrapper>
    <ToolImage src="/images/blender.png" alt="Blender logo" inView={inView} />
  </ToolImageWrapper>
  <ToolLabel>BLENDER</ToolLabel>
</ToolItem>

<ToolItem>
  <ToolImageWrapper>
    <ToolImage src="/images/photoshop.png" alt="photoshop logo" inView={inView} />
  </ToolImageWrapper>
  <ToolLabel>PHOTOSHOP</ToolLabel>
</ToolItem>

<ToolItem>
  <ToolImageWrapper>
    <ToolImage src="/images/illustrator.png" alt="illustrator logo" inView={inView} />
  </ToolImageWrapper>
  <ToolLabel>ILLUSTRATOR</ToolLabel>
</ToolItem>

<ToolItem>
  <ToolImageWrapper>
    <ToolImage src="/images/figma.png" alt="figma logo" inView={inView} />
  </ToolImageWrapper>
  <ToolLabel>FIGMA</ToolLabel>
</ToolItem>

<ToolItem>
  <ToolImageWrapper>
    <ToolImage src="/images/react.png" alt="react logo" inView={inView} />
  </ToolImageWrapper>
  <ToolLabel>REACT</ToolLabel>
</ToolItem>






      {/* <ToolItem>
        <ToolImage
          src="/images/photoshop.png"
          alt="Photoshop logo"
          inView={inView}
        />
        <ToolLabel>PHOTOSHOP</ToolLabel>
      </ToolItem>

      <ToolItem>
        <ToolImage
          src="/images/illustrator.png"
          alt="Illustrator logo"
          inView={inView}
        />
        <ToolLabel>ILLUSTRATOR</ToolLabel>
      </ToolItem>

      <ToolItem>
        <ToolImage
          src="/images/figma.png"
          alt="Figma logo"
          inView={inView}
        />
        <ToolLabel>FIGMA</ToolLabel>
      </ToolItem>

      <ToolItem>
        <ToolImage
          src="/images/react.png"
          alt="ReactJS logo"
          inView={inView}
        />
        <ToolLabel>REACTJS</ToolLabel>
      </ToolItem> */}
    </ToolsSectionWrapper>
  );
}
