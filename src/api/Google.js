import { gapi } from 'gapi-script';
import credentials from './credentials.json';

export const googleInit = () => {
  const promise = new Promise((resolve, reject) => {
    const initClient = async () => {
      var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
      await gapi.client
        .init({
          apiKey: credentials.API_KEY,
          clientId: credentials.CLIENT_ID,
          scope: SCOPE,
          discoveryDocs: [
            'https://sheets.googleapis.com/$discovery/rest?version=v4',
          ],
        })
        .then(() => {
          resolve(true);
        })
        .catch(() => {
          reject(false);
        });
    };
    gapi.load('client:auth2', initClient);
  });

  return promise;
};

export const getSheetsTitle = () => {
  const promise = new Promise((resolve, reject) => {
    var params = {
      spreadsheetId: '17nVqz6tt4GQUz6AiCFLsnpbrcu0FXylKgeZN2m2koao',
    };

    gapi.client.sheets.spreadsheets.get(params).then((res) => {
      let titles = [];

      for (let sheet of res.result.sheets) {
        titles.push(sheet.properties.title);
      }
      resolve(titles);
    }).catch = (e) => {
      reject('error: ' + e.result.error.message);
    };
  });

  return promise;
};

export const getSheetData = (title) => {
  const promise = new Promise((resolve, reject) => {
    var params = {
      spreadsheetId: '17nVqz6tt4GQUz6AiCFLsnpbrcu0FXylKgeZN2m2koao',
      range: title,
    };

    gapi.client.sheets.spreadsheets.values.get(params).then((res) => {
      resolve(res.result.values);
    }).catch = (e) => {
      reject('error: ' + e.result.error.message);
    };
  });

  return promise;
};
