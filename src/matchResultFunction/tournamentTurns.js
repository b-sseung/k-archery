export const setPeopleMap = (data, peoples) => {
  data.forEach((element) => {
    element.text.forEach((value) => {
      let { name, belong, sumTotal, shoot, ave, points } = value;

      let key = `${name} ${belong}`;
      if (!peoples.has(key)) {
        peoples.set(key, new People({ name: name, belong: belong }));
      }

      let people = peoples.get(key);
      people.addGame({
        score: parseInt(sumTotal),
        shoot: parseInt(shoot),
        ave: parseFloat(ave),
        point: parseInt(points),
      });
    });
  });
};

export const setPreRank = (data, peoples) => {
  data.forEach((value) => {
    let [name, belong, rank] = value;
    if (name === '이름') return;

    let key = `${name} ${belong}`;

    if (!peoples.has(key)) {
      console.log(key);
      alert('해당 선수에 대한 기록이 없습니다.');
    }

    let people = peoples.get(key);
    people.setPreRank(rank);
  });
};

export const getRanking = (peoples, limit) => {
  const arrayPeoples = Array.from(peoples);

  arrayPeoples.sort((data1, data2) => {
    const people1 = data1[1];
    const people2 = data2[1];

    if (people1.points - people2.points !== 0) {
      return people1.points - people2.points;
    } else {
      if (people1.ave - people2.ave !== 0) {
        return people2.ave - people1.ave;
      } else {
        return people1.preRank - people2.preRank;
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
  this.sumTotal = 0;
  this.shoot = 0;
  this.ave = 0;

  this.preRank = -1;
  this.rank = -1;
  this.points = 0;

  this.addGame = ({ score, shoot, ave, point }) => {
    this.sumTotal += score;
    this.shoot += shoot;
    this.ave += ave;
    this.points += point;
  };

  this.setPreRank = (rank) => {
    this.preRank = rank;
  };

  this.setRank = (index, limit) => {
    this.rank = index + 1;
    this.points = index < limit ? limit - index : 0;
  };
}
