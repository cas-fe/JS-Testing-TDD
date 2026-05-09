# Test First exercise - How to enhance software quality by process?

## Overview

* [0-demos](./0-demos/) Enthält die Notizen zur DEMO.
* [1-initial](./1-initial/) Samples für die DEMO im Initialzustand.
* [2-refactoring](./2-refactoring/) Samples für die DEMO nach dem Refactoring (Tests schlagen fehl).
* [3-spec](./3-spec/) Vorlagen für die Übung (Beschreibung siehe unten).
* [4-solution](./4-solution/) Lösungen der Übung.


## Anforderungen

### Bank account user stories

* **As a** `bank agent` **I want to** `create accounts` **so that** customers `can deposit and withdraw amounts`.
* **As a** `bank customer` **I want to** `deposit amounts` **so that** I can `store my money`.
* **As a** `bank customer` **I want to** `withdraw amounts` **so that** I `get back my stored money`.
* **As a** `bank` **I want to** `prevent customers from overdrawing (withdraw amount lower than 25% of balance)` their account **so that** I can `lower my risk`.


### Bank account test scenarios

#### Scenario *New account*
**describe**… "A new bank account"
* it … "is initialized by a balance of $0"
* it … "should not allow a withdraw without balance"
* it … "should have a balance of $50 after a deposit of $50"
 
**describe**… "A bank account of balance larger than $0 (amount of $50)"
* it … "should not allow to withdraw amounts larger than 25% [$50 => $13 (26%)]"
* it … "should allow to withdraw amounts lower than 25% [$50 => $12.5 (25%)]"


## Exercise / vitest installieren und ausführen

**Tip:** Lesen Sie zuerst die ganze Aufgabe durch, folgen Sie anschliessend den Schritten 1-11. Falls Sie VSCode verwenden: Installieren Sie die vitest Extension von https://marketplace.visualstudio.com/items?itemName=vitest.explorer.

1. Laden/Clonen Sie die den Code von [github.com/cas-fe/JS-Testing-TDD](https://github.com/cas-fe/JS-Testing-TDD) auf Ihre lokale Harddisk. 
2. Wechseln Sie ins JS-Testing-TDD Directory und installieren Sie das npm-Paket mittels `npm install`.
3. Sie finden zusätzliche Informationen über vitest unter:
	* https://vitest.dev/guide/
4. Öffnen Sie das `basics/3-spec/bank-account.spec.js` File und vergleichen Sie die Test-Spezifikation mit der Implementation im bank-account.js File.
5. Führen Sie vitest mittels ```npm run test [Unterordner]``` aus:
	```shell
	npm run test basics/3-spec
	```
	* Alternativ können Sie mit [WebStorm](https://www.jetbrains.com/help/webstorm/vitest.html) arbeiten.
	* Weiterhin enthält das package.json diverse vordefinierte run-script Kommandos:
	    * ```npm run test-basics``` Führt sämtliche Unit Tests im Ordner ```basics``` aus.
	    * ```npm run test-deps``` Führt sämtliche Unit Tests im Ordner ```dependencies``` aus.

6. Die Tests sollten nun fehlschlagen (was wurde beim Refactoring kaputt gemacht?).
7. Beheben Sie das Problem mit dem fehlerhaften Statement.
8. Die Tests sollten nun grün durchlaufen!

**Weiterführende Übungen:**
9. Erweitern Sie die Tests (```bank-account.spec.js```) um den folgenden Testfall:
```javascript
	describe "A bank account with balance of $100"
		it … "should return false when withdraw of balance lower than or equals $0."
```
10. Fügen Sie im ```bank-account.js``` die entsprechende Logik dazu.
11. Wie wird dieses Vorgehen (Schritte 9-10)  genannt?


## Solution

* Test-Spezifikationen: [4-solution/bank-account.spec.js](./4-solution/bank-account.spec.js)
* `Bank account` Logik: [/bank-account.js](./bank-account.js)
