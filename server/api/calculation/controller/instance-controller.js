"use strict";
var instance_dao_1 = require('../dao/instance-dao');
var InstanceController = (function () {
    function InstanceController() {
    }
    InstanceController.getAll = function (req, res) {
        instance_dao_1.default['getAll']()
            .then(function (instances) { return res.status(200).json(instances); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    InstanceController.getOne = function (req, res) {
        var _id = req.params.id;
        instance_dao_1.default['getOne']({ _id: req.params.id })
            .then(function (instance) { return res.status(200).json(instance); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    InstanceController.createInstance = function (req, res) {
        var _instance = req.body;
        instance_dao_1.default['createInstance'](_instance)
            .then(function (instance) { return res.status(201).json(instance); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    InstanceController.deleteInstance = function (req, res) {
        var _id = req.params.id;
        instance_dao_1.default['deleteInstance'](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return InstanceController;
}());
exports.InstanceController = InstanceController;