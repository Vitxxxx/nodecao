document.addEventListener("DOMContentLoaded", () => {
  const submitForm = document.getElementById("submitForm");
  const peopleList = document.getElementById("peopleList");

  submitForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;

    try {
      const response = await fetch("/people", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, surname }),
      });

      const data = await response.json();
      console.log(data);

      peopleList.innerHTML = "";
      fetchPeopleList();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  });

  async function fetchPeopleList() {
    try {
      const response = await fetch("/people");
      const data = await response.json();

      data.forEach((person) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${person.name} ${person.surname}`;
        peopleList.appendChild(listItem);
      });
    } catch (error) {
      console.error("Error fetching people list:", error);
    }
  }

  peopleList.innerHTML = "";
  fetchPeopleList();
});
