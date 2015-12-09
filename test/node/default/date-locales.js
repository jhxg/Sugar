var runner = require('../setup');

// Tests
runner.loadTest('date');
runner.loadTest('locales/ca');
runner.loadTest('locales/da');
runner.loadTest('locales/de');
runner.loadTest('locales/es');
runner.loadTest('locales/fi');
runner.loadTest('locales/fr');
runner.loadTest('locales/it');
runner.loadTest('locales/ja');
runner.loadTest('locales/ko');
runner.loadTest('locales/nl');
runner.loadTest('locales/pl');
runner.loadTest('locales/pt');
runner.loadTest('locales/ru');
runner.loadTest('locales/sv');
runner.loadTest('locales/zh-CN');
runner.loadTest('locales/zh-TW');

runner.run(module);