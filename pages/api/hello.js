import util from 'util'
import Cors from 'cors'
const cors = Cors({ methods: ['GET', 'HEAD'] })
const corsMiddleware = util.promisify(cors)
async function handler(req, res) {
    await corsMiddleware(req, res)
    res.json({ message: 'Hello Everyone' })
}
export default handler


// export default function handler(req, res) {
//     if(JSON.stringify(req.query).includes("<")) {
//         res.status(200).json({text: "Nah bruv."})   
//     } else {
//         res.status(200).json({urlParams: req.query})
//     }
// }