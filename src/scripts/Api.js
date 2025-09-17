class Api {
  constructor(options) {
    // constructor body
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "8c72e74b-5b4c-4a2a-8690-b5f6b335b44d",
      },
    }).then((res) => res.json());
  }

  // other methods for working with the API
}

export default Api;
