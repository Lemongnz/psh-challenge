const data = {
  hackathons: [
    {
      id: 1,
      name: "Hackathon from the Future",
      date: "2022-01-01",
      location: "San Francisco",
      devsIds: [9, 2, 18, 20, 16, 11, 7, 14, 13, 5, 3, 6, 8, 15, 4],
    },
    {
      id: 2,
      name: "Hackathon BA",
      date: "2022-02-02",
      location: "Buenos Aires",
      devsIds: [10, 5, 8, 4, 13, 14, 1, 7, 16, 17, 19, 15, 11, 9, 2],
    },
    {
      id: 3,
      name: "Hackathon Hi!",
      date: "2022-03-03",
      location: "Paris",
      devsIds: [19, 13, 17, 14, 3, 8, 11, 2, 7, 20, 5, 10, 15, 9, 16],
    },
    {
      id: 4,
      name: "Hackathon iot",
      date: "2022-04-04",
      location: "Barcelona",
      devsIds: [5, 7, 4, 20, 9, 12, 13, 6, 14, 18, 19, 11, 2, 17, 10],
    },
    {
      id: 5,
      name: "Hackathon for the peace",
      date: "2022-05-05",
      location: "Japon",
      devsIds: [2, 11, 13, 5, 3, 10, 1, 20, 7, 18, 9, 12, 15, 19, 16],
    },
  ],
  devs: [
    {
      name: "Antonio",
      id: 1,
    },
    {
      name: "Carolina",
      id: 2,
    },
    {
      name: "Daniel",
      id: 3,
    },
    {
      name: "Juan",
      id: 4,
    },
    {
      name: "Pedro",
      id: 5,
    },
    {
      name: "Ricardo",
      id: 6,
    },
    {
      name: "Sara",
      id: 7,
    },
    {
      name: "Sofia",
      id: 8,
    },
    {
      name: "Tomas",
      id: 9,
    },
    {
      name: "Ana",
      id: 10,
    },
    {
      name: "Antonia",
      id: 11,
    },
    {
      name: "Carla",
      id: 12,
    },
    {
      name: "Daniela",
      id: 13,
    },
    {
      name: "Matias",
      id: 14,
    },
    {
      name: "Ramon",
      id: 15,
    },
    {
      name: "Leandro",
      id: 16,
    },
    {
      name: "Lucas",
      id: 17,
    },
    {
      name: "Lucia",
      id: 18,
    },
    {
      name: "Mariano",
      id: 19,
    },
    {
      name: "Federico",
      id: 20,
    },
  ],
};

export default class DBService {
  getDevs() {
    return JSON.parse(JSON.stringify(data.devs));
  }

  getHackathons() {
    return JSON.parse(JSON.stringify(data.hackathons));
  }
}
