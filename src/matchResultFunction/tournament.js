// 			//조별 순위 정렬
// 			Collections.sort(entryList, new Comparator<Entry<String, People>>() {

// 				@Override
// 				public int compare(Entry<String, People> o1, Entry<String, People> o2) {
// 					People p1 = o1.getValue();
// 					People p2 = o2.getValue();

// 					if (p1.rankScore < p2.rankScore) {
// 						return 1;
// 					} else if (p1.rankScore == p2.rankScore) {
// 						if (p1.ave < p2.ave) {
// 							return 1;
// 						} else if (p1.ave == p2.ave) {
// 							//변경해야 함.
// 							return p1.matchRank - p2.matchRank;
// 						} else {
// 							return -1;
// 						}
// 					} else {
// 						return -1;
// 					}
// 				}
// 			});

// 			int position3 = 1;
// 			for (Entry<String, People> entry : entryList) {
// 				entry.getValue().setTeamRank(position3);

// 				HashMap<String, People> temp = list2.getOrDefault(position3, new HashMap<>());
// 				temp.put(entry.getKey(), entry.getValue());
// 				list2.put(position3, temp);

// 				position3++;
// 			}

// 		}

// 		List<Integer> list2Keys = new ArrayList<>(list2.keySet());
// 		Collections.sort(list2Keys);

// 		for(int key : list2Keys) {
// 			HashMap<String, People> map = list2.get(key);
// 			List<Entry<String, People>> entryList = new ArrayList<>(map.entrySet());

// 			Collections.sort(entryList, new Comparator<Entry<String, People>>() {
// 				@Override
// 				public int compare(Entry<String, People> o1, Entry<String, People> o2) {
// 					People p1 = o1.getValue();
// 					People p2 = o2.getValue();

// 					if (p1.ave < p2.ave) {
// 						return 1;
// 					} else if (p1.ave == p2.ave) {
// 						return p1.prerank - p2.prerank;
// 					} else {
// 						return -1;
// 					}
// 				}

// 			});

// 			int position4 = 1;
// 			for (Entry<String, People> entry : entryList) {
// 				entry.getValue().setRank(people * (key - 1) + position4);

// 				bw.write(entry.getValue().toString() + "\n");
// 				position4++;
// 			}

// 		}

// 		bw.flush();
// 		bw.close();

// 	}

export const addTournamentMatchesDataPC = ({ text, games }) => {
  const promise = new Promise((resolve, reject) => {
    let cutArray = text.split('\n');
    let result = [];
    let index = 0;

    while (index < cutArray.length) {
      if (
        cutArray[index] ===
        '회전 회차 매치 조 성명 소속 대진번호 표적 승패 승패 표적 대진번호 소속 성명'
      ) {
        index++;
        continue;
      }

      let dataLine = cutArray[index].split(' ');

      let shootingSet = 5;

      for (let count = 1; count <= 5; count++) {
        let temp = cutArray[index + count + 1].split('\t');
        if (temp[1] === '') {
          shootingSet = count - 1;
          break;
        }
      }

      let leftLastLine = cutArray[index + shootingSet + 1].split('\t');
      let rightLastLine = cutArray[index + shootingSet + 11].split('\t');

      let left = {
        team: dataLine[3],
        name: dataLine[4],
        belong: dataLine[5],
        shoot: shootingSet,
        total: leftLastLine[leftLastLine.length - 3],
        result: dataLine[8],
      };
      let right = {
        team: dataLine[3],
        name: dataLine[13],
        belong: dataLine[12],
        shoot: shootingSet,
        total: rightLastLine[rightLastLine.length - 3],
        result: dataLine[9],
      };

      result.push(left, right);

      index += 18;
    }

    resolve(result);
  });

  return promise;
};

