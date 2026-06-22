const DATA_FILES = [
	'data/unidad1.json',
	'data/unidad2.json',
	'data/unidad3.json'
];

const FALLBACK_DATA = {
	'data/unidad1.json': {
		unidad: 1,
		nombre: 'Interacciones con el medio',
		preguntas: [
			{
				id: 1,
				tipo: 'multiple',
				enunciado: 'Observa la imagen: ¿Qué estructura neuronal se muestra?',
				imagen: {
					url: 'assets/images/neurona.jpg',
					alt: 'Diagrama de neurona',
					width: 420,
					height: 300
				},
				opciones: ['Neurona sensitiva', 'Neurona motora', 'Interneurona', 'Célula glial'],
				respuestaCorrecta: 0,
				explicacion: 'Es una neurona sensitiva porque tiene dendritas especializadas.'
			},
			{
				id: 2,
				tipo: 'completar',
				enunciado: 'En el potencial de acción, la fase de [blank1] es seguida por la [blank2], y finalmente ocurre la [blank3]',
				blanks: [
					{
						id: 'blank1',
						label: 'Fase 1',
						opciones: ['despolarización', 'repolarización', 'hiperpolarización'],
						respuestaCorrecta: 0
					},
					{
						id: 'blank2',
						label: 'Fase 2',
						opciones: ['despolarización', 'repolarización', 'hiperpolarización'],
						respuestaCorrecta: 1
					},
					{
						id: 'blank3',
						label: 'Fase 3',
						opciones: ['despolarización', 'repolarización', 'hiperpolarización'],
						respuestaCorrecta: 2
					}
				],
				explicacion: 'El orden del potencial de acción es: despolarización, repolarización, hiperpolarización.'
			},
			{
				id: 3,
				tipo: 'multiple_respuesta',
				enunciado: 'Las hormonas peptídicas',
				opciones: ['poseen su receptor en la membrana', 'ejercen efectos por largos períodos de tiempo', 'son hidrosolubles', 'una de sus fuentes de producción es el ovario'],
				respuestaCorrecta: [0, 2],
				explicacion: 'Las hormonas peptídicas actúan sobre receptores de membrana y son hidrosolubles.'
			},
			{
				id: 4,
				tipo: 'verdadero_falso',
				enunciado: 'El potencial de reposo de una neurona es de aproximadamente -70 mV.',
				opciones: ['Verdadero', 'Falso'],
				respuestaCorrecta: true,
				explicacion: 'Efectivamente, el potencial de reposo neuronal suele rondar los -70 mV.'
			},
			{
				id: 5,
				tipo: 'ordenar',
				enunciado: 'Ordena las fases del potencial de acción:',
				opciones: ['Despolarización', 'Repolarización', 'Hiperpolarización', 'Potencial de reposo'],
				respuestaCorrecta: [3, 0, 1, 2],
				explicacion: 'El orden correcto es: reposo, despolarización, repolarización e hiperpolarización.'
			}
		]
	},
	'data/unidad2.json': {
		unidad: 2,
		nombre: 'El organismo como unidad integrada',
		preguntas: [
			{
				id: 1,
				tipo: 'multiple',
				enunciado: 'Si una persona sufre una enfermedad que afecta a las células productoras mieloides de la médula ósea, ¿qué tipos celulares no podrá regenerar?',
				opciones: ['Células madre hematopoyéticas', 'Solo eritrocitos pero no linfocitos', 'Precursores de leucocitos', 'Eritrocitos, plaquetas, monocitos y leucocitos'],
				respuestaCorrecta: 3,
				explicacion: 'Las células mieloides dan origen a varias series celulares sanguíneas, por lo que su daño afecta a múltiples linajes.'
			},
			{
				id: 2,
				tipo: 'verdadero_falso',
				enunciado: 'Las plaquetas son fragmentos celulares derivados de megacariocitos.',
				opciones: ['Verdadero', 'Falso'],
				respuestaCorrecta: 0,
				explicacion: 'Las plaquetas son fragmentos celulares derivados de megacariocitos.'
			},
			{
				id: 3,
				tipo: 'completar',
				enunciado: 'En la imagen del corazón, la cámara [blank1] recibe sangre de los pulmones, mientras que [blank2] la bombea al cuerpo',
				imagen: {
					url: 'assets/images/corazon.jpg',
					alt: 'Diagrama del corazón con cámaras numeradas',
					width: 440,
					height: 320
				},
				blanks: [
					{
						id: 'blank1',
						label: 'Cámara 1',
						opciones: ['aurícula izquierda', 'ventrículo izquierdo', 'aurícula derecha', 'ventrículo derecho'],
						respuestaCorrecta: 0
					},
					{
						id: 'blank2',
						label: 'Cámara 2',
						opciones: ['aurícula izquierda', 'ventrículo izquierdo', 'aurícula derecha', 'ventrículo derecho'],
						respuestaCorrecta: 1
					}
				],
				explicacion: 'La aurícula izquierda recibe sangre oxigenada de los pulmones y el ventrículo izquierdo la bombea al cuerpo.'
			},
			{
				id: 4,
				tipo: 'ordenar',
				enunciado: 'Ordena el recorrido de la sangre a través del corazón y la circulación sistémica:',
				opciones: ['Aurícula izquierda', 'Ventrículo izquierdo', 'Aorta', 'Capilares sistémicos'],
				respuestaCorrecta: [0, 1, 2, 3],
				explicacion: 'La sangre oxigenada pasa de aurícula izquierda a ventrículo izquierdo, aorta y capilares sistémicos.'
			}
		]
	},
	'data/unidad3.json': {
		unidad: 3,
		nombre: 'Integración hormonal',
		preguntas: [
			{
				id: 1,
				tipo: 'verdadero_falso',
				enunciado: 'Los niveles bajos de hormona tiroidea pueden interferir en la ovulación y afectar la fertilidad.',
				opciones: ['Verdadero', 'Falso'],
				respuestaCorrecta: 0,
				explicacion: 'La hormona tiroidea participa en el equilibrio hormonal y su deficiencia puede alterar la ovulación.'
			},
			{
				id: 2,
				tipo: 'multiple_respuesta',
				enunciado: 'Las hormonas peptídicas',
				opciones: ['poseen su receptor en la membrana', 'ejercen efectos por largos períodos de tiempo', 'son hidrosolubles', 'una de sus fuentes de producción es el ovario'],
				respuestaCorrecta: [0, 2],
				explicacion: 'Las hormonas peptídicas actúan sobre receptores de membrana y son hidrosolubles.'
			},
			{
				id: 3,
				tipo: 'multiple',
				enunciado: '¿Qué estructura del sistema endocrino secreta adrenalina en respuesta al estrés agudo?',
				opciones: ['Corteza suprarrenal', 'Médula suprarrenal', 'Tiroides', 'Hipófisis anterior'],
				respuestaCorrecta: 1,
				explicacion: 'La médula suprarrenal secreta catecolaminas como adrenalina.'
			},
			{
				id: 4,
				tipo: 'completar',
				enunciado: 'Durante una respuesta hormonal, la señal puede comenzar en el [blank1] y llegar al [blank2] para modificar la actividad de la célula diana.',
				blanks: [
					{
						id: 'blank1',
						label: 'Etapa inicial',
						opciones: ['receptor', 'núcleo', 'citoplasma'],
						respuestaCorrecta: 0
					},
					{
						id: 'blank2',
						label: 'Etapa final',
						opciones: ['núcleo', 'retículo endoplásmico', 'membrana plasmática'],
						respuestaCorrecta: 0
					}
				],
				explicacion: 'La señal hormonal suele iniciar en un receptor y luego desencadenar cambios intracelulares que alcanzan el núcleo.'
			}
		]
	}
};

