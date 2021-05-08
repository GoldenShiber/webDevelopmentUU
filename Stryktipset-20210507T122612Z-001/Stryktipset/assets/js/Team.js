export class Team {
    constructor(name, website) {
        this.name = name;
        this.website = website;
    }

    getName() {
        return this.name;
    }

    getWebsite() {
        return this.website;
    }
}