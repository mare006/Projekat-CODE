localStorage.clear(); /////////////////////////////obriši posle
var error = "";

function validateForm() {
    var isNameOk = validateName();
    var isLastNameOk = validateLastName();
    var isSajtOk = validateSajt();
    var isStaOk = validateSta();
    var isSekcjaOk = validateSekcja();
    var isKomentarOk = validateKomentar();

    if (isNameOk && isLastNameOk && isSajtOk && isStaOk && isSekcjaOk && isKomentarOk) {
        ispis();
    } else {
        alert(error);
    }
}
// globalna funcija za ubacivanje u local storage
function setElementToLocalStorage(element, value) {
    localStorage.setItem(element, JSON.stringify(value));
}
// get element and set it to local storage
function validateName() {
    var name = document.getElementById('name').value.trim();

    if (name.match(/^[A-Za-z]+$/)) {
        setElementToLocalStorage('Name', name);
        return true;
    } else {
        error = 'Greška u unosu imena!';
        return false;
    }
}

function validateLastName() {
    var lastName = document.getElementById('last-name').value.trim();

    if (lastName.match(/^[A-Za-z]+$/)) {
        setElementToLocalStorage('Last Name', lastName);
        return true;
    } else {
        error = 'Greška u unosu prezimena!';
        return false;
    }
}

function validateSajt() {
    var sajt = document.getElementsByName("sajt");

    if (sajt[0].checked == true) {
        setElementToLocalStorage('Sajt', sajt[0].value);
    } else if (sajt[1].checked == true) {
        setElementToLocalStorage('Sajt', sajt[1].value);
    } else {
        error = 'Niste izabrali da li vam se sviđa sajt!';
        return false;
    }
    return true;
}

function validateSta() {
    var sta = document.getElementById('sta').value;

    if (sta != "wrong") {
        setElementToLocalStorage('Sta', sta);
        return true;
    } else {
        error = 'Izaberite šta Vam se najviše dopalo!';
        return false;
    }
}

function validateSekcja() {
    var sekcija = document.getElementById('sekcija').value;

    if (sekcija) {
        setElementToLocalStorage('Sekcija', sekcija);
        return true;
    } else {
        error = 'Izaberite sekciju koja Vam se najviše dopala!';
        return false;
    }
}

function validateKomentar() {
    var komentar = document.getElementById('komentar').value;

    if (komentar) {
        setElementToLocalStorage('Komentar', komentar)
        return true;
    } else {
        error = 'Unesite kratak komentar!';
        return false;
    }
}

function ispis() {
 $("#unos").append("<h4>Vaši podaci su:</h4>");
 $("#unos").append("<p>Ime: " + JSON.parse(localStorage.getItem("Name")) + "</p>");
 $("#unos").append("<p>Prezime: " + JSON.parse(localStorage.getItem("Last Name")) + "</p><br>");
 $("#unos").append("<h4>Pitanja i Vaši odgovori su:</h4>");
 $("#unos").append("<p>Da li Vam se dopao sajt? " + JSON.parse(localStorage.getItem("Sajt")) + "</p>");
 $("#unos").append("<p>Šta Vam se najviše dopalo? " + JSON.parse(localStorage.getItem("Sta")) + "</p>");
 $("#unos").append("<p>Koja sekcija Vam se najviše dopala? " + JSON.parse(localStorage.getItem("Sekcija")) + "</p><br>");
 $("#unos").append("<p>Vaš komentar: " + JSON.parse(localStorage.getItem("Komentar")) + "</p><br><br>");
 $("#unos").append("<h3>Hvala na izdvojenom vremenu!!!</h3>");
    
}