const TYPE_LABELS = {
	multiple: 'Única respuesta',
	multiple_respuesta: 'Múltiple respuesta',
	verdadero_falso: 'Verdadero/Falso',
	ordenar: 'Ordenar',
	completar: 'Completar'
};

const state = {
	units: [],
	bank: [],
	activeQuestions: [],
	mode: 'practice',
	selectedUnit: 'all',
	quantity: 5,
	evaluatedResults: [],
	quizStarted: false
};

const dom = {};

document.addEventListener('DOMContentLoaded', initialize);

async function initialize() {
	cacheDom();
	bindEvents();
	state.units = await loadQuestionBank();
	state.bank = state.units.flatMap((unit) => unit.preguntas.map((question) => ({ ...question, unidad: unit.unidad, unidadNombre: unit.nombre })));
	populateConfigOptions();
	renderBankStats();
	resetQuizView();
}

function cacheDom() {
	dom.bankStats = document.getElementById('bankStats');
	dom.configForm = document.getElementById('quizConfigForm');
	dom.unitSelect = document.getElementById('unitSelect');
	dom.quantitySelect = document.getElementById('quantitySelect');
	dom.modeSelect = document.getElementById('modeSelect');
	dom.configHint = document.getElementById('configHint');
	dom.quizStatus = document.getElementById('quizStatus');
	dom.progressBar = document.getElementById('progressBar');
	dom.progressText = document.getElementById('progressText');
	dom.modeSummary = document.getElementById('modeSummary');
	dom.quizTitle = document.getElementById('quizTitle');
	dom.quizIntro = document.getElementById('quizIntro');
	dom.quizArea = document.getElementById('quizArea');
	dom.resultsSummary = document.getElementById('resultsSummary');
	dom.unitStats = document.getElementById('unitStats');
	dom.questionResults = document.getElementById('questionResults');
	dom.resetQuizButton = document.getElementById('resetQuizButton');
	dom.evaluateExamButton = document.getElementById('evaluateExamButton');
	dom.imageModal = document.getElementById('imageModal');
	dom.modalImage = document.getElementById('modalImage');
	dom.modalCaption = document.getElementById('modalCaption');
	dom.modalTitle = document.getElementById('imageModalTitle');
}

function bindEvents() {
	dom.configForm.addEventListener('submit', handleQuizStart);
	dom.unitSelect.addEventListener('change', handleUnitChange);
	dom.quantitySelect.addEventListener('change', updateConfigHint);
	dom.modeSelect.addEventListener('change', updateConfigHint);
	dom.resetQuizButton.addEventListener('click', resetQuizView);
	dom.evaluateExamButton.addEventListener('click', evaluateActiveQuiz);
	dom.quizArea.addEventListener('input', handleQuizInput);
	dom.quizArea.addEventListener('change', handleQuizInput);
	dom.quizArea.addEventListener('click', handleQuizClick);
	dom.questionResults.addEventListener('click', handleQuestionResultsClick);
	dom.quizArea.addEventListener('dragstart', handleQuizDragStart);
	dom.quizArea.addEventListener('dragend', handleQuizDragEnd);
	dom.quizArea.addEventListener('dragover', handleQuizDragOver);
	dom.quizArea.addEventListener('drop', handleQuizDrop);
	dom.imageModal.addEventListener('click', handleModalClick);
	document.addEventListener('keydown', handleGlobalKeydown);
}

async function loadQuestionBank() {
	const loaded = await Promise.all(DATA_FILES.map(async (filePath) => {
		try {
			const response = await fetch(filePath, { cache: 'no-store' });
			if (!response.ok) {
				throw new Error(`HTTP ${response.status}`);
			}
			return await response.json();
		} catch {
			return FALLBACK_DATA[filePath];
		}
	}));

	return loaded
		.filter(Boolean)
		.map((unit) => normalizeUnit(unit))
		.filter((unit) => unit.preguntas.length > 0)
		.sort((a, b) => a.unidad - b.unidad);
}

