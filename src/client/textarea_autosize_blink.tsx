import {TextareaAutosizeBlink} from "../shared/textarea_autosize_blink";
import * as React from "react";
import * as ReactDOM from "react-dom";

setTimeout(() => {
    ReactDOM.render( <TextareaAutosizeBlink />, document.getElementById("test-textarea-autosize-here")!);
}, 500);
