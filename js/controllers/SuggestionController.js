(function() {
    'use strict';
            
    angular
    .module('SuggestionsApp')
    .controller('SuggestionController', SuggestionController);

    SuggestionController.$inject = ['$scope', 'suggestions'];

    function SuggestionController($scope, suggestions){
        $scope.newPosts = {};
        $scope.posts = suggestions.data; 
        $scope.increase = increaseF; 
        $scope.decrease = decreaseF;
        $scope.saveData = saveDataF;
        
        function increaseF(id) {
            $scope.posts.forEach(posts => {
                if(posts.id === id ){
                    posts.upvotes += 1;
                }
            });
        }; 

        function decreaseF(id) {
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

        function saveDataF(){ 
            $scope.newPosts.upvotes = 0;
            $scope.newPosts.comments = [];
            $scope.newPosts.id = $scope.posts.length + 1;
            $scope.posts.push($scope.newPosts);
            $scope.suggestionForm.$submitted = false;
            $scope.newPosts = {};
            $('#btnClose').click();
        };
    }

})();