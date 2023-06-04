---
title: OKLCH and Me
description: Updating this site to use OKLCH color space
lede: "Where I go into color"
date: "2023-06-04"
tags:
  - post
layout: post.njk
---

One of the things in CSS that has alway been interesting is colors. RGB, HSL, and now OKLCH. When listening to a recent episode of [ShopTalk Show](https://shoptalkshow.com/564/)Chris and Dave were talking about OKLCH and hi-def color spaces (this was followed up in another episode) and they went a little deep into color space talk. As someone who is trying to push myself into expanding my skills I did a little bit more research into this.

## OKLCH vs HSL vs RGB
HSL and RGB have been the kings for as long as I can remember and it made little sense to move on from them. It was a sturggle for me to implement HSL here on this site. "Why? RGB is good enough..." was my thinkging but when reading into OKLCH I made the choice to update this site to it. Since my site features a lot of vibrant colors. I wanted to present those as best as I could. While experimenting with the Big Three Spaces I found the OKLCH space to be a little easier and better to work with. RGB has always been this arcane magic of numbers and letters in the 3 color spaces and have always been confusing (at least to me*) and HSL I only really used in print/photo areas. OKLCH is more "human" readable with its values of Lightness, Chroma and Hue. Adjusting these values allow a slightly easier and better control of the color you are working with. You can also adjust the alpha value as well. That alone was enough for me to consider moving to this space. 

## Ok...So this site...
While my site is small and not high traffic it is my space to experiment, learn and grow while doing my best to document it all. I saw this as an opprotunity to expanded my knowledge on these spaces. This fantastic post from [Evil Martians](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) was a huge help in helping me understand and wrap my head around the what and why of these spaces. I wanted to use this to really push and show off the colors I use in both light and dark versions of my site. I took my colors and went to convert them from RGB to HSL and OKLCH color values. OKLCH allows me to push the vibrancy and the gamut of my colors to the best they can be.

So...colors are complicated and I am learning more day by day about the differences in color on the web. It is more complicated and wide than I had known. I am very excited to start learning and experimenting more with these.

### Articles that Helped
* [Evil Martians](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)
* [ShopTalk Show #564](https://shoptalkshow.com/564/)
* [ShopTalk Show #564](https://shoptalkshow.com/565/)
* [High Definition CSS Color Guide](https://developer.chrome.com/articles/high-definition-css-color-guide/)


*For a long time I had to have an image editor open to get the right hex value.