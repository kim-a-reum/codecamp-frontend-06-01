import { Modal} from 'antd';

export const ModalInfo= (props : any) => {
    Modal.info( {content: props.content})}

export const Modalsuccess = (props : any)=> {
Modal.success({content: props.content});}
  
export const ModalError = (props : any)=> {
    Modal.error({content: props.content});}
  
    export const ModalWarning = (props : any)=> {
        Modal.warning({content: props.content});}
  
        