import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

import { results, categories } from "../utils/data";

const Index = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

export default Index;

const arr = Array.from(Array(50).keys());
const NavBar = () => (
  <FlatAppBar position="fixed">
    <Toolbar>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Button color="inherit">Signup</Button>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </FlatAppBar>
);

const Body = () => (
  <BodyWrapper>
    <BodyContainer>
      <BodyRow>
        <SearchContainer>
          <SearchWrapper>
            <Input placeholder="Try 'Brett Favre' or 'Real Housewives" />
            <SearchIconContainer>
              <SearchIconItem fontSize="large" />
            </SearchIconContainer>
          </SearchWrapper>
        </SearchContainer>
      </BodyRow>
      <BodyRow>
        <CategoryContainer>
          <Title>Categories</Title>
          {categories.map((category, i) => {
            const { name, amount } = category;
            if (i === 8) {
              return <Sepatator key={i} />;
            }
            return <CategoryItem key={i} name={name} amount={amount} />;
          })}
        </CategoryContainer>
        <ResultsContainer>
          <RecommendedWrapper>
            <RecommendedContainer>
              <Select>
                <option selected value="">
                  Recommended
                </option>
                <option value={10}>Price High to Low</option>
                <option value={20}>Price Low to High</option>
                <option value={30}>Alphabet A-Z</option>
                <option value="">Response Time (fastest to slowest)</option>
              </Select>
            </RecommendedContainer>
          </RecommendedWrapper>
          <ResultsGrid>
            {results.map((item, i) => (
              <Image
                key={i}
                price={item.price}
                image={item.image}
                title={item.title}
                name={item.name}
                tags={item.tags}
              />
            ))}
          </ResultsGrid>
        </ResultsContainer>
      </BodyRow>
    </BodyContainer>
  </BodyWrapper>
);

const BodyWrapper = styled.div`
  margin-top: 0;
  padding-top: 70px;
`;

const BodyContainer = styled.div.attrs({ className: "container" })`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const Title = styled.h3`
  margin-top: 0;
  font-weight: 700;
  font-size: 25px;
  margin-right: 10px;

  @media (max-width: 320px) {
    display: none;
  }
`;

const BodyRow = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  padding-bottom: 16px;
  margin-top: 24px;
  position: relative;
`;

const SearchWrapper = styled.div`
  margin-bottom: 15px;
  box-shadow: 0 1px 13px -4px hsla(0, 0%, 58%, 0.26);
  background-color: #fff;
  border: 1px solid hsla(0, 0%, 59.2%, 0.15);
  position: relative;
`;

const Input = styled(TextField)`
  width: 100%;
  input {
    &:focus {
      box-shadow: inset 0 -2px 0 #337ab7;
    }
    line-height: 1.3;
    font-size: 24px;
    width: 100%;
    height: 30px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    padding: 26px 0 26px 56px;
  }
`;
const SearchIconContainer = styled.div`
  position: absolute;
  left: 15px;
  top: 20px;
  height: 40px;
`;

const SearchIconItem = styled(SearchIcon)`
  height: 100%;
  color: #fa005c;
`;

const CategoryContainer = styled.div.attrs({
  className: "w-1/6 sm:w-1/6 md:w-2/6 lg:w-1/6 xl:w-1/6"
})`
  padding-bottom: 16px;
  margin-top: 13px;

  @media (max-width: 1024px) {
    display: flex;
    position: relative;
    padding-top: 12px;
    padding-bottom: 0;
    overflow-x: scroll;
    white-space: nowrap;
    border-radius: 4px;
    width: 100% !important;
  }
`;
const Select = styled.select`
  border: 0;
  border-radius: 0;
  appearance: none;
  width: 100%;
  height: 38px;
  padding: 6px 16px;
  box-shadow: inset 0 -1px 0 #ddd;
  font-size: 16px;
  line-height: 1.5;
  background: transparent;
`;
const ResultsContainer = styled.div.attrs({ className: "w-5/6" })`
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    width: 100% !important;
  }
`;

