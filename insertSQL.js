let str = "INSERT INTO Etudiant (NumEtd, Nom, Prenom, DateN)  VALUES (3, 'nom-2', 'prenom-2', TO_DATE('12/01/2016', 'DD/MM/YYYY'));"

//console.log(str);

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// for(let i = 0; i < 100; i++) {
//     console.log(`INSERT INTO Etudiant (NumEtd, Nom, Prenom, DateN)  VALUES (${i}, 'nom-${i}', 'prenom-${i}', TO_DATE('${Math.floor((Math.random() * 31) + 1)}/${Math.floor((Math.random() * 12) + 1)}/${randomIntFromInterval(1980,2000)}', 'DD/MM/YYYY'));`)
// }


//CREATE TABLE Cours(CodeC VARCHAR(5) PRIMARY KEY, Intitule VARCHAR(50), Duree Date)
for(let i = 1; i < 200; i++) {
    console.log(`INSERT INTO Cours (CodeC, Intitule, Duree)  VALUES ('code-c-${i}', 'intitule-c-${i}', ${randomIntFromInterval(2,20)});`)
}

//setxkbmap fr  --> {echo "test"}

//CREATE TABLE Parcours(CodeP VARCHAR(5) PRIMARY KEY, Intitule VARCHAR(50))
// for(let i = 1; i < 200; i++) {
//     console.log(`INSERT INTO Parcours (CodeP, Intitule)  VALUES ('code-p-${i}', 'intitule-p-${i}', TO_DATE('${Math.floor((Math.random() * 31) + 1)}/${Math.floor((Math.random() * 12) + 1)}/${randomIntFromInterval(1980,2000)}', 'DD/MM/YYYY'));`)
// }

DECLARE 
ne INT := 1;
j INT;
m INT;
a INT;
dateNaiss  VARCHAR[12]
BEGIN
    FOR i IN 1..100 LOOP
        j := Round(DBMS_RANDOM.value(1,30));
        m := Round(DBMS_RANDOM.value(1,12));
        a := Round(DBMS_RANDOM.value(1980,2000));
        
        IF m = 2 THEN
            j := Round(DBMS_RANDOM.value(1,27));
        END IF;
        dateNaiss := a || '-' || LPAD(m, 2, 0) || '-' || LPAD(j, 2, 0);
        INSERT INTO Etudiant (NumEtd, Nom, Prenom, DateN)  VALUES (ne, 'nom-' || ne, 'prenom-' || ne, TO_DATE(dateNaiss, 'yyyy-MM-dd'));
         ne := ne + 1;
    END LOOP;
END

