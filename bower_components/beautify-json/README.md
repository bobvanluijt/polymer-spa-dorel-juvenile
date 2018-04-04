# &lt;beautify-json&gt;

Polymer 1.2 element element to output json in a human readable way.

Check out the [demo](http://mrpharderwijk.github.io/beautify-json/)

## Setup
Install with bower or [download the zip](https://github.com/mrpharderwijk/beautify-json/archive/v1.0.0.zip)
```bash
bower install --save mrpharderwijk/beautify-json
```
Import it in your code
```html
<!-- for relative paths -->
<link rel="import" href="../bower_components/beautify-json/beautify-json.html">
```

## Usage
To show the json output without syntax highlighting (where JSON_OBJ is your json object):

```html
  <beautify-json
    output="JSON_OBJ"></beautify-json>
```

To show the json output with syntax highlighting, use the following markup:

```html
  <beautify-json
    output="JSON_OBJ"
    highlight></beautify-json>
```

## Playing With Your Element

If you wish to work on your element in isolation, we recommend that you use
[Polyserve](https://github.com/PolymerLabs/polyserve) to keep your element's
bower dependencies in line. You can install it via:

    npm install -g polyserve

And you can run it via:

    polyserve

Once running, you can preview your element at
`http://localhost:8080/components/beautify-json/`.

## Contribute
Feel free to extend it or propose new functionality
