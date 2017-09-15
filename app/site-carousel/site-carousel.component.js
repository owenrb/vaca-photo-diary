angular.
  module('siteCarousel').
  component('mainCarousel', {
    templateUrl: 'site-carousel/site-carousel.template.html',
    controller: ['$http', '$routeParams',
      function DiaryListController($http, $routeParams) {
        var self = this;
        self.selected = Number($routeParams.selected);

        $http.get('data/diaries.json').then(function(response) {
          self.size = response.data.size;

          // prev
          if(self.selected > 0) {
            self.prevUrl = "#!/diary/" + (self.selected - 1);
          } else {
            self.prevUrl = "#!/diary/" + (self.size - 1);
          }
          // next
          if(self.selected < self.size - 1) {
            self.nextUrl = "#!/diary/" + (self.selected + 1);
          } else {
            self.nextUrl = "#!/diary/0";
          }

        });

        $http.get('data/diary.' + self.selected + '.json').then(function(response) {
          self.diary = response.data;
        });

        self.range = function(count) {
            var input = [];
            for (var i = 0; i < count; i++) {
                input.push(i);
            }
            return input;
        };

        self.getPagingClass = function(idxParam) {
          var idx = Number(idxParam);
          if(idx === self.selected) {
            return "flex-active";
          } else {
            return "";
          }
        }
      }
    ]
  });
