# Dorel Juvenile SPA
## Powered by Polymer 2 Web Components

### About Dorel Juvenile
Dorel Juvenile is the world's leading juvenile products company. Our products are available in more than 100 countries. All of our talented employees share the same mission: to Care for Precious Life. We help families live carefree lives by providing them with juvenile products that rank highest in consumer reviews. That's what sets our products apart; durable, helpful and caring.

### This repository

This repository holds the codebase for the Dorel Juvenile SPA Front-end. It serves as a starting point for all Dorel Juvenile's branded websites. Together with a Wordpress instance the Dorel Juvenile SPA stands at the core of what is needed to run a white label for Dorel.

### Web Components
Web Components are a set of features currently being added by the W3C to the HTML and DOM specifications that allow for the creation of reusable widgets or components in web documents and web applications. The intention behind them is to bring component-based software engineering to the World Wide Web. The components model allows for encapsulation and interoperability of individual HTML elements.

### The Polymer Project

[From the Polymer Project website:](https://www.polymer-project.org/about)

Our mission is to make life better for users and developers, by helping developers unlock the web platform’s full potential and by spurring the web platform to evolve and improve.

In pursuit of this mission, we work on libraries, tools and patterns to help developers build modern Progressive Web Apps, taking full advantage of cutting-edge platform features like Web Components, Service Workers and HTTP/2.

## Installation

### Prerequisites

The SPA is hosted from it's own container so all you need is Docker:

[https://www.docker.com/docker-windows](https://www.docker.com/docker-windows)

[https://www.docker.com/docker-mac](https://www.docker.com/docker-mac)

### Setup

##### Checkout the code

    git clone https://github.com/dorel/polymer-spa-dorel-juvenile.git dorel-spa
    
##### Build the container

Inside the new dorel-spa folder:

    docker build -f Dockerfile_dev -t dorel-spa .

##### Run the container

Adjust your dorel-spa path accordingly

    docker run -d --name dorel-spa -p 80:80 -v /Users/username/Documents/dorel-spa:/code dorel-spa
    
Windows:

    docker run -d --name dorel-spa -p 80:80 -v C:\\Users\username\Documents\dorel-spa:/code dorel-spa
    
##### Install dependencies
    
    docker exec -it dorel-spa /bin/bash -c "yarn install"
    
##### Compile the application
    
    docker exec -it dorel-spa /bin/bash -c "yarn build"
    
##### Stop the container
    
    docker stop dorel-spa
    
##### Start the container
    
    docker start dorel-spa
    
##### Show the console log
    
    docker logs -f dorel-spa
