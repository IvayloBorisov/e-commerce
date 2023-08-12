import Panel from "../components/Panel";
import { useFetchWishListProductsQuery } from "../store/api/wishlist";
import DataItem from "../components/DataItem";
import { Skeleton, Text } from "@chakra-ui/react";

const WishlistPage = () => {

    const { data, isFetching, isError } = useFetchWishListProductsQuery();
    console.log(data);
    let renderedWishlistProducts;
    if (isFetching) {
        renderedWishlistProducts = <Skeleton height='50px'  />
    } else if (isError) {
        renderedWishlistProducts = <Text>Ops something get wrong</Text>
    } else {
        renderedWishlistProducts = data.map(item => <DataItem key={item.userEmail} title={item.userEmail} images={item.productImages}  />);
    }

    return (
        <Panel subtitle='favorite products' >
            { renderedWishlistProducts }
        </Panel>
    )
}

export default WishlistPage;
