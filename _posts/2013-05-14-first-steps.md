---
layout: post
title: "First Steps"
tags: jekyll
---

Now that I have a Jekyll site up and running I need to customize it. I want to see how long I can avoid using plugins because github does not support them. You can always just push the static files, but I want the entire project in github. (maybe there is a workaround, I don't know yet.)

###Style
It looks like a typical Jekyll site right now. The first thing I can do is update the color scheme. Since I use [solarized](http://ethanschoonover.com/solarized) for... pretty much everything. So it seems like a good idea to use it on my website. Although I use solorized dark for my work, I don't think it would be a good color scheme for a website. The normal solorized should be fine.

###Sass
It so happens that the solarized website is already using the solorized them. They provide the css on the site/github. But they provide the scss files.

Lets install [sass](http://sass-lang.com/)
{% highlight bash %}
$ gem install sass
$ mv main.css main.scss
$ mv syntax.css syntax.scss
$ mv css scss
$ mkdir css
{% endhighlight %}

I also had to install a dependency:
{% highlight bash %}
$ gem install --version '~> 0.9' rb-fsevent
{% endhighlight %}

Then to run:
{% highlight bash %}
$ sass --watch scss:css
{% endhighlight %}

With scss running I was able to add a color.scss copied from solorized's github. I had to remove the color elements in main.css. I spent some time tweeking the rest to my liking.

### Issues
There are still a few things that bug me right now.

1. There is no way to break the site up by category/tag
2. Deploying to Githib is compilcated if you want any plugins. (cause of #1)
3. Manging posts could be easier

### Octopress
While trying to think about how to resolve these issues, I found [Octopress](http://octopress.org/). It seems perfect until you notice it hasn't been updated since July 2011.

On Github it looks like a single guy pushes updates a few times a week. But it's currently failing the build. It also has 35 outstanding pull requests ranging from one year ago to 11 hours ago.

To me this looks like there is a small active community but the maintaior doens't spend a lot of time on it. (Possibly why the website hasn't been updated in 2 years.)

So this leaves me with two options. I can continue using native Jekyll and just impliment features I want myself. Or I could fork Octopress and just fix anything I need.
