/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
*/



const inputName = document.getElementById('name');
const inputDistance = document.getElementById('kilometers');
const inputAge = document.getElementById('age');

const btnGenerate = document.getElementById('btn-generate');
const btnReset = document.getElementById('btn-reset');

const eleTicket = document.querySelector('.ticket');
const outputName = document.getElementById('ticket-name');
const outputPrice = document.getElementById('ticket-price');

const pricePerKilometer = 0.21;

btnGenerate.addEventListener('click', function () {
	const distance = parseFloat(inputDistance.value);
	const age = inputAge.value;

	if (inputDistance.value != '' && !isNaN(distance) && inputName.value != '' && inputAge.value != 'label') {
		const basePrice = pricePerKilometer * distance;

		let discountRate;
		switch (age) {
			case 'minorenne':
				discountRate = 20;
				break;

			case 'standard':
				discountRate = 0;
				break;

			case 'senior':
				discountRate = 40;
				break;
		}

		// alternativa A
		let totalPrice = basePrice - basePrice * discountRate / 100;
		// totalPrice = parseFloat(totalPrice.toFixed(2));
		totalPrice = Math.round(totalPrice * 100) / 100;

		console.log('Il prezzo del biglietto è: ' + totalPrice + ' €');

		outputName.innerHTML = inputName.value;
		outputPrice.innerHTML = totalPrice;
		eleTicket.classList.remove('hidden');
	} else {
		console.log('Inserire dei valori');
	}
})

btnReset.addEventListener('mouseenter', function () {
	outputName.innerHTML = '';
	outputPrice.innerHTML = '';
	eleTicket.classList.add('hidden');
});

inputName.addEventListener('focusin', function () {
	const distance = parseFloat(inputDistance.value);
	const age = inputAge.value;

	if (inputDistance.value != '' && !isNaN(distance) && inputName.value != '' && inputAge.value != 'label') {
		const basePrice = pricePerKilometer * distance;

		let discountRate;
		switch (age) {
			case 'minorenne':
				discountRate = 20;
				break;

			case 'standard':
				discountRate = 0;
				break;

			case 'senior':
				discountRate = 40;
				break;
		}

		// alternativa A
		let totalPrice = basePrice - basePrice * discountRate / 100;
		// totalPrice = parseFloat(totalPrice.toFixed(2));
		totalPrice = Math.round(totalPrice * 100) / 100;

		console.log('Il prezzo del biglietto è: ' + totalPrice + ' €');

		outputName.innerHTML = inputName.value;
		outputPrice.innerHTML = totalPrice;
		eleTicket.classList.remove('hidden');
	} else {
		console.log('Inserire dei valori');
	}
});