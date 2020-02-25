### Getting Started
-   NOTE this is no longer the maintained version of the front-end for the culinary companion
-   install Node.js / NPM
    https://nodejs.org/en/

-   Clone Repository

          git clone

          cd client

### Installation and Set-up

####  Build front-end environment
    You may or may not have to install uribuilder, Hopefully my package-lock change fixed that. Who knows though, keeping it for sanitys sake.

            cd client

            npm install

            //if these are not installed with npm install
            npm install uribuilder

            npm install vue-material
#### Running front-end
```
https://github.com/Grantlal/CulinaryCompanionAPI
```

-   Run Front-end Web Page

          cd client

          npm run dev

> You can also run `cd springboot_vue/frontend;npm run build`
#### Testing
You'll have to have the front-end running and then run cypress with the following command
```
npm run cypress:open
```
