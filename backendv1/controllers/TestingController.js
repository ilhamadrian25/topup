import CryptoJS from 'crypto-js'
export const testing = async (req, res) => {
    try {
        // Data yang akan di-hash
        const username = "fasevuoe79PW";
        const apiKey = "dev-3bab89e0-6f6f-11ee-86e3-cdf8a3d525e8";
        const ref_id = "depo";

        // Menggabungkan string "username + apiKey + ref_id"
        const dataToHash = username + apiKey + ref_id;

        // Menghasilkan hash MD5 dari data
        const hash = CryptoJS.MD5(dataToHash);

        // Konversi hash ke string heksadesimal
        const hashString = hash.toString(CryptoJS.enc.Hex);

        console.log("Hasil hash MD5:", hashString);
        return res.status(200).json(hashString)
    } catch (error) {
        return res.status(500).json({ message: 'error server' })
    }
}