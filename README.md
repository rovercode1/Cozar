## Synopsis
This was created to improve mine (and others) workflow.
Instead of repeating the same base code i use in 90% of my projects,
I decided to *finally* create a sass template.

This was achevied by the help of **Bootstrap** and **sass**.
## Code Example
##Section classes:
<br>
**base-section** - is used as a default section.
Using this inside of your main section will eliminate the fuss of adding the base of any section.
  **For example:**
<br>
`section class="custom-section"`
<br>
`div class="base-section"`
<br>
-----------section code here-----------
<br>
**overlay** - Used to overlay section bg. This works by using a div with the class of *base-section* and *overlay* inside of a section with a bg. 

##Misc:
**container-flex** - A container with the display of flex.
**box-1/2** - boxes for flex items.
**div-center** - centers divs.
**base-line** - default hr line - 80% width

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Motivation

Instead of creating a sass template project including styles/classes that I didn't know if i would need or not, I decided to mimic the website Cozar.com and whenever i came across some css that I thought would be useful in the future, i placed it in the src file; the base styles of the website. Then for my next project, instead of creating it again, i can just use my sass template styles :)



## Contributors
Anyone is free to contribte :)












