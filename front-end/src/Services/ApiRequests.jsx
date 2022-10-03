const ENDPOINT = `http://localhost:3001/people`;

// Função utilizada para exercer o método GET no nosso servidor

export async function handleFetchGET() {

  try {
    const fetchApi = await fetch(ENDPOINT);

    const response = await fetchApi.json();

    return response;
  } catch (e) {
    const error = e.message;

    return error
  };
};

// Função utilizada para exercer o método POST no nosso servidor

export async function handleFetchPOST(requestData) {

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(requestData),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  };

  try {
    const response = await fetch(ENDPOINT, requestOptions);

    return response.json();
  } catch (e) {
    const error = e.message;

    return error;
  }
};