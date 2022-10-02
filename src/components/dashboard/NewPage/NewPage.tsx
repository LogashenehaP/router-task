import ItemDetails from '../../../data/ItemDetails';

import { useLocation } from 'react-router-dom';
import { Container, DateTag, Name, ContentTag, Heading } from './NewPageStyle';

const NewPage = () => {
  const { state } = useLocation();
  const displayDetails = sessionStorage.getItem('display');
  let sessionDisplay: any;
  if (displayDetails) {
    sessionDisplay = JSON.parse(displayDetails);
    console.log(sessionDisplay);
  }
  return (
    <>
      {ItemDetails.map((item, i) => {
        return (
          <>
            {state.name === item.userName && (
              <>
                <Container>
                  <Heading>{item.topic}</Heading>
                  <Name>Written by {item.userName}</Name>
                  <DateTag>On {item.date}</DateTag>
                  <ContentTag>{item.content}</ContentTag>
                </Container>
              </>
            )}
          </>
        );
      })}
      {sessionDisplay.map((item: any, i: any) => {
        return (
          <>
            {state.name === item.Username && (
              <>
                <Container>
                  <Heading>{item.Topic}</Heading>
                  <Name>Written by {item.Username}</Name>
                  <DateTag>On {item.Date}</DateTag>
                  <ContentTag>{item.Content}</ContentTag>
                </Container>
              </>
            )}
          </>
        );
      })}
    </>
  );
};
export default NewPage;
