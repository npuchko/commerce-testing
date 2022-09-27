"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[555],{4355:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return m}});var r=n(87462),o=n(63366),c=(n(15007),n(64983)),i=n(91515),s=["components"],d={},l={_frontmatter:d},u=i.Z;function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,c.mdx)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("h1",{id:"merge-action-groups"},"Merge action groups"),(0,c.mdx)("p",null,"An action group is a set of individual actions working together as a group.\nThese action groups can be shared between tests and they also can be modified to your needs."),(0,c.mdx)("p",null,"In this example we add a ",(0,c.mdx)("inlineCode",{parentName:"p"},"<click>")," command to check the checkbox that our extension adds to the simple product creation form."),(0,c.mdx)("h2",{id:"starting-test"},"Starting test"),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-xml"},'<actionGroup name="AdminFillSimpleProductFormActionGroup">\n    <arguments>\n        <argument name="category"/>\n        <argument name="simpleProduct"/>\n    </arguments>\n    <amOnPage url="{{AdminProductIndexPage.url}}" stepKey="navigateToProductIndex"/>\n    <click selector="{{AdminProductGridActionSection.addProductToggle}}" stepKey="clickAddProductDropdown"/>\n    <click selector="{{AdminProductGridActionSection.addSimpleProduct}}" stepKey="clickAddSimpleProduct"/>\n    <fillField userInput="{{simpleProduct.name}}" selector="{{AdminProductFormSection.productName}}" stepKey="fillName"/>\n    <fillField userInput="{{simpleProduct.sku}}" selector="{{AdminProductFormSection.productSku}}" stepKey="fillSKU"/>\n    <fillField userInput="{{simpleProduct.price}}" selector="{{AdminProductFormSection.productPrice}}" stepKey="fillPrice"/>\n    <fillField userInput="{{simpleProduct.quantity}}" selector="{{AdminProductFormSection.productQuantity}}" stepKey="fillQuantity"/>\n    <searchAndMultiSelectOption selector="{{AdminProductFormSection.categoriesDropdown}}" parameterArray="[{{category.name}}]" stepKey="searchAndSelectCategory"/>\n    <click selector="{{AdminProductSEOSection.sectionHeader}}" stepKey="openSeoSection"/>\n    <fillField userInput="{{simpleProduct.urlKey}}" selector="{{AdminProductSEOSection.urlKeyInput}}" stepKey="fillUrlKey"/>\n    <click selector="{{AdminProductFormActionSection.saveButton}}" stepKey="saveProduct"/>\n    <seeElement selector="{{AdminProductMessagesSection.successMessage}}" stepKey="assertSaveMessageSuccess"/>\n    <seeInField userInput="{{simpleProduct.name}}" selector="{{AdminProductFormSection.productName}}" stepKey="assertFieldName"/>\n    <seeInField userInput="{{simpleProduct.sku}}" selector="{{AdminProductFormSection.productSku}}" stepKey="assertFieldSku"/>\n    <seeInField userInput="{{simpleProduct.price}}" selector="{{AdminProductFormSection.productPrice}}" stepKey="assertFieldPrice"/>\n    <click selector="{{AdminProductSEOSection.sectionHeader}}" stepKey="openSeoSectionAssert"/>\n    <seeInField userInput="{{simpleProduct.urlKey}}" selector="{{AdminProductSEOSection.urlKeyInput}}" stepKey="assertFieldUrlKey"/>\n</actionGroup>\n')),(0,c.mdx)("h2",{id:"file-to-merge"},"File to merge"),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-xml"},'<actionGroup name="AdminFillSimpleProductFormActionGroup">\n    \x3c!-- This will be added after the step "fillQuantity" in the above test. --\x3e\n    <click selector="{{MyExtensionSection.myCheckbox}}" stepKey="clickMyCheckbox" after="fillQuantity"/>\n</actionGroup>\n')),(0,c.mdx)("h2",{id:"resultant-test"},"Resultant test"),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-xml"},'<actionGroup name="AdminFillSimpleProductFormActionGroup">\n    <arguments>\n        <argument name="category"/>\n        <argument name="simpleProduct"/>\n    </arguments>\n    <amOnPage url="{{AdminProductIndexPage.url}}" stepKey="navigateToProductIndex"/>\n    <click selector="{{AdminProductGridActionSection.addProductToggle}}" stepKey="clickAddProductDropdown"/>\n    <click selector="{{AdminProductGridActionSection.addSimpleProduct}}" stepKey="clickAddSimpleProduct"/>\n    <fillField userInput="{{simpleProduct.name}}" selector="{{AdminProductFormSection.productName}}" stepKey="fillName"/>\n    <fillField userInput="{{simpleProduct.sku}}" selector="{{AdminProductFormSection.productSku}}" stepKey="fillSKU"/>\n    <fillField userInput="{{simpleProduct.price}}" selector="{{AdminProductFormSection.productPrice}}" stepKey="fillPrice"/>\n    <fillField userInput="{{simpleProduct.quantity}}" selector="{{AdminProductFormSection.productQuantity}}" stepKey="fillQuantity"/>\n    \x3c!-- Merged line here --\x3e\n    <click selector="{{MyExtensionSection.myCheckbox}}" stepKey="clickMyCheckbox"/>\n\n    <searchAndMultiSelectOption selector="{{AdminProductFormSection.categoriesDropdown}}" parameterArray="[{{category.name}}]" stepKey="searchAndSelectCategory"/>\n    <click selector="{{AdminProductSEOSection.sectionHeader}}" stepKey="openSeoSection"/>\n    <fillField userInput="{{simpleProduct.urlKey}}" selector="{{AdminProductSEOSection.urlKeyInput}}" stepKey="fillUrlKey"/>\n    <click selector="{{AdminProductFormActionSection.saveButton}}" stepKey="saveProduct"/>\n    <seeElement selector="{{AdminProductMessagesSection.successMessage}}" stepKey="assertSaveMessageSuccess"/>\n    <seeInField userInput="{{simpleProduct.name}}" selector="{{AdminProductFormSection.productName}}" stepKey="assertFieldName"/>\n    <seeInField userInput="{{simpleProduct.sku}}" selector="{{AdminProductFormSection.productSku}}" stepKey="assertFieldSku"/>\n    <seeInField userInput="{{simpleProduct.price}}" selector="{{AdminProductFormSection.productPrice}}" stepKey="assertFieldPrice"/>\n    <click selector="{{AdminProductSEOSection.sectionHeader}}" stepKey="openSeoSectionAssert"/>\n    <seeInField userInput="{{simpleProduct.urlKey}}" selector="{{AdminProductSEOSection.urlKeyInput}}" stepKey="assertFieldUrlKey"/>\n</actionGroup>\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-functional-testing-framework-merge-points-merge-action-groups-md-7a4fa4753b1a5b76f93a.js.map