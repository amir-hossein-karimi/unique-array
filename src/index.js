const uniqueArrayByKey = (array, key) => {
  const uniqueArr = [];
  const uniqueKeys = [];

  array.forEach((element) => {
    if (key.includes(".")) {
      const lvls = key.split(".");
      let lastValue = { ...element };
      [...lvls, ""]?.forEach((lvl) => {
        if (typeof lastValue === "object") {
          lastValue = lastValue[lvl];
        } else if (!uniqueKeys.includes(lastValue)) {
          uniqueKeys.push(lastValue);
          uniqueArr.push(element);
        }
      });
    } else if (!uniqueKeys.includes(element[key])) {
      uniqueKeys.push(element[key]);
      uniqueArr.push(element);
    }
  });

  return uniqueArr;
};

module.exports = uniqueArrayByKey;
