import {EditorState} from "@codemirror/state";
import {EditorView, keymap} from "@codemirror/view";
import {basicSetup} from "codemirror";
import {indentWithTab} from "@codemirror/commands";
import {css} from "@codemirror/lang-css";

export default async function initCssEditor(elem, doc) {
    EditorState.readOnly = true;

    return new EditorView({
        state: EditorState.create({
            doc,
            extensions: [
                basicSetup,
                keymap.of([indentWithTab]),
                css(),
                EditorState.changeFilter.of(() => false)
            ],
            readOnly: true
        }),

        parent: elem
    });
}