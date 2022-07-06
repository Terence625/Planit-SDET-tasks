const axios = require("axios");

async function getCount() {
  const result = await axios({
    method: "GET",
    url: "https://petstore.swagger.io/v2/pet/findByStatus?status=available",
  });
  console.log(result.data.length);
}

getCount();
