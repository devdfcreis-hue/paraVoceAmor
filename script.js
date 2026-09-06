/* ==============================
   CORAÇÕES
============================== */

const heartsContainer =
    document.getElementById("hearts");


const totalHearts =
    window.innerWidth <= 600
        ? 18
        : 35;


for (
    let i = 0;
    i < totalHearts;
    i++
) {

    const heart =
        document.createElement("span");


    heart.classList.add("heart");


    heart.innerHTML =
        "❤";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        15 + Math.random() * 35 + "px";


    heart.style.animationDuration =
        8 + Math.random() * 12 + "s";


    heart.style.animationDelay =
        Math.random() * 10 + "s";


    heartsContainer.appendChild(
        heart
    );
}


/* ==============================
   ELEMENTOS
============================== */

const button =
    document.getElementById(
        "openLetter"
    );


const envelope =
    document.querySelector(
        ".envelope"
    );


const envelopeScreen =
    document.getElementById(
        "envelope-screen"
    );


const letter =
    document.getElementById(
        "letter-section"
    );


/* ==============================
   MÚSICA
============================== */

const musica =
    document.getElementById(
        "musica"
    );


/* ==============================
   ABRIR CARTA
   + TOCAR MÚSICA
============================== */

button.addEventListener(
    "click",
    function () {


        /* Impede vários cliques */

        button.disabled = true;


        /* ==========================
           COMEÇA A MÚSICA
           EXATAMENTE NO CLIQUE
           DO SELO ❤️
        ========================== */

        musica.volume = 0.9;

        musica.currentTime = 0;

        musica.play().catch(
            function (error) {

                console.log(
                    "Erro ao tocar a música:",
                    error
                );

            }
        );


        /* ==========================
           QUEBRA O SELO
        ========================== */

        button.classList.add(
            "breaking"
        );


        /* ==========================
           ABRE O ENVELOPE
        ========================== */

        setTimeout(
            function() {

                envelope.classList.add(
                    "open"
                );

            },
            500
        );


        /* ==========================
           MOSTRA A CARTA
        ========================== */

        setTimeout(
            function() {

                envelopeScreen.classList.add(
                    "hidden"
                );


                letter.classList.add(
                    "visible"
                );


                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            },
            1800
        );

    }
);