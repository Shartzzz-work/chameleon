export default {
	extends: [
		"stylelint-config-standard", // Базовый набор стандартных правил Stylelint
	],
	plugins: [
		"stylelint-selector-bem-pattern", // Плагин для проверки BEM-стиля в именах классов
		"stylelint-order", // Плагин для проверки порядка CSS-свойств
	],
	rules: {
		"selector-max-id": 0, // Запрет использования селекторов по ID (#), чтобы избежать специфичности и сложностей в переопределении
		"max-nesting-depth": 3, // Максимальная вложенность селекторов — ограничивает глубину вложенности для лучшей читаемости
		"block-no-empty": true, // Запрет пустых CSS-блоков (без правил внутри)
		"selector-class-pattern": null, // Отключаем дефолтное ограничение на имена классов, так как используем BEM плагин
		"declaration-no-important": true, // Запрет использования !important — чтобы не ломать каскад и не создавать "магические" приоритеты
		"property-no-vendor-prefix": true, // Запрет префиксов у CSS-свойств (например, -webkit-) — современные браузеры обычно не требуют их
		"value-no-vendor-prefix": true, // Запрет префиксов в значениях CSS-свойств (например, -webkit-flex)
		"color-hex-length": "short", // Цвета в шестнадцатеричном формате должны быть в коротком варианте (#fff вместо #ffffff)
		"color-named": "never", // Запрет на использование именованных цветов (например, red), только hex или rgb
		"order/properties-alphabetical-order": true, // Свойства в CSS должны быть упорядочены по алфавиту — улучшает читабельность
		"length-zero-no-unit": true, // Запрет указывать единицы у значений с нулём (margin: 0, не margin: 0px)
		"no-duplicate-at-import-rules": true, // Запрет дублирования @import правил
		"at-rule-no-unknown": [
			true,
			{
				// Запрет неизвестных @-правил, но исключаем некоторые (например, для Tailwind)
				ignoreAtRules: ["extend", "tailwind", "apply"],
			},
		],
		"plugin/selector-bem-pattern": {
			// Настройки плагина для проверки имен BEM классов
			preset: "bem",
			componentName: "[a-z0-9\\-]+", // Формат имени блока: только строчные буквы, цифры и дефисы
			componentSelectors: {
				initial: "^\\.{componentName}(?:__[a-z0-9\\-]+)?(?:--[a-z0-9\\-]+)?$", // Блок, элемент и модификатор
				combined:
					"^\\.combined-{componentName}(?:__[a-z0-9\\-]+)?(?:--[a-z0-9\\-]+)?$", // Комбинированные блоки
				utility: "^\\.u-[a-z0-9\\-]+$", // Утилитарные классы (опционально)
				state: "^\\.is-[a-z0-9\\-]+$", // Классы состояния (is-*)
				has: "^\\.has-[a-z0-9\\-]+$", // Классы наличия (has-*)
			},
		},
	},
	ignoreFiles: [
		"**/node_modules/**",
		"**/dist/**",
		"**/*.min.css",
		"**/*.min.scss",
	], // Игнорируем скомпилированные файлы и node_modules
};
