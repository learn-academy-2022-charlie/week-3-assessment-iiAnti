# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: "This" retians to the object within a class. It can be used to call on the object to change it's state. The state of the object is what the object is at the moment and by calling it with "this" within a function or method, the state can be changed. 

  Researched answer: this can be used in more than just an object, depending on how it is invoked. It could refer to the object of a fucntion or and element within an event. Methods(call(), apoly(), bind()) can also call this to an obejct. I also read that it cannot be changed because it is not a variable, it is a key. this article had a very good explanation of this as wel.... 
  
  "“This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, “this” references the global object. If the function that is being referenced is a method in an object, “this” references the object itself."- source https://www.simplilearn.com/tutorials/javascript-tutorial/javascript-this-keyword
 


2. What is React? Why would you use it?

  Your answer: React is used to refresh the page without having to refresh the whole page. So say I am on a web page while someone else is on the page, my changes wont affect the way they are viewing their web page. Also, say we're on facebook, it's what allows us to hit the like button and only update that little area without ahving to refresh the whole page.

  Researched answer:SO I found and guessed should have realized that react was created by facebook itself. I knew jest which is a testing function for javascript was created by facebook. React uses Babel which is a compiler that converts JSX to javascript. It is good to note that JSX is just an extension to javascript and not html no javascript. React also mainly only focuses on the state of the DOM.



3. Which lifecycle method is required in a React class component?

  Your answer:the render() method is the only method required in a react class. I'm not too sure why, but it does have a return within the render and that is where we put what we want to be outputted, but you also have be careful because depending on how you area coding you most likely will need a react fragment in order for the return to show.

  Researched answer: SO the reason render has to be there is so that it can display to the HTML. What I found that is much more help to me is that render can read state and props, but it cannot change the state within the render. reading props and state allow it to send it's instructions to the parent component. That is where the state can be changed within a method.



4. What is JSX? What is one syntax difference between HTML and JSX?

  Your answer: JSX is an extension of Javascript. It's like HTML but not HTML. TO use JSX you have to use curly brackets within the class to call javascript. It has it's own syntax expressions. One of the syntax differences between JSX and HTML is well, I;m not too perfectly sure but I do know the curly brackets are not use the same way in HTML where in JSX itt calls on javascript where as in HTML it is called with a script.

  Researched answer: JSX allows us to write HTML in javascript. It allows itself to be faster by using components instead of using separate files. The components are within the same app and use an import and export to combine everything together. So JSX  has to be retained within an element to compile all other elements within so that is why we either need a div or a react fragment. The fragment is now what I believe to be one of the main differences between JSX and HTML. where HTML can have many elements without having them be wrapped in an element.



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is a configuration to run programs such as jest and react. Both created by facebook. It modifies the files .json in the the application. I=You will know if it didn't work if you aren't running yarn correctly because the terminal will have an error show tha the json files weren't correctly read.

  Researched answer: Yarn is a package manager that allows us to share our javascript fast adn reliably around the world. I also learned that yarn is basically to predecessor of npm which is one of the hugely used package mangers in the world. The file that is added and modified is the yarn.lock file. The yarn lock file is very important, especially when working in a team. thsi also being because the lock locks the version number and the identifier of the json file. I read that it said it complicates things getting a new verison when the provided json file is a different version.



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: An anonymous function is a way to tell jsx to not continue doing a function continuously. You set it where the change of state is going to happen.

  Researched answer: Read that it was a funciton without a name.  Sounds pretty obvious. it can be used in variables and as anl argument. It need to be placed in between () in order for it work. So if you left it outside of and type of brackets it would not work. This non named function can only be called from it's initial creation, so in order to use it more than once we would have ot put it into a variable.


## Looking Ahead: Terms for Next Week

1. Conditional rendering: this is a way for react to update the UI if a condition is met. So it will change the elements to match the current state of the condition.

2. Object-oriented programming: this is a way of manipulating the objects without using any functions or logic. This allows for easier accessibility and reusability. they use their own classes to put objects within to be able to manipulate the objects. As I was reading it sounded a little complex, but it's just something I would need hands on with.


3. Ruby: Ruby was created to be simple. when coding in ruby everything in it is a object. I read an interesting line that said ruby takes out a lot of the programming details for it to be more understandable.

4. Ruby blocks: ruby blocks are objects with brackets or a do-end process. The value received from the block returns do the method that invoked it. I trued reading about what that meant but it wasnt clear. or at least to me.

5. Ruby hashes: ruby hashes contain keys and values withing those keys. It's like when you use an object. they work a little like arrays, but when used in iteration and trying to get a return array or value of the order, it won't come out in the order expected. It has a mined of it's own. we separate the key and value withing the {} with a => so it kind of looks like a function.
