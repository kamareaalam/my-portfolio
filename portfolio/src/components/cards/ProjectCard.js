import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  min-height: 300px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: 0 0 16px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 32px 6px rgba(0, 0, 0, 0.4);
    background-color: ${({ theme }) => theme.card + "dd"};
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin-top: 6px;
  line-height: 1.7;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.card};
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: auto;
`;

const Button = styled.a`
  padding: 8px 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 33px;
  text-decoration: none;
  transition: 0.3s ease;
  font-size: 14px;

  &:hover {
    background: ${({ theme }) => theme.danger + '20'};
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Details>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
      </Details>

      <Members>
        {project.member?.map((member, index) => (
          <Avatar key={index} src={member.img} alt={`Member ${index + 1}`} />
        ))}
      </Members>

      <ButtonsWrapper>
        <Button href={project.github} target="_blank" rel="noopener noreferrer">
          View Code
        </Button>
        <Button href={project.Livecode} target="_blank" rel="noopener noreferrer">
          Live Demo
        </Button>
      </ButtonsWrapper>
    </Card>
  );
};

export default ProjectCard;
