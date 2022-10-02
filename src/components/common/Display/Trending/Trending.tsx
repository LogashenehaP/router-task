import ItemDetails from '../../../../data/ItemDetails';
import { FullContainer, Latest, LatestDiv } from '../Blog/DisplayStyle';
import { Display } from '../Blog/Display';
const Trending = () => {
  const displayDetails = sessionStorage.getItem('display');
  let sessionDisplay: any;
  if (displayDetails) {
    sessionDisplay = JSON.parse(displayDetails);
    console.log(sessionDisplay);
  }
  return (
    <>
      <FullContainer>
        <LatestDiv></LatestDiv>
        <Latest>Latest</Latest>
        {ItemDetails.map((item, i) => {
          return (
            <>
              {item.isTrending && (
                <Display
                  key={i}
                  Username={item.userName}
                  Topic={item.topic}
                  Content={item.content}
                  Date={item.date}
                  RelatedOne={item.relatedOne}
                  RelatedTwo={item.relatedTwo}
                />
              )}
            </>
          );
        })}
        {sessionDisplay &&
          sessionDisplay.map((item: any, i: any) => {
            return (
              <>
                {item.isTrending && (
                  <Display
                  key={i}
                    Username={item.Username}
                    Topic={item.Topic}
                    Content={item.Content}
                    Date={item.Date}
                    RelatedOne={item.RelatedOne}
                    RelatedTwo={item.RelatedTwo}
                  />
                )}
              </>
            );
          })}
      </FullContainer>
    </>
  );
};
export default Trending;
