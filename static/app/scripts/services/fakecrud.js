// Generated by CoffeeScript 1.7.1
(function() {
  var service,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  service = function() {
    return function() {
      var config, create, entries, fake, fakes, get, getList, id, list, remove, reply, rest, sample, update;
      rest = {};
      entries = [
        {
          'name': 'id',
          'faker': 'parseInt(Math.random()*100)'
        }, {
          name: 'name',
          faker: 'Faker.Name.findName()'
        }
      ];
      fakes = [];
      reply = function(obj, error) {
        if (error == null) {
          error = null;
        }
        return {
          'time': (+new Date()) / 1000,
          'result': obj,
          'error': error
        };
      };
      fake = function(count) {
        var ret;
        ret = [];
        _.times(count, function(i) {
          var obj;
          obj = {
            id: i
          };
          _.each(entries, function(e) {
            if (_.isFunction(e.faker)) {
              return e.faker(function(data) {
                return obj[e.name] = data;
              });
            } else {
              return obj[e.name] = eval(e.faker);
            }
          });
          return ret.push(obj);
        });
        return ret;
      };
      config = function(count, schema, replace) {
        if (replace == null) {
          replace = false;
        }
        if (replace) {
          entries = schema;
        } else {
          entries = entries.concat(schema);
        }
        fakes = fake(count);
        return this;
      };
      list = function(cb) {
        var data;
        data = reply(fakes);
        if (data.error) {
          return typeof errCB === "function" ? errCB(data.error) : void 0;
        } else {
          return typeof cb === "function" ? cb(data.result) : void 0;
        }
      };
      create = function(obj, cb, errCB) {
        var data;
        obj.id = id();
        fakes.push(obj);
        data = reply(obj);
        if (data.error) {
          return typeof errCB === "function" ? errCB(data.error) : void 0;
        } else {
          return typeof cb === "function" ? cb(data.result) : void 0;
        }
      };
      update = function(obj, cb, errCB) {
        var data;
        data = reply(true);
        if (data.error) {
          return typeof errCB === "function" ? errCB(data.error) : void 0;
        } else {
          return typeof cb === "function" ? cb(data.result) : void 0;
        }
      };
      getList = function(ids, cb, errCB) {
        ids = _.map(ids, function(id) {
          return "" + id;
        });
        return list(function(res) {
          var data, objects;
          objects = _.filter(res, function(q) {
            var _ref;
            return _ref = "" + q.id, __indexOf.call(ids, _ref) >= 0;
          });
          data = reply(objects);
          if (data.error) {
            return typeof errCB === "function" ? errCB(data.error) : void 0;
          } else {
            return typeof cb === "function" ? cb(data.result) : void 0;
          }
        });
      };
      get = function(id, cb, errCB) {
        var data, obj;
        obj = _.find(fakes, function(p) {
          return ("" + p.id) === ("" + id);
        });
        data = reply(obj);
        if (data.error) {
          return typeof errCB === "function" ? errCB(data.error) : void 0;
        } else {
          return typeof cb === "function" ? cb(data.result) : void 0;
        }
      };
      remove = function(id, cb, errCB) {
        var data;
        fakes = _.filter(fakes, function(p) {
          return ("" + p.id) !== ("" + id);
        });
        data = reply(true);
        if (data.error) {
          return typeof errCB === "function" ? errCB(data.error) : void 0;
        } else {
          return typeof cb === "function" ? cb(data.result) : void 0;
        }
      };
      id = function() {
        var p;
        p = _.max(fakes, 'id');
        return parseInt(p.id) + 1;
      };
      sample = function() {
        var p;
        p = _.clone(fakes[0]);
        p.id = id();
        return p;
      };
      return {
        config: config,
        list: list,
        get: get,
        getList: getList,
        create: create,
        update: update,
        remove: remove,
        fake: fake,
        sample: sample
      };
    };
  };

  angular.module('fleetApp').factory('FakeCrud', service);

}).call(this);
