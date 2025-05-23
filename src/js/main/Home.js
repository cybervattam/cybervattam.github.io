class Home {
  constructor() {
    if (sessionStorage.auth) {
      window.location.href = "books/cryptography";
    }

    const host = window.location.protocol + "//" + window.location.host;

    if (document.querySelector("#userName")) {
      document.querySelector("#userName").focus();
      this.registerEvents();
    } else {
      document.querySelector(".fa-google").parentElement.href =
        `/oauth2/authorize/google?redirect_uri=${host}/oauth2/redirect`;
    }

    // fetch("/api/info")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     document.querySelector(
    //       ".app-info"
    //     ).innerHTML = `<br><b class="text-primary">v${data.appVersion}</b> runs on Java <b class="text-success">${data.javaVersion}</b>`;
    //     console.log(data);
    //   });
  }

  registerEvents() {
    document
      .querySelector("form")
      .addEventListener("submit", (e) => this.login(e));
  }

  login(event) {
    event.preventDefault();
    let authRequest = {
      userName: document.querySelector("#userName").value,
      password: document.querySelector("#password").value,
    };
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(authRequest),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        sessionStorage.auth = JSON.stringify(data);
        window.location.href = "books/cryptography";
      })
      .catch((err) => {
        document.querySelector(".invisible").classList.remove("invisible");
        console.error(err);
      });
  }
}

export default Home;
