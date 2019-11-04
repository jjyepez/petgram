import styled from 'styled-components'
import { slideIn } from '../../styles/animations'

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    overflow: scroll;
    width: 100%;
    &.fixed {
        ${slideIn()}
        transform: translate3d(0,-100px, 0) scale(.5);
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        z-index: 1;
    }
`

export const Item = styled.li`
    padding: 0 8px;
`
