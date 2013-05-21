---
layout: post
title: "Happy Birthday"
date: 2013-05-12 14:00:00
tags: jekyll
---

##It's my birthday and I'll buid a website if I want to.
I've spent a lot of time trying out various web frameworks from php with WordPress, python with Django, and ruby with Rails. Becuase I've a JavaScript developer by trade, I've also experimented with several Nodejs servers and even a serverless blog using Parse.

So far I've managed to create a long standing personal WordPress site that I haven't updated in years. Experimented but never got off my personal laptop with a Django site. And build perfessional exterprise web applications in Rails and Nodejs. And one valentine's day gift with Parse.

In my search to re-build my personal website, I've started a dozen times only to end up abanding it. I was always spending more time one the site than on actually creating useful content. I think that's why my WordPress site worked. It only took an hour to setup and I was creating content.

This time I'm using Jekyll. I've picked this because it works with Github's personal pages. While I own several domains, I think having a development blog tied to my Github account make sense. This is about my development and development happens with Github.

##Setup
![jekyll](/img/jekyll-logo.png)

[Installation](http://jekyllrb.com/docs/installation/) was a snap and I soon had the default Jekyll running. After reading the documention I was able start this post.

The biggest takeway is that the site is *running* already. It took me maybe 10 mintues and I have a working blog with all the basics. I can create posts, edit posts, publish, everything *after 10 mintues!* I think WordPress is the only framework that comes close.

##What Database?
Jekyll doesn't use a Database. It serves a static website which has it's advantages and disadvantages. SEO is easy, creating/deleting/editing posts is easy, adminstration is easy.
You can't save any user data, editing a large amount of posts is difficault, you can't save data.

At some point I'll need a database. Last time I used [Parse](http://www.parse.com) I really liked them. They extended Backbone to automatically use their cloud service. I could setup a rails or nodejs backend on my server. But for now I just want to see how far I can get without the backend.

##After thoughts
Creating files for each post is great but I still want a command line tool that will generate a blank posts. I probably don't need one. Creating blank posts is stupedly easy. It would be nice if the jekyll command line let you create new posts by name.