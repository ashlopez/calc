
#Looping in JavaScript

##Lesson Obectives

+ Understand how an interpreter evaluates a loop.
+ Describe use cases of while loops and for loops.
+ Write examples of for loops and while loops.
+ Understand that for loops are a convenient syntax for while loops.
+ Understand the different parts of the for loop.


##Code Blocks

A block of code is denoted by curly braces. Curly braces group blocks of code together, for example in if and while statements. Blocks of code can also be defined without a control statement:


	{
		var a = 5;
		console.log( a );
	}
	
Note that in this example, JavaScript does not have block scoping. So, although 'a' is declared inside this code block, it will still be accessible outside the block.

##while Loops

The syntax of a while loop is:

	while (condition) {
		// this code block is continually executed while the condition is true.
	}

while loops are the most basic loop. Upon entering the while loop for the first time, the condition is evaluated. The code block is executed only if the condition is true. Once all statements inside the code block are executed, the condition will be tested again. If it evaluates to the Boolean value true, then the statements in the code block will again be executed, and so on.

###Countup Example - Exact Interpreter Steps

	var i = 0;
	while (i < 4) {
		console.log( i );
		i = i + 1;
	}

1. Interpreter allocates space in memory for variable 'i'.
2. Memory for 'i' updated to store the number 0.
3. The expression 'i < 4' is evaluated. 'i' is a variable, so it is first looked up in memory.
4. The expression '0 < 4' is evaluated, resulting in true. The expression is replaced by the Boolean value true.
5. while requires a Boolean value, which it has. So, the statements in the code block are executed.
6. Before console.log can be executed, the expression 'i' must be evaluated. 'i' is looked up in memory and replaced with its value -- the number 0.
7. Now, console.log (0) is executed, which displays '0' to the console.
8. Now, the statement 'i = i + 1' must be executed. The right-hand expression must be evaluated first: 'i + 1'. To evaluate this, first the value of 'i' must be looked up in memory. It is the number 0, so the expression becomes '0 + 1'. This is evaluated to the number 1. Now, the statement becomes 'i = 1', whereupon the memory location for 'i' is updated with the number 1.
9. And so on ... 

###Using while 

Often, while loops are used for continually prompting a user, while the user does not ask to exit. For example, an interactive interpreter may continually ask for new JavaScript statements, while the last statement entered is not "exit". Here is an example of this pattern:

	var isDone = "no";
	while (isDone === "no") {
		isDone = prompt("Are you done?");
	}



##for Loops

The syntax of for loops is as follows:

	for (initialization; condition; final-expression) {
		statements
	}

The semicolons are required to separate each of the three sections. When a for loop is encountered, first the code in the 'initialization' section is executed. Second, the 'condition' is evaluated. If true, the statements in the code block are executed, followed by the 'final-expression code' expression. Next, the 'condition' is evaluated again and the process is as before.

Note that the 'initialization' code is just code that is run first. The 'final-expression' code is just code that is run following the statements in the code block (i.e. only if the 'condition' is evaluated to true).


###Relationship between for and while

As an illustration of the above, the following two loops are identical. In each loop, note the position of the initialization statement ('var i = 0;'), the condition ('i < 3'), and the final expression ('i += 1;').

	var i = 0;
	while (i < 3) {
		console.log( i );
		i += 1;
	}

	for (var i = 0; i < 3; i += 1) {
		console.log( i );
	}


###Advanced for

To further illustrate how for loops work, we can leave out portions of the for loop. The following loops are all identical:

	var i = 0;
	for (; i < 3; i += 1) {
		console.log( i );
	}

	for (var i = 0; i < 3; ) {
		console.log( i );
		i += 1;
	}

	// Note this is identical to a while loop!
	var i = 0;
	for (; i < 3; ) {
		console.log( i );
		i += 1;
	}

	var i = 0;
	while ( i < 3 ) {
		console.log( i );
		i += 1;
	}

	// The following is also identical! 
	//   It illustrates that the counter portion can be
	//   arbitrary statements -- it is merely executed
	//   following the code block
	for (var i = 0; i < 3; console.log(), i += 1) { }
	
In the last example, the comma operator allows multiple statements to be executed on the same line. This can also be applied to the 'initialization' section to allow multiple variable initializations.

The following results in an infinite loop:

	for (;;) { }



##Further Study

+ [MDN while loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
+ [MDN for loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
+ [MDN do..while loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
+ [MDN break statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
