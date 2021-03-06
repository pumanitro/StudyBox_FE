(function() {
  'use strict';

  angular
    .module('studyBoxFe')
    .controller('LoginController', LoginController);

  function LoginController($log) {
    var vm = this;
    vm.formStatus = '';
    vm.submit = submit;


    function submit(isValid) {
      if (isValid) {
        vm.formStatus = "";
        $log.info("Poprawne logowanie");
      }else{
        vm.formStatus = "Niepoprawny login lub hasło";
        $log.info("błąd logowania");
      }
    }
  }
})();
