// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

export async function get(url: string) {
  const response = await window.fetch(url);
  return await response.json();
}

export async function post(url: string, body = {}, method: string = "POST") {
  const options = {
    method: method,
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(body)
  };

  window.fetch(url, options).then(response => response.json());
  const response = await window.fetch(url, options);
  return await response.json();
}
