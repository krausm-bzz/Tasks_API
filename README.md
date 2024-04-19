# TASKS API
### Matthias Kraus

In dieser API können 'Tasks' Objekte angeschaut, hinzugefügt und bearbeitet werden. Zudem
ist es notwendig sich zu Authentifizieren um auf diese Endpunkte zugreifen zu können.

Im Ordner src sind mehrere Source-Codes vorhanden die zur Funktion dieser API beitragen.

src
---
- >[app.js](src%2Fapp.js) ist ein JS File welches alle Methoden der API programmiert vorhanden hat.
- >[eslint.config.mjs](src%2Feslint.config.mjs) ermöglicht die nutzung von eslint zur korrektur analyse von app.js.
- >[swagger.js](src%2Fswagger.js) baut automatisch eine funktionierende Dokumentation von app.js auf welches genutzt werden kann
um vereinfacht auf die Methoden aufzugreifen. Die swagger Dokumentation findet man unter [swagger.json](swagger.json)
 

Tests
-
Das File [8e8bf5d5-b353-4bbf-87b2-8523e44765a2.json](8e8bf5d5-b353-4bbf-87b2-8523e44765a2.json) ist eine Hoppscotch Collection
mit welcher man verschiedene Tests ausführen kann.

Mehr Informationen zu den Tests bei [TESTING.md](TESTING.md).

git
-
im File [vcs.txt](vcs.txt) kann man alle git commits sehen.

Ausführen
-
- Um den Localhost zu starten, muss man unter [package.json](package.json) den
"dev": "nodemon src/app.js" Befehl ausführen, wodurch die API bei jeder änderung sich automatisch 
neu startet.

- Jetzt kann die API :
- - mit [8e8bf5d5-b353-4bbf-87b2-8523e44765a2.json](8e8bf5d5-b353-4bbf-87b2-8523e44765a2.json) getestet werden
-  - mit [swagger.json](swagger.json) die Dokumentation aufgerufen werden
-  - oder im Browser aufgerufen werden




