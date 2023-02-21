import styled from "styled-components";
import { ViewWrapper } from "./../../molecules/ViewWrapper/ViewWrapper.js";

export const NewsWrapper = styled.div`
  grid-row: 1/3;
  grid-column: 3/3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
  overflow-y: scroll;
`;

export const NewsSectionHeader = styled.h2`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 30px 0;
  border-radius: 8px;
  width: 100%;
  max-width: unset;
  color: ${({ theme }) => theme.colors.darkGrey};
  p {
    line-height: 1.6;
  }
`;

export const TitleWrapper = styled.div`
  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  img {
    max-width: 250px;
    object-fit: contain;
    margin-left: 35px;
  }
`;
