///////storage empty daLi
localStorage.removeItem("daLi");

///obj daLI - da li ste znali
var daLi = {
    0: 'Govorio je mnogo jezika — srpski, engleski, nemački, italijanski, francuski, češki, mađarski, latinski i slovenački.',
    1: 'Mnogi današnji obožavaoci Tesle su skloni verovanju da je on „čovek koji je izumeo dvadeseti vek” i nazivaju ga „Prometej dvadesetog veka”.',
    2: 'On je planove za njegove izume čuvao u glavi, a nije ih zapisivao zbog opasnosti od krađe.',
    3: 'U čast doprinosu nauci Nikole Tesle, na stogodišnjici njegovog rođenja 27. juna 1956. godine u Minhenu, Međunarodna Elektrotehnička Komisija, odlučila je da uvede jedinicu Tesla (T) za magnetnu indukciju.(T = Wb / m² ili T = N / (m× A))',
    4: 'U svetu filma postoji nagrada <i> Nicola Tesla Award in Recognition for Visionary Achievements in the World of Digital Technology and Sound </i>. Do sada su je primili: Džeri Luis, Džejms Kameron, Džordž Lukas, Sten Vinston…',
    5: 'Odlukom Vlade Srbije iz avgusta 2010. godine, dan rođenja Nikole Tesle 10. jul proglašen je Danom nauke u Srbiji.',
    6: 'U Beogradu postoji elektrotehnički institut „Nikola Tesla”, osnovan 1936. godine.',
    7: 'Univerzitetska biblioteka Univerziteta u Nišu nosi naziv Nikola Tesla.',
    8: 'Elektrotehničke škole u Beogradu, Nišu, Zrenjaninu, i Elektrotehnička i građevinska škola u Jagodini nose ime „Nikola Tesla”.',
    9: 'Dve termocentrale u Srbiji su nazvane „Nikola Tesla A” i „Nikola Tesla B” u čast Tesle.',
    10: 'Akceleratorska instalacija u Institutu za nuklearne nauke Vinča nosi naziv „Tesla”.',
    11: 'Tokom postojanja Republike Srpske Krajine je univerzitet u Kninu nosio naziv Univerzitet „Nikola Tesla”.',
    12: 'Arhivska građa iz Tesline zaostavštine, iz Muzeja Nikole Tesle, je na osnovu odluke generalnog direktora Uneska, Koićira Macure, 16. oktobra 2003. godine upisana u registar Uneska Pamćenje sveta.',
    13: 'Američki hard rok bend Tesla je nazvan po našem naučniku kao izraz zahvalnosti što im je omogućio struju, bez koje ne bi postojale ni električne gitare.',
    14: 'Godine 1975. njegovo ime uvedeno je u Dom slavnih pronalazača Amerike.',
    15: '10. jula 1990. godine u američkom Kongresu je proslavljen Teslin rođendan. Govorila su devetorica kongresmena i senator. Takva čast u američkoj istoriji nije ukazana nijednom američkom naučniku, čak ni Tomasu Edisonu niti Aleksandru Grejamu Belu.',
    16: 'Postoji nebesko telo, asteroid, 2244 Tesla. Asteroid je otkrio sa beogradske Astronomske opservatorije, a zatim i imenovao astronom Milorad B.Protić.',
    17: 'Nils Bor je jednom prilikom rekao: <i>„Teslini genijalni pronalasci duboko su uticali na čitavu našu civilizaciju”</i>.',
    18: 'Američki inženjer i profesor B.A.Berend u svojoj knjizi je zapisao: <i>„Tesla nije ostavio drugima ništa više da urade. Kada bismo iz industrije isključili rezultate Teslinog istraživačkog rada, svi točkovi te industrije prestali bi da se okreću, naši tramvaji i vozovi bi stali, naši gradovi bi bili u mraku, a fabrike mrtve i besposlene”</i>.',
    19: 'Tesla se hranio isključivo vegetarijanskom hranom.',
    20: 'Čuveni Muzej voštanih figura Madam Tiso, njujorški ogranak slavne londonske kuće, priprema figuru Nikole Tesle u vosku i postaviće je pored Aleksandra Bela, pronalazača telefona.',
    21: 'Iako su mnogi umetnici želeli da im Tesla pozira za portret, on je to gotovo uvek odbijao. Jedino je slikarki i princezi Vilmi Ljvov - Parlagi pošlo 1916. godine za rukom da ubedi Teslu da joj pozira. Nije poznato gde se ovaj portret danas nalazi. Svi ostali Teslini portreti rađeni su prema fotografijama.',
    22: 'Tesla je samo jednom izrazio želju da neki umetnik izradi njegov portret. Godine 1939., uputio je svom prijatelju, vajaru Ivanu Meštroviću telegram u Zagreb. Meštrović je izradio Teslinu bistu tek 1952. godine. Njeni odlivci čuvaju se u Muzeju Nikole Tesle u Beogradu, u Muzeju Like u Gospiću i u Tehničkom muzeju u Beču.',
    23: 'Umetnica Marina Abramović snimila je 2003. godine u Muzeju Nikole Tesle u Beogradu video - instalacije Računajte na nas i Računajte na nas II, koje su inspirisane životom i delom Nikole Tesle.',
    24: 'Dejvid Boui— legendarni britanski muzičar, tumači ulogu Tesle u filmu Prestiž (2006), gde nastupa zajedno sa Hjuom Džekmenom, Kristijanom Bejlom, Majklom Kejnom i Skarlet Džohanson. Prestiž je režirao renomirani britanski reditelj Kristofer Nolan.',
    25: 'Američka kompanija Tesla motori prva je počela serijsku i masovnu proizvodnju čisto električnog automobila, prvo sportskog Tesla roudster tokom 2008. godine a potom 2012. i Tesla S porodični auto.',
    26: 'Krater Tesla se nalazi na Mesecu. Ima prečnik od 26 km. Njegova selenografska širina je −2.0°, a dužina −132.0°.',
    27: '1943. godine Vrhovni sud SAD vratio je Tesli pravo na patent 645.576, priznajući mu prvenstvo na patent radija.',
    28: 'Avgusta 1917. godine Tesla je postavio principe u vezi sa frekvencijom i nivoom snage prvog primitivnog radara. Emil Žirardo je 1934. godine radeći prvi francuski radarski sistem tvrdio da je sve radio <i>„prema principima koje je postavio gospodin Tesla”</i>.',
    29: 'Na Teslinoj sahrani je svirao njegov prijatelj, violinista Zlatko Baloković, tada jedan od najvećih virtuoza na svetu u pratnji slovenačkog hora Slovan, i to po Teslinoj želji, prvo Šubertovu kompoziciju <i>„Ave Marija”</i>, a onda srpsku pesmu <i>„Tamo daleko”</i>.',
    30: '28. februara 2014. je potpisan sporazum između Srpske pravoslavne crkve, Vlade Republike Srbije i Privremenog organa Grada Beograda o prenosu posmrtnih ostataka Nikole Tesle u portu Hrama Svetog Save.',
    31: 'Februara 1894. se pojavljuje prva knjiga o Tesli, <i>„Otkrića, istraživanja i pisani radovi Nikole Tesle”</i>. Ubrzo knjiga biva prevedena na srpski i nemački jezik.',
    32: 'Jedini boravak Nikole Tesle u Beogradu bio je 1.— 3. juna 1892. godine.',
    33: '<i>„Ja sam, kao što vidite i čujete ostao Srbin i preko mora, gde se ispitivanjima bavim. To isto treba da budete i vi i da svojim znanjem i radom podižete slavu Srpstva u svetu.”</i> — početak Teslinog govora u Velikoj školi u Beogradu',
    34: '<i>„Vaša mržnja, pretvorena u električnu energiju, mogla bi osvetljavati gradove i gradove”</i> (Srbima i Hrvatima početkom drugog svjetskog rata)',
    35: '<i>„Od svih sila trenja, ona koja najviše usporava ljudski napredak je neznanje, ono što Buda naziva„ Najveće zlo u svetu””.</i>',
    36: '„Nikad ne veruj sjaju u očima žene! To je verovatno svetlo što prodire kroz njenu šuplju glavu.”</i>',
};
//////////storage set daLi obj
localStorage.setItem("daLi", JSON.stringify(daLi));
// console.log("daLi obj:", daLi);
// console.log(JSON.stringify(daLi));
// console.log(localStorage.getItem("daLi"));
var daLiNizStringova = [];
for (var brojPitanja in daLi) {
    daLiNizStringova.push((daLi[brojPitanja])); //prepisujem vrednosti iz oblekta u niz
}
// console.log("daLiNizStringova:", daLiNizStringova);
var daLiRnd = daLiNizStringova.sort(function (a, b) {
    return 0.5 - Math.random();
});
//provera da li je zaista random činjenica - radi
// console.log("činjenica iz storage 15:", JSON.parse(localStorage.getItem("daLi"))[15]);
// console.log("random činjenica 15:", daLiRnd[15]);
//provera na strani - radi

