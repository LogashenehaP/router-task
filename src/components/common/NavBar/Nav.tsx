import { Link } from 'react-router-dom';
import { image } from '../../../resources/Images';
import {
  NavigationBar,
  NavItems,
  Image,
  Text,
  ImageWrapper,
  LinkStyle,
} from './NavStyle';
import { navigationContent } from '../../../resources/String';

function Nav() {
  return (
    <NavigationBar>
      <NavItems>
        <Link to="/">
          <ImageWrapper>
            <Image src={image.loginProfile} />
          </ImageWrapper>
        </Link>
      </NavItems>
      <NavItems>
        <ImageWrapper>
          <Image src={image.search} />
        </ImageWrapper>
        <LinkStyle to="/search">{navigationContent.search}</LinkStyle>
      </NavItems>
      <NavItems>
        <ImageWrapper>
          <Image src={image.trending} />
        </ImageWrapper>
        <LinkStyle to="/trending">
          <Text>{navigationContent.trending}</Text>
        </LinkStyle>
      </NavItems>
      <NavItems>
        <ImageWrapper>
          <Image src={image.create} />
        </ImageWrapper>
        <LinkStyle to="/create">
          <Text>{navigationContent.create}</Text>
        </LinkStyle>
      </NavItems>
    </NavigationBar>
  );
}

export default Nav;
