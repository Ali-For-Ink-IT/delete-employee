async function getData() {
  const response = await axios.get("http://localhost:4004/serviceCatalog/User");
  console.log("response==>", response.data.value[0]);
}

getData();
