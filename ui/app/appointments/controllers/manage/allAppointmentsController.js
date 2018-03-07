'use strict';

angular.module('bahmni.appointments')
    .controller('AllAppointmentsController', ['$scope', '$state', 'appService',
        function ($scope, $state, appService) {
            $scope.enableCalendarView = appService.getAppDescriptor().getConfigValue('enableCalendarView');
            $scope.isSearchEnabled = false;
            $scope.manageAppointmentPrivilege = Bahmni.Appointments.Constants.privilegeManageAppointments;

            $scope.navigateTo = function (viewName) {
                $scope.currentTab = viewName;
                var path = 'home.manage.appointments.' + viewName;
                // Sección 'if' añadida al original para que sólo se listen citas NO CANCELADAS
                if (viewName == 'list') {
                    $state.go(path, $state.params.filterParams.statusList = _.without(Bahmni.Appointments.Constants.appointmentStatusList, "Cancelled"), {reload: false});
                }
                $state.go(path, $state.params, {reload: false});
            };

            $scope.getCurrentAppointmentTabName = function () {
                return $state.current.tabName;
            };

            $scope.$watch(function () {
                return $state.params.isSearchEnabled;
            }, function (isSearchEnabled) {
                $scope.isSearchEnabled = isSearchEnabled;
            }, true);
        }]);