//////// klikom na dugme ??? briše sve u tom divu pa ispisuje sve zanimljive činjenice iz storage 
$(document).ready(function () {
    $("#btnDaLi").click(function () {
        $("btnDaLi").fadeOut("slow", function () {
            $(".daLiIspis p").fadeOut("slow");
        });
        $(".daLiIspis").empty();
        $(".daLiIspis").append("<ul></ul>");
        for (var brdr in JSON.parse(localStorage.getItem("daLi"))) {
            $(".daLiIspis ul").append("<li>" + JSON.parse(localStorage.getItem("daLi"))[brdr] + "</li>");
        }
    });
});


////za ispis 01 umesto 1 na satu
function dodajNulu(i) {
    if (i < 10) {
        i = "0" + i;
    } // nula ispred za < 10
    return i;
}
var brojCinjenice = 0;
//////////sat
var sati = setInterval(tajmer, 1000);

function tajmer() {
    var danas = new Date();
    var h = danas.getHours();
    var m = danas.getMinutes();
    var s = danas.getSeconds();
    hh = dodajNulu(h);
    mm = dodajNulu(m);
    ss = dodajNulu(s);
    document.getElementById("sat").innerHTML = hh + ":" + mm + ":" + ss;
    ///rnd daLi na 15 35 55 sekundi menja, kad ispiše sve opet promeša
    if (brojCinjenice == daLiRnd.length) {
        brojCinjenice = 0;
        daLiRnd = [];
        daLiRnd = daLiNizStringova.sort(function (a, b) {
            return 0.5 - Math.random();
        });
    }
    if (s == 15 || s == 35 || s == 55) {
        // console.log(brojCinjenice);
        $(document).ready(function () {
            $("#daLiContent p").fadeOut(600, function () {
                $("#daLiContent p").html(daLiRnd[brojCinjenice]);
            });
            $("#daLiContent p").fadeIn();
        });
        // console.log(s);
        brojCinjenice++;
    }
}
/////Main content jq animations show/hide and auto-scroll on btn clicks
///btnMain on click shows btns, on maouseleave btnHolder hides them
$(document).ready(function () {
    $("#btnMain").click(function () {
        $("#btnHolder").show(400);
    });
    $("#btnHolder").mouseleave(function () {
        $("#btnHolder").hide(400);
    });
    $("#btnHolder").click(function () {
        $("#btnHolder").hide(400);
    });
});

