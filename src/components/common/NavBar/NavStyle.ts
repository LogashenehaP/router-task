import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100px;
  /* height:99vh; */
  padding: 10px;
  border-right: 2px solid #006711;
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family:'LexendDeca';
`;
export const ImageWrapper = styled.div`
  width: 50px;
`;

export const Image = styled.img`
  width: 100%;
`;
export const Text = styled.p`
  text-decoration: none;
  color: black;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;
