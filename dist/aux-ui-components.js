/**
 * Name: aux-ui-components
 */
angular.module('aux-ui-components', []);
angular.module('aux-ui-components').component('accessType', {
	bindings: {
		value: '<'
	},
	template:
		'<span>' +
			'<i ng-if="::$ctrl.value===undefined"       class="fa fa-key"></i>' +
			'<i ng-if="::$ctrl.value===\'open\'"        class="fa fa-unlock"     translated-title="Open"></i>' +
			'<i ng-if="::$ctrl.value===\'controlled\'"  class="fa fa-unlock-alt" translated-title="Controlled"></i>' +
			'<i ng-if="::$ctrl.value===\'closed\'"      class="fa fa-lock"       translated-title="Closed"></i>' +
		'</span>'
});

angular.module('aux-ui-components').component('offerType', {
	bindings: {
		value: '<'
	},
	template:
		'<span>' +
			'<i ng-if="::$ctrl.value===undefined"       class="fa fa-binoculars"></i>' +
			'<i ng-if="::$ctrl.value===\'public\'"      class="fa fa-circle-o"  translated-title="Public"></i>' +
			'<i ng-if="::$ctrl.value===\'semiPublic\'"  class="fa fa-adjust"    translated-title="Semi-Public"></i>' +
			'<i ng-if="::$ctrl.value===\'secret\'"      class="fa fa-circle"    translated-title="Secret"></i>' +
		'</span>'
});

angular.module('aux-ui-components').directive('auxLabelState', function () {
	return {
		restrict: 'E',
		scope: {
			state: '<',
			translatedState: '<'
		},
		controller: function ($scope) {
			$scope.getIcon = function (state) {
				var icon = '';
				switch (state) {
					case 'draft':       icon = 'fa-file';           break;
					case 'active':      icon = 'fa-cogs';           break;
					case 'won':         icon = 'fa-trophy';         break;
					case 'finished':    icon = 'fa-flag-checkered'; break;
					case 'rejected':    icon = 'fa-ban';            break;
					default:            icon = 'fa-file';           break;
				}
				return icon;
			};
		},
		template: function (element, attrs) {
			return '<span class="label label-default text-upper state {{state}}">' +
					'<i class="fa {{getIcon(state)}}">&nbsp;</i>' +
					'<span>{{' + ((attrs.translatedState) ? 'translatedState' : 'state') + '}}</span>' +
				'</span>';
		}
	}
});
