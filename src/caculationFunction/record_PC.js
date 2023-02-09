export const dataSave = (text, state) => {
  console.log(state);
  sessionStorage.setItem(text, JSON.stringify(state));
  console.log('저장');
};

export const record36People_PC = ({ text }) => {
  const promise = new Promise((resolve, reject) => {
    let cutArray = text.split('\n');
    let result = [];
    let index = 0;

    while (index < cutArray.length) {
      if (
        cutArray[index] ===
        '순번 회전 회차 표적 성명 소속 기록 HIT(36발) 10 X-10'
      ) {
        index++;
        continue;
      }
      let dataLine = cutArray[index].split(' ');
      let name = `${dataLine[4]} ${dataLine[5]}`;

      result[name] = {
        name: dataLine[4],
        belong: dataLine[5],
        total: dataLine[6],
        hit: dataLine[7],
        ten: dataLine[8],
        xTen: dataLine[9],
      };

      index += 9;
    }

    resolve(result);
  });

  return promise;
};
