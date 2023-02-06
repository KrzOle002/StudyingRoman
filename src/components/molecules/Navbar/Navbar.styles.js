import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 140px;
  background-color: #242830;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  
  z-index: 1;


  .active  {
    color: #666666;
    cursor: pointer;
  }


  a {
    color: white;
    text-decoration: none;
  }

  a:hover{
    color: #666666;
  }
`;


export const NavSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 50px;

  svg {
    width: 50px;
    height: 50px;
    margin: 20px;

    &:hover {
      background-color: #daebea;
      color: #242830;
      cursor: pointer;
      border-radius: 14px;
    }
  }
`;

export const SettingsSection = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  svg {
    width: 50px;
    height: 50px;
    margin: 20px;

    &:hover {
      background-color: #daebea;
      color: #242830;
      cursor: pointer;
      border-radius: 14px;
    }
  }
`;
