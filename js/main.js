///toggle content
//za copy/paste da ne kucam 100puta
// #Bio,#RatStruja,#Drustvo,#Pronalasci,#BioRaneGod,#BioSrGod,#BioZlGod,#BioPozGod
// .BioContent,.RatStrujaContent,.DrustvoContent,.PronalasciContent,.BioRaneGodContent,.BioSrGodContent,.BioZlGodContent,.BioPozGodContent


///toggle content
///subBtns jq animated in main bar on Bio btn
$(document).ready(function () {
    $("div#Bio").mouseenter(function () {
        $("div#subBtns").show(400, function () {
            $("div#BioRaneGod").slideDown(1000);
            $("div#BioSrGod").delay(100).slideDown(800);
            $("div#BioZlGod").delay(200).slideDown(600);
            $("div#BioInteraktivna").delay(300).slideDown(400);
            if ($("div#BioRaneGod").css("display") == "block") {
                $("div#subBtns p").show(200);
            } else $("div#subBtns p").delay(310).show(200);
        });
    });
    $("#leftContentMenu").mouseleave(function () {
        $("div#subBtns p").hide(200);
        $("div#subBtns").delay(200).hide(400);
    });
});
///Main content jq animations show/hide and auto-scroll on btn clicks
//Bio hide all main content
$(document).ready(function () {
    $("#Bio").click(function () {
        $(".mainContent").fadeOut(400);

    });
});
//Other btns(!Bio) show/hide and autoscroll
function BtnOnClickContent(idBtn, idContent) {
    $(idBtn).click(function () {
        $("#centralContentMain").animate({
            scrollTop: 0
        }, 300, 'swing');
        $(".mainContent").delay(300).fadeOut(300, function () {
            $(idContent).delay(300).fadeIn(300);
        });
    });
}
$(document).ready(function () {
    BtnOnClickContent("#BioRaneGod", "#BioRaneGodContent");
    BtnOnClickContent("#BioSrGod", "#BioSrGodContent");
    BtnOnClickContent("#BioZlGod", "#BioZlGodContent");
    BtnOnClickContent("#BioPozGod", "#BioPozGodContent");
    BtnOnClickContent("#BioInteraktivna", "#BioInteraktivnaContent");
    BtnOnClickContent("#RatStruja", "#RatStrujaContent");
    BtnOnClickContent("#Pronalasci", "#PronalasciContent");
    BtnOnClickContent("#Zanimljivosti", "#ZanimljivostiContent");
});


//ovo isto radi al kod lošiji
// $(document).ready(function () {
//     $("#BioRaneGod").click(function () {
//         $("#centralContentMain").animate({scrollTop:0}, 500, 'swing');
//         if ($(".subContent,.mainContent").not("#BioRaneGodContent").css("display")=="block") {
//             $(".subContent,.mainContent").not("#BioRaneGodContent").fadeOut(400);
//         }
//         if ($("#BioRaneGodContent").css("display") == "none") {
//             $("#BioRaneGodContent").fadeIn(400);
//         }
//     });
// });
// $(document).ready(function () {
//     $("#BioSrGod").click(function () {
//         $("#centralContentMain").animate({scrollTop:0}, 500, 'swing');
//         if ($(".subContent,.mainContent").not("#BioSrGodContent").css("display")=="block") {
//             $(".subContent,.mainContent").not("#BioSrGodContent").fadeOut(400);
//         }
//         if ($("#BioSrGodContent").css("display") == "none") {
//             $("#BioSrGodContent").fadeIn(400);
//         }
//     });
// });