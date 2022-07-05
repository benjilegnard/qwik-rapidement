import 'reveal.js/plugin/highlight/monokai.css';
import 'reveal.js/plugin/highlight/highlight.esm';

import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';


let deck = new Reveal({
   plugins: [ Markdown, Notes, Highlight ]
});

deck.initialize({
   progress: false,
   controls: false,
   slideNumber: "c/t",
   showSlideNumber: 'all',
   hashOneBasedIndex: true,
   hash: true,
   history: true,
});