function normalizeUnit(unit) {
	const normalizedUnit = Number(unit.unidad);
	const preguntas = Array.isArray(unit.preguntas) ? unit.preguntas.map((question, index) => normalizeQuestion(question, normalizedUnit, index)) : [];

	return {
		unidad: normalizedUnit,
		nombre: unit.nombre || `Unidad ${normalizedUnit}`,
		preguntas
	};
}

function normalizeQuestion(question, unitNumber, index) {
	const normalizedType = normalizeType(question.tipo);
	const defaultOptions = normalizedType === 'verdadero_falso' ? ['Verdadero', 'Falso'] : [];
	return {
		...question,
		id: question.id ?? `${unitNumber}-${index + 1}`,
		unidad: question.unidad ?? unitNumber,
		tipo: normalizedType,
		enunciado: question.enunciado ?? '',
		opciones: Array.isArray(question.opciones) && question.opciones.length > 0 ? question.opciones : defaultOptions,
		blanks: Array.isArray(question.blanks)
			? question.blanks.map((blank, blankIndex) => ({
					id: blank.id ?? `blank${blankIndex + 1}`,
					label: blank.label ?? `Blank ${blankIndex + 1}`,
					opciones: Array.isArray(blank.opciones) ? blank.opciones : [],
					respuestaCorrecta: Number(blank.respuestaCorrecta)
				}))
			: [],
		respuestaCorrecta: question.respuestaCorrecta,
		explicacion: question.explicacion ?? '',
		imagen: question.imagen ? {
			url: question.imagen.url,
			alt: question.imagen.alt ?? 'Imagen de apoyo',
			width: question.imagen.width,
			height: question.imagen.height
		} : null
	};
}

function normalizeType(type) {
	const normalized = String(type ?? '').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\s-]+/g, '_');

	if (normalized === 'verdadero_falso' || normalized === 'verdadero_falso') {
		return 'verdadero_falso';
	}

	if (normalized === 'multiple_respuesta' || normalized === 'multiple_respuestas') {
		return 'multiple_respuesta';
	}

	if (normalized === 'completar') {
		return 'completar';
	}

	if (normalized === 'ordenar') {
		return 'ordenar';
	}

	return normalized || 'multiple';
}

function populateConfigOptions() {
	dom.unitSelect.innerHTML = '';
	const allOption = document.createElement('option');
	allOption.value = 'all';
	allOption.textContent = `Todas las unidades (${state.bank.length})`;
	dom.unitSelect.appendChild(allOption);

	state.units.forEach((unit) => {
		const option = document.createElement('option');
		option.value = String(unit.unidad);
		option.textContent = `${unit.nombre} (${unit.preguntas.length})`;
		dom.unitSelect.appendChild(option);
	});

	state.selectedUnit = dom.unitSelect.value;
	updateQuantityOptions();
	updateConfigHint();
}

function updateQuantityOptions() {
	const available = getAvailableQuestions(state.selectedUnit).length;
	const limit = Math.max(1, available);
	const selectedValue = Math.min(Number(dom.quantitySelect.value || 5), limit);

	dom.quantitySelect.innerHTML = '';
	for (let count = 1; count <= limit; count += 1) {
		const option = document.createElement('option');
		option.value = String(count);
		option.textContent = `${count} pregunta${count === 1 ? '' : 's'}`;
		dom.quantitySelect.appendChild(option);
	}

	dom.quantitySelect.value = String(selectedValue);
	state.quantity = selectedValue;
}

function handleUnitChange() {
	state.selectedUnit = dom.unitSelect.value;
	updateQuantityOptions();
	updateConfigHint();
}

function updateConfigHint() {
	const available = getAvailableQuestions(dom.unitSelect.value).length;
	const quantity = Number(dom.quantitySelect.value);
	const mode = dom.modeSelect.value === 'exam' ? 'examen' : 'práctica';
	dom.configHint.textContent = `${available} preguntas disponibles para esta selección. Modo actual: ${mode}.`;
	if (quantity > available) {
		dom.configHint.textContent += ' La cantidad se ajustó al máximo disponible.';
	}
}

function renderBankStats() {
	const totalQuestions = state.bank.length;
	const totalUnits = state.units.length;
	const typeCounts = state.bank.reduce((accumulator, question) => {
		accumulator[question.tipo] = (accumulator[question.tipo] || 0) + 1;
		return accumulator;
	}, {});

	const typeSummary = Object.entries(typeCounts)
		.map(([type, count]) => `${TYPE_LABELS[type] ?? type}: ${count}`)
		.join(' · ');

	dom.bankStats.innerHTML = `
		<article class="stat-pill">
			<span class="stat-pill__label">Unidades cargadas</span>
			<strong class="stat-pill__value">${totalUnits}</strong>
		</article>
		<article class="stat-pill">
			<span class="stat-pill__label">Preguntas totales</span>
			<strong class="stat-pill__value">${totalQuestions}</strong>
		</article>
		<article class="stat-pill" style="grid-column: 1 / -1;">
			<span class="stat-pill__label">Tipos incluidos</span>
			<strong class="stat-pill__value" style="font-size: 1rem; line-height: 1.5;">${escapeHtml(typeSummary || 'Sin datos')}</strong>
		</article>
	`;
}

function getAvailableQuestions(unitValue) {
	if (unitValue === 'all') {
		return [...state.bank];
	}

	const unitNumber = Number(unitValue);
	return state.bank.filter((question) => Number(question.unidad) === unitNumber);
}

function handleQuizStart(event) {
	event.preventDefault();

	const unitValue = dom.unitSelect.value;
	const quantity = Math.max(1, Number(dom.quantitySelect.value) || 1);
	const mode = dom.modeSelect.value;
	const available = getAvailableQuestions(unitValue);

	if (available.length === 0) {
		dom.configHint.textContent = 'No hay preguntas disponibles para esa selección.';
		return;
	}

	state.selectedUnit = unitValue;
	state.mode = mode;
	state.quantity = Math.min(quantity, available.length);
	state.activeQuestions = pickQuestions(available, state.quantity);
	state.quizStarted = true;
	state.evaluatedResults = [];

	renderQuiz();
	updateProgress();
	focusQuizArea();
}

