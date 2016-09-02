hadditApp.factory('postFactory', [function(){
  var o = {
    posts: [
      {title: 'Hello', upvotes: 5,
      comments: [
        {author: 'Joe', body: 'Cool post!', upvotes: 0},
        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
      ]},
      {title: 'Good', upvotes: 2,
      comments: [
        {author: 'Joe', body: 'Cool post!', upvotes: 0},
        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
      ]},
      {title: 'Bad', upvotes: 15,
      comments: [
        {author: 'Joe', body: 'Cool post!', upvotes: 0},
        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0},
        {author: 'Bob', body: 'Great idea but everything is awesome!', upvotes: 0}
      ]},
      {title: 'Excellent', upvotes: 9,
      comments: [
        {author: 'Joe', body: 'Cool post!', upvotes: 0},
        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
      ]},
      {title: 'Terrific', upvotes: 4,
      comments: [
        {author: 'Joe', body: 'Cool post!', upvotes: 0},
        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
      ]}
    ]
  };

  
  return o;
}]);
