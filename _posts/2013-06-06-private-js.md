---
layout: post
title: "Data hiding in JavaScript"
tags: javascript
---

#Privates in JavaScript

I'm not a fan of faking 'private' properties and methods in JavaScript. I'm not a fan of it in other languages either. While data hiding sounds good in theory, I've found less useful on practice. One of the reasons being that you can never truely hide data from someone with the source code. Another is that we are all adults. If you want to mess around with my 'private' data then I can't really stop you. You just need to know that I won't support any changes you make.

One of the common advantages I hear about data hiding is that it help you write clean public apis. My issue with this is that using a notation like `_private` clearly expresses the intention. And since you can always get around data hiding, the intention is the important part.

Python is another language that only supports data hiding by naming convention. The typical answer as to why by Python's creator is because "We're all consenting adults here"

> The main reason for making (nearly) everything discoverable was debugging: when debugging you often need to break through the abstractions (since bugs don't confine them to the nice abstractions you've created for your program :-) so I though it would be handy to be able to see anything from the debugger. And since the debugger is written in Python itself (for flexibility and a number of other reasons) I figured the same would apply to other forms of programming -- after all, sometimes debugging doesn't imply using a debugger, it may just imply printing a certain value. Again, too much data hiding would make things more complicated here.
>
> [Guido van Rossum](https://plus.google.com/115212051037621986145/posts/7wpbQTPRWft?partnerid=gplp0)

## JavaScript

So what does this have to do with JavaScript? The issue is that I see people writing code like this:

{% highlight javascript %}
function employee() {
  var name = 'chris';

  return {
    name: function(val) {
      if (typeof val !== 'undefined') {
        name = val;
      }
      return name;
    }
  }
}

var dude = employee();

dude.name(); // "chris"

dude.name('joe');
dude.name(); // "joe"
{% endhighlight %}

In this example we created mutator method called name. Everything seems great until the implimentor has to change the mutator.

{% highlight javascript %}
dude.name = function() {
  name = ' Echo ' + name;
  return name;
}

dude.name(); // " Echo "
dude.name(); // " Echo  Echo "
dude.name(); // " Echo  Echo  Echo "

name; // " Echo  Echo  Echo "
{% endhighlight %}

Well that's not what we wanted at all! Not only did we lose access to the private property `name` but we created a global variable!

Ok, I can hear some of you saying "it's a private variable, you shouldn't be able to access it if you override the method." And that's exactly my point. JavaScript is so powerful because you can change and modify it as needed. When you create the private variable you are preventing people from actually being able to use your code in some very important ways. And you create unexpected side effects and leak memory. The implimentor has to modify your source code to fix the issue, which creates upgrade and maintance problems for them.


