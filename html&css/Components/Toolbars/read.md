
Add padding to the link itself and set it to display: block.

Setting the link to display: block is important, because the link is an inline element and by default doesn’t take up the full area of the li—so it’s not a nice easy target to click. To make links display like block-level elements, we need to explicitly declare the value of the display property to be block. If you want your link to take up the full area of its container, it needs to be set to display: block.

We need to add the padding to the link, not the list item; if we added it to the list item, the padding area would be unclickable—and we want to create an area where it’s easy to click the link.