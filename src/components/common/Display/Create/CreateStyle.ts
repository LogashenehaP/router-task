import styled from 'styled-components';
export const Container = styled.div``;
export const InputField = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background-color: whiteSmoke;
  color: #4b4b4b;
  border-radius: 3px;
`;

export const Form = styled.form`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

export const InputBox = styled.input`
  outline: none;
  text-align: center;
  background-color: whiteSmoke;
  border: none;
`;
export const TextArea = styled.textarea`
  outline: none;
  text-align: center;
  background-color: whiteSmoke;
  border: none;
`;

export const CreateButton = styled.button`
  border: 0px;
  font-size: 20px;
  padding: 10px;
  border-color: #24afb5;
  border-radius: 8px;
  font-family: 'inter';
  color: white;
  background-color: #006711;
`;
export const ButtonText = styled.p`
  padding: 0;
  margin: 0;
  color: white;
`;
export const ErrorTag = styled.p`
  color: red;
  font-family: 'LexendDeca';
  font-size: 12px;
`;
