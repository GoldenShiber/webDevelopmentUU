import {Team} from "./Team.js";
import {Match} from "./Match.js";
const teamArray = ['1', '2'];

let matchList =[];

export function getMatchList() {
  let matchList =[];

  return fetch("https://stryk.herokuapp.com/strycket2021")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let index = 0; index < data.matches.length; index++) {
      var teams = data.matches[index].teams;
      var homeTeam = new Team(teams['1'].name, teams['1'].homepage);
      var awayTeam = new Team(teams['2'].name, teams['2'].homepage);
      matchList.push(new Match(homeTeam, awayTeam, data.matches[index].matchInfo.outcome));
    }
    return matchList;
  })
}
