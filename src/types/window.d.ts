declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
	}
	interface Navigator {
		browserLanguage: string;
	}
}
export {};
