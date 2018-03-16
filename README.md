a react electron boilerplate.

using [electron-forge](https://github.com/electron-userland/electron-forge)

includes:

* react && react-dom
* redux && redux-thunk
* react-router-dom
* react-hot-loader
* axios
* eslint
* husky

```
src
| --- pages
        | --- Home
| --- store
| --- app.jsx // render process entry
| --- main.js // main process entry
| --- index.html
| --- style.less
```

## Usage

1. download the boilerplate

```
git clone git@github.com:riskers/electron-react-boilerplate.git
```

2. `cd electron-react-boilerplate`

3. `rm -rf .git`

## install

```
npm install
```

or

```
yarn
```

## develop

```
npm start
```

## build

```
npm run package
```