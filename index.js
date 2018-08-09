function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll(".ranked-list li")
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  let grandNode = document.querySelector("#grand-node")
  let children = grandNode.children[0]
  while (children.children[0]) {
    children = children.children[0]
  }
  return children.innerText
}