const RecommendedWrapper = styled.div`
  margin-bottom: 16px;
`;

const RecommendedContainer = styled.div.attrs({
  className: "w-1/3 ml-auto"
})`
  div {
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 100% !important;
  }

  position: relative;

  &:after {
    content: "";
    position: absolute;
    transform: translateY(-50%);
    top: 20px;
    right: 10px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid black;
  }
`;

const ResultsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Sepatator = styled.div`
  height: 1px;
  width: 90%;
  border-left: none;
  border-bottom: 1px solid #ececec;
  margin: 16px 0 24px 5%;
`;

const CategoryItem = ({ name, amount }) => (
  <CategoryLink href="#">
    <CategoryLinkName>{name}</CategoryLinkName>
    <CategoryLinkAmount>({amount})</CategoryLinkAmount>
  </CategoryLink>
);

const CategoryLink = styled.a`
  width: 100%;
  padding: 9px 18px;
  margin: 0 12px 7px 0;
  display: inline-block;
  transition: all 0.2s;

  &:nth-of-type(1) {
    background-color: #fa005c;

    span {
      color: #fff !important;
    }
  }

  &:active {
    background-color: #fa005c;
  }
  border-radius: 30px;
  box-sizing: border-box;
  color: #4d4d4d;
  background-color: #f7f7f7;

  &:hover {
    background-color: #ececec;
  }
`;

const CategoryLinkName = styled.span`
  color: #4d4d4d;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 3px;
`;

const CategoryLinkAmount = styled.span`
  color: #a1a1a1;
`;

const Item = styled(MenuItem)`
  display: block;
`;

const Image = ({ price, image, title, name, tags }) => (
  <GridImageWrapper>
    <GridImageContainer>
      <Price>{price}</Price>
      <ImageItem>
        <img src={image} alt="image" />
      </ImageItem>
      <ImageContent>
        <SmallTitle>{title}</SmallTitle>
        <Title>{name}</Title>
        <div className="flex">
          {tags.length > 0 &&
            tags.map((tag, i) => (
              <SmallTitle key={i} bottom>
                {tag}
              </SmallTitle>
            ))}
        </div>
      </ImageContent>
    </GridImageContainer>
  </GridImageWrapper>
);

const GridImageWrapper = styled.div.attrs({
  className: "lg:w-1/3 xl:w-1/4"
})`
  margin-bottom: 20px;
  min-height: 170px;
  max-height: 350px;
  padding-right: 5px !important;
  padding-left: 5px !important;
  min-width: 145px;

  @media (max-width: 1024px) {
    width: 33.333333% !important;
  }
  @media (max-width: 768px) {
    width: 50% !important;
  }

  @media (max-width: 320px) {
    /* width: 150px; */
    height: 220px;
  }
`;

const GridImageContainer = styled.div`
  box-shadow: 4px 4px 17px hsla(0, 0%, 85.9%, 0.5);
  position: relative;
  background-size: cover;
  background-color: #fff;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 5px;
  /* cursor: pointer; */
  height: 100%;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Price = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  padding: 1px 14px;
  position: absolute;
  right: 11px;
  top: 11px;

  @media (max-width: 992px) {
    font-size: 14px;
  }
`;

const ImageItem = styled.div`
  background: #eee;
  height: 70%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageContent = styled.div`
  height: 30%;
  width: 100%;
  padding: 10px 12px;
`;

const SmallTitle = styled.a`
  color: #6c6c6c;
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;

  &:after {
    font-size: 13px;
    content: "•";
    padding: 0 3px;
    display: ${props => (props.bottom ? "inline-block" : "none")};
  }

  &:hover {
    text-decoration: ${props => (props.bottom ? "underline" : null)};
  }
`;

const FlatAppBar = styled(AppBar)`
  box-shadow: none;
`;

const LogoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Logo = styled.img.attrs({ src: "/logo-cropped.png" })`
  max-height: 50px;
  margin: 0;
`;
