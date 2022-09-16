# Project Journal App

This project is created applying React, Vite, Firebase, Redux, Hooks, Hook forms

## Creating ASYNC functions with redux

First create store folder where we are going to create are index and store js

### Creating Auth slice with firebase

Example of Slices

![alt](examples\slice.png)

### Create a provider file in our firebase folder

![alt](examples\provider.png)

### Create a thunks file in our auth folder

![alt](examples\thunks.png)

### Connect providers with the thunks and the thunks with Redux(slice)

As you can see my thunks are dispatching a checkingCredentials in my redux and then run the code that it needs to be there in asynchronously where this functions are coming from PROVIDER.JS and passing the props that i need to run the function. After get a response it will dispatch another functions from my redux

This project is created by Wilmer Herrera
