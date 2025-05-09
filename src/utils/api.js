export class ApiForClothingItems {
  constructor(options) {
    // constructor body

    this._options = options;
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    // if the server returns an error, reject the promise
    return Promise.reject(`Error: ${response.status}`);
  }

  getItems() {
    return fetch(`${this._options.baseUrl}`)
      .then((res) => {
        return this._checkResponse(res);
      })
      .then((res) => {
        // console.log(res);
        return res;
      });
  }
  postItem(name, weather, link) {
    return fetch(`${this._options.baseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Send the data in the body as a JSON string.
      body: JSON.stringify({
        name,
        weather,
        link,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  deleteItem(id) {
    return fetch(`${this._options.baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}
