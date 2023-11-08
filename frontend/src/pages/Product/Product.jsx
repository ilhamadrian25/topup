import axios from 'axios';
import Card from '../../components/layouts/Card'
import React, { useEffect, useState } from 'react'

const Product = () => {
    const [data, setData] = useState([])
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
                    setData(response.data)
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

            <div className="grid hp:grid-cols-2 3xl:grid-cols-6 gap-3 mt-2">
                {data.map(d => {
                    return (
                        <Card
                            key={d.id}
                            path={import.meta.env.VITE_PATH_ASSETS}
                            target={d.slug}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Product