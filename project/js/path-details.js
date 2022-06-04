let pathElements = document.querySelectorAll('.pathes__element_wrapper');

for (let pathElement of pathElements) {
   let pathElementChildren = pathElement.children;
   pathElementChildren[0].onclick = function () {
      pathElementChildren[1].classList.toggle("active");
   }
}