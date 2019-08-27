app.controller('SuggestionController', ['$scope', 'suggestions', function($scope, suggestions) {
    $scope.newPosts = {};
    $scope.posts = suggestions.data;
    
    $scope.increase = function(id) {
        $scope.posts.forEach(posts => {
            if(posts.id === id ){
                posts.upvotes += 1;
            }
        });
    };
    $scope.decrease = function(id) {
        $scope.posts.forEach(posts => {
            if(posts.id === id ){ 
                if(posts.upvotes === 0) {
                    posts.upvotes = 0;
                } else {
                    posts.upvotes -= 1;
                }
            } 

        });
    };
    $scope.saveData = function(){ 
        $scope.newPosts.upvotes = 0;
        $scope.newPosts.comments = [];
        $scope.newPosts.id = $scope.posts.length + 1;
        $scope.posts.push($scope.newPosts);
        $scope.suggestionForm.$submitted = false;
        $scope.newPosts = {};
        $('#btnClose').click();
    };
}])