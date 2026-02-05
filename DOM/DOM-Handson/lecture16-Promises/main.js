document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const status = document.getElementById("status");
    const resultSection = document.getElementById("result");

    /* ===================== FORM SUBMIT ===================== */
    form?.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(this);
        const name = formData.get("name")?.trim();
        const email = formData.get("email")?.trim();
        const query = formData.get("query")?.trim();

        if (!name || !email || !query) {
            status.textContent = "All fields are required";
            return;
        }

        status.textContent = "Saving...";

        saveQuery({ name, email, query })
            .then(() => {
                status.textContent = "Data saved successfully";
                this.reset();
            })
            .catch(err => {
                status.textContent = err;
            });
    });

    /* ===================== SAVE QUERY ===================== */
    function saveQuery(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let queries = JSON.parse(localStorage.getItem("queries")) || [];

                    // Prevent duplicate emails
                    const exists = queries.some(q => q.email === data.email);
                    if (exists) {
                        reject("Email already exists");
                        return;
                    }

                    queries.push(data);
                    localStorage.setItem("queries", JSON.stringify(queries));
                    resolve(data);
                } catch {
                    reject("Failed to save data");
                }
            }, 1500);
        });
    }

    /* ===================== SEARCH QUERY ===================== */
    function getQueryByEmail(email) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const queries = JSON.parse(localStorage.getItem("queries")) || [];
                const result = queries.find(q => q.email === email);

                result ? resolve(result) : reject("No data found");
            }, 1000);
        });
    }

    /* ===================== SHOW RESULT ===================== */
    function showResult(query) {
        const name = document.createElement("p");
        name.textContent = `Name: ${query.name}`;

        const email = document.createElement("p");
        email.textContent = `Email: ${query.email}`;

        const question = document.createElement("p");
        question.textContent = `Query: ${query.query}`;

        resultSection.replaceChildren(name, email, question);
    }

    /* ===================== SHOW ERROR ===================== */
    function showError(reason) {
        const p = document.createElement("p");
        p.textContent = reason;
        p.style.color = "red";
        resultSection.replaceChildren(p);
    }

    /* ===================== LOADER ===================== */
    function showLoader() {
        status.textContent = "Fetching results...";
    }

    function clearLoader() {
        status.textContent = "";
    }

    /* ===================== SEARCH BUTTON ===================== */
    document.querySelector("#search")?.addEventListener("click", () => {
        const searchTerm = document.querySelector("#search-term")?.value.trim();

        resultSection.replaceChildren();

        if (!searchTerm) {
            showError("Please enter an email to search");
            return;
        }

        showLoader();

        getQueryByEmail(searchTerm)
            .then(showResult)
            .catch(showError)
            .finally(clearLoader);
    });
});
