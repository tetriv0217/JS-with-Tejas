/*

Javascript :- Synchronus,Single Threaded
(Default)

Execution Context:-
    *Execute one line of code at a time.
    *EACH operation waits for the last one to complete before executing. 
     
     | console.log(1)->1.
     | console.log(1)->2.
    \_/

Blocking Code                 Vs         Non Blocking Code
Block the flow of program                Does not block execution
eg:- Read File Sync                      Read file Async



* When fuctions like DOM API,SetTimeout,SetInterval are called they go to task Queue and then put into the call stack.
* Fetch gives Promises :- Leads to execution of High Priority Queue

This is called Event Loop
*/