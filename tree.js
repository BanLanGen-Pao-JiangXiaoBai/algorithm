// 二叉树的构建
function tree(arr){
  if(arr.length===0) return 
  let node = {};
  let data = arr.shift()
  if(data){
    node.data = data 
    node.leftchild = tree(arr)
    node.rightchild = tree(arr)
  }
  return Object.keys(node).length ? node : undefined
}

var newTree = tree([1,2,null,3,null,null,4,null,5])
console.log(newTree)

// 前序
function first(tree) {
  if(!tree) return
  var arr = []
  console.log(tree?.data)
  arr.push(tree.data)
  arr = arr.concat(first(tree?.leftchild))
  arr = arr.concat(first(tree?.rightchild))
  return arr
}
console.log(first(newTree).filter(item=>item!=undefined))

// 中序
function mid(tree){

}