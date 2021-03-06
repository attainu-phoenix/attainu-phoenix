# Week 12 assignments

## Day 2

#### Rewrite the Quiz application in jQuery

We have created this application using vanilla Javascript before. Now move all the DOM manipulation methods and AJAX code to jQuery.

The original description of the assignment - 

![quiz](images/quiz.png)
1. The application should load a random question from the [quiz.json](data/quiz.json) file. Hint - You can use `var randomNumber = Math.floor( Math.random() * 10 )` to get a random number which can be used as an index for the question array.
2. Once the user types an answer in the textbox and clicks Submit, the app should check whether the answer is correct or not. Show a dialog window (prompt) depening up on the right/wrong answer.
3. Also, once the page is loaded, a timer should be started from 30 seconds and go down till 0 second. Once the timer reaches 0, the user should be shown a message saying that `Time is over!` and he/she should not be able to submit an answer after that.
4. For styling and layout, please use Bootstrap.


# Week 13 assignments

## Day 2

#### Setup React development environment and create a simple HelloWorld button component

1. Install React using `px create-react-app first-app`
2. Create a `HelloWorld` component which renders a simple button on the page.

## Day 3

#### Create a React Login Form (no events/validations etc)

Create a `LoginForm` component that renders two inputs and a button to render as a login form.

## Day 5

#### React Simple Calculator

We have created a simple calculator using vanilla Javascript before.

Now lets create the same one using React.

Original description of the calculator assignment -

Create a simple calculator using JS with the UI looking like this -

![calcualtor](images/calculator.png)
1. The user input should be validated.
2. All the arithmetic operations should be implemented using functions.

## Day 5 to Day X

#### MyTube app

Build a simple Youtube clone using React and Redux