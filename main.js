class Node {
     
  constructor(item) {
        this.key = item;
        this.left = this.right = null;
    }
}
   
      // Root of BST
var root = null;
   
      
function insert(key) {
    root = insertRec(root, key);
}
   
      
function insertRec(root , key) {
   
          
    if (root == null) {
        root = new Node(key);
        return root;
    }
   
         
    if (key < root.key)
        root.left = insertRec(root.left, key);

    else if (key > root.key)
        root.right = insertRec(root.right, key);
   
         
    return root;
}
   
function inorder() {
    inorderRec(root);
}
   
      
function inorderRec(root){
    if (root != null) {
        inorderRec(root.left);
        console.log(root.key);
        inorderRec(root.right);
    }
}

//search function
function search(key){
    ans=searchRec(root,key);
     
}

function searchRec(root, key)
{
    
    if (root == null ||
        root.key == key)
        return root;
 
   
    if (root.key < key)
       return search(root.right, key);
 
    
    return search(root.left, key);
}
 

insert(50);
insert(30);
insert(20);
insert(40);
insert(70);
insert(60);
insert(80);
 
        
       

search(70);