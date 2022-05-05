

export interface IMyVariables {
    updateUseditemInput?: ImyupdateUseditemInput;
    useditemId: string
  }
  export interface ImyupdateUseditemInput {
    name?: string,
    remarks?: string,
    contents?: string,
    price?: number,
    tags?: string,
    useditemAddress?: {
        zipcode?: string,
        address?: string,
        addressDetail?: string,
        lat?: number,
        lng?: number
    },
    images?: string[]
  }
  