class EzHTTP {
  async get(url) {
    return await fetch(url)
      .then(data => {
        return data.json();
      })
      .catch(err => console.log(err));
  }

  async post(url, data) {
    return await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" }, //O tipo do corpo da solicitação é indicado pelo cabeçalho
      body: JSON.stringify(data)
    })
      .then(data => {
        return data.json();
      })
      .catch(err => console.log(err));
  }

  async delete(url) {
    return await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then("The item was deleted")
      .catch(error => console.log(error));
  }

  async put(url, data) {
    return await fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      })
      .catch();
  }
}
