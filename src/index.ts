import "reveal.js/plugin/highlight/monokai.css";
import "reveal.js/plugin/highlight/highlight.esm";

import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Notes from "reveal.js/plugin/notes/notes.esm.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";

import Gamepad from "./plugin/gamepad";

let deck = new Reveal({
	plugins: [
		Markdown,
		Notes,
		Highlight,
		Gamepad({
			threshold: 0.85,
			debounceTime: 500,
			invertAxis: false,
			rotateAxis: true,
		}),
	],
});

deck.initialize({
	progress: false,
	controls: false,
	// slideNumber: "c/t",
	showSlideNumber: "all",
	hashOneBasedIndex: true,
	hash: true,
	history: true,
});
