​# Webpack
### Node Modules
- A node module that allows other node modules to be used in the browser.
- Packs code into 1 file where `exports`/`imports`/`requires` are not necessary.

1. Manually do what webpack does.
2. Copy and paste the modules together into one file.
3. Run the file in the browser.

### Install webpack
- Needs 2 packages (or node modules) so it can run in the terminal.
- `webpack`: The main module with functions and classes
- `webpack-cli`: A controller that allows webpack to be used in the command line
  
1. View the webpack website https://webpack.js.org/.
2. `npm install webpack webpack-cli`

### Use webpack
- Bundles your files together and categorizes accordingly.
- Automatically packs modules connected to `index.js` in the `src` folder.
  
1. Create `src` folder and create `index.js` inside.
2. Copy the code of the original controller module.
3. Paste it into `index.js`.
4. Fix the import paths.
5. Run `npx webpack`.
   
### Running webpack
- Node Package eXecute.
- Conmes bundled with NPM.
- The packed (or bundled) file is generated in the dist folder as `main.js`.

1. Connect `main.js `to the HTML file instead of the original module.
2. Check if the node modules now run in the browser.