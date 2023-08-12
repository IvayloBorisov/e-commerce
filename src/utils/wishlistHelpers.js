export const normalizeWishlistData = (wishlists) => {
    const normalizedData = {};

    for (const wishlist of wishlists) {
        const { userEmail, productImage, id } = wishlist;
        const imageDataObj = {wishlistID: id, imageURL: productImage}
        if (!normalizedData[userEmail]) {
            normalizedData[userEmail] = {
                userEmail,
                productImages: [imageDataObj]
            };
        } else {
            normalizedData[userEmail].productImages.push(imageDataObj);
        }
    }

    // Extract the values of the normalizedData object to get the desired array of objects
    const normalizedArray = Object.values(normalizedData);
    return normalizedArray;
}