function pickQuestions(questions, quantity) {
	const shuffled = shuffleArray(questions);
	return shuffled.slice(0, quantity);
}

function shuffleArray(items) {
	const copy = [...items];
	for (let index = copy.length - 1; index > 0; index -= 1) {
		const randomIndex = Math.floor(Math.random() * (index + 1));
		[copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
	}
	return copy;
}

function renderQuiz() {
	dom.quizIntro.classList.add('hidden');
	dom.quizTitle.textContent = state.mode === 'exam' ? 'Modo examen' : 'Modo práctica';
	dom.modeSummary.innerHTML = `
		<p class="status-card__label">Estado</p>
		<p class="status-card__value">${escapeHtml(getModeLabel(state.mode))} · ${state.activeQuestions.length} preguntas</p>
	`;
	dom.evaluateExamButton.classList.toggle('hidden', state.mode !== 'exam');

	const cards = state.activeQuestions.map((question, index) => renderQuestionCard(question, index));
	const footer = state.mode === 'exam'
		? `
			<div class="question-card__footer" style="justify-content: flex-end; margin-top: 18px;">
				<button class="button button--primary button--large" id="examSubmitBottom" type="button">Calificar examen</button>
			</div>
		`
		: '';

	dom.quizArea.innerHTML = `${cards.join('')}${footer}`;

	const bottomButton = document.getElementById('examSubmitBottom');
	if (bottomButton) {
		bottomButton.addEventListener('click', evaluateActiveQuiz);
	}

	bindMediaEvents();
}

function renderQuestionCard(question, index) {
	const title = question.tipo === 'completar'
		? `Pregunta ${index + 1}`
		: `${index + 1}. ${escapeHtml(question.enunciado).replace(/\n/g, '<br>')}`;
	const media = question.imagen ? renderQuestionImage(question) : '';
	const body = renderQuestionBody(question);

	return `
		<article class="quiz-card" data-question-id="${escapeAttr(question.id)}" data-question-type="${escapeAttr(question.tipo)}">
			<div class="quiz-card__header">
				<div>
					<p class="quiz-card__title">${title}</p>
				</div>
			</div>
			${media}
			<div class="question-body">${body}</div>
			${state.mode === 'practice'
				? `<div class="question-card__footer"><button class="button button--primary js-submit-question" type="button">Corregir pregunta</button></div>`
				: ''}
			<div class="feedback-box hidden" data-feedback-box data-explanation-container></div>
		</article>
	`;
}

function renderQuestionImage(question) {
	const width = question.imagen.width ? `width="${escapeAttr(String(question.imagen.width))}"` : '';
	const height = question.imagen.height ? `height="${escapeAttr(String(question.imagen.height))}"` : '';

	return `
		<button class="question-media" type="button" data-image-src="${escapeAttr(question.imagen.url)}" data-image-alt="${escapeAttr(question.imagen.alt)}">
			<span class="question-media__frame">
				<img src="${escapeAttr(question.imagen.url)}" alt="${escapeAttr(question.imagen.alt)}" ${width} ${height} loading="lazy">
				<span class="question-media__fallback"></span>
			</span>
			<span class="question-media__hint">Pulsa para ver en tamaño completo</span>
		</button>
	`;
}

function renderQuestionBody(question) {
	switch (question.tipo) {
		case 'multiple':
		case 'verdadero_falso':
			return renderSingleChoice(question);
		case 'multiple_respuesta':
			return renderMultipleChoice(question);
		case 'ordenar':
			return renderOrdering(question);
		case 'completar':
			return renderCompletion(question);
		default:
			return `<p>${escapeHtml(question.enunciado)}</p>`;
	}
}

function renderSingleChoice(question) {
	const optionIndexes = question.tipo === 'verdadero_falso'
		? question.opciones.map((_, index) => index)
		: shuffleArray(question.opciones.map((_, index) => index));
	return `
		<div class="option-list" role="radiogroup" aria-label="${escapeAttr(question.enunciado)}">
			${optionIndexes.map((optionIndex) => renderOptionRow(question, optionIndex, 'radio')).join('')}
		</div>
	`;
}

function renderMultipleChoice(question) {
	const optionIndexes = shuffleArray(question.opciones.map((_, index) => index));
	return `
		<div class="option-list" role="group" aria-label="${escapeAttr(question.enunciado)}">
			${optionIndexes.map((optionIndex) => renderOptionRow(question, optionIndex, 'checkbox')).join('')}
		</div>
	`;
}

function renderOrdering(question) {
	const optionIndexes = shuffleArray(question.opciones.map((_, index) => index));
	const orderOptions = optionIndexes.map((optionIndex) => `
		<li class="order-item" data-order-item data-option-index="${optionIndex}" draggable="true" tabindex="0" aria-grabbed="false">
			<span class="order-item__handle" aria-hidden="true">☰</span>
			<span class="order-item__index">${optionIndex + 1}</span>
			<span class="order-item__text">${escapeHtml(question.opciones[optionIndex])}</span>
		</li>
	`).join('');

	return `
		<div class="order-help">Arrastra las tarjetas para ordenarlas.</div>
		<ol class="order-list" data-order-list>${orderOptions}</ol>
	`;
}

function renderOptionRow(question, optionIndex, type) {
	const inputType = type === 'checkbox' ? 'checkbox' : 'radio';
	return `
		<label class="option-row" data-option-index="${optionIndex}">
			<input type="${inputType}" name="question-${escapeAttr(question.id)}" value="${optionIndex}">
			<span class="option-row__text">${escapeHtml(question.opciones[optionIndex])}</span>
		</label>
	`;
}

function renderCompletion(question) {
	const pieces = question.enunciado.split(/(\[blank\s*\d+\])/gi);

	return `
		<p class="completion-text">
			${pieces.map((piece) => {
				const blankMatch = piece.match(/^\[(blank\s*\d+)\]$/i);
				if (!blankMatch) {
					return escapeHtml(piece).replace(/\n/g, '<br>');
				}

				const normalizedRef = blankMatch[1].toLowerCase().replace(/\s+/g, '');
				const blank = question.blanks.find((item) => String(item.id).toLowerCase().replace(/\s+/g, '') === normalizedRef)
					|| question.blanks[Number(normalizedRef.replace(/^blank/, '')) - 1];
				if (!blank) {
					return escapeHtml(piece);
				}

				return `
					<span class="blank-shell is-pending" data-blank-shell="${escapeAttr(blank.id)}">
						<select class="blank-select" data-blank-select="${escapeAttr(blank.id)}" aria-label="${escapeAttr(blank.label)}">
							<option value="">Seleccionar</option>
							${shuffleArray(blank.opciones.map((_, optionIndex) => optionIndex)).map((optionIndex) => `<option value="${optionIndex}">${escapeHtml(blank.opciones[optionIndex])}</option>`).join('')}
						</select>
					</span>
				`;
			}).join('')}
		</p>
	`;
}

function handleQuestionResultsClick(event) {
	const toggleButton = event.target.closest('[data-explanation-toggle]');
	if (toggleButton) {
		toggleExplanation(toggleButton);
	}
}

function toggleExplanation(button) {
	const container = button.closest('[data-explanation-container]');
	if (!container) {
		return;
	}

	const panel = container.querySelector('[data-explanation-panel]');
	if (!panel) {
		return;
	}

	const isHidden = panel.classList.toggle('hidden');
	button.textContent = isHidden ? 'Explicar' : 'Ocultar explicación';
	button.setAttribute('aria-expanded', String(!isHidden));
}

function renderExplanationBlock(detail, expanded = false) {
	const safeDetail = escapeHtml(detail || 'Sin explicación disponible.');
	return `
		<button class="explain-toggle" type="button" data-explanation-toggle aria-expanded="${expanded ? 'true' : 'false'}">${expanded ? 'Ocultar explicación' : 'Explicar'}</button>
		<div class="explain-panel ${expanded ? '' : 'hidden'}" data-explanation-panel>
			<p class="explain-panel__text">${safeDetail}</p>
		</div>
	`;
}

function handleQuizInput() {
	updateProgress();
}

function handleQuizClick(event) {
	const toggleButton = event.target.closest('[data-explanation-toggle]');
	if (toggleButton) {
		toggleExplanation(toggleButton);
		return;
	}

	const submitButton = event.target.closest('.js-submit-question');
	if (submitButton) {
		const card = submitButton.closest('.quiz-card');
		evaluateQuestionCard(card);
		return;
	}

	const mediaButton = event.target.closest('.question-media');
	if (mediaButton) {
		openImageModal(mediaButton.dataset.imageSrc, mediaButton.dataset.imageAlt);
	}
}

function handleQuizDragStart(event) {
	const item = event.target.closest('[data-order-item]');
	if (!item || !dom.quizArea.contains(item)) {
		return;
	}

	if (event.dataTransfer) {
		event.dataTransfer.effectAllowed = 'move';
		event.dataTransfer.setData('text/plain', item.dataset.optionIndex || '');
	}

	item.classList.add('is-dragging');
	item.setAttribute('aria-grabbed', 'true');
}

function handleQuizDragEnd(event) {
	const item = event.target.closest('[data-order-item]');
	if (!item) {
		return;
	}

	item.classList.remove('is-dragging');
	item.setAttribute('aria-grabbed', 'false');
	dom.quizArea.querySelectorAll('[data-order-item].is-over').forEach((overItem) => overItem.classList.remove('is-over'));
}

function handleQuizDragOver(event) {
	const list = event.target.closest('[data-order-list]');
	if (!list) {
		return;
	}

	const draggingItem = dom.quizArea.querySelector('[data-order-item].is-dragging');
	if (!draggingItem) {
		return;
	}

	event.preventDefault();
	event.dataTransfer.dropEffect = 'move';

	const afterElement = getDragAfterElement(list, event.clientY);
	if (afterElement == null) {
		list.appendChild(draggingItem);
	} else {
		list.insertBefore(draggingItem, afterElement);
	}

	list.querySelectorAll('[data-order-item]').forEach((item, index) => {
		item.classList.toggle('is-over', item === afterElement);
		item.querySelector('.order-item__index').textContent = String(index + 1);
	});
}

function handleQuizDrop(event) {
	const list = event.target.closest('[data-order-list]');
	if (!list) {
		return;
	}

	event.preventDefault();
	list.querySelectorAll('[data-order-item].is-over').forEach((item) => item.classList.remove('is-over'));
	refreshOrderingIndexes(list);
}

function getDragAfterElement(container, cursorY) {
	const draggableElements = [...container.querySelectorAll('[data-order-item]:not(.is-dragging)')];

	return draggableElements.reduce((closest, child) => {
		const box = child.getBoundingClientRect();
		const offset = cursorY - box.top - box.height / 2;
		if (offset < 0 && offset > closest.offset) {
			return { offset, element: child };
		}

		return closest;
	}, { offset: Number.NEGATIVE_INFINITY, element: null }).element;
}

function refreshOrderingIndexes(list) {
	list.querySelectorAll('[data-order-item]').forEach((item, index) => {
		const indexElement = item.querySelector('.order-item__index');
		if (indexElement) {
			indexElement.textContent = String(index + 1);
		}
	});
}

function bindMediaEvents() {
	dom.quizArea.querySelectorAll('.question-media img').forEach((image) => {
		image.addEventListener('error', () => {
			const media = image.closest('.question-media');
			if (media) {
				media.classList.add('is-broken');
				const fallback = media.querySelector('.question-media__fallback');
				if (fallback) {
					fallback.textContent = image.alt || 'Imagen no disponible';
				}
			}
		});
	});
}

function evaluateActiveQuiz() {
	const cards = [...dom.quizArea.querySelectorAll('.quiz-card')];
	if (cards.length === 0) {
		return;
	}

	const results = cards.map((card) => evaluateQuestionCard(card));
	state.evaluatedResults = results;
	renderResults(results);
	updateProgress();
	dom.resultsSummary.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function evaluateQuestionCard(card) {
	const question = state.activeQuestions.find((item) => String(item.id) === String(card.dataset.questionId));
	if (!question) {
		return null;
	}

	const result = buildEvaluation(question, card);
	if (state.mode === 'practice') {
		state.evaluatedResults = state.evaluatedResults.filter((item) => String(item.question.id) !== String(question.id));
		state.evaluatedResults.push(result);
		renderResults(state.evaluatedResults);
	}
	applyResultToCard(card, result);
	return result;
}

function buildEvaluation(question, card) {
	switch (question.tipo) {
		case 'multiple':
		case 'verdadero_falso':
			return buildSingleChoiceResult(question, card);
		case 'multiple_respuesta':
			return buildMultipleChoiceResult(question, card);
		case 'ordenar':
			return buildOrderingResult(question, card);
		case 'completar':
			return buildCompletionResult(question, card);
		default:
			return {
				question,
				isCorrect: false,
				isAnswered: false,
				userSummary: 'Tipo no soportado.',
				correctSummary: ''
			};
	}
}

function buildSingleChoiceResult(question, card) {
	const selected = card.querySelector(`input[name="question-${CSS.escape(String(question.id))}"]:checked`);
	const selectedIndex = selected ? Number(selected.value) : null;
	const correctIndex = getCorrectSingleChoice(question.respuestaCorrecta);
	const isAnswered = selectedIndex !== null;
	const isCorrect = isAnswered && selectedIndex === correctIndex;

	return {
		question,
		isAnswered,
		isCorrect,
		selectedIndex,
		selectedIndexes: isAnswered ? [selectedIndex] : [],
		userSummary: isAnswered ? question.opciones[selectedIndex] : 'Sin respuesta',
		correctSummary: question.opciones[correctIndex] ?? 'Sin respuesta definida',
		detail: question.explicacion
	};
}

function getCorrectSingleChoice(answer) {
	if (typeof answer === 'boolean') {
		return answer ? 0 : 1;
	}

	return Number(answer);
}

function buildMultipleChoiceResult(question, card) {
	const selectedIndexes = [...card.querySelectorAll(`input[name="question-${CSS.escape(String(question.id))}"]:checked`)].map((input) => Number(input.value)).sort((a, b) => a - b);
	const correctIndexes = normalizeIndexArray(question.respuestaCorrecta);
	const isAnswered = selectedIndexes.length > 0;
	const isCorrect = arraysEqual(selectedIndexes, correctIndexes);

	return {
		question,
		isAnswered,
		isCorrect,
		selectedIndexes,
		userSummary: selectedIndexes.length ? selectedIndexes.map((index) => question.opciones[index]).join(' · ') : 'Sin respuesta',
		correctSummary: correctIndexes.map((index) => question.opciones[index]).join(' · '),
		detail: question.explicacion
	};
}

function buildOrderingResult(question, card) {
	const items = [...card.querySelectorAll('[data-order-list] [data-order-item]')];
	const userOrder = items.map((item) => Number(item.dataset.optionIndex));
	const correctOrder = normalizeIndexArray(question.respuestaCorrecta);
	const isAnswered = userOrder.length === correctOrder.length;
	const isCorrect = isAnswered && arraysEqual(userOrder, correctOrder);

	return {
		question,
		isAnswered,
		isCorrect,
		userOrder,
		correctOrder,
		userSummary: isAnswered ? userOrder.map((index) => question.opciones[index]).join(' → ') : 'Sin secuencia completa',
		correctSummary: correctOrder.map((index) => question.opciones[index]).join(' → '),
		detail: question.explicacion
	};
}

function buildCompletionResult(question, card) {
	const blanks = question.blanks.map((blank) => {
		const select = card.querySelector(`[data-blank-select="${CSS.escape(String(blank.id))}"]`);
		const selectedIndex = select && select.value !== '' ? Number(select.value) : null;
		return {
			blank,
			selectedIndex,
			isCorrect: selectedIndex !== null && selectedIndex === Number(blank.respuestaCorrecta)
		};
	});

	const isAnswered = blanks.every((item) => item.selectedIndex !== null);
	const isCorrect = isAnswered && blanks.every((item) => item.isCorrect);

	return {
		question,
		isAnswered,
		isCorrect,
		blanks,
		userSummary: blanks.map((item) => `${item.blank.label}: ${item.selectedIndex !== null ? item.blank.opciones[item.selectedIndex] : 'sin respuesta'}`).join(' · '),
		correctSummary: blanks.map((item) => `${item.blank.label}: ${item.blank.opciones[item.blank.respuestaCorrecta]}`).join(' · '),
		detail: question.explicacion
	};
}

function applyResultToCard(card, result) {
	if (!result) {
		return;
	}

	card.classList.remove('result-card--correct', 'result-card--incorrect', 'result-card--partial');
	card.classList.add(result.isCorrect ? 'result-card--correct' : result.isAnswered ? 'result-card--incorrect' : 'result-card--partial');

	const feedbackBox = card.querySelector('[data-feedback-box]');
	if (feedbackBox) {
		feedbackBox.classList.remove('hidden', 'is-correct', 'is-incorrect', 'is-partial');
		feedbackBox.classList.add(result.isCorrect ? 'is-correct' : result.isAnswered ? 'is-incorrect' : 'is-partial');
		feedbackBox.innerHTML = `
			<p class="feedback-box__title">${result.isCorrect ? 'Respuesta correcta' : 'Respuesta incorrecta'}</p>
			<p class="feedback-box__score">Se puntuó ${result.isCorrect ? '1' : '0'} sobre 1</p>
			${renderExplanationBlock(result.detail || 'Revisa la explicación disponible al final del resultado.')}
		`;
	}

	if (result.question.tipo === 'multiple' || result.question.tipo === 'verdadero_falso') {
		markChoiceRows(card, result, false);
	}

	if (result.question.tipo === 'multiple_respuesta') {
		markChoiceRows(card, result, true);
	}

	if (result.question.tipo === 'completar') {
		result.blanks.forEach((item) => {
			const shell = card.querySelector(`[data-blank-shell="${CSS.escape(String(item.blank.id))}"]`);
			const select = card.querySelector(`[data-blank-select="${CSS.escape(String(item.blank.id))}"]`);
			if (shell && select) {
				shell.classList.remove('is-correct', 'is-incorrect', 'is-pending');
				if (item.isCorrect) {
					shell.classList.add('is-correct');
				} else {
					shell.classList.add('is-incorrect');
				}
				select.disabled = true;
			}
		});
	}

	if (result.question.tipo === 'ordenar') {
		const items = [...card.querySelectorAll('[data-order-list] [data-order-item]')];
		items.forEach((item, index) => {
			item.classList.remove('is-correct', 'is-incorrect', 'is-dragging', 'is-over');
			item.setAttribute('draggable', 'false');
			if (result.correctOrder[index] === Number(item.dataset.optionIndex)) {
				item.classList.add('is-correct');
			} else {
				item.classList.add('is-incorrect');
			}
		});
	}

	if (state.mode === 'practice') {
		card.querySelectorAll('input, select').forEach((field) => {
			field.disabled = true;
		});
		const submitButton = card.querySelector('.js-submit-question');
		if (submitButton) {
			submitButton.disabled = true;
			submitButton.textContent = 'Corregida';
		}
	}
}

function markChoiceRows(card, result, allowMultipleCorrect) {
	const correctIndexes = result.question.tipo === 'multiple' || result.question.tipo === 'verdadero_falso'
		? [getCorrectSingleChoice(result.question.respuestaCorrecta)]
		: normalizeIndexArray(result.question.respuestaCorrecta);
	const selectedIndexes = result.selectedIndexes || ([]);
	card.querySelectorAll('.option-row').forEach((row) => {
		const optionIndex = Number(row.dataset.optionIndex);
		row.classList.remove('is-correct', 'is-incorrect');
		if (correctIndexes.includes(optionIndex)) {
			row.classList.add('is-correct');
		}
		if (selectedIndexes.includes(optionIndex) && !correctIndexes.includes(optionIndex)) {
			row.classList.add('is-incorrect');
		}
		if (!allowMultipleCorrect && selectedIndexes.length === 1 && selectedIndexes[0] === optionIndex && !correctIndexes.includes(optionIndex)) {
			row.classList.add('is-incorrect');
		}
	});
}

function renderResults(results) {
	const safeResults = results.filter(Boolean);
	const total = safeResults.length;
	const correct = safeResults.filter((result) => result.isCorrect).length;
	const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
	const unanswered = safeResults.filter((result) => !result.isAnswered).length;

	dom.resultsSummary.classList.remove('empty-state');
	dom.resultsSummary.innerHTML = `
		<div class="summary-grid">
			<article class="summary-card">
				<p class="summary-card__label">Puntaje</p>
				<strong class="summary-card__value">${correct}/${total}</strong>
			</article>
			<article class="summary-card">
				<p class="summary-card__label">Precisión</p>
				<strong class="summary-card__value">${percent}%</strong>
			</article>
			<article class="summary-card">
				<p class="summary-card__label">Respondidas</p>
				<strong class="summary-card__value">${total - unanswered}/${total}</strong>
			</article>
			<article class="summary-card">
				<p class="summary-card__label">Estado</p>
				<strong class="summary-card__value">${unanswered > 0 ? 'Hay preguntas pendientes' : 'Quiz completo'}</strong>
			</article>
		</div>
	`;

	dom.unitStats.innerHTML = renderUnitStats(results);
	dom.questionResults.innerHTML = safeResults.map((result) => renderResultCard(result)).join('');
}

function renderUnitStats(results) {
	const byUnit = results.reduce((accumulator, result) => {
		const unit = Number(result.question.unidad);
		if (!accumulator[unit]) {
			accumulator[unit] = {
				unit,
				total: 0,
				correct: 0,
				name: result.question.unidadNombre || `Unidad ${unit}`
			};
		}

		accumulator[unit].total += 1;
		if (result.isCorrect) {
			accumulator[unit].correct += 1;
		}
		return accumulator;
	}, {});

	return Object.values(byUnit)
		.sort((a, b) => a.unit - b.unit)
		.map((entry) => {
			const percent = entry.total > 0 ? Math.round((entry.correct / entry.total) * 100) : 0;
			return `
				<article class="unit-card">
					<h3 class="unit-card__title">${escapeHtml(entry.name)}</h3>
					<p class="unit-card__meta">${entry.correct}/${entry.total} correctas · ${percent}%</p>
				</article>
			`;
		})
		.join('');
}

function renderResultCard(result) {
	const statusClass = result.isCorrect ? 'result-card--correct' : result.isAnswered ? 'result-card--incorrect' : 'result-card--partial';
	const title = result.question.enunciado;
	const detail = result.detail || '';
	const correctIndexes = result.question.tipo === 'multiple' || result.question.tipo === 'verdadero_falso'
		? [getCorrectSingleChoice(result.question.respuestaCorrecta)]
		: normalizeIndexArray(result.question.respuestaCorrecta);
	const selectedIndexes = result.selectedIndexes || [];
	const renderChipSet = (indexes, sourceOptions, compareIndexes = []) => indexes.length
		? indexes.map((index) => {
			const label = sourceOptions[index] ?? 'Sin respuesta';
			const chipClass = compareIndexes.includes(index) ? 'answer-chip--correct' : 'answer-chip--incorrect';
			return `<span class="answer-chip ${chipClass}">${escapeHtml(label)}</span>`;
		}).join(' ')
		: '<p class="result-card__meta">Sin respuesta</p>';

	let body = '';
	if (result.question.tipo === 'completar') {
		body = `
			<div>
				<p class="result-card__meta">Tu respuesta</p>
				${result.blanks.map((item) => `
					<span class="answer-chip ${item.isCorrect ? 'answer-chip--correct' : 'answer-chip--incorrect'}">${escapeHtml(item.selectedIndex !== null ? item.blank.opciones[item.selectedIndex] : 'Sin respuesta')}</span>
				`).join('')}
			</div>
			<div>
				<p class="result-card__meta">Correcto</p>
				${result.blanks.map((item) => `<span class="answer-chip answer-chip--correct">${escapeHtml(item.blank.opciones[item.blank.respuestaCorrecta])}</span>`).join('')}
			</div>
		`;
	} else if (result.question.tipo === 'ordenar') {
		body = `
			<div>
				<p class="result-card__meta">Tu orden</p>
				${result.userOrder.map((index, position) => `<span class="answer-chip ${result.correctOrder[position] === index ? 'answer-chip--correct' : 'answer-chip--incorrect'}">${escapeHtml(result.question.opciones[index])}</span>`).join('')}
			</div>
			<div>
				<p class="result-card__meta">Orden correcto</p>
				${result.correctOrder.map((index) => `<span class="answer-chip answer-chip--correct">${escapeHtml(result.question.opciones[index])}</span>`).join('')}
			</div>
		`;
	} else {
		body = `
			<div>
				<p class="result-card__meta">Tu respuesta</p>
				${renderChipSet(selectedIndexes, result.question.opciones, correctIndexes)}
			</div>
			<div>
				<p class="result-card__meta">Correcto</p>
				${correctIndexes.map((index) => `<span class="answer-chip answer-chip--correct">${escapeHtml(result.question.opciones[index])}</span>`).join('')}
			</div>
		`;
	}

	return `
		<article class="result-card ${statusClass}">
			<h3 class="result-card__title">${escapeHtml(title)}</h3>
			<div class="result-card__body">
				${body}
			</div>
		</article>
	`;
}

function updateProgress() {
	const total = state.activeQuestions.length;
	const answered = state.activeQuestions.reduce((count, question) => count + (isQuestionAnswered(question) ? 1 : 0), 0);
	const percent = total > 0 ? Math.round((answered / total) * 100) : 0;

	dom.progressBar.style.width = `${percent}%`;
	dom.progressText.textContent = `${answered}/${total} respondidas`;
}

function isQuestionAnswered(question) {
	const card = dom.quizArea.querySelector(`[data-question-id="${CSS.escape(String(question.id))}"]`);
	if (!card) {
		return false;
	}

	switch (question.tipo) {
		case 'multiple':
		case 'verdadero_falso':
			return Boolean(card.querySelector(`input[name="question-${CSS.escape(String(question.id))}"]:checked`));
		case 'multiple_respuesta':
			return card.querySelectorAll(`input[name="question-${CSS.escape(String(question.id))}"]:checked`).length > 0;
		case 'ordenar':
			return [...card.querySelectorAll('[data-order-input]')].every((select) => select.value !== '');
		case 'completar':
			return question.blanks.every((blank) => {
				const select = card.querySelector(`[data-blank-select="${CSS.escape(String(blank.id))}"]`);
				return select && select.value !== '';
			});
		default:
			return false;
	}
}

function resetQuizView() {
	state.activeQuestions = [];
	state.evaluatedResults = [];
	state.quizStarted = false;
	state.mode = dom.modeSelect?.value || 'practice';
	dom.quizTitle.textContent = 'Esperando configuración';
	dom.modeSummary.innerHTML = `
		<p class="status-card__label">Estado</p>
		<p class="status-card__value">Sin quiz iniciado</p>
	`;
	dom.quizArea.innerHTML = '';
	dom.quizIntro.classList.remove('hidden');
	dom.resultsSummary.classList.add('empty-state');
	dom.resultsSummary.innerHTML = `
		<h3>Aún no hay resultados</h3>
		<p>Cuando termines una práctica o corrijas el examen, aquí verás tu desempeño.</p>
	`;
	dom.unitStats.innerHTML = '';
	dom.questionResults.innerHTML = '';
	dom.progressBar.style.width = '0%';
	dom.progressText.textContent = '0/0 respondidas';
	dom.evaluateExamButton.classList.add('hidden');
	updateConfigHint();
}

function focusQuizArea() {
	dom.quizArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function getModeLabel(mode) {
	return mode === 'exam' ? 'Examen' : 'Práctica';
}

function openImageModal(src, alt) {
	if (!src) {
		return;
	}

	dom.modalImage.src = src;
	dom.modalImage.alt = alt || 'Imagen ampliada';
	dom.modalCaption.textContent = alt || '';
	dom.modalTitle.textContent = alt || 'Imagen ampliada';
	dom.imageModal.classList.add('is-open');
	dom.imageModal.setAttribute('aria-hidden', 'false');
}

function closeImageModal() {
	dom.imageModal.classList.remove('is-open');
	dom.imageModal.setAttribute('aria-hidden', 'true');
	dom.modalImage.src = '';
	dom.modalImage.alt = '';
	dom.modalCaption.textContent = '';
}

function handleModalClick(event) {
	if (event.target.matches('[data-close-modal]')) {
		closeImageModal();
	}
}

function handleGlobalKeydown(event) {
	if (event.key === 'Escape' && dom.imageModal.classList.contains('is-open')) {
		closeImageModal();
	}
}

function normalizeIndexArray(answer) {
	if (!Array.isArray(answer)) {
		return [];
	}

	return answer.map((item) => Number(item));
}

function arraysEqual(left, right) {
	if (left.length !== right.length) {
		return false;
	}

	return left.every((value, index) => value === right[index]);
}

function escapeHtml(value) {
	return String(value)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

function escapeAttr(value) {
	return escapeHtml(value).replace(/`/g, '&#96;');
}
