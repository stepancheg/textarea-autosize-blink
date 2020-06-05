import { Express } from "express";
import { TextareaAutosizeBlink } from "../shared/textarea_autosize_blink";
import * as React from "react";
import { renderToString } from "react-dom/server";

export function textarea_autosize_blink_setup_express(app: Express): void {
  app.get("/textarea-autosize-blink", (req, res) => {
    res.send(
      "<!DOCTYPE html>" +
        renderToString(
          <html>
            <head>
              <title>Jumping textarea-autosize</title>
              <link
                rel="stylesheet"
                href="https://unpkg.com/bootstrap@4.5.0/dist/css/bootstrap.min.css"
              />
            </head>
            <body style={{ margin: 10 }}>
              <script
                crossOrigin="true"
                src="https://unpkg.com/react@16.13.1/umd/react.production.min.js"
              ></script>
              <script
                crossOrigin="true"
                src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js"
              ></script>
              <script
                crossOrigin="true"
                src="https://unpkg.com/react-bootstrap@1.0.1/dist/react-bootstrap.min.js"
              >
                {" "}
              </script>

              <div id="test-textarea-autosize-here">
                <TextareaAutosizeBlink />
              </div>

              <script
                type="text/javascript"
                src={"/client/textarea_autosize_blink.bundle.js"}
              />
            </body>
          </html>
        )
    );
  });
}
