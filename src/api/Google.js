import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from './credentials.json';

export const googleInit = () => {
  const initClient = async () => {
    const googleSheets = new GoogleSpreadsheet(
      '17nVqz6tt4GQUz6AiCFLsnpbrcu0FXylKgeZN2m2koao',
    );

    await googleSheets.useServiceAccountAuth(credentials);
    console.log(googleSheets);

    await googleSheets.loadInfo();
    const titles = Object.keys(googleSheets.sheetsByTitle);
    titles.sort(
      (a, b) =>
        googleSheets.sheetsByTitle[a].index -
        googleSheets.sheetsByTitle[b].index,
    );
    console.log(titles);
    titles.map((title) => {
      console.log(googleSheets.sheetsByTitle[title].getRows());
    });
  };
  initClient();
};
