document.addEventListener('DOMContentLoaded', () =>
{
  const elementArray = selector => Array.apply(null, document.querySelectorAll(selector));
  const sectionHeaders = elementArray('#case-study h2').reverse();
  const sidebarLinks = elementArray('.sidebar ul li a');

  const setActive = (id) =>
  {
    const newActive = document.querySelector("[href='#" + id + "']");
    if (newActive.className === 'active') { return }

    sidebarLinks.forEach((link) => link.className = '');
    newActive.className = 'active';
  }

  const scrollHandler = () =>
  {
    const windowVerticalCenter = Math.floor(window.innerHeight / 2);
    const activeSection = sectionHeaders.find((header) =>
    {
      return window.scrollY > (header.offsetTop - windowVerticalCenter);
    });

    if (!activeSection) { return }

    setActive(activeSection.id);
  };

  document.addEventListener('scroll', scrollHandler);
});
