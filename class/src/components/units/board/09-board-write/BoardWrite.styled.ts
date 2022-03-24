import styled from '@emotion/styled'
import { ISubmitButtonProps } from './BoardWrite.types'

export const Submitbutton = styled.button`
    background-color: ${(props: ISubmitButtonProps) => props.isActive ?  "yellow" : "none"};
    
`
export const WriterInput =  styled.input`
    border-color: blanchedalmond;
    ;
`