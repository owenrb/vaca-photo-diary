angular.
  module('siteContent').
  component('mainContent', {
    templateUrl: 'site-content/site-content.template.html',
    controller: ['$http', '$routeParams', '$sce',
      function DiaryContentController($http, $routeParams, $sce) {
        var self = this;
        self.selected = Number($routeParams.selected);

        $http.get('data/diary.' + self.selected + '.json').then(function(response) {
          self.diary = response.data;

          self.mapUrl = $sce.trustAsResourceUrl(self.diary.mapUrl);
        });

      }
    ]
  });
