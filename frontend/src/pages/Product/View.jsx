import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Input from '../../components/inputs/Input'
import Disclosuree from '../../components/layouts/Disclosure'
import MyModal from '../../components/dialog/modal'

const View = () => {
    const params = useParams()
    // const [data, setData] = useState([])
    // console.log(data);
    // const fetchData = async () => {
    //     try {
    //         await axios({
    //             method: 'get',
    //             url: import.meta.env.VITE_API_HOST + '/product/' + params.slug,
    //             // params: {
    //             //     id: params.slug
    //             // }
    //         })
    //             .then(function (response) {
    //                 setData(response.data)
    //             });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(() => {
    //     fetchData()
    // }, [])
    // if (!data) {
    //     throw new Response("error");
    // }

    const [open, setOpen] = useState(false)
    let [plan, setPlan] = useState('startup')

    const handleOnChange = useCallback(() => {
        setOpen(!open)
    }, [open])

    const handleSubmit = useCallback(() => {
        console.log('click');
        return <MyModal/>
    })

    const handleClick = useCallback((state) => {
        console.log(state.target.style.backgroundColor = 'blue');
    }, [])
    return (
        <>
            <div className=" py-20 mx-2 flex flex-col gap-3 pb-5 s6:mx-56">
                <div className="relative">
                    <img className='h-60 w-full rounded-lg' src={"https://api.duniagames.co.id/api/content/upload/file/17961226881617693078.jpg"} alt="" srcSet="" />
                </div>
                <div className='grid s6:grid-cols-3 gap-3'>
                    <div className='bg-white s6:h-72 s6:col-span-1 rounded-lg'>
                        <div className="flex mx-5 gap-2">
                            <div className='z-10'>
                                <img className='h-32 rounded-xl -mt-6' src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/donkey/021DBA3E-D762-4B09-BF0F-D65890F92D92-f8b10-original-6ccb-original.jpeg" alt="" srcSet="" />
                            </div>
                            <div className='flex flex-col'>
                                <div>
                                    <span className='font-bold'>Mobile Legends</span>
                                </div>
                                <div>
                                    <span className='text-xs'>Moonton</span>
                                </div>
                            </div>
                        </div>
                        <div className='mx-5 py-2 text-xs break-all flex flex-col'>
                            <span>
                                TOP UP DIAMOND MOBILE LEGEND
                            </span>
                            <span>
                                Proses cepat 3 detik setelah pembayaran
                            </span>
                            <span>
                                Open 24 hours
                            </span>
                            <span>
                                Cara order :
                            </span>
                            <span>
                                1 . Masukkan ID + (server)
                            </span>

                            <span>
                                2. Pilih nominal diamond
                            </span>

                            <span>
                                3. Pilih metode pembayaran
                            </span>

                            <span>
                                4. Masukkan nomor Whatsapp dengan benar!
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col s6:col-span-2 gap-3'>
                        <div className='bg-white rounded-lg flex'>
                            <div className="mx-5 flex flex-col gap-4 pb-5">
                                <div className="flex gap-2 mt-5">
                                    <div className='bg-blue-600 h-8 w-8 rounded rounded-b-full'>
                                        <div className="flex justify-items-center justify-center">
                                            <span className='font-bold'>
                                                1
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className='font-bold'>
                                            Masukkan Player ID
                                        </span>
                                    </div>
                                </div>
                                <div className='text-xs flex gap-2'>
                                    <div className='w-full'>
                                        <Input />
                                    </div>
                                    <div className='w-full'>
                                        <Input />
                                    </div>
                                </div>
                                <div className='text-xs'>
                                    <span>
                                        Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri atas pada menu utama game. User ID akan terlihat dibagian bawah Nama Karakter Game Anda. Silakan masukkan User ID Anda untuk menyelesaikan transaksi. Contoh : 12345678(1234).
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white pb-4 rounded-lg">
                            <div className="flex flex-col gap-2 mx-5 mt-5">
                                <div className="flex flex-row gap-2">
                                    <div className='bg-blue-600 h-8 w-8 rounded rounded-b-full'>
                                        <div className="flex justify-items-center justify-center">
                                            <span className='font-bold'>
                                                2
                                            </span>
                                        </div>
                                    </div>
                                    <div className='font-bold'>
                                        Pilih Nominal Top Up
                                    </div>
                                </div>
                                <div className="py-auto my-auto grid grid-cols-2 gap-3">
                                    <div className='bg-blue-600 h-24 rounded-lg'>
                                        <span className=''>
                                            topup
                                        </span>
                                    </div>
                                    <div className='bg-blue-600 h-24 rounded-lg'>
                                        <span className=''>
                                            topup
                                        </span>
                                    </div>
                                    <div className='bg-blue-600 h-24 rounded-lg'>
                                        <span className=''>
                                            topup
                                        </span>
                                    </div>
                                    <div className='bg-blue-600 h-24 rounded-lg'>
                                        <span className=''>
                                            topup
                                        </span>
                                    </div>
                                    <div className='bg-blue-600 h-24 rounded-lg'>
                                        <span className=''>
                                            topup
                                        </span>
                                    </div>
                                    <div className='bg-blue-600 h-24 rounded-lg'>
                                        <span className=''>
                                            topup
                                        </span>
                                    </div>
                                    <div className='bg-blue-600 h-24 rounded-lg'>
                                        <span className=''>
                                            topup
                                        </span>
                                    </div>
                                    <div className='bg-blue-600 h-24 rounded-lg'>
                                        <span className=''>
                                            topup
                                        </span>
                                    </div>
                                    <div className='bg-blue-600 h-24 rounded-lg'>
                                        <span className=''>
                                            topup
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white pb-4 rounded-lg'>
                            <div className="flex  flex-col gap-2 mx-5 mt-5">
                                <div className="flex flex-row gap-2">
                                    <div className='bg-blue-600 h-8 w-8 rounded rounded-b-full'>
                                        <div className="flex justify-items-center justify-center">
                                            <span className='font-bold'>
                                                3
                                            </span>
                                        </div>
                                    </div>
                                    <div className='font-bold'>
                                        Pilih pembayaran
                                    </div>
                                </div>
                                <div className="py-auto my-auto">
                                    <Disclosuree/>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white pb-4 rounded-lg'>
                            <div className="flex  flex-col gap-4 mx-5 mt-5">
                                <div className="flex flex-row gap-2">
                                    <div className='bg-blue-600 h-8 w-8 rounded rounded-b-full'>
                                        <div className="flex justify-items-center justify-center">
                                            <span className='font-bold'>
                                                4
                                            </span>
                                        </div>
                                    </div>
                                    <div className='font-bold'>
                                        Beli!
                                    </div>
                                </div>
                                <div className="py-auto my-auto">
                                    <Input />
                                </div>
                                <div>
                                    <span className='text-xs'>
                                        Bukti pembelianmu akan kami kirimkan ke WhatsApp. Pastikan nomor handphone yang di input aktif
                                    </span>
                                </div>
                                <div>
                                    <button type="submit" onClick={handleSubmit} className='bg-blue-400 px-10 py-2 rounded-lg hover:bg-blue-900 hover:text-white'>
                                        Beli..
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View