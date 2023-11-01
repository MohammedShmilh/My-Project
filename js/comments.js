let likeCount = 0;
let dislikeCount = 0;

function handleLike() {
  likeCount++;
  document.getElementById('likeCount').textContent = likeCount;
}

function handleDislike() {
  dislikeCount++;
  document.getElementById('dislikeCount').textContent = dislikeCount;
}

// Example of adding comments dynamically
const  commentList = document.getElementById('commentList');
function addComment(comment) {
  const li = document.createElement('li');
  li.textContent = comment;
  commentList.appendChild(li);
}

addComment('This Is My Big WebSite InMa.');
addComment('Another comment.');
