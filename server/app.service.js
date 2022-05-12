import DBService from "./db.service.js";

export default class AppService {
  constructor() {
    this.dbService = new DBService();
    this.initHackathons();
    this.initTopUsers();
  }

  sortByPoints(a, b) {
    return a.points > b.points ? -1 : 1;
  }

  initHackathons() {
    this.hackathons = this.dbService.getHackathons().map((hackathon) => {
      const devs = hackathon.devsIds
        .sort(this.sortByPoints)
        .map((id, index) => {
          const { name } = this.dbService
            .getDevs()
            .find((dev) => dev.id === id);

          const points = 10 - index;

          return {
            id,
            name,
            points: points < 0 ? 0 : points,
          };
        });

      hackathon.devs = devs;

      delete hackathon.devsIds;

      return hackathon;
    });
  }

  initTopUsers() {
    const hackathonsAux = JSON.parse(JSON.stringify(this.hackathons));

    const topUsers = hackathonsAux.reduce((acc, { devs }) => {
      devs.forEach((dev) => {
        const indexIfExist = acc.findIndex((devAcc) => devAcc.id === dev.id);

        if (indexIfExist > -1) {
          acc[indexIfExist].points += dev.points;
        } else {
          acc.push(dev);
        }
      });

      return acc;
    }, []);

    this.topUsers = topUsers.sort(this.sortByPoints);
  }

  getHackathons() {
    return this.hackathons;
  }

  getTopUsers(limit) {
    return this.topUsers.slice(0, limit);
  }
}
