"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var project_service_1 = require('../shared/services/project.service');
var myGlobals = require('../globals');
var SidebarComponent = (function () {
    function SidebarComponent(_router, curr, projectService) {
        this._router = _router;
        this.projectService = projectService;
        this.currRouter = _router;
        this.currSegment = curr;
        console.log("SidebarComponent constructor");
        console.log("SidebarComponent constructor : ");
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logUser = JSON.parse(window.localStorage['user'] || '{}');
        myGlobals.LoginUser = this.logUser;
        this.projectService.projectList(this.logUser.pkuid)
            .subscribe(function (projects) {
            console.log(projects);
            _this.selectedProjectid = _this.currRouter.routeTree._root.children[0].children[0].value.getParam("pkproid");
            _this.projects = projects;
            setTimeout(function () {
                $('#side-menu').metisMenu();
            }, 1000);
        }, function (error) {
            _this.errorMsg = error;
        });
        console.log("SidebarComponent ngOnInit");
        console.log(this.currSegment);
    };
    SidebarComponent.prototype.doLogout = function () {
        window.localStorage.removeItem("user");
        this._router.navigate(['login']);
    };
    SidebarComponent.prototype.routerOnActivate = function (curr, prev, currTree) {
        var pkproid = +curr.getParam('pkproid');
        console.log("SidebarComponent routerOnActivate : " + pkproid);
    };
    SidebarComponent.prototype.getProjectDetails = function (selProject) {
        this.selectedProjectid = selProject.pkproid;
        myGlobals.selectedProject = selProject;
        this.currRouter.navigate(['/project/' + selProject.pkproid + "/task"]);
    };
    SidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sidebar',
            templateUrl: 'sidebar.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router, (typeof (_a = typeof router_1.RouteSegment !== 'undefined' && router_1.RouteSegment) === 'function' && _a) || Object, project_service_1.ProjectService])
    ], SidebarComponent);
    return SidebarComponent;
    var _a;
}());
exports.SidebarComponent = SidebarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsdUJBUU8saUJBQWlCLENBQUMsQ0FBQTtBQUV6Qix1QkFBaUQsaUJBQWlCLENBQUMsQ0FBQTtBQUtuRSxnQ0FBK0Isb0NBQW9DLENBQUMsQ0FBQTtBQUdwRSxJQUFPLFNBQVMsV0FBVyxZQUFZLENBQUMsQ0FBQztBQVd6QztJQWFJLDBCQUFvQixPQUFlLEVBQUUsSUFBa0IsRUFDM0MsY0FBOEI7UUFEdEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFFdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBRTVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUUsQ0FBQztJQU1wRCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUFBLGlCQStCQztRQTNCRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUMvRCxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7YUFDOUMsU0FBUyxDQUFDLFVBQUMsUUFBbUI7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNyQixLQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUUzRyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUV6QixVQUFVLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2hDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUliLENBQUMsRUFBRSxVQUFDLEtBQVU7WUFDVixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUUxQixDQUFDLENBQUMsQ0FBQztRQUVQLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUtsQyxDQUFDO0lBQ0QsbUNBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBT0QsMkNBQWdCLEdBQWhCLFVBQWlCLElBQWtCLEVBQUUsSUFBa0IsRUFBRSxRQUFtQjtRQUl4RSxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUVsRSxDQUFDO0lBRUQsNENBQWlCLEdBQWpCLFVBQWtCLFVBQW1CO1FBSWpDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQzVDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO1FBRXZDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxHQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQVl2RSxDQUFDO0lBNUdMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLHdCQUFlLEVBQUUsd0JBQWUsQ0FBQztTQUNwRSxDQUFDOzt3QkFBQTtJQXlHRix1QkFBQzs7QUFBRCxDQXJHQSxBQXFHQyxJQUFBO0FBckdZLHdCQUFnQixtQkFxRzVCLENBQUEiLCJmaWxlIjoiYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgUm91dGVyLFxuICAgIE9uQWN0aXZhdGUsXG4gICAgUm91dGVzLFxuICAgIFJPVVRFUl9ESVJFQ1RJVkVTLFxuICAgIFJPVVRFUl9QUk9WSURFUlMsXG4gICAgUm91dGVTZWdtZW50LFxuICAgIFJvdXRlVHJlZVxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8vaW1wb3J0IHsgQUNDT1JESU9OX0RJUkVDVElWRVMgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xuLy9pbXBvcnQge0dyaWRDbXB9IGZyb20gJy4uLy4uLy4uL3BhZ2VzL2dyaWQvY29tcG9uZW50cy9ncmlkJztcblxuaW1wb3J0IHsgUHJvamVjdFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvcHJvamVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2plY3QsIFVzZXIgfSBmcm9tICcuLi9zaGFyZWQvaW50ZXJmYWNlcyc7XG5cbmltcG9ydCBteUdsb2JhbHMgPSByZXF1aXJlKCcuLi9nbG9iYWxzJyk7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzaWRlYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3NpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVNdXG59KVxuLy9AUm91dGVzKFtcbi8vICAgIHsgcGF0aDogJy9ncmlkJywgY29tcG9uZW50OiBHcmlkQ21wLCBhczogJ0dyaWQnIH1cbi8vXSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGVycm9yTXNnOiBzdHJpbmc7XG4gICAgXG4gICAgbG9nVXNlcjogVXNlcjtcbiAgICBcbiAgICBwcm9qZWN0czogUHJvamVjdFtdO1xuXG4gICAgc2VsZWN0ZWRQcm9qZWN0aWQ6IG51bWJlcjtcbiAgICBcbiAgICBwcml2YXRlIGN1cnJSb3V0ZXI6IFJvdXRlcjtcbiAgICBwcml2YXRlIGN1cnJTZWdtZW50OiBSb3V0ZVNlZ21lbnQ7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIGN1cnI6IFJvdXRlU2VnbWVudCxcbiAgICAgICAgcHJpdmF0ZSBwcm9qZWN0U2VydmljZTogUHJvamVjdFNlcnZpY2UpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3VyclJvdXRlciA9IF9yb3V0ZXI7XG4gICAgICAgIHRoaXMuY3VyclNlZ21lbnQgPSBjdXJyOyAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2lkZWJhckNvbXBvbmVudCBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2lkZWJhckNvbXBvbmVudCBjb25zdHJ1Y3RvciA6IFwiICk7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5jdXJyUm91dGVyLnJvdXRlVHJlZS5fcm9vdC5jaGlsZHJlblswXS5jaGlsZHJlblswXS52YWx1ZS5nZXRQYXJhbShcInBrcHJvaWRcIikpO1xuICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2coX3JvdXRlci5yb3V0ZVRyZWUpO1xuICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2coY3Vycik7ICAgXG4gICAgICAgIC8vY29uc29sZS5sb2coK2N1cnIuZ2V0UGFyYW0oJ3BrcHJvaWQnKSk7ICAgXG4gICAgICAgIC8vY29uc29sZS5sb2coK2N1cnJUcmVlLnBhcmVudChjdXJyKS5nZXRQYXJhbSgncGtwcm9pZCcpKTsgICBcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gTWV0c2lNZW51XG4gICAgICAgIC8vJCgnI3NpZGUtbWVudScpLm1ldGlzTWVudSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5sb2dVc2VyID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlWyd1c2VyJ10gfHwgJ3t9Jyk7XG4gICAgICAgIG15R2xvYmFscy5Mb2dpblVzZXIgPSB0aGlzLmxvZ1VzZXI7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnByb2plY3RTZXJ2aWNlLnByb2plY3RMaXN0KHRoaXMubG9nVXNlci5wa3VpZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHByb2plY3RzOiBQcm9qZWN0W10pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdGlkID0gdGhpcy5jdXJyUm91dGVyLnJvdXRlVHJlZS5fcm9vdC5jaGlsZHJlblswXS5jaGlsZHJlblswXS52YWx1ZS5nZXRQYXJhbShcInBrcHJvaWRcIik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgXG4gICAgICAgICAgICAgICAgICAgICQoJyNzaWRlLW1lbnUnKS5tZXRpc01lbnUoKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTsgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy90aGlzLnByb2plY3RzID0gdGhpcy5maWx0ZXJlZEN1c3RvbWVycyA9IGN1c3RvbWVycztcbiAgICAgICAgICAgICAgICAvL3RoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ2Rhc2hib2FyZCddKTtcbiAgICAgICAgICAgIH0sIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1zZyA9IGVycm9yO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJMb2dpbkNvbXBvbmVudCBsb2dpbiBmYWlsOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2lkZWJhckNvbXBvbmVudCBuZ09uSW5pdFwiKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyU2VnbWVudCk7XG4gICAgICAgIC8vdGhpcy5zZWxlY3RlZFByb2plY3RJZCA9IHRoaXMuY3VyclJvdXRlci5yb3V0ZVRyZWUuX3Jvb3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udmFsdWUuZ2V0UGFyYW0oXCJwa3Byb2lkXCIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuY3VyclJvdXRlci5yb3V0ZVRyZWUuX3Jvb3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udmFsdWUuZ2V0UGFyYW0oXCJwa3Byb2lkXCIpKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyb3V0ZXIucm91dGVUcmVlKTtcblxuICAgIH1cbiAgICBkb0xvZ291dCgpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XG4gICAgfVxuLy8gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuLy8gICAgICAgIGNvbnNvbGUubG9nKFwiU2lkZWJhckNvbXBvbmVudCBuZ0FmdGVyQ29udGVudEluaXRcIik7XG4vLyAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyUm91dGVyKTtcbi8vICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJSb3V0ZXIucm91dGVUcmVlLl9yb290LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnZhbHVlLmdldFBhcmFtKFwicGtwcm9pZFwiKSk7XG4vLyAgICB9XG5cbiAgICByb3V0ZXJPbkFjdGl2YXRlKGN1cnI6IFJvdXRlU2VnbWVudCwgcHJldjogUm91dGVTZWdtZW50LCBjdXJyVHJlZTogUm91dGVUcmVlKSB7XG4gICAgICAgIC8vdGhpcy5jdXJyU2VnbWVudCA9IGN1cnI7XG5cbiAgICAgICAgLy9sZXQgcGtwcm9pZCA9ICtjdXJyVHJlZS5wYXJlbnQoY3VycikuZ2V0UGFyYW0oJ3BrcHJvaWQnKTtcbiAgICAgICAgbGV0IHBrcHJvaWQgPSArY3Vyci5nZXRQYXJhbSgncGtwcm9pZCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNpZGViYXJDb21wb25lbnQgcm91dGVyT25BY3RpdmF0ZSA6IFwiICsgcGtwcm9pZCk7XG4gICAgICAgIC8vdGhpcy5nZXRQcm9qZWN0VGFza0xpc3QocGtwcm9pZCk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdERldGFpbHMoc2VsUHJvamVjdDogUHJvamVjdCkge1xuICAgICAgICAvL3RoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ1NpZ251cCddKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwa3Byb2lkKTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdGlkID0gc2VsUHJvamVjdC5wa3Byb2lkO1xuICAgICAgICBteUdsb2JhbHMuc2VsZWN0ZWRQcm9qZWN0ID0gc2VsUHJvamVjdDtcblxuICAgICAgICB0aGlzLmN1cnJSb3V0ZXIubmF2aWdhdGUoWycvcHJvamVjdC8nK3NlbFByb2plY3QucGtwcm9pZCtcIi90YXNrXCJdKTtcblxuICAgICAgICAvLyAgICAgICAgdGhpcy5wcm9qZWN0U2VydmljZS5wcm9qZWN0RGV0YWlsKDE4KVxuICAgICAgICAvLyAgICAgICAgICAgIC5zdWJzY3JpYmUoKHRhc2tzOiBUYXNrW10pID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza3MpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIC8vdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzOyAgICBcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgLy90aGlzLnByb2plY3RzID0gdGhpcy5maWx0ZXJlZEN1c3RvbWVycyA9IGN1c3RvbWVycztcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgLy90aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydkYXNoYm9hcmQnXSk7XG4gICAgICAgIC8vICAgICAgICAgICAgfSwgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1zZyA9IGVycm9yO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTG9naW5Db21wb25lbnQgbG9naW4gZmFpbDogXCIgKyBlcnJvcik7XG4gICAgICAgIC8vICAgICAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=
