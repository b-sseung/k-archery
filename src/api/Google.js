import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from './credentials.json';

export const googleInit = () => {
  const initClient = async () => {
    const googleSheets = new GoogleSpreadsheet(
      '17nVqz6tt4GQUz6AiCFLsnpbrcu0FXylKgeZN2m2koao',
    );

    await googleSheets.useServiceAccountAuth({
      client_email: credentials.client_email,
      private_key: credentials.private_key,
    });

    await googleSheets.loadInfo();
    console.log(googleSheets);
  };
  initClient();
};
