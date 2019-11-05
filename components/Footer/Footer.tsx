import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import AppleIcon from "@material-ui/icons/Apple";

import {
  Wrapper,
  Container,
  MailingListWrapper,
  SocialsWrapper,
  Title,
  Form,
  Input,
  EmailButton,
  EnrollButton,
  Copyright,
  FooterContainer
} from "./Styled";

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterContainer>
          <MailingListWrapper>
            <Title>Join our Mailing List</Title>
            <div>Subscribe for updates on new talent and features</div>
            <Form>
              <Input type="email" placeholder="email@email.com" />
              <EmailButton>
                <ArrowRightIcon />
              </EmailButton>
            </Form>
          </MailingListWrapper>
          <SocialsWrapper>
            <div>
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <InstagramIcon />
              </a>
              <a href="#">
                <TwitterIcon />
              </a>
              <a href="#">
                <EmailIcon />
              </a>
              <a href="#">
                <AppleIcon />
              </a>
            </div>
            <div>
              <EnrollButton>ENROLL AS TALENT</EnrollButton>
            </div>
            <div>
              <a href="#">Jobs</a>
              <a href="#">Faq</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Team</a>
              <a href="#">Merch</a>
              <a href="#">Accessibility</a>
              <a href="#">Press</a>
              <a href="#">Help</a>
            </div>
            <Copyright>© 2017-2019, Baron App, Inc. dba Cameo</Copyright>
          </SocialsWrapper>
        </FooterContainer>
      </Container>
    </Wrapper>
  );
};
