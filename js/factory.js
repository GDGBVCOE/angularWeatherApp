app.factory("cityfactory", function ($http, $q) {
    return {
        serverCall: function (cidName) {
            var pr = $q.defer();
            var url = apiURLs.url1 + cidName + apiURLs.url2;
            $http.get(url).then(function (data) {
                pr.resolve(data);
                console.log("data recieved");
            }, function (error) {
                pr.reject(error);
                console.log("data not recieved");
            });
            return pr.promise;
        }
    };
});