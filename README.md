![Color theme header image](./src/assets/images/readme-header.png)

<br/>

# Color Scheme Generator

Front end application to create color themes

## General Info

Developed as a personal project while following Barcelona's IT Academy React Front End Path.

Just click on the play button to generate a 5 color theme, choose from different color harmonies in the sliding menu. Once you find an interesting theme, you may download a PNG with the colors, download a JSON, or just copy the hex codes of individual colors.

## Technologies

Project created with:

- [React](https://reactjs.org/) for building all the UI. Working exclusively with functional components and React Hooks.
- [Chroma-js](http://vis4.net/chromajs/) for color conversion and interpolation

## Setup

Clone and install it locally with npm:

```
mkdir color-themes
cd color-themes
git clone git@github.com:pyrenaicus/color-themes.git
npm install
npm start
```

## Features

From an initial random color, generate a palette of five colors according to different _color harmonies_[^1]:

- analogous
- complementary
- split complementary
- monochromatic

Colors were initially expressed in [HSL coordinates](https://en.wikipedia.org/wiki/HSL_and_HSV) as it seemed the most intuitive way to deal with color harmonies (complementary and analog colors can be found just applying a rotation on hue component).
That was in theory, because right away in the first tests, problems arise, due to the differences between actual _physical lightness_ of a color and _perceived lightness_.

Some interesting articles on this issue:

- [Color Spaces for Human Beings](https://www.boronine.com/2012/03/26/Color-Spaces-for-Human-Beings/) by Alexei Boronine, creator of [HSLuv](https://www.hsluv.org/).
- [Hue-angle transitions](https://rileyjshaw.com/blog/hue-angle-transitions#fnref-1) by Riley J. Shaw.
- [How To Avoid Equidistant HSV Colors](https://www.vis4.net/blog/2011/12/avoid-equidistant-hsv-colors/) by Gregor Aisch, author of [Chroma-js](https://github.com/gka/chroma.js).
- [Mastering Multi-hued Color Scales with Chroma.js](https://www.vis4.net/blog/2013/09/mastering-multi-hued-color-scales/) by Gregor Aisch.

A solution was to interpolate color transitions in [CIE Lab color space](https://en.wikipedia.org/wiki/CIELAB_color_space) using [chroma.js](https://vis4.net/chromajs/#color-scales), a small-ish zero-dependency JavaScript library (13.5kB) for all kinds of color conversions and color scales. Chroma.js is pleasantly well documented and easy to use.

### On color harmonies

#### Analogous

An analogous color palette is a group of colors that are located close to each other on the color wheel, often those are hues around 30 degrees apart from the base hue.
Analogous color schemes are found in nature, and are often soothing and relaxing to the eye.

#### Complementary

A complentary color is one that exists in the opposite side of the color wheel.
Complementary color schemes are contrasting and energizing by nature.

#### Monochromatic

Monochromatic color schemes use only one hue, varying only it's lightness and saturation.

The idea is to create a random color, and from it, different color schemes

Main points:

Random color generator must return useful colors. A truly random color generator produces many color not that useful as a color scheme base, that's why I end up using colors in HSL, randomizing only the hue part, and letting saturation and lightness constant for all colors.

The idea is to have a minimal working solution by the end of the sprint. By a minimal working solution I understand a color scheme of 5 colors, 3 analagous + 2 complementaries.

Working with HSL colors in theory was the way to go, but in reality, due to the way human perception works, it didn't work out. For a clear explanation of the problem, see Alexei Boronine's post [Color Spaces for Human Beings](https://www.boronine.com/2012/03/26/Color-Spaces-for-Human-Beings/).

A working solution is using [HSLuv color space](https://www.hsluv.org/) developed by Boronine, it's implementation in Javascript: [Human-friendly HSL, reference implementation](https://github.com/hsluv/hsluv).

A work in progress can be seen [here](https://suspicious-poitras-18fbc7.netlify.app/)

[^1]: Colours are said to be in harmony when their juxtaposition produces a satisfying unity or balance to the viewer. Colour harmonies can be created by using two or more shades of the same hue (a monochromatic harmony), or with colors that exist on opposite sides of the color wheel (complementary harmony).
