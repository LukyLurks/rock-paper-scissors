# Rock Paper Scissors

RPS against the computer made as part of [The Odin Project's web development 101
course](https://www.theodinproject.com/courses/foundations/lessons/rock-paper-scissors),
to get familiar with JavaScript and the DOM.

![Screenshot of a game](./screenshot.png)

## Usage

- Visit [the game's page](https://lukylurks.github.io/rock-paper-scissors/)
- Play to your heart's content

## Structure

The project follows the structure explained in [this MDN
article](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files).
- [scripts](./scripts/): things that make the game work. [main.js](./scripts/main.js) controls the application, and depends on utilities
from [rps-lib.js](./scripts/rps-lib.js) accessed through
[require.js](./scripts/require.js) from https://requirejs.org/, in an attempt to
keep the code modular.
- [styles](./styles/): [Eric Mayer's CSS
  reset](https://meyerweb.com/eric/tools/css/reset/) and my own CSS
- [index.html](./index.html): all the HTML code

## License

This project is licensed under the [MIT license](./LICENSE).
