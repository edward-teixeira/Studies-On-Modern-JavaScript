/**
 * EzHTTP Library
 * Library for making HTTP requests
 * @version 2.0.0
 * @author Edward Teixeira
 * @license MIT
 */
class EzHTTP {
  //Make an HTTP get Request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
  //Make an HTTP post Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  //Make an HTTP PUT request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  delete(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: { "Content-type": "application/json" }
      })
        .then(res => res.json())
        .then(() => resolve("Resource Deleted"))
        .catch(err => reject(err));
    });
  }
}
