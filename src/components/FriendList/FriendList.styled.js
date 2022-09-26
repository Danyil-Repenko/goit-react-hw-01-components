import styled from "styled-components";

export const List = styled.ul`
display: inline-block;
list-style-type: none;
padding: 0;
margin: 0 0 20px 20px;`

export const ListEl = styled.li`
display: flex;
align-items: center;
width: 200px;
border: 1px solid gray;
border-radius: 5px;
margin-bottom: 10px;
padding: 5px 0;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

&:last-child {
    margin: 0;
}`

export const OnlineIndecator = styled.span`
width: 10px;
height: 10px;
border-radius: 100%;
margin: 0 5px;
background-color: ${props => props.online ? "green" : "red"};`

export const Name = styled.p`
margin: 0 0 0 5px;`