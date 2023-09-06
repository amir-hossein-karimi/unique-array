const uniqueArrayByKey = require(".");
const {
  mockMainData,
  filteredByPhone,
  filteredByName,
  filteredByLong,
} = require("./mock");

test("unique array by age", () => {
  expect(mockMainData).toHaveLength(3);
  expect(uniqueArrayByKey(mockMainData, "age")).toEqual(filteredByName);
  expect(uniqueArrayByKey(mockMainData, "age")).toHaveLength(2);
});

test("unique array by phone", () => {
  expect(uniqueArrayByKey(mockMainData, "data.phone")).toEqual(filteredByPhone);
});

test("unique array by long", () => {
  expect(uniqueArrayByKey(mockMainData, "data.location.long")).toEqual(
    filteredByLong
  );
});
