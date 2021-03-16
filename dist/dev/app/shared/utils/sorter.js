"use strict";
var Sorter = (function () {
    function Sorter() {
        this.property = null;
        this.direction = 1;
    }
    Sorter.prototype.sort = function (collection, prop) {
        var _this = this;
        this.property = prop;
        this.direction = (this.property === prop) ? this.direction * -1 : 1;
        collection.sort(function (a, b) {
            var aVal;
            var bVal;
            if (prop && prop.indexOf('.')) {
                aVal = _this.resolveProperty(prop, a);
                bVal = _this.resolveProperty(prop, b);
            }
            else {
                aVal = a[prop];
                bVal = b[prop];
            }
            if (_this.isString(aVal))
                aVal = aVal.trim().toUpperCase();
            if (_this.isString(bVal))
                bVal = bVal.trim().toUpperCase();
            if (aVal === bVal) {
                return 0;
            }
            else if (aVal > bVal) {
                return _this.direction * -1;
            }
            else {
                return _this.direction * 1;
            }
        });
    };
    Sorter.prototype.isString = function (val) {
        return (val && (typeof val === 'string' || val instanceof String));
    };
    Sorter.prototype.resolveProperty = function (path, obj) {
        return path.split('.').reduce(function (prev, curr) {
            return (prev ? prev[curr] : undefined);
        }, obj || self);
    };
    return Sorter;
}());
exports.Sorter = Sorter;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdXRpbHMvc29ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUFBO1FBRUMsYUFBUSxHQUFXLElBQUksQ0FBQztRQUN4QixjQUFTLEdBQVcsQ0FBQyxDQUFDO0lBOEN2QixDQUFDO0lBNUNHLHFCQUFJLEdBQUosVUFBSyxVQUFpQixFQUFFLElBQVM7UUFBakMsaUJBZ0NDO1FBL0JHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXBFLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFNLEVBQUMsQ0FBTTtZQUMxQixJQUFJLElBQVMsQ0FBQztZQUNkLElBQUksSUFBUyxDQUFDO1lBR2QsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QyxDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDZixJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pCLENBQUM7WUFHRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDMUQsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRTFELEVBQUUsQ0FBQSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNkLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDYixDQUFDO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNsQixNQUFNLENBQUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMvQixDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5QkFBUSxHQUFSLFVBQVMsR0FBUTtRQUNmLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLFlBQVksTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsZ0NBQWUsR0FBZixVQUFnQixJQUFZLEVBQUUsR0FBUTtRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBUyxJQUFJLEVBQUUsSUFBSTtZQUM3QyxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFBO1FBQzFDLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUE7SUFDakIsQ0FBQztJQUVMLGFBQUM7QUFBRCxDQWpEQSxBQWlEQyxJQUFBO0FBakRZLGNBQU0sU0FpRGxCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC91dGlscy9zb3J0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU29ydGVyIHtcblxuXHRwcm9wZXJ0eTogc3RyaW5nID0gbnVsbDtcblx0ZGlyZWN0aW9uOiBudW1iZXIgPSAxO1xuXG4gICAgc29ydChjb2xsZWN0aW9uOiBhbnlbXSwgcHJvcDogYW55KSB7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICh0aGlzLnByb3BlcnR5ID09PSBwcm9wKSA/IHRoaXMuZGlyZWN0aW9uICogLTEgOiAxO1xuXG4gICAgICAgIGNvbGxlY3Rpb24uc29ydCgoYTogYW55LGI6IGFueSkgPT4ge1xuICAgICAgICAgICAgbGV0IGFWYWw6IGFueTtcbiAgICAgICAgICAgIGxldCBiVmFsOiBhbnk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vSGFuZGxlIHJlc29sdmluZyBjb21wbGV4IHByb3BlcnRpZXMgc3VjaCBhcyAnc3RhdGUubmFtZScgZm9yIHByb3AgdmFsdWVcbiAgICAgICAgICAgIGlmIChwcm9wICYmIHByb3AuaW5kZXhPZignLicpKSB7XG4gICAgICAgICAgICAgIGFWYWwgPSB0aGlzLnJlc29sdmVQcm9wZXJ0eShwcm9wLCBhKTtcbiAgICAgICAgICAgICAgYlZhbCA9IHRoaXMucmVzb2x2ZVByb3BlcnR5KHByb3AsIGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGFWYWwgPSBhW3Byb3BdO1xuICAgICAgICAgICAgICBiVmFsID0gYltwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9GaXggaXNzdWVzIHRoYXQgc3BhY2VzIGJlZm9yZS9hZnRlciBzdHJpbmcgdmFsdWUgY2FuIGNhdXNlIHN1Y2ggYXMgJyBTYW4gRnJhbmNpc2NvJ1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNTdHJpbmcoYVZhbCkpIGFWYWwgPSBhVmFsLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNTdHJpbmcoYlZhbCkpIGJWYWwgPSBiVmFsLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIFxuICAgICAgICAgICAgaWYoYVZhbCA9PT0gYlZhbCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhVmFsID4gYlZhbCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uICogLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gKiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgaXNTdHJpbmcodmFsOiBhbnkpIDogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKHZhbCAmJiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgdmFsIGluc3RhbmNlb2YgU3RyaW5nKSk7XG4gICAgfVxuICAgIFxuICAgIHJlc29sdmVQcm9wZXJ0eShwYXRoOiBzdHJpbmcsIG9iajogYW55KSB7XG4gICAgICByZXR1cm4gcGF0aC5zcGxpdCgnLicpLnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXJyKSB7XG4gICAgICAgICAgcmV0dXJuIChwcmV2ID8gcHJldltjdXJyXSA6IHVuZGVmaW5lZClcbiAgICAgIH0sIG9iaiB8fCBzZWxmKVxuICAgIH1cblxufSJdfQ==