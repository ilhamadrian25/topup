import axios from 'axios';
import Card from '../../components/layouts/Card'
import React, { useEffect, useState } from 'react'
import { Games } from '../../utils/fakeApi';
const Product = () => {
    // const [data, setData] = useState([])
    const fetchData = async () => {
        try {
            await axios({
                method: 'get',
                url: import.meta.env.VITE_API_HOST + '/product/',
                // params: {
                //     id: params.slug
                // }
            })
                .then(function (response) {
                    // setData(response.data)
                });
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div className="grid py-3 s1:grid-cols-3 s2:grid-cols-3 s3:grid-cols-4 s4:grid-cols-5 s5:grid-cols-6 s6:grid-cols-7 gap-3">
                {Games.map(d => {
                    return (
                        <Card
                            key={d.id}
                            image={d.image}
                            path={import.meta.env.VITE_PATH_ASSETS}
                            target={d?.slug}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Product