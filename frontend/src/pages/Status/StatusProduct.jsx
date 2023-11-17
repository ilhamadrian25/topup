import React from 'react'

const StatusProduct = () => {
    return (
        <>
            <div className='h-screen flex flex-col gap-4 py-48 mx-4 s3:mx-14 s4:mx-28 s5:mx-48 s6:mx-64'>
                <div>
                    <h2>Lacak pesanan</h2>
                </div>
                <div>
                    <h2 className='font-bold break-normal'>Lacak pesanan kamu hanya dengan nomor telepon</h2>
                </div>
                <div>
                    <form>
                        <div className="flex">
                            <div className="relative w-full">
                                <input type="search" id="search-dropdown" className="block p-2.5 w-full h-14 z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  rounded-xl" placeholder="Masukan nomor handphone..." required />
                                <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full w-28 text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                    <span>Cari...</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <span className='text-sm break-normal'>
                        Pesanan kamu tidak terdaftar meskipun kamu yakin sudah memesan? harap tunggu 1-2 jam namun jika pesanan masih tidak muncul maka kamu dapat menghubungi kami. Whatsapp
                    </span>
                </div>
            </div>
        </>
    )
}

export default StatusProduct