export const setPeopleMap = (data, peoples) => {
  data.forEach((element) => {
    element.text.forEach((value) => {
      let { team, name, belong, shoot, total, result } = value;

      let key = `${name} ${belong}`;
      if (!peoples.has(key)) {
        peoples.set(
          key,
          new People({ team: team, name: name, belong: belong }),
        );
      }

      let people = peoples.get(key);
      people.addGame({
        score: parseInt(total),
        shoot: parseInt(shoot),
        result: result,
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

export const setMatchRanking = (peoples, groups) => {
  Object.keys(groups).forEach((key) => {
    const group = groups[key];
    group.sort((people1, people2) => {
      const result1 = people1['winOrLose'];
      const result2 = people2['winOrLose'];

      if (result1[0] === 'W' && result2[0] === 'L') {
        return -1;
      } else if (result1[0] === 'L' && result2[0] === 'W') {
        return 1;
      } else {
        if (result1[1] === 'W' && result2[1] === 'L') {
          return -1;
        } else if (result1[1] === 'L' && result2[1] === 'W') {
          return 1;
        } else {
          if (result1[2] === 'W' && result2[2] === 'L') {
            return -1;
          } else {
            return 1;
          }
        }
      }
    });

    group.forEach((data, index) => {
      const { name, belong } = data;
      let people = peoples.get(`${name} ${belong}`);
      people.setMatchRank(index + 1);
    });
  });
};

export const setGroupAverRank = (peoples, groups) => {
  Object.keys(groups).forEach((key) => {
    const group = groups[key];
    group.sort((people1, people2) => {
      const average1 = people1.ave;
      const average2 = people2.ave;

      if (average1 < average2) {
        return 1;
      } else if (average1 === average2) {
        return people1.matchRank - people2.matchRank;
      } else {
        return -1;
      }
    });

    group.forEach((data, index) => {
      const { name, belong } = data;
      let people = peoples.get(`${name} ${belong}`);
      people.setGameAveRank(index + 1);
    });
  });
};

export const setGroupRanking = (peoples, groups) => {
  Object.keys(groups).forEach((key) => {
    const group = groups[key];
    group.sort((people1, people2) => {
      if (people1.sumPoint !== people2.sumPoint) {
        return people2.sumPoint - people1.sumPoint;
      } else if (people1.sumPoint === people2.sumPoint) {
        if (people1.ave !== people2.ave) {
          return people2.ave - people1.ave;
        } else if (people1.ave === people2.ave) {
          return people1.matchRank - people2.matchRank;
        }
      }
    });

    group.forEach((data, index) => {
      const { name, belong } = data;
      let people = peoples.get(`${name} ${belong}`);
      people.setTeamRank(index + 1);
    });
  });
};

export const getRanking = (peoples, limit) => {
  const arrayPeoples = Array.from(peoples);

  arrayPeoples.sort((data1, data2) => {
    const people1 = data1[1];
    const people2 = data2[1];

    if (people1.teamRank - people2.teamRank !== 0) {
      return people1.teamRank - people2.teamRank;
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

function People({ team, name, belong }) {
  this.team = team;
  this.name = name;
  this.belong = belong;
  this.sumTotal = 0;
  this.shoot = 0;
  this.ave = 0;
  this.winOrLose = [];

  this.preRank = -1;
  this.matchRank = -1;
  this.matchPoint = -1;
  this.gameAveRank = -1;
  this.gameAvePoint = -1;
  this.sumPoint = 0;
  this.teamRank = -1;
  this.rank = -1;
  this.points = 0;

  this.addGame = ({ score, shoot, result }) => {
    this.sumTotal += score;
    this.shoot += shoot;
    this.ave = this.sumTotal / this.shoot;
    this.winOrLose.push(result);
  };

  this.setPreRank = (rank) => {
    this.preRank = rank;
  };

  this.setMatchRank = (rank) => {
    this.matchRank = rank;
    this.matchPoint = 8 - 1 * (rank - 1);
    this.sumPoint += this.matchPoint;
  };

  this.setGameAveRank = (rank) => {
    this.gameAveRank = rank;
    this.gameAvePoint = 4 - 0.5 * (rank - 1);
    this.sumPoint += this.gameAvePoint;
  };

  this.setTeamRank = (rank) => {
    this.teamRank = rank;
  };

  this.setRank = (index, limit) => {
    this.rank = index + 1;
    this.points = index < limit ? limit - index : 0;
  };
}
