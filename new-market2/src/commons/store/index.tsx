import { AsyncResource } from "async_hooks";
import { atom, selector } from "recoil";
import { getAccessToken } from "../../components/commons/libraries/getAccessToken";

export const accessTokenState = atom({
    key:"accessTokenState",
    default:""
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

export const restoreAccessTokenLoadable = selector({
    key: "restoreAccessTokenLoadable",
    get: async ()=> {
        const newAccessToken = await getAccessToken();
        return newAccessToken
    },
    
})

export const todayItemsState = atom({
    key: "todayItems",
    default: []

})
export const isLoadedState = atom({
    key: "isLoadedState",
    default: true,
  });
  