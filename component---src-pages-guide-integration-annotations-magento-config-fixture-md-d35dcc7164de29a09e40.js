"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[7062],{85527:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return u}});var i=t(87462),o=t(63366),s=(t(15007),t(64983)),a=t(91515),r=["components"],l={},c={_frontmatter:l},h=a.Z;function u(e){var n=e.components,t=(0,o.Z)(e,r);return(0,s.mdx)(h,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"configuration-fixture-annotation"},"Configuration fixture annotation"),(0,s.mdx)("p",null,"To set configuration values for individual tests and revert them after the test execution, use the ",(0,s.mdx)("inlineCode",{parentName:"p"},"@magentoConfigFixture")," annotation."),(0,s.mdx)("h2",{id:"format"},"Format"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},"/**\n * @magentoConfigFixture [<store_code>_store] <config_path> <config_value>\n */\n")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"<store_code>")," is the code of the store to be configured.\nWhen a global scope is required, this should be omitted and the ",(0,s.mdx)("inlineCode",{parentName:"li"},"config path")," is prefixed with ",(0,s.mdx)("inlineCode",{parentName:"li"},"default/"),". See below for an example.\nTo specify the current store, use ",(0,s.mdx)("inlineCode",{parentName:"li"},"current"),"."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"<config_path>")," is the XPath to the configuration option.\nSee ",(0,s.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/paths/config-reference-sens.html"},"configuration reference")," for available options."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"<config_value>")," is a fixture value for the configuration option.")),(0,s.mdx)("h2",{id:"principles"},"Principles"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"The ",(0,s.mdx)("inlineCode",{parentName:"li"},"@magentoConfigFixture")," is available at the test method level only.\nIt is not available on the test case level."),(0,s.mdx)("li",{parentName:"ol"},"A test may contain several configuration options.")),(0,s.mdx)("h2",{id:"example"},"Example"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n\n/**\n * Test class for \\Magento\\TestFramework\\Annotation\\ConfigFixture.\n */\nnamespace Magento\\Test\\Annotation;\n\nclass ConfigFixtureTest extends \\PHPUnit\\Framework\\TestCase\n{\n    /**\n     * @var \\Magento\\TestFramework\\Annotation\\ConfigFixture|\\PHPUnit_Framework_MockObject_MockObject\n     */\n    protected $_object;\n\n    protected function setUp()\n    {\n        $this->_object = $this->createPartialMock(\n            \\Magento\\TestFramework\\Annotation\\ConfigFixture::class,\n            ['_getConfigValue', '_setConfigValue']\n        );\n    }\n\n    /**\n     * @magentoConfigFixture current_store web/unsecure/base_url http://example.com/\n     */\n    public function testGlobalConfig()\n    {\n        $this->_object->expects(\n            $this->at(0)\n        )->method(\n            '_getConfigValue'\n        )->with(\n            'web/unsecure/base_url'\n        )->will(\n            $this->returnValue('http://localhost/')\n        );\n        $this->_object->expects(\n            $this->at(1)\n        )->method(\n            '_setConfigValue'\n        )->with(\n            'web/unsecure/base_url',\n            'http://example.com/'\n        );\n        $this->_object->startTest($this);\n\n        $this->_object->expects(\n            $this->once()\n        )->method(\n            '_setConfigValue'\n        )->with(\n            'web/unsecure/base_url',\n            'http://localhost/'\n        );\n        $this->_object->endTest($this);\n    }\n\n    /**\n     * @magentoConfigFixture current_store dev/restrict/allow_ips 192.168.0.1\n     */\n    public function testCurrentStoreConfig()\n    {\n        $this->_object->expects(\n            $this->at(0)\n        )->method(\n            '_getConfigValue'\n        )->with(\n            'dev/restrict/allow_ips',\n            ''\n        )->will(\n            $this->returnValue('127.0.0.1')\n        );\n        $this->_object->expects(\n            $this->at(1)\n        )->method(\n            '_setConfigValue'\n        )->with(\n            'dev/restrict/allow_ips',\n            '192.168.0.1',\n            ''\n        );\n        $this->_object->startTest($this);\n\n        $this->_object->expects(\n            $this->once()\n        )->method(\n            '_setConfigValue'\n        )->with(\n            'dev/restrict/allow_ips',\n            '127.0.0.1',\n            ''\n        );\n        $this->_object->endTest($this);\n    }\n\n    /**\n     * @magentoConfigFixture admin_store dev/restrict/allow_ips 192.168.0.2\n     */\n    public function testSpecificStoreConfig()\n    {\n        $this->_object->expects(\n            $this->at(0)\n        )->method(\n            '_getConfigValue'\n        )->with(\n            'dev/restrict/allow_ips',\n            'admin'\n        )->will(\n            $this->returnValue('192.168.0.1')\n        );\n        $this->_object->expects(\n            $this->at(1)\n        )->method(\n            '_setConfigValue'\n        )->with(\n            'dev/restrict/allow_ips',\n            '192.168.0.2',\n            'admin'\n        );\n        $this->_object->startTest($this);\n\n        $this->_object->expects(\n            $this->once()\n        )->method(\n            '_setConfigValue'\n        )->with(\n            'dev/restrict/allow_ips',\n            '192.168.0.1',\n            'admin'\n        );\n        $this->_object->endTest($this);\n    }\n\n     /**\n     * @magentoConfigFixture default/dev/restrict/allow_ips 192.168.0.2\n     */\n    public function testGlobalStoreConfig()\n    {\n        $this->_object->expects(\n            $this->at(0)\n        )->method(\n            '_getConfigValue'\n        )->with(\n            'dev/restrict/allow_ips',\n            'admin'\n        )->will(\n            $this->returnValue('192.168.0.1')\n        );\n        $this->_object->expects(\n            $this->at(1)\n        )->method(\n            '_setConfigValue'\n        )->with(\n            'dev/restrict/allow_ips',\n            '192.168.0.2',\n            'admin'\n        );\n        $this->_object->startTest($this);\n\n        $this->_object->expects(\n            $this->once()\n        )->method(\n            '_setConfigValue'\n        )->with(\n            'dev/restrict/allow_ips',\n            '192.168.0.1',\n            'admin'\n        );\n        $this->_object->endTest($this);\n    }\n\n    public function testInitStoreAfterOfScope()\n    {\n        $this->_object->expects($this->never())->method('_getConfigValue');\n        $this->_object->expects($this->never())->method('_setConfigValue');\n        $this->_object->initStoreAfter();\n    }\n\n    /**\n     * @magentoConfigFixture current_store web/unsecure/base_url http://example.com/\n     */\n    public function testInitStoreAfter()\n    {\n        $this->_object->startTest($this);\n        $this->_object->expects(\n            $this->at(0)\n        )->method(\n            '_getConfigValue'\n        )->with(\n            'web/unsecure/base_url'\n        )->will(\n            $this->returnValue('http://localhost/')\n        );\n        $this->_object->expects(\n            $this->at(1)\n        )->method(\n            '_setConfigValue'\n        )->with(\n            'web/unsecure/base_url',\n            'http://example.com/'\n        );\n        $this->_object->initStoreAfter();\n    }\n}\n\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-integration-annotations-magento-config-fixture-md-d35dcc7164de29a09e40.js.map