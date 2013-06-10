---
layout: post
title: "Intercepting the native push method"
data: 2013-05-09
tags: array native
---

You want a notificaion for every call to `Array.push`. The nice thing about JavaScript is that you can modify anything at anytime. So let's ovrride the Array.push to give use our results.

**Note:** `console.log` uses `Array.push`, so if you put a console log inside of the method you will create an overflow.

{% highlight javascript %}
var log = '';

Array.prototype.push = (function() {
  var native = Array.prototype.push;
  return function(item) {
    log = log + item;
    native.apply(this, arguments);
  }
})();

var a = [];
a.push(7);

log; // "7"
{% endhighlight %}

If you run this in the console and then use push to add another item to the array, you'll notice that log has a lot of diffrent numbers in it. This is because `console.log` uses `Array.push` so you are getting interference.


There are two ways we can fix this. We can put the log as a property on the list, or we can use a custom version of the array that we use for logging.

###log property

{% highlight javascript %}
var a = [];

Array.prototype.push = (function() {
  var native = Array.prototype.push;
  return function(item) {
    this.log = this.log + item + ',';
    native.apply(this, arguments);
  }
})();

a.push(7);
a.log; // "NaN,7,7,7,7,7,"
{% endhighlight %}

Whoa, why does the log say it was called 6 times for a single `Array.push`?


###Selective logging
Instead of modifing the native `Array.push`, let's create a new array with logging.

{% highlight javascript %}
var logArray = Object.create(Array.prototype);

logArray.push = function(item) {
  console.log('pushed ', item);
  a.log = a.log + '' + item;
  Array.prototype.push.apply(this, arguments);
};

var a = Object.create(logArray);
a.push(7); // "pushed  7"
a.log; // "undefined77,7,7,7,7,7,"
{% endhighlight %}

You might have noticed that we can use `console.log` here. This is because we are not overriding the native `Array.push` that `console.log` uses. 

You might have noticed the console log is only called once, but the log string has a bunch of 7s in it. This is the same oddness we saw with the log property.

The `undefined` is easy to explain. It's because of the way we are adding the strings. The first time the assignement happens log is `undefined`. So adding a string to `undefined` just results in the word `'undefined'`.

What about all the other 7s?