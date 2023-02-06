// PRICING
const labelInput = document.querySelector(".options__toggle--label");
const yearly = document.querySelector("#yearly");
const monthly = document.querySelector("#monthly");
const planElements = document.querySelectorAll(".options__toggle--plan");
const priceElements = document.querySelectorAll(".option__price");
const options = document.querySelectorAll(".option");
const optionsContainer = document.querySelector(".options__cards");
let plan = "monthly";

const changePrices = function (plan) {
  if (plan === "yearly") {
    priceElements.forEach((el) => {
      const price = el.firstChild.textContent;
      const newPrice = +el.firstChild.textContent.slice(1) * 10;

      el.firstChild.textContent = `$${newPrice.toFixed(2)}`;
    });
  } else {
    priceElements.forEach((el) => {
      const price = el.firstChild.textContent;
      const newPrice = +el.firstChild.textContent.slice(1) / 10;

      el.firstChild.textContent = `$${newPrice.toFixed(2)}`;
    });
  }
};

const switchPlan = function () {
  if (plan === "monthly") {
    plan = "yearly";

    changePrices(plan);
  } else {
    plan = "monthly";

    changePrices(plan);
  }

  const targetEl = document.querySelector(`#${plan}`);
  planElements.forEach((el) =>
    el.classList.remove("options__toggle--plan-active")
  );
  targetEl.classList.add("options__toggle--plan-active");
};

const selectOption = function (e) {
  const option = e.target.closest(".option");

  if (!option) return;

  options.forEach((opt) => opt.classList.remove("option__active"));
  option.classList.add("option__active");
};

labelInput.addEventListener("click", switchPlan);
optionsContainer.addEventListener("click", selectOption);
