# React and Tailwind Project

This project explores the React library by creating modules (such as a dynamic text, a responsive input, and a stylized button), and the webpage was styled with the utility framework Tailwind.

**Used technologies:**

<img src="public/react.png" alt="React icon" width="40"/><img src="public/tailwind.png" alt="Tailwing CSS icon" width="40"/><img src="public/vite.png" alt="Vite icon" width="40"/>

## Components

**Text:** The text component displays the text typed in the input component. Furthermore, a caret is displayed in the component whether user-end clicks on the input or not.

**Input:** It is a normal input but its placeholder is responsive.

**Button:** The remarkable button component contains a simple state that increases a number by 1 on each click.

## Run in Your Local Repository

### Clone

First, you have to fork this remote repository, and then clone the forked repository. To clone it, you have to navigate to the desired directory where you want to clone the repository, using `cd`. Then, type the following command line:

```
git clone https://github.com/<your-username>/<name-of-the-repository>.git
```

Finally, open the cloned repository with the command `cd <name-of-the-repository>`

### Install dependencies

To install all necessary dependencies, you need to already have installed Node.js (or any package manager). This React project was created based on the build tool Vite; for that reason, run the following command to install the Vite's dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

You also have to install Tailwind's dependencies using the following command:

```bash
npm install tailwindcss @tailwindcss/vite # or yarn / pnpm
```

### Start the development server

Just run this command line:

```bash
npm run dev # or yarn / pnpm
```

Then press the key `o` or click on the local link `http://localhost:5173/`

## License

<a href="https://choosealicense.com/licenses/apache-2.0/" target="_blank" rel="noopener noreferrer">Apache 2.0</a>

## Author

Diego Gonzalez
