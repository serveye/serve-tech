## Create New Package

- cd to /packages
- create a new package by running "yarn init"
- create an entry file like index.tsx and export the things you would like to share
- Navigate to package where you need to use the library
- edit package.json file - Add the newly created package as dependency

## How to run

At root of directory run this commands

- cd packages/tech-user && yarn install && cd ../..
- cd packages/tech-provider && yarn install && cd ../..
- cd packages/tech-admin && yarn install && cd ../..

or You can run only this command
cd packages/tech-user && yarn install && cd ../tech-provider && yarn install && cd ../tech-admin && yarn install && cd ../..
