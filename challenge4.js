const resturants = {
  "Grill'd": {
    burger: "$18",
    chip: "$10",
  },
  KFC: {
    chicken: "$3",
    chip: "$8",
  },
};

function getReceipt(food) {
  let receiptArr = [];
  let receipts = "";
  Object.entries(resturants).forEach(([key, value]) => {
    if (food in value) {
      let receipt = key + ", " + food + ", " + value[food];
      receiptArr.push(receipt);
    }
  });
  receiptArr.forEach((receipt, index) => {
    if (index !== 0) receipts += "; ";
    receipts += receipt;
  });
  return receipts;
}

console.log(getReceipt("chicken"))
