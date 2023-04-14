import Link from "next/link";

function Home(){
    return (
    <>
        <h1>Home page</h1>
        <Link href='/blog'>
            Blog
        </Link>
        <Link href='/product'>
            Products
        </Link>
    </>
    )
}

export default Home;