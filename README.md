# keyboard-break

Just a small script to have a count about the number of key you pressed from your keyboard today :D

## Licence

You are free to modify and distribute the code.

## installation

clone this repo somewhere on your desktop, then,

```
yarn install
```
or
```
npm install
```

## running and using the app

There is a vb script to make things simple. Just double click the script to run the app.
You should see the count at the bottom of the screen.
Every time you press a key on your keyboard, the count goes up. When it reaches 2000 characters the counter becomes red, and a dialog opens. this simply means you have to take a BREAK ! (prevent RSI ...).
Select the icon of the application in the windows app bar if the window lost focus, and press F5 to remove the red color off the counter. This will always reset the session counter (not the global counter that you see). The session counter is used to display this alert everytime you reach 2000 characters. This also means that as long as the counter remains red, no alert will be emitted furthermore.

## further

- If you want to modify the constrain of 2000 characters threshold, modify the value in the `index.html` file (line 44).
- If you want to close the application you can press ctrl + w or just close the icon in the app bar.