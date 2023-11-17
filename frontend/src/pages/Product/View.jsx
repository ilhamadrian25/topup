import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Input from '../../components/inputs/Input'
import Disclosuree from '../../components/layouts/Disclosure'
import MyModal from '../../components/dialog/modal'
import RadioGroups from './Payment'
import Nominal from './Nominal'

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

    // const handleSubmit = useCallback(() => {
    //     console.log('click');
    // })
    
    const handleSubmit = () => {
        <MyModal />
    }

    const handleClick = useCallback((state) => {
        console.log(state.target.style.backgroundColor = 'blue');
    }, [])
    return (
        <>
            <div className="py-20 mx-2 s4:mx-32 flex flex-col gap-3 pb-5 s6:mx-56">
                <div className="relative">
                    <img className='h-60 s3:h-64  w-full rounded-lg' src={"data:image/jpeg;base64,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"} alt="" srcSet="" />
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
                                <div className="py-auto my-auto">
                                    <Nominal />
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
                                    <Disclosuree Label={'Qris'} Value={<RadioGroups />} />
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