export class Match {
    constructor(homeTeam, awayTeam, outcome) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.outCome = outcome
    }

    getTeams() {
        return[ this.homeTeam, this.awayTeam];
    }

    getHomeTeam() {
        return this.homeTeam;
    }

    getAwayTeam() {
        return this.awayTeam;
    }

    getOutcome() {
        return this.outCome;
    }
}