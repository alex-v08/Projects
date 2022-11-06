<br />
<p>
  <img src="https://i.postimg.cc/MKD0dx8k/NERDEARLA-logos-04.png" alt="Logo" width="200">

  <h3>NERDEAR.LA ATOMIC DESIGN WORKSHOP</h3>

  <p>
    <br />
    <strong>Explore the docs »</strong>
    <br />
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [About the Project](#about-the-project)
    -   [Built With](#built-with)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Environment Variables](#environment-variables)
    -   [Installation](#installation)
    -   [Run](#run)
    -   [Tools](#tools)
-   [Contributing and Workflow](#contributing-and-workflow)

## Resources

> \*Please ask for access to this resource with the team

-   [Figma](https://www.figma.com/file/KQqGzwaKUh4QLoGqlM19AT/Movie-app-Figma?node-id=468%3A973)

### Built With

-   [ReactJS](https://reactjs.org/)
-   [SASS](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support)
-   [CSS Modules](https://nextjs.org/docs/advanced-features/customizing-postcss-config#css-modules)
-   [NextJS](https://nextjs.org/)
-   [GraphQL](https://graphql.org/)
-   [Wordpress](https://wordpress.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

A list of things that you need to install for run the project.

-   [Node LTS](https://nodejs.org/)

-   Yarn

```sh
brew install yarn
```

> If you're a Windows user,
> [download the installer](https://yarnpkg.com/en/docs/install#windows-stable).

### Environment Variables

Environment variables are defined in
[Dotenv](https://github.com/motdotla/dotenv) files. Dotenv is a zero-dependency
module that loads environment variables from a `.env` file into `process.env`.

For the build to run successfully, you will need to create a `.env` that
contains the following data:

```
NEXT_PUBLIC_CF_SPACE_ID=
NEXT_PUBLIC_CF_ENV=
NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN=
```

> For security reasons, the specific values are not included in this README and
> the files are not checked in to source control.

### Installation

1. Clone the repo

```sh
git clone https://github.com/RGADigital/Nerderla-Atomic-Design
```

2. Install NPM packages

```sh
yarn install
```

3. Start the server

```sh
yarn dev
```

### Run

-   Storybooks To test all the components that are being used on the site, use
    storybooks.

```
$ yarn storybook
```

-   Linting

```
$ yarn lint
```

-   Development

```
$ yarn dev
```

-   Production (with server)

```
$ yarn install
$ yarn build
$ yarn start
```

### Opening in Development Container

Open the cloned project in VS Code. Once you open it, you will see a popup with the text `Folder contains a Dev Container configuration file. Reopen folder to develop in a container.`, click the `Re-open in Container` button and a new Docker container will be created and dependencies will be automatically installed for you.

### Tools

-   **ESLINT:**
    [ESLINT](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   **JS:** ES6 compiled by [Babel](https://babeljs.io)
-   **Component Dev:** [Storybook](https://storybook.js.org/)
-   **Linting & Formatting:** [ESLint](https://eslint.org/),
    [Prettier](https://prettier.io/docs/en/editors.html),
    [Stylelint](https://stylelint.io/) and
    [EditorConfig](https://editorconfig.org/).\*

> \*It is strongly recommended that you integrate these tools into your editor
> or IDE.

## Contributing and Workflow

This are our basics steps for start working in this project.

1. Clone the Project
2. Create your Feature branch from develop (`git checkout -b feature/___`)
3. Commit your Changes (`git commit -m 'Add some feature'`)
4. Push to the Branch (`git push origin feature/___`)
5. Open a Merge Request
