export class Match {
    Match(homeTeam, awayTeam) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
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
}