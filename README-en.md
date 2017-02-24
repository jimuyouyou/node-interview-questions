# How to go through the hungry Node.js interview?

Hi, welcome to ElemeFE, as shown in the title The purpose of this tutorial is to teach you how to get through the big front end of the interview, the position is 2 to 3 years experience Node.js server programmer, if you are on this job Interesting or learning Node.js some advanced content, then welcome to read.

It should be noted that this article is not for zero-based students, you need to have a certain JavaScript / Node.js basis, and have some work experience. In addition, the focus of this tutorial is more accurate to say that the server-based base Node. Js programmers need to understand the part.

If you think most do not understand, do not have to vote resume <del> (so both sides save time) </ del>, if you think most have to understand or *** light to see the outline are very simple then welcome delivery resume To ElemeFe (fe.job@ele.me) ***.

### guide

Although the purpose is to pass the interview, but this tutorial is not simply to list all the questions listed, and <font color = "red"> is the main interview will need to confirm whether you understand the point list out </ font> And to a certain degree of discussion.

This article classifies some of the common questions, each of which covers some `coverage points' and lists a few 'common problems', usually these questions are 2 to 3 years of work experience that needs to be understood or confronted. Interested in a class of questions, or would like to know the answer to the question, you can read more content by reading `more 'below.

Overall outline is not very comprehensive, the details of the coverage is not high, a lot of discussion is just the point to the end, I hope you take the problem to think.

## [Js Fundamentals] (https://github.com/ElemeFE/node-interview/blob/master/sections/js-basic.md)

### coverage point

* [`[Basic]` type judgment] (https://github.com/ElemeFE/node-interview/blob/master/sections/js-basic.md# type judgment)
* [`[Basic]` scope] (https://github.com/ElemeFE/node-interview/blob/master/sections/js-basic.md# scope)
* [`[Basic]` reference pass] (https://github.com/ElemeFE/node-interview/blob/master/sections/js-basic.md# reference pass)
* [`[Basic]` memory release] (https://github.com/ElemeFE/node-interview/blob/master/sections/js-basic.md# memory release)
* [`[Basic]` ES6 new features] (https://github.com/ElemeFE/node-interview/blob/master/sections/js-basic.md#es6- new features)

### common problem

* What type of cs is a reference pass, what type is the value passed? How can the value type of the variable be passed in a reference? [[More]] (https://github.com/ElemeFE/node-interview/blob/master /sections/js-basic.md#q-value)
* Js, 0.1 + 0.2 === 0.3 is true? Do not know the number of floating-point digits should be how to determine the sum of the two floating-point and the third is equal?
* Const can be modified by the middle of the Array element can be modified? If yes, that const meaning? [[More]] (https://github.com/ElemeFE/node-interview/blob/master/sections/js-basic .md # q-const)
* Javascript in different types and different circumstances under the variables of the memory are released? [[More]] (https://github.com/ElemeFE/node-interview/blob/master/sections/js-basic.md# Q-mem)

[Read more] (https://github.com/ElemeFE/node-interview/blob/master/sections/js-basic.md)

## [module] (https://github.com/ElemeFE/node-interview/blob/master/sections/module.md)

> And front-end Js different, the back-end is the face of the server, more biased in terms of memory, for some more basic issues will be more concerned about.

* [`[Basic]` module mechanism] (https://github.com/ElemeFE/node-interview/blob/master/sections/module.md# module mechanism)
* [`[Basic]` hot update] (https://github.com/ElemeFE/node-interview/blob/master/sections/module.md# hot update)
* [`[Basic]` context] (https://github.com/ElemeFE/node-interview/blob/master/sections/module.md# context)

### common problem

* A.js and b.js two files each other whether it will die cycle? Both sides can export variables? How to avoid this problem from the design? [[More]] (https://github.com/ElemeFE/node -interview / blob / master / sections / module.md # q-loop)
* If a.js require b.js, then in the b definition of the global variable `t = 111` can be printed directly in a? [[More]] (https://github.com/ElemeFE/node- Interview / blob / master / sections / module.md # q-global)
* How do I update a js / json file without restarting the node process? Is there a problem with the problem? [[More]] (https://github.com/ElemeFE/node-interview/blob/master/sections /module.md#q-hot)

[Read more] (https://github.com/ElemeFE/node-interview/blob/master/sections/module.md)

## [event / asynchronous] (https://github.com/ElemeFE/node-interview/blob/master/sections/event-async.md)

* [`[Basic]` Promise] (https://github.com/ElemeFE/node-interview/blob/master/sections/event-async.md#promise)
* [`[Doc]` Events (https://github.com/ElemeFE/node-interview/blob/master/sections/event-async.md#events)
* [`[Doc]` Timers (timers)] (https://github.com/ElemeFE/node-interview/blob/master/sections/event-async.md#timers)
* [`[Point]` blocking / asynchronous] (https://github.com/ElemeFE/node-interview/blob/master/sections/event-async.md# blocking asynchronous)
* [`[Point]` parallel / concurrency] (https://github.com/ElemeFE/node-interview/blob/master/sections/event-async.md# Concurrent concurrency)

### common problem

* What is the difference between the second argument of. Promise and .catch? [[More]] (https://github.com/ElemeFE/node-interview/blob/master/sections/event-async.md#q- 1)
* Is the emit of Eventemitter synchronized or asynchronous? [[More]] (https://github.com/ElemeFE/node-interview/blob/master/sections/event-async.md#q-2)
* How to determine whether the interface is asynchronous? Is there a callback function asynchronously? [[More]] (https://github.com/ElemeFE/node-interview/blob/master/sections/event-async.md#q-3 )
* What is the difference between nextTick, setTimeout, and setImmediate? [[More]] (https://github.com/ElemeFE/node-interview/blob/master/sections/event-async.md#q-4)
* How to implement a sleep function? [[More]] (https://github.com/ElemeFE/node-interview/blob/master/sections/event-async.md#q-5)
* How to implement an asynchronous push? (Note: not asynchronous after the syncdown) [[more]] (https://github.com/ElemeFE/node-interview/blob/master/sections/event-async.md# Q-6)

[Read more] (https://github.com/ElemeFE/node-interview/blob/master/sections/event-async.md)

## [process] (https://github.com/ElemeFE/node-interview/blob/master/sections/process.md)

* [`[Doc]` Process ()) (https://github.com/ElemeFE/node-interview/blob/master/sections/process.md#process)
* [`[Doc]` Child Processes] (https://github.com/ElemeFE/node-interview/blob/master/sections/process.md#child-process)
* [`[Doc]` Cluster (cluster)] (https://github.com/ElemeFE/node-interview/blob/master/sections/process.md#cluster)
* [`[Basic]` interprocess communication] (https://github.com/ElemeFE/node-interview/blob/master/sections/process.md# interprocess communication)
* [`[Basic]` daemon] (https://github.com/ElemeFE/node-interview/blob/master/sections/pro
