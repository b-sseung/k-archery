export const dataSave = (text, state) => {
  localStorage.setItem(text, JSON.stringify(state));
};

export const addRecordData = ({ text, games }) => {
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

      result.push({
        name: dataLine[4],
        belong: dataLine[5],
        total: dataLine[6],
        hit: dataLine[7],
        ten: dataLine[8],
        xTen: dataLine[9],
      });

      index += games === 'record36' ? 9 : 8;
    }

    resolve(result);
  });

  return promise;
};

export const setPeopleMap = (data, peoples) => {
  data.forEach((element) => {
    element.text.forEach((value) => {
      let { name, belong, total, hit, ten, xTen } = value;

      let key = `${name} ${belong}`;
      if (!peoples.has(key)) {
        peoples.set(key, new People({ name: name, belong: belong }));
      }

      let people = peoples.get(key);
      people.addGame({
        total: parseInt(total),
        hit: parseInt(hit),
        ten: parseInt(ten),
        xTen: parseInt(xTen),
      });
    });
  });
};

export const setPreRank = (data, peoples) => {
  data.forEach((value) => {
    let [name, belong, rank] = value;
    let key = `${name} ${belong}`;

    if (!peoples.has(key)) {
      alert('해당 선수에 대한 기록이 없습니다.');
    }

    let people = peoples.get(key);
    people.setPreRank(rank);
  });
};

export const getRanking = (peoples, limit) => {
  const arrayPeoples = Array.from(peoples);

  arrayPeoples.sort((people1, people2) => {
    const p1 = people1[1];
    const p2 = people2[1];

    if (p1.sumTotal - p2.sumTotal !== 0) {
      return p2.sumTotal - p1.sumTotal;
    } else {
      if (p1.ten - p2.ten !== 0) {
        return p2.ten - p1.ten;
      } else {
        if (p1.xTen - p2.xTen !== 0) {
          return p2.xTen - p1.xTen;
        } else {
          for (let i = p1.total.length - 1; i >= 0; i--) {
            if (p1.total[i] - p2.total[i] !== 0) {
              return p2.total[i] - p1.total[i];
            }
          }
          return p2.preRank - p1.preRank;
        }
      }
    }
  });

  arrayPeoples.forEach((people, index) => {
    people[1].setRank(index, limit);
  });

  return arrayPeoples;
};

function People({ name, belong }) {
  this.name = name;
  this.belong = belong;
  this.total = [];
  this.sumTotal = 0;
  this.hit = 0;
  this.ten = 0;
  this.xTen = 0;
  this.ave = 0;
  this.preRank = -1;
  this.rank = -1;
  this.points = 0;

  this.addGame = ({ total, hit, ten, xTen }) => {
    this.total.push(total);
    this.sumTotal += total;
    this.hit += hit;
    this.ten += ten;
    this.xTen += xTen;
    this.ave = Math.round((this.sumTotal / this.hit) * 3 * 100.0) / 100.0;
  };

  this.setPreRank = (rank) => {
    this.preRank = rank;
  };

  this.setRank = (index, limit) => {
    this.rank = index + 1;
    this.points = index < limit ? limit - index : 0;
  };
}
