"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[2615],{22210:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return u}});var a,i=n(87462),r=n(63366),o=(n(15007),n(64983)),l=n(91515),d=["components"],m={},s=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),p={_frontmatter:m},x=l.Z;function u(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.mdx)(x,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"docblock-annotations"},"DocBlock annotations"),(0,o.mdx)("p",null,"DocBlock annotations help to declare context in your code. In addition to built-in ",(0,o.mdx)("a",{parentName:"p",href:"https://phpunit.readthedocs.io/en/9.5/annotations.html"},"PHPUnit annotations"),"\n, the Integration testing framework provides custom annotations described in this topic."),(0,o.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Native PHP8 Attributes can be used instead or together with DocBlock annotations. This new method offers more flexibility and improves readability of the code. See the ",(0,o.mdx)("a",{parentName:"p",href:"../attributes/index.md"},"Attributes")," to learn more."),(0,o.mdx)("h3",{id:"quick-overview"},"Quick overview"),(0,o.mdx)("p",null,"The following annotations are available in integration tests:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Annotation"),(0,o.mdx)("th",{parentName:"tr",align:null},"Format"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Admin Configuration Fixture"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoAdminConfigFixture")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoAdminConfigFixture <config_path> <config_value>")),(0,o.mdx)("td",{parentName:"tr",align:null},"Configures an admin setting for the test run. For example, to enable Captcha, you would use ",(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoAdminConfigFixture admin/captcha/enable 1"),".")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Application Isolation"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoAppIsolation")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoAppIsolation enabled/disabled")),(0,o.mdx)("td",{parentName:"tr",align:null},"Enables or disables application isolation when you run tests. When enabled, an application state after a test run will be the same as before the test run. For example, you should enable it, when you want to create sessions in a test, but you don't want them to affect other tests.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Configuration Fixture"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoConfigFixture")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoConfigFixture [<store_code>_store] <config_path> <config_value>")),(0,o.mdx)("td",{parentName:"tr",align:null},"Sets up configuration settings for a particular test. The list of settings is stored in the ",(0,o.mdx)("inlineCode",{parentName:"td"},"core_config_data")," database table. After the test execution, the settings revert to their original state.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Database Isolation"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoDbIsolation")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoDbIsolation enabled/disabled")),(0,o.mdx)("td",{parentName:"tr",align:null},"Enables or disables database isolation. Disabled by default, unless you are using ",(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoDataFixture"),", in which case it is enabled by default. All data, required for a test, live during transaction only. Any test results won't be written in a database.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Data Fixture"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoDataFixture")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoDataFixture <script_filename> / <method_name>/<fully_qualified_class_name> [as:alias with:{}]")),(0,o.mdx)("td",{parentName:"tr",align:null},"Points to a class or a method which creates testing entities (fixtures) for test execution. These are applied during the transaction.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Data Fixture Before Transaction"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoDataFixtureBeforeTransaction")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoDataFixtureBeforeTransaction <script_filename>/<method_name>")),(0,o.mdx)("td",{parentName:"tr",align:null},"Points to a class or a method which creates testing entities (fixtures) for test execution before the transaction has begun. You will need to implement a rollback file for changes made here. (e.g. Fixture file my_fixture.php would also require a my_fixture_rollback.php that reverts the original fixture's changed.)")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Application Area"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoAppArea")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoAppArea adminhtml frontend global")),(0,o.mdx)("td",{parentName:"tr",align:null},"Configures test environment in the context of specified application area.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Enable/Disable Cache"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoCache")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoCache all enabled disabled")),(0,o.mdx)("td",{parentName:"tr",align:null},"Enables or disables certain cache segment or all of them to prevent isolation problems.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Indexer Dimension Mode"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoIndexerDimensionMode")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoIndexerDimensionMode <indexer> <mode>")),(0,o.mdx)("td",{parentName:"tr",align:null},"Sets the indexer dimension mode for the test run. More information can be found in the ",(0,o.mdx)("a",{parentName:"td",href:"https://community.magento.com/t5/Magento-DevBlog/Indexers-parallelization-and-optimization/ba-p/104922"},"DevBlog"),".")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Register Components"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoComponentsDir")),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"@magentoComponentsDir <dir_path>")),(0,o.mdx)("td",{parentName:"tr",align:null},"Registers fixture components from specified directory (recursively). Unregisters the components after the test is finished.")))),(0,o.mdx)("h3",{id:"applying-annotations"},"Applying annotations"),(0,o.mdx)("p",null,"The Magento-specific annotations for integration tests are applied in the following order:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"@magentoAppIsolation")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"@magentoDbIsolation")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"@magentoDataFixtureBeforeTransaction")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"@magentoDataFixture")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"@magentoIndexerDimensionMode")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"@magentoComponentsDir")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"@magentoAppArea")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"@magentoCache")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"@magentoAdminConfigFixture")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"@magentoConfigFixture"))),(0,o.mdx)("p",null,"This order is necessary to meet the requirement of setting up the store-scoped configuration values for fixture stores (stores that are created by data fixtures)."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-integration-annotations-index-md-d4eb6a4e05071452a04c.js.map