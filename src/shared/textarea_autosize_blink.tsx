import * as React from "react";
import TextareaAutosize from "react-textarea-autosize";

// https://github.com/Andarist/react-textarea-autosize/issues/275

export interface TextareaAutosizeBlinkProps {}

export const TextareaAutosizeBlink = (props: TextareaAutosizeBlinkProps) => {
    const lines = ["foo", "bar", "baz", "qux", "quux"];
    return (
        <React.Fragment>
            <p>
                This page renders <React.Fragment> </React.Fragment>
                <code>{`<TextareaAutosize defaultValue={[...]} rows={${lines.length}}/>`}</code>
                <React.Fragment> </React.Fragment> on the server,
                and then re-renders exactly the same textarea on the client
                with 500ms delay to make blinking visible.
            </p>
            <div>
                <TextareaAutosize defaultValue={lines.join("\n")} rows={lines.length} />
            </div>
        </React.Fragment>
    );
};
