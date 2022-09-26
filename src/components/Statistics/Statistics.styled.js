import styled from "styled-components";

export const Section = styled.section`
width: 400px;
background-color: white;
border: 1px solid gray;
border-radius: 5px;
padding-top: 20px;
margin: 0 0 20px 20px`

export const Title = styled.h2`
text-align: center;
font-size: 24px;
margin: 0 0 20px 0;
text-transform: uppercase;`

export const StatisticList = styled.ul`
display: flex;
align-items: center;
justify-content: center;
padding: 0;
margin: 20px 0 0 0;
width: 100%;
list-style-type: none;
`

export const ListEl = styled.li`
flex-grow: 1;
padding: 10px 0;
text-align: center;
background-color: #${props => props.backgroundColor};`

export const Label = styled.span`
display: block;
text-align: center;
font-size: 14px;
color: white;
`

export const Percentage = styled.span`
display:block;
text-align: center;
font-size: 18px;
color: white;
`