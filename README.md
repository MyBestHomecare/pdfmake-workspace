# pdfmake-workspace

## Development

### Preparing the environment

1. Clone the workspace repository along with its submodule repository:
    ```sh
    git clone --recurse-submodules git@github.com:MyBestHomecare/pdfmake-workspace.git
    ```
2. Open the project in VS Code:
    ```sh
    code pdfmake-workspace
    ```
3. Install the recommended workspace extensions. To install, you can also run the following in the `ctrl/cmd + P` menu:
    ```
    ext install ritwickdey.liveserver esbenp.prettier-vscode effectful.debugger
    ```
4. Open up a terminal in the workspace directory and install the node dependencies:
    ```sh
    npm install
    ```

### Running the code

1. From the workspace directoy, navigate to the [`src/`](src/) directory and modify the [`index.js`](src/index.js) file or any of the document definitions inside [`src/docDefinition`](src/docDefinition/). You can also create local-only docDefinitions by creating files that end in `.local.js`. So for example you could have: `src/docDefinition/myTest.local.js`. Keep in mind that the `.local.js` files will be ignored by `git`.

    > You can use the official [`pdfmake` playground](http://pdfmake.org/playground.html) and its [documentation](https://pdfmake.github.io/docs/0.1/) to familiarize yourself with the docDefinition syntax.

    From here you have 2 options:
    
    #### 1. Using the NPM script:
    1. In the workspace directory, simply run:
        ```sh
        npm start
        ```
    
    #### 2. Using the Live Server extension:
    1. To quickly generate a PDF document, in the workspace directory run:
        ```sh
        npm run code:quick
        ```
        Alternatively, to keep a node server running that watches for changes, run:
        ```sh
        npm run code:watch
        ```
    2. Finally, click on the "Go Live" button from the status bar. Alternatively, open the command pallette (`ctrl/cmd + shift + P`) and type:
        ```
        Live Server: Open With Live Server
        ```
        This requires the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension to be installed. The PDF viewer will be running on [`localhost:8080`](http://127.0.0.1:8080/) by default. This endpoint is rendering the [`out/index.html`](out/index.html) file which opens the last generated PDF file ([`out/last.pdf`](out/last.pdf)). The configuration for the live server exists in [`.vscode/settings.json`](.vscode/settings.json). To manually see a history of previously generated PDFs, navigate to [`out/history`](out/history/).

### Debugging the code

1. Either use the `Custom (Basic)` or the `Custom (Effectful)` configurations. The latter is preferred as it allows stepping back as well as stepping forward. It requires the [Effectful](https://marketplace.visualstudio.com/items?itemName=effectful.debugger) extension to be installed. After the code execution is finished, the resulting PDF file can be accessed either via the [live server](http://127.0.0.1:8080/) or via navigating to the [`out/`](out/) directory.
