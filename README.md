ChattyApp
=====================
ChattyApp is best
A minimal and light dev environment for ReactJS.

### Usage

Clone the boilerplate and create your own git repo.

```
git clone git@github.com:lighthouse-labs/react-simple-boilerplate.git
cd react-simple-boilerplate
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

devDependencies
===============
*babel-core: 6.26.0
*babel-loader: 7.1.2
*babel-preset-es2015: 6.24.1
*babel-preset-react: 6.24.1
*babel-preset-stage-0: 6.24.1
*css-loader": 0.28.8
*eslint": 4.15.0
*eslint-plugin-react":7.5.1
*node-sass": 4.7.2
*sass-loader:6.0.6,
*sockjs-client: ^1.1.2
*style-loader: 0.19.1
*webpack: 3.10.0
*webpack-dev-server: 2.10.0

dependencies
=============
*react: 16.2.0,
*react-dom: 16.2.0

