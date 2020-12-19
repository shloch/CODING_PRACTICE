CREATE TABLE Etudiant(NumEtd INT PRIMARY KEY, Nom VARCHAR(50), Prenom VARCHAR(50), DateN Date);

CREATE TABLE Parcours(CodeP VARCHAR(15) PRIMARY KEY, Intitule VARCHAR(50));

CREATE TABLE Cours(CodeC VARCHAR(15) PRIMARY KEY, Intitule VARCHAR(50), Duree INT);

-- reference article = https://www.databasestar.com/ora-00907/
--ERROR =  ORA-02270: no matching unique or primary key for this column-list 
CREATE TABLE Inscription (
    numInscription INT PRIMARY KEY ,
    NumEtd INT CONSTRAINT FK_NumEtd REFERENCES Etudiant(NumEtd), 
    CodeP VARCHAR(15) CONSTRAINT FK_CodeP  REFERENCES Parcours(CodeP),
    DateInsc Date
);

CREATE TABLE ParcoursCours(
    CodeP VARCHAR(15) CONSTRAINT FK_CodeP2  REFERENCES Parcours(CodeP),
    CodeC VARCHAR(15) CONSTRAINT FK_CodeC2  REFERENCES Cours(CodeC)
);

DECLARE 
j INT;
m INT;
a INT;
dateNaiss  VARCHAR(12);
BEGIN
    FOR i IN 1..100 LOOP
        j := Round(DBMS_RANDOM.value(1,30));
        m := Round(DBMS_RANDOM.value(1,12));
        a := Round(DBMS_RANDOM.value(1980,2000));
        
        IF m = 2 THEN
            j := Round(DBMS_RANDOM.value(1,27));
        END IF;
        dateNaiss := a || '-' || LPAD(m, 2, 0) || '-' || LPAD(j, 2, 0);
        INSERT INTO Etudiant (NumEtd, Nom, Prenom, DateN)  VALUES (i, 'nom-' || i, 'prenom-' || i, TO_DATE(dateNaiss, 'yyyy-MM-dd'));
    END LOOP;
END;

--- code below to exploit

DECLARE
    CURSOR myCur IS
        SELECT nom, prenom
        FROM Etudiant
BEGIN
    FOR r IN myCur LOOP
    END LOOP;
END;