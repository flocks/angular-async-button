<h1>AngularJS directive</h1>


<h2> Perks </h2>
* Prevent user for monkey clicking the link
* display a loader element when loading
* display a success and error signal when callback is finished


<h2>Usage</h2>
````html
 <async function="getData()" handle-error="handle()"><button class="btn normal">open popup</button></async>
````

The directive takes two parameters
* function is the method of your controller you want to call when the user clicks on the element
* handle-error is the method of your controller you want to call in order to handle the error message
