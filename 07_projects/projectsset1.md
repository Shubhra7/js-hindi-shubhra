# Project related to DOM
# mug down file

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Findex.html)


# Solution code

## project 1

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.querySelector('body');
console.log(body);

buttons.forEach(function (but) {
  but.addEventListener('click', function (e) {
    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = 'grey';
    // }
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});


```