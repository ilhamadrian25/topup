import CryptoJS from 'crypto-js';
import axios from 'axios';

export const getBalance = async (req, res) => {
  try {
    const username = "fasevuoe79PW";
    const apiKey = "dev-3bab89e0-6f6f-11ee-86e3-cdf8a3d525e8";
    const ref_id = "depo";

    // Menggabungkan string "username + apiKey + ref_id"
    const dataToHash = username + apiKey + ref_id;

    // Menghasilkan hash MD5 dari data
    const hash = CryptoJS.MD5(dataToHash);

    // Konversi hash ke string heksadesimal
    const hashString = hash.toString(CryptoJS.enc.Hex);

    const response = await axios.post('https://api.digiflazz.com/v1/cek-saldo', {
        cmd: "deposit",
        username: "fasevuoe79PW",
        sign: "433fffc1256cee4cd265259330142904"
      })
console.log(response.data);
// const data = JSON.parse(response)
      return res.status(200).json(response.data)


  } catch (error) {
    return res.status(500).json({ message: "error server" });
  }
};
