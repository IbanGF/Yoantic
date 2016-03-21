angular.module('app', ['ngRoute', 'ngAnimate', 'ngAutocomplete', 'flow'])
    .config(routes)
    .controller('userCreationController', userCreationController)
    .controller('userUpdateController', userUpdateController)
    .service('userService', userService);
