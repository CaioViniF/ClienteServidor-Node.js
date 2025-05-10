// cliente.js
const API_URL = 'http://localhost:3000/api';

async function fetchData() {
  // GET
  const getResponse = await fetch(API_URL);
  console.log("GET:", await getResponse.json());

  // POST
  const postResponse = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: "hello" })
  });
  console.log("POST:", await postResponse.json());
}

fetchData();