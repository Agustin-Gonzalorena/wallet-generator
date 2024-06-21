export function scroll({ id }) {
  if (id === "home") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    const element = document.getElementById(id); // Replace "elementId" with a valid element ID
    const offset = -100; // Ajusta este valor según sea necesario

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
