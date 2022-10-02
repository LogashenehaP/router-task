import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../../../../Styles/font.css';
export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  gap: 20px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const Related = styled.div`
  display: flex;
  gap: 15px;
  color: #006711;
`;
export const RelatedContent = styled.p`
  border: 1px solid #006711;
  border-radius: 100px;
  font-size: 13px;
  padding: 5px;
`;

export const Heading = styled.h1`
  color: #006711;
  font-size: 32px;
  font-family: 'serif';
`;
export const DateTag = styled.h1`
  text-align: right;
  font-size: 32px;
  font-family: 'serif';
`;
export const Name = styled.p`
  transform: rotate(-90deg);
  padding-top: 70px;
  text-align: center;
  font-family: 'LexendDeca';
  font-size: 13px;
`;

export const ContentTag = styled.p`
  font-size: 20px;
  font-family: 'LexendDeca';
  line-height: 25px;
`;

export const FullContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  padding: 30px;
  gap: 40px;
`;
export const Latest = styled.h1`
  margin-left: 50px;
  font-size: 20px;
  font-family: 'LexendDeca';
`;
export const LatestDiv = styled.div`
  margin-left: 60px;
  background: #006711;
  width: 30px;
  height: 8px;
  border-radius: 8px;
  text-align: right;
`;
export const ReadMore = styled(Link)`
  text-decoration: none;
  color: #006711;
`;
