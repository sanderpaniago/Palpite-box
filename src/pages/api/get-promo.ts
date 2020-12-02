import { GoogleSpreadsheet } from 'google-spreadsheet'
import {NextApiRequest, NextApiResponse} from 'next'


const doc = new GoogleSpreadsheet(process.env.SHEET_ID)

const fromBase64 = (value: string) => {
    const buff = Buffer.from(value, 'base64')
    return buff.toString('ascii')
}

export default async (req: NextApiRequest,res: NextApiResponse) => {
    
    
    await doc.useServiceAccountAuth({
        client_email: process.env.SHEET_CLIENT_EMAIL,
        private_key: fromBase64(process.env.SHEET_PRIVATE_KEY),
    })
    await doc.loadInfo()
    
    const sheet = doc.sheetsByIndex[2]

    await sheet.loadCells('A3:B3')

    const activePromotion = sheet.getCell(2,0).value
    const textPromotion = sheet.getCell(2,1).value

    res.send(JSON.stringify({
        activePromotion: activePromotion === 'VERDADEIRO'
        , textPromotion}))
}