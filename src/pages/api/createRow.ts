import {NextApiRequest, NextApiResponse} from 'next'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'


const doc = new GoogleSpreadsheet(process.env.SHEET_ID)

console.log()

const createCupom = () => {
    const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return `${code.substr(0, 4)}-${code.substr(4, 4)}-${code.substr(8, 4)}`
}

export default async (req: NextApiRequest,res: NextApiResponse) => {
    const {nome, email, whatsapp,nota, opniao, recomendacao} = JSON.parse(req.body)

    try{
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: process.env.SHEET_PRIVATE_KEY,
        })
        await doc.loadInfo()
        
        const sheet = doc.sheetsByIndex[1]
        
        const sheetPromotion = doc.sheetsByIndex[2]
        
        await sheetPromotion.loadCells('A3:B3')
        
        const textPromotion = sheetPromotion.getCell(2,1).value as string
        const activePromotion = sheetPromotion.getCell(2,0).value

        let promocao = ''
        let cupom = ''
        
        if(activePromotion === 'VERDADEIRO'){
            promocao = textPromotion
            cupom = createCupom()
        }

        const dataPreenchimento = moment().format('DD/MM/YYYY, HH:mm:ss')


        await sheet.addRow({
            Nome: nome,
            'E-mail': email,
            Whatsapp: whatsapp,
            'Opnião': opniao,
            Nota: nota,
            'Recomendação': recomendacao,
            Cupom: cupom,
            'Promoção': promocao,
            'Data preenchimento': dataPreenchimento

        })

            res.status(200).send(JSON.stringify({
                cupom: cupom,
                name: nome
            }))
    }catch(error) {
        console.log(error)
    }
}