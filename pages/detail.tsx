import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { latest, recent } from "../utils/data";

import StarRateIcon from '@material-ui/icons/StarRate';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

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
    <GrayDiv>
    </GrayDiv>
    <BodyContainer>
      <BodyRow>        
        <ResultsContainer className="flex">
          <DetailLeft>
            {/* <video controls>
              <source src="https://d3el26csp1xekx.cloudfront.net/v/no-wm-WBFnBP_oO.mp4" type="video/mp4"/>
            </video> */}
            <img src="https://d31wcbk3iidrjq.cloudfront.net/cmiaTZ4jK-43CEAF55-F303-4CC8-BF1A-4773759549E2.png" alt="image" />
            <VolumnControl/>
          </DetailLeft>
          <DetailRight>
            <h1>
              TJ Lavin
            </h1>
            <h2>
              TV Host - MTV's The Challenge - BMX Rider
            </h2>
            <span>
              Good times only please unless we’re gonna smash someone as a joke! ❤️
            </span>
            <ButtonLine>
              <button className="book btn w-1/3">Book now for $100</button>
              <button className="follow btn w-1/3">Follow</button>
            </ButtonLine>
            <FlashIcon/>
            <span className="book-comment">TYPICALLY RESPONDS IN 3 HOURS.</span>

            <div className="ratings flex">
              <div className="w-1/4">
                  <h2>491 Reviews</h2>
                  <div className="stars">
                      <RateStar/>                      
                      <RateStar/>                      
                      <RateStar/>                      
                      <RateStar/>                      
                      <RateStar/>       
                      <span className="rate-score">5 Stars</span>                                     
                  </div>
                  <a className="link-all" href="#">See all reviews</a>
              </div>
              <div className="w-3/4 rate-comment">
                "Was awesome, just perfect, thank you, TJ! Much appreciated. -JG"
              </div>
            </div>

            <div className="tags">
              <a className="tag">TV Hosts</a>
              <a className="tag">Reality TV</a>
              <a className="tag">Featured</a>
              <a className="tag">Extreme Sports</a>
              <a className="tag">MTV</a>
              <a className="tag">The Challenge</a>
              <a className="tag">BMX</a>
            </div>
          </DetailRight>
        </ResultsContainer>
      </BodyRow>
      <MediumTitle>
          Latest
      </MediumTitle>
      <BodyRow>        
        <ResultsContainer>
          <ResultsGrid>
            {latest.map((item, i) => (
              <Image4Latest
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
      <HR/>
      <MediumTitle>
          Related
      </MediumTitle>
      <BodyRow>        
        <ResultsContainer>
          <ResultsGrid>
            {recent.map((item, i) => (
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

const RateStar = styled(StarRateIcon)`
  color: #ffc200;
  font-weight: bold;
  margin: -3px;
`;

const FlashIcon = styled(FlashOnIcon)`
  color: gold!important;
  font-weight: bold;
  margin: -3px;
`;

const BodyContainer = styled.div.attrs({ className: "container" })`
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 39px;
  margin-right: auto;
  margin-left: auto;
`;

const Title = styled.h3`
  margin-top: 0;
  font-weight: 700;
  font-size: 20px;
  margin-right: 10px;
  color:#4d4d4d;

  @media (max-width: 320px) {
    display: none;
  }
`;

const IntroTitle = styled.h3`
  margin-top: 0;
  margin-right: 10px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;

  @media (max-width: 320px) {
    display: none;
  }
`;

const IntroMark = styled.div`
  border-color: rgb(0, 242, 229);
  background-color: rgb(0, 242, 229);
  align-items: center;
  border-radius: 50%;
  background-size: cover;
  display: flex;
  height: 36px;
  justify-content: center;
  margin-right: 4px;
  width: 36px;
  
  font-weight: 700;
  font-size: 24px;
  padding-bottom: 2px;
  text-transform: uppercase;
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

const ResultsContainer = styled.div.attrs({ className: "w-5/6" })`
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    width: 100% !important;
  }
`;

const DetailLeft = styled.div.attrs({ className: "w-1/3" })`
  margin-left: auto;
  margin-right: auto;
  
  video, img {
    border-radius: 12px;
    height: 450px;
    width: 285px;    
  }
`;

const DetailRight = styled.div.attrs({ className: "w-2/3" })`
  margin-left: auto;
  margin-right: auto;
  
  h1 {
    color: #4d4d4d;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    vertical-align: middle;
    font-weight: 700;
    font-size: 36px;
  }
  h2 {
    font-size: 22px;
    font-weight: 600;
    color: #4d4d4d;
  }
  span {
    font-size: 18px;
  }  
  span.rate-score {
    padding-left: 10px;
    font-size: 16px;
    color: #4d4d4d;
    font-weight: 700;
  }
  div a.tag {
    padding: 9px 18px;
    margin: 0 12px 7px 0;
    border-radius: 30px;
    box-sizing: border-box;
    display: inline-block;
    background-color: #f7f7f7;
    line-height: normal;
    color: #4d4d4d;
    text-decoration: inherit!important;
    cursor:pointer;
  }
  div.tags, div.ratings {
    padding: 20px 0;
  }
  div.rate-comment {
    padding-left:25px;
    padding-top: 10px;
    font-style: italic;
    font-size:18px;
  }
  a.link-all {
    color: #337ab7;
    text-decoration: none;
    font-size: 18px;
    cursor:pointer;
  }
  span.book-comment {
    font-size:14px;    
  }
  div.stars {
    padding: 8px 0;
  }
`;

const ButtonLine = styled.div.attrs({ className: "flex" })`
    padding:20px;
    padding-left:0;
    button.book {
      color:white;
      min-width: 205px;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: none;
      margin-right: 1.5rem;
      background-color: #fa005c!important;
    }
    button.follow {
      background-color: transparent;
      text-transform: capitalize;
      border: 2px solid #131631;
      color: #131631;
      box-shadow: none;
      vertical-align: top;
      padding: 4px 24px;      
    }
    button.btn {
      height:39px;
      background: transparent;
      border: none;
      box-shadow: 1px 1px 4px rgba(0,0,0,.4);
      transition: all .4s;
      font-size: 18px;
      font-weight: 600;
    }
    
`;

const Image = ({ price, image, title, name, tags }) => (
  <GridImageWrapper>
    <GridImageContainer>
      <Price>{price}</Price>
      <ImageItem>
        <img src={image} alt="image" />
      </ImageItem>
      <ImageContent>
        {/* <SmallTitle>{title}</SmallTitle>         */}
        <div className="flex">
          {tags.length > 0 &&
            tags.map((tag, i) => (
              <SmallTitle key={i} bottom>
                {tag}
              </SmallTitle>
            ))}
        </div>
        <Title>{name}</Title>
      </ImageContent>
    </GridImageContainer>
  </GridImageWrapper>
);

const Image4Latest = ({ price, image, title, name, tags }) => (
  <GridImageWrapper4Latest>
    <GridImageContainer4Latest>
      <Intro className="flex">
        <IntroLeft>
          <IntroMark>A</IntroMark>
        </IntroLeft>
        <IntroRight>
          <IntroTitle>{name}</IntroTitle>        
          <SmallTitle>{title}</SmallTitle>        
        </IntroRight>
      </Intro>
      <ImageItem4Latest>
          {/* <video controls>
            <source src="https://d3el26csp1xekx.cloudfront.net/v/no-wm-WBFnBP_oO.mp4" type="video/mp4"/>
          </video> */}
          <img src={image} alt="image" />
          <Control/>
      </ImageItem4Latest>      
    </GridImageContainer4Latest>
  </GridImageWrapper4Latest>
);

const Control = ({ }) => (
  <ControlButton className="flex">
      <div className="lg:w-4/6 xl:w-4/6">
        <PlayControl/>
        <div className="ctrl-play">0:49</div>
      </div>
      <div className="lg:w-1/6 xl:w-1/6">
        <FavoriteControl/>
        <div className="ctrl-val">11</div>
      </div>
      <div className="lg:w-1/6 xl:w-1/6">
        <ChatControl/>  
        <div className="ctrl-val">15</div>
      </div>      
  </ControlButton>
);

const ControlButton = styled.div`  
  position:absolute;
  top:366px;
  color:white;
  width:100%;  
  padding:0 20px;
  div div.ctrl-val {
    padding-left:5px;
  }
  div div.ctrl-play {
    padding-left:20px;
  }
`;

const PlayControl = styled(PlayArrowIcon)`
  font-weight: bold;
  width:60px !important;
  height:60px !important;
  cursor:pointer;
  &:hover {
    transform: scale(1.5);
  }
`;

const FavoriteControl = styled(FavoriteIcon)`
  font-weight: bold;
  width:24px !important;
  height:24px !important;
  margin-top: 22px;
  cursor:pointer;
  &:hover {
    transform: scale(1.3);
  }
`;

const ChatControl = styled(ChatBubbleIcon)`
  font-weight: bold;
  width:24px !important;
  height:24px !important;
  margin-top: 22px;
  cursor:pointer;
  &:hover {
    transform: scale(1.3);
  }
`;

const VolumnControl = styled(VolumeUpIcon)`
    font-weight: bold;
    width: 36px !important;
    height: 36px !important;
    position: absolute;
    top: 540px;
    color: white;
    margin-left: 36px;
    cursor:pointer;
`;

const IntroLeft = styled.div.attrs({
  className: "lg:w-1/3 xl:w-1/4"
})`  
`;

const IntroRight = styled.div.attrs({
  className: "lg:w-2/3 xl:w-3/4"
})`  
`;

const GridImageWrapper = styled.div.attrs({
  className: "lg:w-1/3 xl:w-1/4"
})`
  margin-bottom: 20px;
  min-height: 170px;
  max-height: 350px;
  padding-right: 5px !important;
  padding-left: 5px !important;
  min-width: 145px;
  cursor:pointer;

  @media (max-width: 1024px) {
    width: 33.333333% !important;
  }
  @media (max-width: 768px) {
    width: 50% !important;
  }
  @media (max-width: 320px) {
    height: 220px;
  }
`;

const GridImageWrapper4Latest = styled.div.attrs({
  className: "lg:w-1/3 xl:w-1/3"
})`
  margin-bottom: 20px;
  min-height: 200px;
  max-height: 504px;
  padding-right: 20px !important;
  padding-left: 20px !important;
  min-width: 145px;

  @media (max-width: 1024px) {
    width: 33.333333% !important;
  }
  @media (max-width: 768px) {
    width: 50% !important;
  }

  @media (max-width: 320px) {
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
  height: 100%;

  &:hover {
    transform: translateY(-3px);
  }
`;

const GridImageContainer4Latest = styled.div`
  border-radius: 24px!important;
  box-shadow: 0 2px 32px 0 rgba(0,0,0,.15)!important;
  position: relative;
  background-size: cover;
  background-color: #fff;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
  height: 80%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageContent = styled.div`
  height: 20%;
  width: 100%;
  padding: 10px 12px;
`;

const ImageItem4Latest = styled.div`
  background: white;
  height: 85%;
  width: 100%;

  video, img {
    width:100%;
    height: 390px;
    object-fit: cover;
    border-top-right-radius: 29px;
  }
`;
const Intro = styled.div`
  height: 15%;
  width: 100%;
  padding: 10px 15px;
  margin-top: 20px;
`;

const HR = styled.hr`
  margin: 24px 108px 24px;
  border: 0;
  border-top: 1px solid #eee;
`;

const MediumTitle = styled.h3`
  font-size:25px;
  font-weight:700;
  color:#4d4d4d;
  margin: 24px 108px 24px;
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
    content: " ";
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

const ResultsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GrayDiv = styled.div`
  background: hsla(0,0%,82.7%,.2);
  height:252px;
  width:100%;
  position: absolute;
  z-index: -1;
`;