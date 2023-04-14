import Link from "next/link";
import { useRouter } from "next/router";

function Home(){
    const router = useRouter();

    const handleClick = () => {
        router.push('/product')

        // router.replace('/product')
    }
    return (
    <>
        <h1>Home page</h1>
        <Link href='/blog'>
            Blog
        </Link>
        <Link href='/product'>
            Products
        </Link>
        <button onClick={handleClick}>
            Place an order
        </button>
    </>
    )
}

export default Home;