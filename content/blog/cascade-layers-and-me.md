---
title: Cascade Layers and Me
description: In which I mess with something new
lede: "Cascade Layers and Me"
date: "2026-04-14"
tags:
  - css
  - site
  - update
---

When I first learned about cascade layers in CSS, I was interested in the idea. Also, very skeptical. Why would I layer my CSS this way? What’s the point? As I dove into it more, I started thinking about how powerful, organized, and easier to maintain stylesheets layers would be. I started thinking about one of my favorite websites, CSS Zen Garden, and the idea behind that site and how to push it forward or at least shift it around. 

At my previous job, I handled a lot of website white-labeling. Your company would come to us, and I would take your assets, tokens, and bits and bobs to create a website using our established template. Easy, right? Well, I was always thinking about how I sometimes had to rebuild this from scratch sometimes. It was a pain and took more time than it should have.  I basically sketched out this plan of a series of files, each with its own layer broken down by what it was. Reset styles? Layer. Layout? Layer. Type? You guessed it, Layer. The whole idea was, can I swap out my theme.css file with new tokens and create a white-label site in less time?

Well…yeah.

So fast forward, I wanted to experiment with it here. This site is my test bed. (See here). So I ripped out all my CSS. Made my layers and roughed out each layer and what would go in it. How I wanted to have all work and ordered the layers with each other. It was also a chance for me to see what worked and didn’t work. Most of the ideas I had worked great. It’s all very organized and in places now that I don’t have to touch at all and can override easily.

My favorite part of this feature is that specificity matters. You are using the cascade instead of fighting against it. Your CSS is now read and organized in a way that makes it easier for me to search for, update, and fix errors while also allowing the dev/designer greater control.

Going back to CSS Zen Garden, I have a set framework. I am given a set of design tokens and guides given to me by the client/partner/stakeholder. I can pull out the layer containing my theme OR as the cascade dictates “Last style wins” you put your new tokens, grid settings, and guides outside your layers. Boom. Overwriting and updating the styles in the layers below. My theme is complete. Customize a feature? No layer or hell make a `custom` layer. Lots of options you can do.

I know I am only getting started on this journey and learning about these features and the power that they can wield. I am excited to mess with this more and explore the applications for it not only here but also in future projects.