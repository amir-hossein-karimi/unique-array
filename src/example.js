const uniqueArrayByKey = require(".");
const { mockMainData } = require("./mock");

console.log({
  realData: mockMainData,
  uniqueData: uniqueArrayByKey(mockMainData, "data.location.long"),
});
