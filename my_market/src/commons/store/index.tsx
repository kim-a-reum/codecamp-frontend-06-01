import { atom } from "recoil";

export const accessTokenState = atom({
    key:"accessTokenState",
    default:""
})

export const userInfoState = atom({
    key:"userInfoState",
    default:{
        email:"",
        name:""
    }
})

export const basketItemsState = atom({
    key:"basketItemsState",
    default:[{
        name: "",
        contents: "",
        price: "",
        
    }]
})

export const todayItemState = atom({
    key:"todayItemsState",
    default:[{
        name: "",
        contents: "",
        price: "",
        
    }]
})


export const MapaddressState = atom({
    key:"mapAddressState",
    default:""
})