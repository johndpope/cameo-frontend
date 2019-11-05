import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 60px;
  background-color: #f7f7f7;
  width: 100%;
`;

export const Container = styled.div.attrs({ className: "container" })`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;

  padding-right: 125px;
  padding-left: 125px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MailingListWrapper = styled.div.attrs({ className: "w-1/2" })`
  margin-bottom: 16px;
  div {
    font-size:18px;
  }
`;

export const SocialsWrapper = styled.div.attrs({ className: "w-1/2" })`
  margin-bottom: 16px;

  div {
    a {
      margin-right: 10px;
      font-size:18px;
    }
  }
`;

export const Title = styled.h3`
  font-size: 25px;
  font-weight: 700;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 5px;
  width: 80%;
  transition: opacity 0.5s ease-in-out;
`;

export const Input = styled.input`
  box-shadow: none;
  background-color: #fafafa;
  border: 1px solid #bbb;
  color: #131315;
  padding-left: 15px;
  width: 100%;
`;

export const EmailButton = styled.button`
  color: #131315;
  background-color: #e5e5e5;
  width: 50px;
  border: none;
`;

export const EnrollButton = styled.a`
  background: #f7f7f7;
  border: 1px solid #131315;
  border-radius: 3px;
  color: #131315;
  margin: 8px 0;
  padding: 8px;
  display: inline-block;
  cursor:pointer;
  font-size:18px;
  &:hover {
    background: black;
    color:white;
  }
`;

export const Copyright = styled.div`
  font-size: 12px;
  color: #373737;
  margin-top: 16px;
`;
