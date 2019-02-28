// function toggleDivBtn() {
//     var x = document.getElementById("subBtns");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }
//
///main btns toggle on #Bio hide on !#Bio
//radi toggle al neće fade i vreme itt
$(document).ready(function () {
    $("#Bio").click(function () {
        $("#BioRaneGod").toggle();
        $("#BioSrGod").toggle();
        $("#BioZlGod").toggle();
        $("#BioPozGod").toggle();
    });
    $("#RatStruja,#Drustvo,#Pronalasci").click(function () {
        $("#BioRaneGod").hide();
        $("#BioSrGod").hide();
        $("#BioZlGod").hide();
        $("#BioPozGod").hide();
    });
});
///toggle content
$(document).ready(function () {
        //mainBtns
        $("#Bio").click(function () {
        $(".BioContent").toggle();
        });
        $("#RatStruja").click(function () {
        $(".RatStrujaContent").toggle();
        });
        $("#Drustvo").click(function () {
        $(".DrustvoContent").toggle();
        });
        $("#Pronalasci").click(function () {
        $(".PronalasciContent").toggle();
        });
        //subBtns
        $("#BioRaneGod").click(function () {
        $(".BioRaneGodContent").toggle();
        });
        $("#BioSrGod").click(function () {
        $(".BioSrGodContent").toggle();
        });
        $("#BioZlGod").click(function () {
        $(".BioZlGodContent").toggle();
        });
        $("#BioPozGod").click(function () {
        $(".BioPozGodContent").toggle();
        });
        //mainBtns
        $("#RatStruja,#Drustvo,#Pronalasci,#BioRaneGod,#BioSrGod,#BioZlGod,#BioPozGod").click(function () {
            $(".BioContent").hide();
        });
        $("#Bio,#Drustvo,#Pronalasci,#BioRaneGod,#BioSrGod,#BioZlGod,#BioPozGod").click(function () {
            $(".RatStrujaContent").hide();
        });
        $("#Bio,#RatStruja,#Pronalasci,#BioRaneGod,#BioSrGod,#BioZlGod,#BioPozGod").click(function () {
            $(".DrustvoContent").hide();
        });
        $("#Bio,#RatStruja,#Drustvo,#BioRaneGod,#BioSrGod,#BioZlGod,#BioPozGod").click(function () {
            $(".PronalasciContent").hide();
        });
        //subBtns
        $("#Bio,#RatStruja,#Drustvo,#Pronalasci,#BioSrGod,#BioZlGod,#BioPozGod").click(function () {
            $(".BioRaneGodContent").hide();
        });
        $("#Bio,#RatStruja,#Drustvo,#Pronalasci,#BioRaneGod,#BioZlGod,#BioPozGod").click(function () {
            $(".BioSrGodContent").hide();
        });
        $("#Bio,#RatStruja,#Drustvo,#Pronalasci,#BioRaneGod,#BioSrGod,#BioPozGod").click(function () {
            $(".BioZlGodContent").hide();
        });
        $("#Bio,#RatStruja,#Drustvo,#Pronalasci,#BioRaneGod,#BioSrGod,#BioZlGod").click(function () {
            $(".BioPozGodContent").hide();
        });

    });
    //za copy/paste da ne kucam 100puta
    // #Bio,#RatStruja,#Drustvo,#Pronalasci,#BioRaneGod,#BioSrGod,#BioZlGod,#BioPozGod
    // .BioContent,.RatStrujaContent,.DrustvoContent,.PronalasciContent,.BioRaneGodContent,.BioSrGodContent,.BioZlGodContent,.BioPozGodContent