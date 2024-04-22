import { CustomError } from "../models/customError";

export interface IListingData {
    title: string;
    listingType: string;
    description: string;
    price: number;
    phoneNumber: string;
    address: string;
    amenities: string[];
    image: string;
    location: string;
    userId?: string;
}

export interface IUpdateListingData {
    listId : string;
    title: string;
    listingType: string;
    description: string;
    price: number;
    phoneNumber: string;
    address: string;
    amenities: string[];
    image: string;
    location: string;
    userId?: string;
}




export function validateListingData(listingData: IListingData): void {
    const errors: string[] = [];
    // Validate accountName uniqueness and length
    if (!listingData.title) {
        errors.push(
            "Title is required"
        );
    }

    if (!listingData.listingType) {
        errors.push(
            "Listing type is required"
        );
    }
    if (!listingData.description) {
        errors.push(
            "Description is required"
        );
    }
    if (!listingData.price) {
        errors.push(
            "Price is required"
        );
    }
    if (!listingData.phoneNumber) {
        errors.push(
            "Phone number is required"
        );
    }
    if (!listingData.address) {
        errors.push(
            "Address is required"
        );
    }
    if (listingData.amenities.length > 0) {
        errors.push(
            "Amenities are required"
        );
    }

    if (errors.length > 0) {
        throw new CustomError(400, errors.join(", "));
    }
}