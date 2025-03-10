//! EXPORT
//-  Variables from this file, can be used in other files, with the keyword "export"

export const DISCOUNT = 5; 

export function calculatePrice(salesPrice: number) {
    return salesPrice - (salesPrice * DISCOUNT) / 100;
};

export const anotherVariable = "Lorem Ipsum...";

export const automaticVar = "i was added after the import *. so i´m available right away";