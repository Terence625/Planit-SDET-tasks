function fetchData() {
  let request = new XMLHttpRequest();
  request.addEventListener("load", () => console.log(this.reponseText));
  request.open(
    "GET",
    "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
  );
  request.send();
}

fetchData();
