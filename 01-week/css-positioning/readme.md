# CSS Positioning

## Learning Objectives
- Utilize `margin: inherit auto;` to center elements
- Utilize `text-align: center;` to center elements
- Understand the difference between static, relative, fixed, & absolute positioning
- Know what floats do and how to use them

## Essential Question(s)

- When would you use the different CSS positionings? What do static, relative, fixed, and absolute all do?
- When would you use `margin: inherit auto;` vs `text-align:center;`?

## Talking Points/Road Map

The idea here to have a playground, where we can see what happens as we try out styles together. Keeping it interactive and visual will help these abstract concepts stick.

### Set Up

Because we're using our HTML5 starter template that Dan gave us, we've got a good starting point. If you don't already have it copied to your working directory, make a copy from templates/html5-template and name it css-positioning, or something similar. It should have an `index.html` and our css folders with `normalize.css` & `style.css`, we won't need the rest.

Head over to http://html-ipsum.com and grab some lorem ipsum fake text to throw in – get the **Kitchen Sink** & the ** Standard List Navigation**, put 'em in your **body**, so we have stuff to play with.


### Styling

We'll start with a little bit of basic styling – let's add some styles to the nav bar, piece by piece. When you're writing this, quickly discuss each line to make sure the class understands the properties we're throwing in.

Here's some nice css to start:

```css
/* general styles */

  body { margin: 10px; }

  a { color: #3ea46a; }

  body > nav {
    border: 1px solid #ccdcd0;
    background: #f3faf5;
    margin: 10px;
  }

  body > nav ul li { display: inline-block; }

  body > nav ul li a {
    text-decoration: none;
  }

/* end general styles */
```

- - -

#### Margins

Let's start by playing with the nav bar!

Remember `>` – it's a direct descendant, an immediate child of `body` that's a `nav` element.

**Why can we add margin on this?** Because, thanks to our `normalize.css`, `nav` is a _block-level_ element.

**Can we add `margin: something auto;` to this? Will it center it?** Why, yes, yes it will! But block-level elements naturally take up the full width of their container, so it's already centered. Let's try giving it a `max-width` of `500px`, and adding in `margin: 10px auto;`;

```css
body > nav {
  border: 1px solid #ccdcd0;
  background: #f3faf5;
  margin: 10px auto;
  max-width: 500px;
}
```

Boom. Centered.

###### Takeaway: Block level elements are centered using `margin: something auto;`

- - -

#### Text-Align

We've got our nav centered, but not our links. Why?

Inline elements (and inline-block elements) are like _words in a sentence_ – they're not supposed to be sized, they're supposed to flow inline.

Because of this, we have to center inline elements as if they were text. That's where `text-align` comes in.

```css
body > nav {
  text-align: center;
}
```

Voila, centered links.

###### Takeaway: Inline level elements are centered using `text-align: center;`, because they're supposed to flow as if part of a sentence

- - -

#### Positioning

So what's up with positioning? Positioning is intended to move an element outside it's normal flow on the page, whether that flow is `inline` or `block` or `inline-block`;

One by one, try demonstrating using these on the `nav` and `a` elements.

##### Static

Everything by default is static. That's how it works already, this is telling an element to stick with it's flow as is.

##### Relative

This is static with a twist – you can add `top`, `left`, `bottom`, `right` to relatively positioned elements, and adjust it based on where it's supposed to be naturally.

##### Fixed

Fixed sticks to it's parent, which is the top-most parent, or the top-most parent _that's positioned relatively_ – and the cool part is that it doesn't move when you scroll. Try adding `position: fixed;` with some `top`, `left`, `bottom`, `right` attributes to our nav and see what happens.

It takes it out of the flow of the document! It puts it wherever it's top-most parent lives, and as you scroll it stays put.


##### Absolute

Absolute is exactly like fixed, but sticks where it is when you scroll.

Try that on the `nav` and see what happens.

- - -

#### Floating

WTF is floating? Floating originally started with the intention of having an image off to the side, and the text flow around it – like in a magazine layout.

It takes an element out of the normal flow, and moves it either `left` or `right`.

For a long time, there was no other way to get two things to sit next to each other, so everyone started using floats for *everything*. Now we have inline-block, which makes putting some things next to each other a lot easier – and that's what inline-block is intended for.

Try adding in image to our html, put just after the `h1` tag:

```html
<img src="https://d13yacurqjgara.cloudfront.net/users/107759/screenshots/1075304/donut.png" alt="Mmmm, a donut" />
```

In our CSS, let's make a generic rule that grabs all images on the page and `floats` them left:

```css
img { float:left; max-width: 200px; margin-right: 10px; }
```

**What happens?** The block-level elements _before_ it stay as they are, and the block-level elements _after_ it flow around the image.

**What if there's an inline-level element before it?** Let's try and see! Add a `span` with some text just before the image. It flows around it, too!

#### Floating Multiple Elements

**What happens when we have multiple images?** Let's throw another donut in there, right under the other.

```html
<img src="https://d13yacurqjgara.cloudfront.net/users/14268/screenshots/824210/waffle.png" alt="Mmmm, a waffle" />
```

Floated elements start sitting next to each other. Interesting!

Now, finally – what happens when we switch sides? Change your floating from `left` to `right`;

```css
img { float:right; }
```

The order of the images change, depending on how you float them;

- - -
#### WTF Is Clearing?

Inevitably, you'll see a thousand things about clearing floats, and how difficult it is. It's not that difficult if you get what clearing is intended for.

Clearing lets you float multiple elements, but have them on top of each other instead of side-by-side.

Clear on the side that an element's being floated! Let's see it in action.

```css
img { clear: right; }
```
##### Clearfix, a.k.a Fixing Floating

How do we _stop_ elements from wrapping around floated stuff? Easy – there's actually a `clear: both;`, which stop floating on both left & right;

Let's take that `h2`, which is an element after our floating images, and prevent it from wrapping.

```css
h2 { clear: both; }
```
This stops it dead in it's tracks! But you need to apply to an element on the page, which sometimes means adding content that's not really content – an empty `div` after an element just to clear the floats.

Because of that, designers & developers have worked on a million solutions, which is commonly called a "clearfix", and at this point, it's very common to use `:before` and `:after` psuedo elements, so we don't have to muck up our markup. [Here's an excellent one](http://html5boilerplate.com/), taken from a common HTML5 boilerplate project that handles a few weird bugs you wouldn't otherwise notice.


```css
/*
* Clearfix: contain floats
*
* For modern browsers
* 1. The space content is one way to avoid an Opera bug when the
*    `contenteditable` attribute is included anywhere else in the document.
*    Otherwise it causes space to appear at the top and bottom of elements
*    that receive the `clearfix` class.
* 2. The use of `table` rather than `block` is only necessary if using
*    `:before` to contain the top-margins of child elements.
*/

.clearfix:before,
.clearfix:after {
  content: " "; /* 1 */
  display: table; /* 2 */
}

.clearfix:after {
  clear: both;
}
```
