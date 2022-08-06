# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## reproduce the issue
when run `npm start`, you will see a number input. 
open the console debug window to see the logs

type any decimal in the number, for example: 3.5
and then you can see that 2 logs are printed. they are triggered by onChange event.
first time, onChange event triggered with value 3.
second time, onChange event triggered with value 3.5.

However, we hope only one trigger happens!
