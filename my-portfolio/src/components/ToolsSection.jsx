import React from "react";
import styled from "styled-components";

const ToolsSectionWrapper = styled.section`
  
  border: 1px solid #3a3a3a;
  border-radius: 0.375rem; /* rounded-md */
  width: 1245px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0; /* py-4 */
  gap: 1rem; /* space-x-4 */

`;

const ToolItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem; /* space-y-1 */
`;

const ToolImage = styled.img`
  width: 2.5rem; /* w-10 */
  height: 2.5rem; /* h-10 */
`;

const ToolLabel = styled.span`
  font-size: 0.75rem; /* text-xs */
  font-weight: 600; /* font-semibold */
  color: white;
`;

export default function ToolSection() {
  return (
    <ToolsSectionWrapper>
      <ToolItem>
        <ToolImage
          src="\public\images\blender.png"
          alt="Blender logo orange icon"
          width={40}
          height={40}
        />
        <ToolLabel>BLENDER</ToolLabel>
      </ToolItem>

      <ToolItem>
        <ToolImage
          src="public\images\photoshop.png"
          alt="Photoshop logo blue icon"
          width={40}
          height={40}
        />
        <ToolLabel>PHOTOSHOP</ToolLabel>
      </ToolItem>

      <ToolItem>
        <ToolImage
          src="public\images\illustrator.png"
          alt="Illustrator logo orange icon"
          width={40}
          height={40}
        />
        <ToolLabel>ILLUSTRATOR</ToolLabel>
      </ToolItem>

      <ToolItem>
        <ToolImage
          src="\public\images\figma.png"
          alt="Figma logo colorful icon"
          width={40}
          height={40}
        />
        <ToolLabel>FIGMA</ToolLabel>
      </ToolItem>

      <ToolItem>
        <ToolImage
          src="public\images\react.png"
          alt="ReactJS logo blue icon"
          width={40}
          height={40}
        />
        <ToolLabel>REACTJS</ToolLabel>
      </ToolItem>
    </ToolsSectionWrapper>
  );
}
