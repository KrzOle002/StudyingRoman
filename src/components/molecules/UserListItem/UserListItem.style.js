import styled from 'styled-components';

export const Wraper = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    &:not(:last-child)::after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: lightgrey;
    }
`;

export const StyledAverage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50px;
    background-color: ${({ theme, checkAverage }) => {
        if (checkAverage > 4) return theme.colors.success;
        if (checkAverage > 3) return theme.colors.warning;
        else return theme.colors.error;
    }};
color: ${({ theme }) => theme.colors.white};
font-size: ${({ theme }) => theme.fontSize.m};
`;

export const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 20px;
    color: ${({ theme }) => theme.colors.grey};
    p{
        margin: 0;
        color: ${({ theme }) => theme.colors.darkGrey};
    }
    p:first-child {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: ${({ theme }) => theme.fontSize.l};
    }
    p:last-child {
        font-size: ${({ theme }) => theme.fontSize.m};
    }  
    
`;