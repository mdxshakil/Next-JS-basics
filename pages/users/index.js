import Link from 'next/link';
import React from 'react';

const index = ({ users }) => {
    return (
        <div>
            <h2>This is users main page {users.length}</h2>
            {
                users.map((user, index) => <div key={user.id}>
                    <h4>Name: {user.name}
                    </h4>
                    <Link href={`/users/${user.id}`}><button>Details of {user.name}</button></Link>
                </div>)
            }
        </div>
    );
};

export default index;

//load data from api
export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { users: data }, // will be passed to the page component as props
    }
}