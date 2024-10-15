const apiBaseUri = "https://registration.gravital.hr";
// const apiBaseUri = 'http://localhost:8000';

window.onload = (event) => {
  const requestDemoForm = document.getElementById("requestDemoForm");
  const confirmRegistrationForm = document.getElementById("confirmRegistrationForm");
  const signupForm = document.getElementById("signupForm");

  if (requestDemoForm)
    requestDemoForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      e.stopPropagation();

      const form = e.currentTarget;
      const msgSuccess = form.querySelector(".alert-success");
      const msgFail = form.querySelector(".alert-danger");

      const response = await post(form, "/api/v1/subscriptions", {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
      });
      if (response?.ok) {
        msgSuccess.classList.remove("visually-hidden");
        msgFail.classList.add("visually-hidden");
        form.reset();
      } else {
        msgFail.classList.remove("visually-hidden");
        msgSuccess.classList.add("visually-hidden");
      }
    });

  if (confirmRegistrationForm)
    confirmRegistrationForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      e.stopPropagation();

      handleConfirmRegistration(e.currentTarget);
    });

  const handleConfirmRegistration = async (form) => {
    const input = form.querySelector("input");
    const formPane = document.getElementById("confirmRegistrationContainer");
    const confPane = document.getElementById("confirmedRegistrationContainer");

    const response = await post(form, "/api/v1/tenants/confirmation", {
      code: form.confirmation_code.value,
    });
    if (response?.ok) {
      input.classList.remove("is-invalid");
      formPane.classList.add("visually-hidden");
      confPane.classList.remove("visually-hidden");
      form.reset();
    } else {
      input.classList.add("is-invalid");
    }
  };

  if (signupForm)
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      e.stopPropagation();

      const recaptchaResponse = grecaptcha.getResponse();

      if (!recaptchaResponse) {
        return;
      }

      const form = e.currentTarget;
      const msgSuccess = form.querySelector(".alert-success");
      const msgFail = form.querySelector(".alert-danger");

      const response = await post(form, "/api/v1/tenants", {
        slug: `${window.slugify(form.company_name.value, {
          lower: true,
          strict: true,
          trim: true,
        })}-${Math.floor(Math.random() * 90 + 10)}`,
        tenantName: form.company_name.value,
        contactName: form.name.value,
        contactEmail: form.email.value,
        contactPosition: form.role.value,
        link: `${window.location.origin}/${form.lang.value}-confirm?code=`,
      });
      if (response?.ok) {
        msgSuccess.classList.remove("visually-hidden");
        msgFail.classList.add("visually-hidden");
        form.reset();
      } else {
        msgFail.classList.remove("visually-hidden");
        msgSuccess.classList.add("visually-hidden");
      }
    });

  if (confirmRegistrationForm) {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      confirmRegistrationForm.confirmation_code.value = code;
      handleConfirmRegistration(confirmRegistrationForm);
    }
  }

  const getCookie = (name) => document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() || "";

  const userSite = decodeURIComponent(getCookie("gravital_site"));
  const loginButton = document.getElementById("login-button");
  if (userSite) {
    loginButton.href = userSite;
    document.getElementById("sign-up-button").remove();
  } else {
    loginButton.remove();
  }
};

const post = async (form, api, data) => {
  console.log("calling", api, data);
  const button = form.querySelector("button");
  button?.setAttribute("disabled", "disabled");
  return fetch(`${apiBaseUri}${api}`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    // redirect: 'follow',
    credentials: "omit",
    referrerPolicy: "no-referrer",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .catch((e) => console.log("fetch error", e))
    .finally(() => {
      button?.removeAttribute("disabled");
    });
};
