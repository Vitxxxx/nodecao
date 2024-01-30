const renderBrandList = (brands) => {
    const list = document.getElementById("brand-list");
    list.textContent = "";

    brands.forEach((brand) => {
      const listItem = document.createElement("li");
      listItem.textContent = brand;
      list.append(listItem);
    });
  };

  fetch("http://localhost:3000/brands")
    .then((resp) => resp.json())
    .then((response) => {
      renderBrandList(response);
    })
    .catch((error) => console.error(error));

  const addBrandButton = document.getElementById("new-brand");

  addBrandButton.addEventListener("click", () => {
    const nameInput = document.getElementById("brand-input");
    const body = { brand: nameInput.value };

    fetch("http://localhost:3000/brands", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((response) => {
        renderBrandList(response);
        nameInput.value = "";
      })
      .catch((error) => console.error(error));
  });