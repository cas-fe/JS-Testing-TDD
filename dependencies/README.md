# Test doubles exercise - How to decouple SUT-components?

## Overview

* [1-initial](./1-initial/) Vorlagen für die Übung (Beschreibung siehe unten).
* [2-spec](./2-spec/) Anlegen der Unit Tests (Tests schlagen fehl).
* [3-implementation](./3-implementation/) Transaktionsklasse für Schritte 1-3 implementiert.
* [4-spec-completion](./4-spec-completion/) Unit Tests komplett angelegt (Tests schlagen fehl).
* [5-solution](./5-solution/) Transaktionsklasse komplett implementiert und mit Unit Test getestet.


## Erweiterte Anforderungen

### Transaction user stories

* **As a** `bank customer` **I want to** `send amounts` to other accounts **so that** I can `pay someone`.
* **As a** `bank customer` **I want to** `receive amounts` from other accounts **so that** someone can `pay me`.
* **As a** `bank` **I want to** `see time and date of every transaction` **so that** I have an `overview about the transaction history`.


### Transaction test scenarios

#### Scenario *New transaction*
**describe**… "A new transaction of $25 (from account A $100 to account B $25)"
* it … "has an amount of $25"
* it … "is not yet completed"
* it … "has transaction date 2026-05-22T09:49:51.010Z"

* **describe**… "when executed"
    * it … "withdraws $25 from account A"
    * it … "deposits $25 to account B"
    * it … "is completed"


## Exercise

Komponenten, welche von externen, langsamen oder nicht immer verfügbaren Ressourcen (Netzwerk, Datenbanken, usw.) abhängen (so genannte depended-on component [DoC]), sollten in Unit Tests nicht verwendet werden. Somit bleiben die Unit Tests schnell und testen die effektive Logik des Programms. Test Doubles (fakes/spies/mocks/...) werden anstatt der DoCs eingeführt, um Abhängigkeiten zu externen Komponenten zu vermeiden. Im Szenario oben entspricht der BankAccount A und B solch einem externen DoC-System.

**Tip:** Lesen Sie zuerst die ganze Aufgabe durch, folgen Sie anschliessend den Schritten 1-7.

1. Schreiben Sie die Test-Spezifikationen (vitest Tests im) fürs Szenario *New transaction*: ```A new transaction of $25 (account A $100 / account B $25)...``` (siehe oberhalb). Sie finden die Vorlagen im File ```1-initial/transaction.spec.js```.
	* Um Werte/Referenzen zu überprüfen, verwenden Sie ```toBe()```; ```toEqual()``` vergleicht zusätzlich die Inhalte von Objekten und Arrays (Properties/Indexes).
	* Um native APIs, welche immer andere Resultate liefern, testbar zu machen, kann die vitest-Funktion ```spyOn([object], '[key]')``` (z.B. ```vi.spyOn(Date, 'now')```) und ```mockImplementation()``` verwendet werden. Mehr Informationen zu diesen Funktionen finden Sie unter [vitest.dev](https://vitest.dev/api/vi.html#vi-spyon).
	* Die Klasse ```BankAccount``` entspricht einem DoC. Legen Sie also eine Fake-Klasse für das DoC ```BankAccount``` an. Verwenden Sie dieselbe API (withdraw/deposit) wie in den Basics-Aufgaben.
	* Die Lösungen zur Aufgabe 1 finden Sie unter ```2-spec/transaction.spec.js```.
2. Führen Sie die Tests mittels vitest aus (analog [bascis](../basics/README.md#exercise--vitest-installieren-und-ausführen)-Aufgabe), zum Beispiel:
	```shell
	npm run test dependencies/1-initial
	```
3. Implementieren Sie nun die Initialisierung/Konstruktorlogik der Transaction-Klasse gemäss der Scenario-Vorgaben oben.
4. Nun sollten die Tests aus der Aufgabe 1 ohne Fehler durchlaufen.
5. Schreiben Sie nun den ersten Test für das zweite (verschachtelte) Szenario ```when executed```.
	* Der Test muss nun fehlschlagen.
	* Implementieren Sie nun die ```execute()```-Funktion der Transaction-Klasse:
		* Um die ```withdraw()``` der Funktion der ```BankAccountFake```-Klasse zu überschreiben, können Sie ebenfalls die vitest-Funktion [vi.spyOn()](https://vitest.dev/api/vi.html#vi-spyon) verwenden.
	* Nun sollte der Test ohne Fehler durchlaufen.
6. Implementieren Sie nun die weiteren Anforderungen des Szenarios ```when executed``` analog der Vorgehensweise unter Punkt 5. 
7. Vergleichen Sie das Vorgehen von Punkt 1 mit Punkt 5: Warum macht es keinen Sinn, zuerst sämtliche Test-Spezifikationen und erst anschliessend die gesamte Transaction-Logik zu implementieren?


## Solution

* Test-Spezifikationen: [4-spec-completion/transaction.spec.js](./4-spec-completion/transaction.spec.js)
* `Transaction`-Klasse: [5-solution/transaction.js](./transaction.js)
* Frage 7: Siehe [5-solution/transaction.spec.js](./5-solution/transaction.spec_.js)
