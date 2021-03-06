// PROFILE CONTROLLER
function profileController($scope, $location, $http, userFactory, userService) {
    userService.getUserById(userFactory.datas._id).then(function (e) { //'56f6a4ad4cb92db115699b9c'
        $('body').css('background-image', 'none').css('background-image', 'url("./assets/bg.jpg")');
        userFactory.datas = e.data[0];
        userFactory.datas.avatar = [];
        $scope.username = userFactory.datas.profile.firstname + ' ' + userFactory.datas.profile.lastname;
        $scope.user = userFactory.datas;
        $scope.toBase64 = function (files) {
            userService.toBase64(files);
            $scope.user.profile.avatar = userFactory.datas.avatar;
        };
        $scope.sendProfile = function () {
            userService.updateAccount($scope.user._id, $scope.user.profile, $scope.user.search);
        };
    });
}