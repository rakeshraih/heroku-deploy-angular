# Deploy angular project(npm) to Heroku

Need Heroku CLI and few changes to current setup,
package.json 
1. Move important dev dependencies to dependencies section, for Heroku to install them, Angular CLI and type script dependencies

2. Add 'preinstall' ng build --aot --prod, build to create /dist directory in prod mode, --aot is type of compilation, just in time(ahead of time=> aot).

3. Add section called engine and mention node,npm version

4. Adding server.js to pick as part of start-up cmd

server.js under src/
1. To install express, to create node server using express and creating server.js 
