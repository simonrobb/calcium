"use strict";
var Python = require('../../../../node_modules/python-shell');
var CalculationController = (function () {
    function CalculationController() {
    }
    CalculationController.createCalculation = function (req, res) {
        var _inputs = req.body.inputs;
        var _calculation = req.body.calculation;
        var outputs = {};
        var py = new Python('./server/api/calculation/controller/calculation-engine.py', { mode: 'json' });
        py.on('message', function (m) {
            switch (m.status) {
                case 'success':
                    for (var attrname in m.values) {
                        outputs[attrname] = m.values[attrname];
                    }
                    var _data = {
                        status: 'success',
                        outputs: outputs
                    };
                    res.json(_data);
                    break;
                case 'error':
                    console.error("ERROR: " + m.message);
                    res.json(500, { message: m.message });
                    break;
                case 'log':
                    console.log("LOG: " + JSON.stringify(m.data));
                    break;
            }
        });
        for (var name in _inputs) {
            py.send({
                command: 'set_var',
                args: {
                    name: name,
                    value: _inputs[name]
                }
            });
        }
        try {
            py
                .send({ command: 'set_calculation', args: { value: _calculation } })
                .send({ command: 'execute' })
                .end();
        }
        catch (e) {
            console.log(e);
        }
    };
    return CalculationController;
}());
exports.CalculationController = CalculationController;
//# sourceMappingURL=calculation-controller.js.map