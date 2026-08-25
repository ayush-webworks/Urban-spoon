```javascript
/* =========================================
   URBAN SPOON
   MAIN JAVASCRIPT
========================================= */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

        menuBtn.textContent =
            nav.classList.contains("active")
                ? "×"
                : "☰";

    });


    /* Close menu after clicking a link */

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            menuBtn.textContent = "☰";

        });

    });

}


/* ================= RESERVATION FORM ================= */

const reservationForm =
    document.getElementById("reservationForm");

const reservationStatus =
    document.getElementById("reservationStatus");

const bookingDate =
    document.getElementById("bookingDate");


/* Prevent selecting past dates */

if (bookingDate) {

    const today =
        new Date().toISOString().split("T")[0];

    bookingDate.min = today;

}


/* Reservation submit */

if (reservationForm) {

    reservationForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "guestName"
                ).value.trim();


            const phone =
                document.getElementById(
                    "guestPhone"
                ).value.trim();


            const date =
                document.getElementById(
                    "bookingDate"
                ).value;


            const time =
                document.getElementById(
                    "bookingTime"
                ).value;


            const guests =
                document.getElementById(
                    "guestCount"
                ).value;


            if (
                !name ||
                !phone ||
                !date ||
                !time ||
                !guests
            ) {

                reservationStatus.textContent =
                    "Please complete all fields.";

                return;

            }


            /*
                Temporary reservation confirmation.

                Database connection will be added
                in the next step.
            */

            reservationStatus.textContent =
                `Thanks ${name}! Your reservation request for ${guests} guest(s) on ${date} at ${time} has been received.`;


            reservationForm.reset();


            /* Restore minimum date */

            if (bookingDate) {

                const today =
                    new Date()
                        .toISOString()
                        .split("T")[0];

                bookingDate.min = today;

            }

        }
    );

}


/* ================= FOOTER YEAR ================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* ================= CLOSE MENU ON RESIZE ================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 760 &&
            nav
        ) {

            nav.classList.remove("active");

            if (menuBtn) {

                menuBtn.textContent = "☰";

            }

        }

    }
);
```
