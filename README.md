# Polymer SPA - Dorel Juvenile

This template is a starting point for all Dorel Juvenile's branded websites. Together with a Wordpress container the Polymer SPA stands at the core of what is needed to run a white label for Dorel.

### Setup

##### Requirements

You will need a running Wordpress instance to make all ajax requests work. In this tutorial we use:

    http://wppolymer.dev

##### Prerequisites

- Polymer CLI: Read installing instructions on the [polymer website](https://www.polymer-project.org/1.0/start/toolbox/set-up).
- Bower: run `$ bower install` on initial setup

Clone this repository:
    
    git clone git@github.com:dorel/polymer-spa-dorel-juvenile.git

Open app-config.js and set the right config values for your local environments. This would normally be done by our docker setup, which automates this process.

### Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app:

    `polymer serve --open`


### Build

This command performs HTML, CSS, and JS minification on the application
dependencies, and generates a service-worker.js file with code to pre-cache the
dependencies based on the entrypoint and fragments specified in `polymer.json`.
The minified files are output to the `build/unbundled` folder, and are suitable
for serving from a HTTP/2+Push compatible server.

In addition the command also creates a fallback `build/bundled` folder,
generated using fragment bundling, suitable for serving from non
H2/push-compatible servers or to clients that do not support H2/Push.

    `grunt build`

### Preview the build

This command serves the minified version of the app at `http://localhost:8080`
in an unbundled state, as it would be served by a push-compatible server:

    `polymer serve build/unbundled`

This command serves the minified version of the app at `http://localhost:8080`
generated using fragment bundling:

    `polymer serve build/bundled`

### Run tests

This command will run
[Web Component Tester](https://github.com/Polymer/web-component-tester) against the
browsers currently installed on your machine.

    polymer test

### Adding a new view

You can extend the app by adding more views that will be demand-loaded
e.g. based on the route, or to progressively render non-critical sections
of the application.  Each new demand-loaded fragment should be added to the
list of `fragments` in the included `polymer.json` file.  This will ensure
those components and their dependencies are added to the list of pre-cached
components (and will have bundles created in the fallback `bundled` build).
