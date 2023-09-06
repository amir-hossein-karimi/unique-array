const mockMainData = [
  {
    name: "amir",
    age: 20,
    data: {
      location: {
        lat: "1",
        long: "2",
      },
      phone: "1234",
    },
  },
  {
    name: "ali",
    age: 20,
    data: {
      location: {
        lat: "3",
        long: "4",
      },
      phone: "12345234234",
    },
  },
  {
    name: "mohammad",
    age: 32,
    data: {
      location: {
        lat: "12345234234",
        long: "2",
      },
      phone: "1234",
    },
  },
];

const filteredByName = [
  {
    name: "amir",
    age: 20,
    data: {
      location: {
        lat: "1",
        long: "2",
      },
      phone: "1234",
    },
  },
  {
    name: "mohammad",
    age: 32,
    data: {
      location: {
        lat: "12345234234",
        long: "2",
      },
      phone: "1234",
    },
  },
];

const filteredByPhone = [
  {
    name: "amir",
    age: 20,
    data: {
      location: {
        lat: "1",
        long: "2",
      },
      phone: "1234",
    },
  },
  {
    name: "ali",
    age: 20,
    data: {
      location: {
        lat: "3",
        long: "4",
      },
      phone: "12345234234",
    },
  },
];

const filteredByLong = [
  {
    name: "amir",
    age: 20,
    data: {
      location: {
        lat: "1",
        long: "2",
      },
      phone: "1234",
    },
  },
  {
    name: "ali",
    age: 20,
    data: {
      location: {
        lat: "3",
        long: "4",
      },
      phone: "12345234234",
    },
  },
];

module.exports = {
  mockMainData,
  filteredByName,
  filteredByPhone,
  filteredByLong,
};
