app.controller('PostController', ['$scope', 'suggestions', '$routeParams', function($scope, suggestions, $routeParams){
    suggestions.data.forEach(data => {
        if($routeParams.id  ==  data.id){
            $scope.post = data
        }
    });

    $scope.nickname = "Juanito Perez";

    $scope.comments = $scope.post.comments;
    $scope.newComment = {};
    
    $scope.saveComment = function(){  
        $scope.newComment.id = $scope.comments.length + 1; 
        $scope.newComment.nickname = $scope.nickname;
        $scope.newComment.upvotes = 0;
        $scope.newComment.date = Date();
        $scope.comments.push($scope.newComment);
        $scope.commentForm.$submitted = false;
        $scope.newComment = {};
        $('#btnClose').click();
    };

    $scope.increaseComment = function(id) {
        $scope.comments.forEach(comments => {
            if(comments.id === id ){
                comments.upvotes += 1;
            }
        });
    };
    
    $scope.decreaseComment = function(id) {
        $scope.comments.forEach(comments => {
            if(comments.id === id ){ 
                if(comments.upvotes === 0) {
                    comments.upvotes = 0;
                } else {
                    comments.upvotes -= 1;
                }
            } 

        });
    };
}]) 