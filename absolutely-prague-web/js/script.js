(function () {
  const header = document.getElementById("site-header");
  const nav = document.getElementById("main-nav");
  const navToggle = document.querySelector(".nav-toggle");
  const dropdowns = document.querySelectorAll(".dropdown");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  dropdowns.forEach(function (dropdown) {
    const trigger = dropdown.querySelector(".dropdown-toggle");
    if (!trigger) {
      return;
    }

    trigger.addEventListener("click", function () {
      const isOpen = dropdown.classList.toggle("open");
      trigger.setAttribute("aria-expanded", String(isOpen));
    });
  });

  document.addEventListener("click", function (event) {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    const clickedInsideNav = nav && nav.contains(target);
    const clickedToggle = navToggle && navToggle.contains(target);

    if (nav && nav.classList.contains("open") && !clickedInsideNav && !clickedToggle) {
      nav.classList.remove("open");
      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "false");
      }
    }

    dropdowns.forEach(function (dropdown) {
      const isInside = dropdown.contains(target);
      if (!isInside) {
        dropdown.classList.remove("open");
        const trigger = dropdown.querySelector(".dropdown-toggle");
        if (trigger) {
          trigger.setAttribute("aria-expanded", "false");
        }
      }
    });
  });

  function setHeaderState() {
    if (!header) {
      return;
    }
    if (window.scrollY > 16) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealItems.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.15,
      }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("in-view");
    });
  }

  const yearNodes = document.querySelectorAll("#year");
  yearNodes.forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });
})();
