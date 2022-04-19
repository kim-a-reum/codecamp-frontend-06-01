import { Modal} from 'antd';

export const ModalInfo= (props : any) => {
    Modal.info( {content: props.content})}

export const Modalsuccess = (props : any)=> {
Modal.success({content: props.content});}
  
export const ModalError = (props : any)=> {
    Modal.error({content: props.content});}
  
export const ModalWarning = (props : any)=> {
        Modal.warning({content: props.content});}
  
export const getDate = (date) => {
        const newdate = new Date(date)
        const yyyy = newdate.getFullYear()
        const mm = newdate.getMonth() + 1
        const dd = newdate.getDate()
return `${yyyy}-${mm}-${dd}`
        }       