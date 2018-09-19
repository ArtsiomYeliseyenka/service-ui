# CSS

On our project we are using [SCSS syntax](https://sass-lang.com/guide) and [CSS modules](https://github.com/css-modules/css-modules).

'/src/common/css/common.scss' - common styles.

'/src/common/css/fonts/' - fonts.

'/src/common/css/variables/' - color, font and screen breakpoint variables.

As far as usually components has small size, it's preferable to do not use css selectors nesting (exclude pseudo elements, pseudo classes and state-classes).

It's allowed to use flex-box properties.

Main element of component should have class name the same as component's name, but in lowercase and dash-notation (ComponentName / component-name).

We are strongly recommend to follow [CSS properties order guide](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/).

If you need to add custom styles for a third-party components, `:global` pseudo selector will be helpful.

> It's not allowed to:
>
> - define colors directly by hex-codes. All colors used on the project are defined as global variables.
> - use font-weight property. All font types are available with using of global font variables.
> - add new CSS global variables (or edit existing) without discussion with UI Team & UX Designer.
