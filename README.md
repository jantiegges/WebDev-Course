# Web Development Course Website

This 10-week course teaches the basics of web development. It is designed for beginners with no prior knowledge of web development. This course was developed for the Starcode Initiative, which aims to teach young girls the basics of programming. The course is taught in German and contains a mix of theory and practice. The course is divided into three phases. The first phase is designed to teach the basics of HTML & CSS. The second phase introduces Bootstrap for desigining modern Websites. The last Phase teaches the basics of JavaScript.

This repository contains the website with the course material. The website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. The website is hosted on GitHub Pages and can be accessed [here](https://jantiegges.github.io/WebDev-Course/).

## Usage

### Installation
```
$ yarn
```

### Local Development
```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build
```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment
Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:
```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


## License
You are free to use the code files in this repository for your own projects. However, you are not allowed to use the content of this repository for commercial purposes. If you want to use the content of this repository for commercial purposes, please contact the author.
