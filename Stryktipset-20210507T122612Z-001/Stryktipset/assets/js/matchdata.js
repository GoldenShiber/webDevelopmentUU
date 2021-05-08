import {Team} from "./Team.js";
import {Match} from "./Match.js";
const teamArray = ['1', '2'];

let matchList =[];

export function getMatchData() {
  //fetch("https://stryk.herokuapp.com/strycket2021")
  return fetch("https://stryk.herokuapp.com/strycket2021")
  //return fetch("https://quotes.rest/qod")
    .then((response) => {
      return response.json();
  })
    .then((data) => {
      console.dir(data.matches[0].teams['1']);
      return data.matches[0].teams['1'].name;
      //return data.contents.quotes[0].quote + ' -' + data.contents.quotes[0].author;
  });
}

export function getMatchList() {
  let matchList =[];

  return fetch("https://stryk.herokuapp.com/strycket2021")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let index = 0; index < data.matches.length; index++) {
      var match = data.matches[index].teams;
      var homeTeam = new Team(match['1'].name, match['1'].homepage);
      var awayTeam = new Team(match['2'].name, match['2'].homepage);
      matchList.push(new Match(homeTeam, awayTeam));
    }
    return matchList;
  })
}
