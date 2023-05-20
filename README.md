# Magic 8 Ball Game

This is a simple JavaScript project that simulates the classic "Magic 8 Ball" fortune-telling toy. It's designed to help me learn the basic concepts of JavaScript programming.

Try the Magic 8 Ball game [here](https://sadeq-yaqobi.github.io/magic-8-ball-game/).

## table of content

- [installation](#installation)
- [Usage](#Usage)
- [How the JavaScript Code Works](#how-the-javascript-code-works)
- [Contributing](#Contributing)
- [Contact](#Contact)
## Installation

1. Clone the repository:

   `git clone https://github.com/sadeq-yaqobi/magic-8-ball-game.git`.
2. Navigate to the project directory:

    `cd magic-8-ball-game`
## Usage
1. Open the `index.html` file in your web browser.

2. Enter your question in the input field and click the "send" button.

3. The Magic 8 Ball will randomly generate an answer and display it on the screen.

## How the JavaScript Code Works

The JavaScript code in this project generates random answers from the Magic 8 Ball and displays them on the screen. Here's a brief overview:

1. **DOM Selection**: The code selects necessary HTML elements using the DOM API, such as the input field and button.

2. **Event Listener**: An event listener is attached to the button element to trigger the answer generation.

3. **Answer Array**: An array holds possible answers that the Magic 8 Ball can provide.

4. **Random Selection**: A random number is generated using `Math.random()`, scaled to match the array length, and used to select an answer.

5. **Displaying the Answer**: The selected answer is shown on the screen by updating the text content of a specific HTML element.

This allows users to enter a question, click the button, and see a randomly generated answer. For more details, please refer to the JavaScript code in the project repository.


## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch:

    `git checkout -b my-feature`

3. Make your changes and commit them:

    `git commit -m "Add some feature"`

4. Push to the branch:

    `git push origin my-feature`
5. Open a pull request on GitHub.

