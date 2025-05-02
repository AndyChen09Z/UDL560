function toggleAccordion(id) {
  const section = document.getElementById(id);
  if (section) {
    section.classList.toggle('hidden');
  }
}
