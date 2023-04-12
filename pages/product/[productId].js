import { useRouter } from "next/router";
function ProductDetail() {
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <div>
           <h2>Product Details {productId}</h2> 
        </div>
    );
}
export default ProductDetail;