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


* 安装 node-coveralls  coveralls 的作用是 收集istanbul生成的测试数据 发送到 coveralls.io这个网站显示你的 覆盖率
   
```
 npm install coveralls --save-dev
```
 
* 打开 https://travis-ci.com/(存放自己的private 仓库) 并用github 帐号做认证  然后 https://travis-ci.org(这个存放资金的public 仓库) 添加需要 build的 repo 

* 添加.travis.yml 在自己的项目根目录下

```
 language: node_js
 node_js:
  - "6"  
 install: 
   npm install -g mocha
   npm install -g istanbul
   npm install 
   npm run test  
```

* 开始 push 代码 并触发 ci build 


* https://coveralls.io/  用github 帐号做认证然后同步数据  添加要显示覆盖率的repo


* 在 package.json 文件中 增加

```
 "scripts": {
    "test": "mocha",
    "cove":"istanbul cover ./node_modules/mocha/bin/_mocha --report lcovonly -- -R spec && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js && rm -rf ./coverage"
  } 
```

* 在 .travis.yml 中添加 最后执行测试覆盖率 

```
  after_script:
     npm run cove  
```

* 再次push  build 完成并且数据提交成功以后 在 https://coveralls.io网站中自己的仓库中就会显示出 覆盖率

* 添加 badge(勋章)

```
   在 Readme 中添加
   [![Build Status](https://travis-ci.org/xiaolong2013/coverage.svg?branch=master)](https://travis-ci.org/xiaolong2013/coverage.svg?branch=master)
   [![Coverage Status](https://coveralls.io/repos/github/xiaolong2013/coverage/badge.svg?branch=master)](https://coveralls.io/github/xiaolong2013/coverage?branch=master)
```
 
 
### 参考

* [should.js](https://github.com/shouldjs/should.js)
* [Travis CI](https://www.travis-ci.org/)
* [Travis CI Node](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)

 
