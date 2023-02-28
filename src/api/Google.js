import credentials from './credentials.json';
import { useScript } from './useScript';

const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

export const GoogleInit = () => {
  const [loading1] = useScript('https://apis.google.com/js/api.js');
  const [loading2] = useScript('https://accounts.google.com/gsi/client');

  const promise = new Promise((resolve, reject) => {
    const initClient = async () => {
      await window.gapi.client
        .init({
          apiKey: credentials.API_KEY,
          discoveryDocs: [
            'https://sheets.googleapis.com/$discovery/rest?version=v4',
          ],
        })
        .then(() => {
          console.log('성공');
          resolve(true);
        })
        .catch(() => {
          console.log('실패');
          reject(false);
        });
    };
    if (loading1 && loading2) {
      window.google.accounts.oauth2.initTokenClient({
        client_id: credentials.client_id,
        scope: SCOPE,
      });
      window.gapi.load('client:auth2', initClient);
    }
  });
  return promise;
};

export const getSheetsTitle = () => {
  const promise = new Promise((resolve, reject) => {
    var params = {
      spreadsheetId: '17nVqz6tt4GQUz6AiCFLsnpbrcu0FXylKgeZN2m2koao',
    };

    window.gapi.client.sheets.spreadsheets.get(params).then((res) => {
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

    window.gapi.client.sheets.spreadsheets.values.get(params).then((res) => {
      resolve(res.result.values);
    }).catch = (e) => {
      reject('error: ' + e.result.error.message);
    };
  });

  return promise;
};
