# Project overview

### My approach and design choices
I approached this exercise as a full-scale application and developed it taking into account
potential future extensions, perfomance, user experience, and of course code quality.

I picked React for its declarative approach, built-in optimizations, component reusability, cross-platform support,
vast variety of features, and a big community with the help of which it's able to progress fast.

I chose TypeScript because typing system helps with code management and provides simplicity to those who read the code.

I also decided to use Redux for state management and Redux Saga as a middleware so the components
wouldn't become overloaded with logic that belongs to a different place. Additionally, these instruments are useful
in terms of scalability. 

Among other libraries I used:
- Create React App to set up the application faster
- React Router for SPA and therefore perfomance
- Material UI kit for better and effortless UI
- Sass modules, because they provide encapsulated styles and convinient Sass syntax
- Axios for more convenient API usage
- ESlint and Prettier for maintaining consistency in the code

### How long did it take me to complete the exercise
It took me around 24 hours to complete the task

### If I had to do a second iteration, what would you add or improve?
- Caching of the API requests
- More tests

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint`

To run the linter on the entire project directory