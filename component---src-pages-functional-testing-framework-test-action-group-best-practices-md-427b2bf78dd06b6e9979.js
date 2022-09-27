"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[9899],{1182:function(e,n,i){i.r(n),i.d(n,{_frontmatter:function(){return l},default:function(){return c}});var t=i(87462),o=i(63366),a=(i(15007),i(64983)),s=i(91515),r=["components"],l={},m={_frontmatter:l},d=s.Z;function c(e){var n=e.components,i=(0,o.Z)(e,r);return(0,a.mdx)(d,(0,t.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"action-group-best-practices"},"Action Group Best Practices"),(0,a.mdx)("p",null,"We strive to write tests using only action groups. Fortunately, we have built up a large set of action groups to get started. We can make use of them and extend them for our own specific needs. In some cases, we may never even need to write action groups of our own. We may be able to simply chain together calls to existing action groups to implement our new test case."),(0,a.mdx)("h2",{id:"why-use-action-groups"},"Why use Action Groups?"),(0,a.mdx)("p",null,"Action groups simplify maintainability by reducing duplication. Because they are re-usable building blocks, odds are that they are already made use of by existing tests in the Adobe Commerce or Magento Open Source codebase. This proves their stability through real-world use. Take for example, the action group named ",(0,a.mdx)("inlineCode",{parentName:"p"},"LoginAsAdmin"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-xml"},'<actionGroup name="LoginAsAdmin">\n    <annotations>\n        <description>Login to Backend Admin using provided User Data. PLEASE NOTE: This Action Group does NOT validate that you are Logged In.</description>\n    </annotations>\n    <arguments>\n        <argument name="adminUser" type="entity" defaultValue="DefaultAdminUser"/>\n    </arguments>\n\n    <amOnPage url="{{AdminLoginPage.url}}" stepKey="navigateToAdmin"/>\n    <fillField selector="{{AdminLoginFormSection.username}}" userInput="{{adminUser.username}}" stepKey="fillUsername"/>\n    <fillField selector="{{AdminLoginFormSection.password}}" userInput="{{adminUser.password}}" stepKey="fillPassword"/>\n    <click selector="{{AdminLoginFormSection.signIn}}" stepKey="clickLogin"/>\n    <closeAdminNotification stepKey="closeAdminNotification"/>\n</actionGroup>\n')),(0,a.mdx)("p",null,"Logging in to the admin panel is one of the most used action groups. It is used around 1,500 times at the time of this writing."),(0,a.mdx)("p",null,"Imagine if this was not an action group and instead we were to copy and paste these 5 actions every time. In that scenario, if a small change was needed, it would require a lot of work. But with the action group, we can make the change in one place."),(0,a.mdx)("h2",{id:"how-to-extend-action-groups"},"How to extend action groups"),(0,a.mdx)("p",null,"Again using ",(0,a.mdx)("inlineCode",{parentName:"p"},"LoginAsAdmin")," as our example, we trim away metadata to clearly reveal that this action group performs 5 actions:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-xml"},'<actionGroup name="LoginAsAdmin">\n    ...\n    <amOnPage url="{{AdminLoginPage.url}}" .../>\n    <fillField selector="{{AdminLoginFormSection.username}}" .../>\n    <fillField selector="{{AdminLoginFormSection.password}}" .../>\n    <click selector="{{AdminLoginFormSection.signIn}}" .../>\n    <closeAdminNotification .../>\n</actionGroup>\n')),(0,a.mdx)("p",null,"This works against the standard Admin panel login page. Bu imagine we are working on an extension that adds a CAPTCHA field to the login page. If we create and activate this extension and then run all existing tests, we can expect almost everything to fail because the CAPTCHA field is left unfilled."),(0,a.mdx)("p",null,'We can overcome this by making use of MFTF\'s extensibility. All we need to do is to provide a "merge" that modifies the existing ',(0,a.mdx)("inlineCode",{parentName:"p"},"LoginAsAdmin")," action group. Our merge file will look like:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-xml"},'<actionGroup name="LoginAsAdmin">\n    <fillField selector="{{CaptchaSection.captchaInput}}" before="signIn" .../>\n</actionGroup>\n')),(0,a.mdx)("p",null,"Because the name of this merge is also ",(0,a.mdx)("inlineCode",{parentName:"p"},"LoginAsAdmin"),", the two get merged together and an additional step happens everytime this action group is used."),(0,a.mdx)("p",null,"To continue this example, imagine someone else is working on a 'Two-Factor Authentication' extension and they also provide a merge for the ",(0,a.mdx)("inlineCode",{parentName:"p"},"LoginAsAdmin")," action group. Their merge looks similar to what we have already seen. The only difference is that this time we fill a different field:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-xml"},'<actionGroup name="LoginAsAdmin">\n    <fillField selector="{{TwoFactorSection.twoFactorInput}}" before="signIn" .../>\n</actionGroup>\n')),(0,a.mdx)("p",null,"Bringing it all together, our resulting ",(0,a.mdx)("inlineCode",{parentName:"p"},"LoginAsAdmin")," action group becomes this:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-xml"},'<actionGroup name="LoginAsAdmin">\n    ...\n    <amOnPage url="{{AdminLoginPage.url}}" .../>\n    <fillField selector="{{AdminLoginFormSection.username}}" .../>\n    <fillField selector="{{AdminLoginFormSection.password}}" .../>\n    <fillField selector="{{CaptchaSection.captchaInput}}" .../>\n    <fillField selector="{{TwoFactorSection.twoFactorInput}}" .../>\n    <click selector="{{AdminLoginFormSection.signIn}}" .../>\n    <closeAdminNotification .../>\n</actionGroup>\n')),(0,a.mdx)("p",null,"No one file contains this exact content as above, but instead all three files come together to form this action group."),(0,a.mdx)("p",null,"This extensibility can be applied in many ways. We can use it to affect existing Adobe Commerce or Magento Open Source entities such as tests, action groups, and data. Not so obvious is that this tehcnique can be used within your own entities to make them more maintainable as well."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-functional-testing-framework-test-action-group-best-practices-md-427b2bf78dd06b6e9979.js.map