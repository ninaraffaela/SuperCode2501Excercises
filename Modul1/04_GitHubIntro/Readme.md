echo "# SuperCode2025" >> README.md
git init    --> Initialisiert ein neues Git Repo im aktuellen Verzeichnis (lokal)
git add README.md  --> Fügt eine Readme.md datei hinzu
git commit -m "first commit"    ---> Erstellt einen neuen Commit mit dem Kommentar "first commit" der alle Änderungen des Ordners hinzufügt
git branch -M main  ---> Erstellt einen neuen Branch
git remote add origin https://github.com/ninaraffaela/SuperCode2025.git     ---> Fügt ein neues Repository hinzu mit dem Namen "origin" (das lokale dass zu einem remote repo gesendet wird ---> Dateien sind nun online)
git push -u origin main ---> pusht das lokale Repository in das remote repository

**git add .**  ---> fügt eine Änderung aus dem Arbeitsverzeichnis in unsere Staging area hinzu (mit . nimmt er alle Inhalte des aktuellen Ordners und children)
**git commit -m "Text was geändert wurde**  ---> erstellt einen neuen Commit mit der jeweiligen Nachricht 
**git push** ---> pusht die Dateien die zuvor mit git add . in die staging area bewegt wurden in das git remote repository

**git pull**    ---> pullt den aktuellen Stand aus dem Remote Repository nach lokal

**git status** ---> zeig mir den aktuellen Stand (ob und wo etwas geändert wurde)
**git log**     ---> Mit git log zeigt das Logfile wer wann was gemacht hat
