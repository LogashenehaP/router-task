import React from 'react';
import { ReadMore } from './DisplayStyle';
import {
  Container,
  LeftContainer,
  Name,
  RightContainer,
  Heading,
  ContentTag,
  Related,
  RelatedContent,
  DateTag,
} from './DisplayStyle';

type Data = {
  Username: string;
  Topic: string;
  Content: string;
  Date: string;
  RelatedOne: string;
  RelatedTwo: string;
};

export const Display: React.FC<Data> = ({
  Username,
  Topic,
  Content,
  Date,
  RelatedOne,
  RelatedTwo,
}) => {
  return (
    <>
      <Container>
        <LeftContainer>
          <DateTag>{Date}</DateTag>
          <Name>{Username}</Name>
        </LeftContainer>
        <RightContainer>
          <Heading>{Topic}</Heading>
          {Content.length <= 400 && <ContentTag>{Content}</ContentTag>}

          {Content.length > 400 && (
            <>
              <ContentTag>
                {Content.substring(0, 400) + '...'}
                <ReadMore to="/newPage" state={{ name: Username }}>
                  readmore
                </ReadMore>
              </ContentTag>
            </>
          )}
          <Related>
            <RelatedContent>{RelatedOne}</RelatedContent>
            <RelatedContent>{RelatedTwo}</RelatedContent>
          </Related>
        </RightContainer>
      </Container>
    </>
  );
};
