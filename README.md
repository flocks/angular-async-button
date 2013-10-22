<h1>AngularJS directive</h1>

At work, I learnt you always have to tell the user what's happening. Sometimes, you app contains buttons, or links which trigger
in ajax actions in background. If you don't tell the user what's happening ( loading, success, or error ), he will monkey click
the button until he sees something has happened. This directive fills all the needs.

![Alt text](/img/first.png "Optional title")
![Alt text](/img/loading.png "Optional title")
![Alt text](/img/success.png "Optional title")
![Alt text](/img/error.png "Optional title")

<h2> Perks </h2>
* Prevent user for monkey clicking the link
* display a loader element when loading
* display a success and error signal when callback is finished


<h2>Usage</h2>
````html
 <async function="getData()" handle-error="handle()"><button class="btn normal">do something</button></async>
````

The directive takes two parameters
* function is the method of your controller you want to call when the user clicks on the element
* handle-error is the method of your controller you want to call in order to handle the error message
