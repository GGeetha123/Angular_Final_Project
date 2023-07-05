export interface product{
    id: number,
    name:string ,
    productcategoryid:number,
    mrp: number,
    price:number,
    reviewscount:number,
    averagerating:number,
    images:string[],
    colours:string[],
    storage:string[],
    features:string[],
    tags:string[],     
    description: string,
    availableqty: number    
}

export interface banner{
    id:number,
    title:string,
    tag:string,
    image:string,
    price:number,
    mrp:number
}

export interface productCategory{
    id:number,
    name:string;
}

export interface colorsList{
    id:number,
    name:string;
}

export interface imagesList{
    id:number,
    name:string;
}
export interface storageList{
    id:number,
    name:string;
}
export interface featuresList{
    id:number,
    name:string;
}