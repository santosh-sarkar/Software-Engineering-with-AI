document.querySelectorAll("[data-dd]").forEach(function (dd) {
  var trigger = dd.querySelector(".dd-trigger");
  var placeholder = dd.querySelector(".dd-placeholder");
  var options = dd.querySelectorAll(".dd-panel li button");

  trigger.addEventListener("click", function (e) {
    e.stopPropagation();
    var isOpen = dd.classList.toggle("open");
    trigger.setAttribute("aria-expanded", isOpen);
  });

  options.forEach(function (opt) {
    opt.addEventListener("click", function () {
      options.forEach(function (b) { b.classList.remove("selected"); });
      opt.classList.add("selected");
      placeholder.textContent = opt.getAttribute("data-value");
      placeholder.classList.add("has-value");
      dd.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
    });
  });
});

document.addEventListener("click", function (e) {
  if (e.target.closest(".dd")) return;
  document.querySelectorAll(".dd.open").forEach(function (dd) {
    dd.classList.remove("open");
    dd.querySelector(".dd-trigger").setAttribute("aria-expanded", "false");
  });
});
