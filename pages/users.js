function users({users}) {
    return (
        <div>
            <h1>List of users</h1>
            {users.map(user => {
                return (<div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>-----------------</p>
                </div>)
            })}
        </div>
    );
}

export default users;
export async function getStaticProps(){
    const responce = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await responce.json();
    console.log(data)
    return {
        props: {
            users: data,
        },
    }
}