///toggle content

function BtnClickContent(idBtn, content,naslov) {
    $(idBtn).click(function () {
        $("#btnHolder").hide(400);
        $("#readingNow p").fadeOut(600, function () {
            $("#readingNow p").html(naslov);
        });
        $("#readingNow p").fadeIn();
        if ($("#centralContentMain").scrollTop() > 0) {
            $("#centralContentMain").delay(400).animate({
                scrollTop: 0
            }, 300, "swing", function () {
                $(".mainContent").delay(400).fadeOut(function () {
                    $(content).fadeIn();
                });
            });
            return false;
        } else {
            $(".mainContent").delay(400).fadeOut(function () {
                $(content).fadeIn();
            });
            return false;
        }
    });
}
BtnClickContent("#btnBio", ".mainContent", "BIOGRAFIJA");
BtnClickContent("#btnRane", "#sectionRane", "RANE<br><br>GODINE");
BtnClickContent("#btnSr", "#sectionSr", "SREDNJE<br><br>GODINE");
BtnClickContent("#btnZl", "#sectionZl", "ZLATNE<br><br>GODINE");
BtnClickContent("#btnPoz", "#sectionPoz", "POZNE<br><br>GODINE");
BtnClickContent("#btnInter", "#sectionInter", "INTERAKTIVNA");
BtnClickContent("#btnZanim", "#sectionZanim", "ZANIMLJIVOSTI");

