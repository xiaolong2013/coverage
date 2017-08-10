# ReadMe
[![Build Status](https://travis-ci.org/xiaolong2013/coverage.svg?branch=master)](https://travis-ci.org/xiaolong2013/coverage.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/xiaolong2013/coverage/badge.svg?branch=master)](https://coveralls.io/github/xiaolong2013/coverage?branch=master)

# coverage
如何给自己的项目增加测试覆盖率

### 步骤

* 安装 mocha

```
npm install mocha -g
```

* 安装断言库 should

```
npm install should --save-dev
```

* 编写测试用例

```
let should = require('should');

function add(x, y){
	return x + y
}

describe('sum', function() {
    describe('#add()', function() {
        it('1 add 2 should equal 3', function() {
            add(1, 2).should.equal(3);
        });
        it('4 add 5 should equal 9', function() {
            add(4, 5).should.equal(9);
        });
    });
});
```
* 执行 mocha 测试用例通过

* 安装 node 环境下的 测试覆盖率库 Istanbul

```
  npm install istanbul -g
```

* 安装mocha 的测试报告输出库 mocha-lcov-reporter

```
  npm install mocha-lcov-reporter --save-dev
```

* 先在本地执行

```
  istanbul cover ./node_modules/mocha/bin/_mocha --report lcovonly
```

* 开始做测试覆盖率
  
  ** 打开 https://github.com/nickmerwin/node-coveralls    

* node-coveralls
   
```
1.npm install coveralls --save-dev
2.npm install mocha-lcov-reporter --save-dev 安装 mocha 的报告生成方式
```
 
* 安装 Istanbul 

```
1.npm install istanbul --save-dev
```

* 在本地先把 测试数据生成

```
1.istanbul cover ./node_modules/mocha/bin/_mocha --report lcovonly
```

* 开始接入远端服务
* 1.先加入 travis-cl 集成进去 编译通过了
* 2.再加入 https://coveralls.io  往项目的根目录下 添加 .coveralls.yml 配置文件(这个配置文件其实不需要 本地也不需要)
* 3.往项目的readMe 文件中添加 勋章 badge
* 4.往 package.json 中 加入测试覆盖率的执行脚本 istanbul cover ./node_modules/mocha/bin/_mocha --report lcovonly -- -R spec && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js && rm -rf ./coverage 这段脚本在 node-coveralls Istanbul 就有
* 5.在 .travis.yml 中加入 执行脚本 就前面的执行 成功后 在执行 测试覆盖率after_script:npm run cover 
* 6.在 travis.ci 中配置一下 COVERALLS_REPO_TOKEN  不然会报 422 找不到 仓库的  
    以上步骤全部执行完以后就可以开始编译了

### 参考

* [should.js](https://github.com/shouldjs/should.js)
* [Travis CI](https://www.travis-ci.org/)
* [Travis CI Node](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)

 
