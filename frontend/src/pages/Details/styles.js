import styled from 'styled-components';

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  background-color: #ebe9d7;

  box-sizing: border-box;
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  p {
    margin: 10 auto 10 auto;
    max-width: 700px;
  }

  ul {
    margin-top: 30px;
    margin-right: auto;
    margin-left: 19.5%;

    li {
      margin-bottom: 10px;
    }
  }
`;