////toogle reading now title

// function BtnClickNaslov(idBtn, naslov) {
//     $(idBtn).click(function () {
//         $("#readingNow p").fadeOut(600, function () {
//             $("#readingNow p").html(naslov);
//         });
//         $("#readingNow p").fadeIn();
//     });
// }

// BtnClickNaslov("#btnBio", "BIOGRAFIJA");
// BtnClickNaslov("#btnRane", "RANE GODINE");
// BtnClickNaslov("#btnSr", "SREDNJE GODINE");
// BtnClickNaslov("#btnZl", "ZLATNE GODINE");
// BtnClickNaslov("#btnPoz", "POZNE GODINE");
// BtnClickNaslov("#btnInter", "INTERAKTIVNA");
// BtnClickNaslov("#btnZanim", "ZANIMLJIVOSTI");






// function BtnOClickContent(idBtn, content) {
//     $(idBtn).click(function () {
//         if ($("#centralContentMain").scrollTop() > 0) {
//             $("#centralContentMain").delay(300).animate({
//                 scrollTop: 0
//             }, 300, "swing");
//         }
//         $(".mainContent").fadeOut( function () {
//             $(content).fadeIn();
//         });
//     });
// }


///ovo radi
// $("#btnBio").click(function () {
//     if ($("#centralContentMain").scrollTop() > 0) {
//         $("#centralContentMain").animate({
//                 scrollTop: 0
//             }, 300 ,"swing");
//     }
//     $(".mainContent").fadeOut(400, function () {
//         $(".mainContent").fadeIn(400);
//     });
// });
//radi i ovo
// $("#btnBio").click(function () {
//     if ($("#centralContentMain").scrollTop() > 0) {
//         $("#centralContentMain").animate({
//                 scrollTop: $("#centralContentMain").offset().top
//             },
//             "swing");
//     }
//     $(".mainContent").fadeOut(300, function () {
//         $(".mainContent").fadeIn(300);
//     });
// });



//         $("#centralContentMain").animate({scrollTop:0}, 500, 'swing');
//         if ($(".subContent,.mainContent").not("#BioRaneGodContent").css("display")=="block") {
//             $(".subContent,.mainContent").not("#BioRaneGodContent").fadeOut(400);
//         }
//         if ($("#BioRaneGodContent").css("display") == "none") {
//             $("#BioRaneGodContent").fadeIn(400);
//         }




// function BtnOnClickContent(idBtn, idContent) {
//     $(idBtn).click(function () {
//         $("#centralContentMain").animate({
//             scrollTop: 0
//         }, 300, 'swing');
//         $(".mainContent").delay(300).slideUp(300, function () {
//             $(idContent).delay(300).fadeIn(300);
//         });
//     });
// }

//doteraj malo animaciju
//Other btns(!Bio) show/hide and autoscroll
// function BtnOnClickContent(idBtn, idContent) {
//     $(idBtn).click(function () {
//         $("#centralContentMain").stop().animate({
//             scrollTop: 0
//         }, 300, 'swing');
//         $(".mainContent").stop().delay(300).slideUp(300, function () {
//             $(idContent).delay(300).fadeIn(300);
//         });
//     });
// }
// $(document).ready(function () {
//     BtnOnClickContent("#BioRaneGod", "#BioRaneGodContent");
//     BtnOnClickContent("#BioSrGod", "#BioSrGodContent");
//     BtnOnClickContent("#BioZlGod", "#BioZlGodContent");
//     BtnOnClickContent("#BioPozGod", "#BioPozGodContent");
//     BtnOnClickContent("#BioInteraktivna", "#BioInteraktivnaContent");
//     BtnOnClickContent("#RatStruja", "#RatStrujaContent");
//     BtnOnClickContent("#Pronalasci", "#PronalasciContent");
//     BtnOnClickContent("#Zanimljivosti", "#ZanimljivostiContent");
// });


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