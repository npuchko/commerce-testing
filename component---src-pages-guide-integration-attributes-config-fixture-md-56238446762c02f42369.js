"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[6703],{59199:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return h}});var i=n(87462),o=n(63366),s=(n(15007),n(64983)),a=n(91515),r=["components"],l={},c={_frontmatter:l},u=a.Z;function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,s.mdx)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"configuration-fixture-attribute"},"Configuration fixture attribute"),(0,s.mdx)("p",null,"To set configuration values for individual tests and revert them after the test execution, use the ",(0,s.mdx)("inlineCode",{parentName:"p"},"Config")," attribute."),(0,s.mdx)("h2",{id:"format"},"Format"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php?start_inline=1"},"#[\n   Config(string $path, mixed $value, string $scopeType = 'default', string? $scopeValue = null)\n]\n")),(0,s.mdx)("h3",{id:"parameters"},"Parameters"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"path"),(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},"The XPath to the configuration option. See ",(0,s.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/paths/config-reference-sens.html"},"configuration reference")," for available options."))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"value"),(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},"A fixture value for the configuration option."))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"scopeType"),(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},"The scope to use to set configuration value. Allowed values: default, store, group and website. Default value: default."))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"scopeValue"),(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},'The code of the scope to be configured. If "default" scope is provided, this parameter can be omitted. If the scope type is store, group, or website, the default value of this parameter is the current value of the specified scope.')))),(0,s.mdx)("h2",{id:"principles"},"Principles"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"The ",(0,s.mdx)("inlineCode",{parentName:"li"},"Config")," attribute is available at the test method level only.\nIt is not available on the test case level."),(0,s.mdx)("li",{parentName:"ol"},"A test may contain several configuration options.")),(0,s.mdx)("h2",{id:"example"},"Example"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n\n/**\n * Test class for \\Magento\\TestFramework\\attribute\\ConfigFixture.\n */\nnamespace Magento\\Test\\attribute;\n\nclass ConfigFixtureTest extends \\PHPUnit\\Framework\\TestCase\n{\n    /**\n     * @var \\Magento\\TestFramework\\attribute\\ConfigFixture|\\PHPUnit_Framework_MockObject_MockObject\n     */\n    protected $_object;\n\n    protected function setUp()\n    {\n        $this->_object = $this->createPartialMock(\n            \\Magento\\TestFramework\\attribute\\ConfigFixture::class,\n            ['_getConfigValue', '_setConfigValue']\n        );\n    }\n\n    #[\n         Config('web/unsecure/base_url', 'http://example.com/', 'store')\n    ]\n    public function testGlobalConfig()\n    {\n        $this->_object->expects(\n            $this->at(0)\n        )->method(\n            '_getConfigValue'\n        )->with(\n            'web/unsecure/base_url'\n        )->will(\n            $this->returnValue('http://localhost/')\n        );\n        $this->_object->expects(\n            $this->at(1)\n        )->method(\n            '_setConfigValue'\n        )->with(\n            'web/unsecure/base_url',\n            'http://example.com/'\n        );\n        $this->_object->startTest($this);\n\n        $this->_object->expects(\n            $this->once()\n        )->method(\n            '_setConfigValue'\n        )->with(\n            'web/unsecure/base_url',\n            'http://localhost/'\n        );\n        $this->_object->endTest($this);\n    }\n\n    #[\n         Config( 'dev/restrict/allow_ips', '192.168.0.1', 'store')\n    ]\n    public function testCurrentStoreConfig()\n    {\n        $this->_object->expects(\n            $this->at(0)\n        )->method(\n            '_getConfigValue'\n        )->with(\n            'dev/restrict/allow_ips',\n            ''\n        )->will(\n            $this->returnValue('127.0.0.1')\n        );\n        $this->_object->expects(\n            $this->at(1)\n        )->method(\n            '_setConfigValue'\n        )->with(\n            'dev/restrict/allow_ips',\n            '192.168.0.1',\n            ''\n        );\n        $this->_object->startTest($this);\n\n        $this->_object->expects(\n            $this->once()\n        )->method(\n            '_setConfigValue'\n        )->with(\n            'dev/restrict/allow_ips',\n            '127.0.0.1',\n            ''\n        );\n        $this->_object->endTest($this);\n    }\n\n    #[\n         Config('dev/restrict/allow_ips', '192.168.0.2', 'store', 'admin')\n    ]\n    public function testSpecificStoreConfig()\n    {\n        $this->_object->expects(\n            $this->at(0)\n        )->method(\n            '_getConfigValue'\n        )->with(\n            'dev/restrict/allow_ips',\n            'admin'\n        )->will(\n            $this->returnValue('192.168.0.1')\n        );\n        $this->_object->expects(\n            $this->at(1)\n        )->method(\n            '_setConfigValue'\n        )->with(\n            'dev/restrict/allow_ips',\n            '192.168.0.2',\n            'admin'\n        );\n        $this->_object->startTest($this);\n\n        $this->_object->expects(\n            $this->once()\n        )->method(\n            '_setConfigValue'\n        )->with(\n            'dev/restrict/allow_ips',\n            '192.168.0.1',\n            'admin'\n        );\n        $this->_object->endTest($this);\n    }\n\n    #[\n         Config('dev/restrict/allow_ips', '192.168.0.2')\n    ]\n    public function testGlobalStoreConfig()\n    {\n        $this->_object->expects(\n            $this->at(0)\n        )->method(\n            '_getConfigValue'\n        )->with(\n            'dev/restrict/allow_ips',\n            'admin'\n        )->will(\n            $this->returnValue('192.168.0.1')\n        );\n        $this->_object->expects(\n            $this->at(1)\n        )->method(\n            '_setConfigValue'\n        )->with(\n            'dev/restrict/allow_ips',\n            '192.168.0.2',\n            'admin'\n        );\n        $this->_object->startTest($this);\n\n        $this->_object->expects(\n            $this->once()\n        )->method(\n            '_setConfigValue'\n        )->with(\n            'dev/restrict/allow_ips',\n            '192.168.0.1',\n            'admin'\n        );\n        $this->_object->endTest($this);\n    }\n\n    public function testInitStoreAfterOfScope()\n    {\n        $this->_object->expects($this->never())->method('_getConfigValue');\n        $this->_object->expects($this->never())->method('_setConfigValue');\n        $this->_object->initStoreAfter();\n    }\n\n    #[\n         Config('current_store', 'web/unsecure/base_url', 'http://example.com/')\n    ]\n    public function testInitStoreAfter()\n    {\n        $this->_object->startTest($this);\n        $this->_object->expects(\n            $this->at(0)\n        )->method(\n            '_getConfigValue'\n        )->with(\n            'web/unsecure/base_url'\n        )->will(\n            $this->returnValue('http://localhost/')\n        );\n        $this->_object->expects(\n            $this->at(1)\n        )->method(\n            '_setConfigValue'\n        )->with(\n            'web/unsecure/base_url',\n            'http://example.com/'\n        );\n        $this->_object->initStoreAfter();\n    }\n}\n\n")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-integration-attributes-config-fixture-md-56238446762c02f42369.js.map