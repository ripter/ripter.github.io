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
    this.log = this.log || '';
    this.log = this.log + item + ',';
    native.apply(this, arguments);
  }
})();

a.push(7);
a.log; // "7,"
{% endhighlight %}

**Node:** If your log looks something like `"7,7,7,7,7,7,"`then you still have the overridden version of Array. This is a prime example why overriding the native method is a bad idea. 


###Selective logging
Instead of modifing the native `Array.push`, let's create a new array with logging.

{% highlight javascript %}
var logArray = Object.create(Array.prototype);

logArray.push = function(item) {
  console.log('pushed ', item);
  a.log = a.log || '';
  a.log = a.log + '' + item;
  Array.prototype.push.apply(this, arguments);
};

var a = Object.create(logArray);
a.push(7); // "pushed  7"
a.log; // "7"
{% endhighlight %}

You might have noticed that we can use `console.log` here. This is because we are not overriding the native `Array.push` that `console.log` uses. 

**Note:** If your log looks something like `"undefined77,7,7,7,7,7,"` then you still have the overridden version of Array. This is a prime example why overriding the native method is a bad idea.

