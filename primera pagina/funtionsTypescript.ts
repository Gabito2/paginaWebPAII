document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("searchForm") as HTMLFormElement;
    const searchInput = document.getElementById("searchInput") as HTMLInputElement;
    const cardContainer = document.getElementById("cardContainer");

    if (searchForm && searchInput && cardContainer) {
        searchForm.addEventListener("submit", (e: Event) => {
            e.preventDefault();

            const searchValue = searchInput.value.toLowerCase();
            const cards = cardContainer.querySelectorAll(".card");

            cards.forEach((card) => {
                const title = (card as HTMLElement).getAttribute("data-title") || "";
                (card as HTMLElement).style.display = title.includes(searchValue) ? "block" : "none";
            });
        });
    }
});
