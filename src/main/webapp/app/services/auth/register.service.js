(function () {
    'use strict';

    angular
        .module('khalilblogAngular1App')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
