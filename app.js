let igračev_rezultat=0;
let kompjuterski_rezultat=0;
let najveći_rezultat=0;
function igraj(igračev_izbor) {
    const izbor=["Kamen","Papir","Škare"];
    const kompjuterski_izbor=izbor[Math.floor(Math.random()*izbor.length)];
    if(igračev_izbor===kompjuterski_izbor){
        prikaži_rezultat("Nitko nije dobio");
        stil("nerješeno");
    }
    else if(igračev_izbor==="Kamen" && kompjuterski_izbor==="Škare" ||
            igračev_izbor==="Škare" && kompjuterski_izbor==="Papir" ||
            igračev_izbor==="Papir" && kompjuterski_izbor==="Kamen"){
                igračev_rezultat++;
                najveći_rezultat++;
                prikaži_rezultat("Pobjeđuješ! "+igračev_izbor+" pobjeđuje "+kompjuterski_izbor);
                promjeni_najveći_rezultat(najveći_rezultat);
                stil("pobjeda");
            }
    else{
        kompjuterski_rezultat++;
        najveći_rezultat=0;
        prikaži_rezultat("Gubiš! "+kompjuterski_izbor+" pobjeđuje "+igračev_izbor);
        stil("poraz");
    }
    promjenit_tablicu();
}
function prikaži_rezultat(poruka){
    const rezultatski_element=document.getElementById("rezultat")
    rezultatski_element.textContent=poruka;
}
function promjenit_tablicu(){
    const igračev_element=document.getElementById("igračev_rezultat");
    igračev_element.textContent=igračev_rezultat;

    const kompjuterski_element=document.getElementById("kompjuterski_rezultat");
    kompjuterski_element.textContent=kompjuterski_rezultat;
}
function promjeni_najveći_rezultat(value) {
    najveći_rezultat=value;
    const najveći_rezultat_element=document.getElementById("najveći_rezultat");
    najveći_rezultat_element.textContent="Tvoj trenutni maksimalni rezultat: "+najveći_rezultat;
}
function stil(value) {
    if(value==="pobjeda"){
        document.body.style.backgroundColor="green";
    }
    else if(value==="nerješeno"){
        document.body.style.backgroundColor="gray";
    }
    else{
        document.body.style.backgroundColor="red";
    }
}