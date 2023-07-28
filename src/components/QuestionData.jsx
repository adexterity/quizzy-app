import React from 'react'

const QuestionData = ({getQuestions}) => {

   const questions = [
          {
            highscore: 15
          },
          {
            question: 'Which is the most popular JavaScript framework?',
            options: [
              'Angular',
              'React',
              'Svelte',
              'Vue'
            ],
            correctOption: 1,
            points: 10,
            category: 'React'
          },
          {
            question: 'Which company invented React?',
            options: [
              'Google',
              'Apple',
              'Netflix',
              'Facebook'
            ],
            correctOption: 3,
            points: 10,
            category: 'React'
          },
          {
            question: 'What\'s the fundamental building block of React apps?',
            options: [
              'Components',
              'Blocks',
              'Elements',
              'Effects'
            ],
            correctOption: 0,
            points: 10,
            category: 'React'
          },
          {
            question: 'What\'s the name of the syntax we use to describe the UI in React components?',
            options: [
              'FBJ',
              'Babel',
              'JSX',
              'ES2015'
            ],
            correctOption: 2,
            points: 10,
            category: 'React'
          },
          {
            question: 'How does data flow naturally in React apps?',
            options: [
              'From parents to children',
              'From children to parents',
              'Both ways',
              'The developers decides'
            ],
            correctOption: 0,
            points: 10,
            category: 'React'
          },
          {
            question: 'How to pass data into a child component?',
            options: [
              'State',
              'Props',
              'PropTypes',
              'Parameters'
            ],
            correctOption: 1,
            points: 10,
            category: 'React'
          },
          {
            question: 'When to use derived state?',
            options: [
              'Whenever the state should not trigger a re-render',
              'Whenever the state can be synchronized with an effect',
              'Whenever the state should be accessible to all components',
              'Whenever the state can be computed from another state variable'
            ],
            correctOption: 3,
            points: 30,
            category: 'React'
          },
          {
            question: 'What triggers a UI re-render in React?',
            options: [
              'Running an effect',
              'Passing props',
              'Updating state',
              'Adding event listeners to DOM elements'
            ],
            correctOption: 2,
            points: 20,
            category: 'React'
          },
          {
            question: 'When do we directly "touch" the DOM in React?',
            options: [
              'When we need to listen to an event',
              'When we need to change the UI',
              'When we need to add styles',
              'Almost never'
            ],
            correctOption: 3,
            points: 20,
            category: 'React'
          },
          {
            question: 'In what situation do we use a callback to update state?',
            options: [
              'When updating the state will be slow',
              'When the updated state is very data-intensive',
              'When the state update should happen faster',
              'When the new state depends on the previous state'
            ],
            correctOption: 3,
            points: 30,
            category: 'React'
          },
          {
            question: 'If we pass a function to useState, when will that function be called?',
            options: [
              'On each re-render',
              'Each time we update the state',
              'Only on the initial render',
              'The first time we update the state'
            ],
            correctOption: 2,
            points: 30,
            category: 'React'
          },
          {
            question: 'Which hook to use for an API request on the component\'s initial render?',
            options: [
              'useState',
              'useEffect',
              'useRef',
              'useReducer'
            ],
            correctOption: 1,
            points: 10,
            category: 'React'
          },
          {
            question: 'Which variables should go into the useEffect dependency array?',
            options: [
              'Usually none',
              'All our state variables',
              'All state and props referenced in the effect',
              'All variables needed for clean up'
            ],
            correctOption: 2,
            points: 30,
            category: 'React'
          },
          {
            question: 'An effect will always run on the initial render.',
            options: [
              'True',
              'It depends on the dependency array',
              'False',
              'In depends on the code in the effect'
            ],
            correctOption: 0,
            points: 30,
            category: 'React'
          },
          {
            question: 'When will an effect run if it doesn\'t have a dependency array?',
            options: [
              'Only when the component mounts',
              'Only when the component unmounts',
              'The first time the component re-renders',
              'Each time the component is re-rendered'
            ],
            correctOption: 3,
            points: 20,
            category: 'React'
          },
          {
            category: 'HTML',
            question: 'What does HTML stand for?',
            options: [
              'Hyperlinks and Text Markup Language',
              'Hyper Text Markup Language',
              'Home Tool Markup Language',
              'Hyperlinking Text and Multimedia Language'
            ],
            correctOption: 1,
            points: 10
          },
          {
            category: 'HTML',
            question: 'Which HTML element is used to define a paragraph?',
            options: [
              '<p>',
              '<div>',
              '<span>',
              '<section>'
            ],
            correctOption: 0,
            points: 20
          },
          {
            category: 'HTML',
            question: 'Which HTML element is used to create a checkbox?',
            options: [
              '<checkbox>',
              '<input type=\'checkbox\'>',
              '<check>',
              '<input checkbox>'
            ],
            correctOption: 1,
            points: 10
          },
          {
            category: 'CSS',
            question: 'What is the purpose of the CSS property \'float\'?',
            options: [
              'To move an element to the left or right',
              'To change the font style of an element',
              'To add a shadow effect to an element',
              'To increase the font size of an element'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'CSS',
            question: 'Which CSS property is used to change the text color?',
            options: [
              'color',
              'font-color',
              'text-color',
              'text-style'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'CSS',
            question: 'Which CSS property is used to add spacing between the border and content of an element?',
            options: [
              'margin',
              'padding',
              'border-spacing',
              'border-collapse'
            ],
            correctOption: 1,
            points: 10
          },
          {
            category: 'CSS',
            question: 'What is the purpose of the CSS \'display\' property?',
            options: [
              'To add spacing between elements',
              'To control the transparency of an element',
              'To change the font style of an element',
              'To control how an element is displayed'
            ],
            correctOption: 3,
            points: 10
          },
          {
            category: 'CSS',
            question: 'What is the purpose of the CSS \'position\' property?',
            options: [
              'To add spacing between elements',
              'To control the transparency of an element',
              'To change the font style of an element',
              'To control the positioning of an element'
            ],
            correctOption: 3,
            points: 10
          },
          {
            category: 'CSS',
            question: 'Which CSS selector selects an element with the ID \'myElement\'?',
            options: [
              '.myElement',
              '#myElement',
              'element.myElement',
              'element#myElement'
            ],
            correctOption: 1,
            points: 10
          },
          {
            category: 'CSS',
            question: 'What is the purpose of the CSS \'box-sizing\' property?',
            options: [
              'To add spacing between elements',
              'To control the transparency of an element',
              'To change the font style of an element',
              'To control the box model of an element'
            ],
            correctOption: 3,
            points: 10
          },
          {
            category: 'CSS',
            question: 'Which CSS property is used to control the transparency of an element?',
            options: [
              'background-opacity',
              'opacity',
              'transparent',
              'visibility'
            ],
            correctOption: 1,
            points: 10
          },
          {
            category: 'CSS',
            question: 'What is the purpose of the CSS \'z-index\' property?',
            options: [
              'To add spacing between elements',
              'To control the transparency of an element',
              'To change the font style of an element',
              'To control the stack order of an element'
            ],
            correctOption: 3,
            points: 10
          },
          {
            category: 'CSS',
            question: 'How do you select all elements with the class name \'myClass\' using CSS?',
            options: [
              '.myClass',
              '#myClass',
              'myClass',
              '*myClass'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'CSS',
            question: 'What is the purpose of the CSS \'overflow\' property?',
            options: [
              'To add spacing between elements',
              'To control the transparency of an element',
              'To control the font style of an element',
              'To control the overflow behavior of an element'
            ],
            correctOption: 3,
            points: 10
          },
          {
            category: 'CSS',
            question: 'How do you select the first child element of a parent element using CSS?',
            options: [
              ':first-child',
              '::first-child',
              'first-child',
              'firstChild'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'CSS',
            question: 'What is the purpose of the CSS \'text-align\' property?',
            options: [
              'To add spacing between elements',
              'To control the transparency of an element',
              'To change the font style of an element',
              'To control the text alignment of an element'
            ],
            correctOption: 3,
            points: 10
          },
          {
            category: 'CSS',
            question: 'Which CSS property is used to change the background color of an element?',
            options: [
              'color',
              'background-color',
              'background',
              'fill-color'
            ],
            correctOption: 1,
            points: 10
          },
          {
            category: 'CSS',
            question: 'What is the purpose of the CSS \'transition\' property?',
            options: [
              'To add spacing between elements',
              'To control the transparency of an element',
              'To create a smooth transition effect',
              'To control the font style of an element'
            ],
            correctOption: 2,
            points: 10
          },
          {
            category: 'CSS',
            question: 'What is the purpose of the CSS \'flexbox\' layout?',
            options: [
              'To add spacing between elements',
              'To control the transparency of an element',
              'To create a grid layout',
              'To create a flexible box layout for arranging elements'
            ],
            correctOption: 3,
            points: 10
          },
          {
            category: 'CSS',
            question: 'How do you select the last child element of a parent element using CSS?',
            options: [
              ':last-child',
              '::last-child',
              'last-child',
              'lastChild'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'CSS',
            question: 'What is the purpose of the CSS \'box-shadow\' property?',
            options: [
              'To add spacing between elements',
              'To control the transparency of an element',
              'To add a shadow effect to an element',
              'To control the font style of an element'
            ],
            correctOption: 2,
            points: 10
          },
          {
            category: 'CSS',
            question: 'Which CSS property is used to change the font size of an element?',
            options: [
              'font-size',
              'text-size',
              'font-style',
              'text-style'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'CSS',
            question: 'What is the purpose of the CSS \'border\' property?',
            options: [
              'To add spacing between elements',
              'To control the transparency of an element',
              'To add a border around an element',
              'To control the font style of an element'
            ],
            correctOption: 2,
            points: 10
          },
          {
            category: 'CSS',
            question: 'Which CSS property is used to add spacing between the border and content of an element?',
            options: [
              'margin',
              'padding',
              'border-spacing',
              'border-collapse'
            ],
            correctOption: 1,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'Which JavaScript keyword is used to declare a variable?',
            options: [
              'var',
              'let',
              'const',
              'variable'
            ],
            correctOption: 2,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'What is the result of the expression: 5 + \'5\' in JavaScript?',
            options: [
              '10',
              '55',
              '\'55\'',
              'NaN'
            ],
            correctOption: 2,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'Which JavaScript method is used to add an element to the end of an array?',
            options: [
              'push()',
              'pop()',
              'concat()',
              'append()'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'What is the result of the expression: Boolean(\'0\') in JavaScript?',
            options: [
              'true',
              'false',
              '0',
              '\'0\''
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'Which built-in method is used to convert a string to uppercase in JavaScript?',
            options: [
              'toUpperCase()',
              'toUpper()',
              'uppercase()',
              'upperCase()'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'What does the \'===\' operator do in JavaScript?',
            options: [
              'Compares values for equality without type conversion',
              'Assigns a value to a variable',
              'Performs addition',
              'Compares values for equality with type conversion'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'How do you define a function in JavaScript?',
            options: [
              'function myFunction()',
              'def myFunction()',
              'void myFunction()',
              'func myFunction()'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'What is the purpose of the JavaScript \'map()\' method?',
            options: [
              'To add new elements to an array',
              'To remove elements from an array',
              'To execute a function on each element of an array',
              'To create a new array by transforming elements from an existing array'
            ],
            correctOption: 3,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'What is the purpose of the JavaScript \'filter()\' method?',
            options: [
              'To add new elements to an array',
              'To remove elements from an array',
              'To execute a function on each element of an array',
              'To filter the array based on a condition'
            ],
            correctOption: 3,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'What is the result of the expression: 10 / 0 in JavaScript?',
            options: [
              'Infinity',
              '0',
              'NaN',
              'Error'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'Which JavaScript method is used to remove the last element from an array?',
            options: [
              'shift()',
              'unshift()',
              'pop()',
              'push()'
            ],
            correctOption: 2,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'What is the purpose of the JavaScript \'reduce()\' method?',
            options: [
              'To add new elements to an array',
              'To remove elements from an array',
              'To execute a function on each element of an array',
              'To reduce the array to a single value'
            ],
            correctOption: 3,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'What is the purpose of the JavaScript \'splice()\' method?',
            options: [
              'To add new elements to an array and/or add new elements',
              'To remove elements from an array',
              'To split a string into an array of substrings',
              'To sort the elements of an array'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'What is the result of the expression: 5 > 3 && 10 < 8 in JavaScript?',
            options: [
              'true',
              'false',
              '5',
              'NaN'
            ],
            correctOption: 1,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'What is the purpose of the JavaScript \'forEach()\' method?',
            options: [
              'To add new elements to an array',
              'To remove elements from an array',
              'To execute a function on each element of an array',
              'To create a new array by transforming elements from an existing array'
            ],
            correctOption: 2,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'What is the result of the expression: \'hello\'.length in JavaScript?',
            options: [
              '5',
              '6',
              'hello',
              '\'hello\''
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'Which built-in method is used to convert a string to lowercase in JavaScript?',
            options: [
              'toLowerCase()',
              'toLower()',
              'lowercase()',
              'lowerCase()'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'What is the purpose of the JavaScript \'indexOf()\' method?',
            options: [
              'To add new elements to an array',
              'To remove elements from an array',
              'To find the index of a specified element in an array',
              'To concatenate two or more arrays'
            ],
            correctOption: 2,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'What is the result of the expression: \'hello\' + \'world\' in JavaScript?',
            options: [
              '\'helloworld\'',
              'NaN',
              '\'hello world\'',
              '\'hello+world\''
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'JavaScript',
            question: 'What is the purpose of the JavaScript \'Math.random()\' function?',
            options: [
              'To generate a random number between 0 and 1',
              'To round a number to the nearest integer',
              'To calculate the square root of a number',
              'To generate a random number between a specified range'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'React',
            question: 'What is React?',
            options: [
              'A JavaScript library for building user interfaces',
              'A CSS framework',
              'A programming language',
              'An operating system'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'React',
            question: 'Which built-in method is used to change the state in a React component?',
            options: [
              'this.setState()',
              'this.updateState()',
              'this.state()',
              'this.changeState()'
            ],
            correctOption: 0,
            points: 30
          },
          {
            category: 'React',
            question: 'What is the main purpose of React Router?',
            options: [
              'To handle HTTP requests in React applications',
              'To manage state in React applications',
              'To add animation to React components',
              'To handle navigation and routing in React applications'
            ],
            correctOption: 3,
            points: 10
          },
          {
            category: 'HTML',
            question: 'Which HTML element is used to create a checkbox?',
            options: [
              '<checkbox>',
              '<input type=\'checkbox\'>',
              '<check>',
              '<input checkbox>'
            ],
            correctOption: 1,
            points: 10
          },
          {
            category: 'HTML',
            question: 'What is the correct way to link an external CSS file to an HTML document?',
            options: [
              '<css href=\'styles.css\'>',
              '<link rel=\'stylesheet\' href=\'styles.css\'>',
              '<style src=\'styles.css\'>',
              '<link href=\'styles.css\' type=\'text/css\'>'
            ],
            correctOption: 1,
            points: 10
          },
          {
            category: 'HTML',
            question: 'Which HTML element is used to define an unordered list?',
            options: [
              '<ul>',
              '<ol>',
              '<li>',
              '<list>'
            ],
            correctOption: 0,
            points: 20
          },
          {
            category: 'HTML',
            question: 'Which HTML attribute is used to specify an alternate text for an image?',
            options: [
              'alt',
              'src',
              'title',
              'href'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'HTML',
            question: 'How do you write a multiline comment in HTML?',
            options: [
              '<!-- This is a comment -->',
              '/* This is a comment */',
              '// This is a comment',
              '/* This is a comment '
            ],
            correctOption: 1,
            points: 30
          },
          {
            category: 'HTML',
            question: 'What does the HTML <img> tag represent?',
            options: [
              'Image',
              'Input',
              'Icon',
              'Inline'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'HTML',
            question: 'How do you write an inline style in HTML?',
            options: [
              '<style>',
              '<css>',
              '<script>',
              'style=\'\''
            ],
            correctOption: 3,
            points: 10
          },
          {
            category: 'HTML',
            question: 'Which HTML element is used to create a hyperlink?',
            options: [
              '<a>',
              '<link>',
              '<href>',
              '<hyperlink>'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'HTML',
            question: 'What is the purpose of the HTML <head> element?',
            options: [
              'To display the main content of the webpage',
              'To define the title and metadata of the webpage',
              'To create a header section for the webpage',
              'To add links and navigation to the webpage'
            ],
            correctOption: 1,
            points: 10
          },
          {
            category: 'HTML',
            question: 'Which HTML element is used to define a table?',
            options: [
              '<table>',
              '<tr>',
              '<td>',
              '<th>'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'HTML',
            question: 'What is the purpose of the HTML <title> element?',
            options: [
              'To add a title to the webpage',
              'To display the main heading of the webpage',
              'To create a header section for the webpage',
              'To add links and navigation to the webpage'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'HTML',
            question: 'Which HTML element is used to create a line break?',
            options: [
              '<break>',
              '<br>',
              '<lb>',
              '<line-break>'
            ],
            correctOption: 1,
            points: 10
          },
          {
            category: 'HTML',
            question: 'What is the purpose of the HTML <body> element?',
            options: [
              'To define the title and metadata of the webpage',
              'To display the main content of the webpage',
              'To create a header section for the webpage',
              'To add links and navigation to the webpage'
            ],
            correctOption: 1,
            points: 10
          },
          {
            category: 'HTML',
            question: 'Which HTML element is used to define a level-one heading?',
            options: [
              '<h1>',
              '<h2>',
              '<h3>',
              '<heading>'
            ],
            correctOption: 0,
            points: 10
          },
          {
            category: 'HTML',
            question: 'What is the purpose of the HTML <meta> element?',
            options: [
              'To create a header section for the webpage',
              'To add links and navigation to the webpage',
              'To display the main content of the webpage',
              'To define metadata about the webpage'
            ],
            correctOption: 3,
            points: 10
          },
          {
            category: 'HTML',
            question: 'What is the purpose of the HTML <link> element?',
            options: [
              'To create a header section for the webpage',
              'To add links and navigation to the webpage',
              'To display the main content of the webpage',
              'To link external resources like stylesheets'
            ],
            correctOption: 3,
            points: 10
          },
          {
            category: 'HTML',
            question: 'Which HTML element is used to create a numbered list?',
            options: [
              '<ul>',
              '<li>',
              '<ol>',
              '<list>'
            ],
            correctOption: 2,
            points: 10
          },
          {
            category: 'HTML',
            question: 'What is the purpose of the HTML <a> element?',
            options: [
              'To create a header section for the webpage',
              'To add links and navigation to the webpage',
              'To display the main content of the webpage',
              'To link external resources like stylesheets'
            ],
            correctOption: 1,
            points: 10
          }
        ];

        getQuestions(questions)
      

 return (

    <div>
      
    </div>
  )
}

export default QuestionData
