"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[1483],{25590:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return c},default:function(){return p}});var a=t(87462),o=t(63366),r=(t(15007),t(64983)),m=t(91515),l=["components"],c={},i={_frontmatter:c},s=m.Z;function p(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.mdx)(s,(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"locator-functions"},"Locator functions"),(0,r.mdx)("h2",{id:"define-locatorfunctions-in-elements"},"Define Locator::functions in elements"),(0,r.mdx)("p",null," Codeception has a set of very useful ",(0,r.mdx)("a",{parentName:"p",href:"https://codeception.com/docs/reference/Locator"},"Locator functions")," that may be used by elements inside a ",(0,r.mdx)("a",{parentName:"p",href:"index.md"},"section"),"."),(0,r.mdx)("p",null,"Declare an element with a ",(0,r.mdx)("inlineCode",{parentName:"p"},"locatorFunction"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<element name="simpleLocator" type="button" locatorFunction="Locator::contains(\'label\', \'Name\')"/>\n')),(0,r.mdx)("p",null,"When using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"locatorFunction"),", omit ",(0,r.mdx)("inlineCode",{parentName:"p"},"Locator::")," for code simplicity:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<element name="simpleLocatorShorthand" type="button" locatorFunction="contains(\'label\', \'Name\')"/>\n')),(0,r.mdx)("p",null,"An element's ",(0,r.mdx)("inlineCode",{parentName:"p"},"locatorFunction")," can also be parameterized the same way as ",(0,r.mdx)("a",{parentName:"p",href:"parameterized-selectors.md"},"parameterized selectors"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<element name="simpleLocatorTwoParam" type="button" locatorFunction="contains({{arg1}}, {{arg2}})" parameterized="true"/>\n')),(0,r.mdx)("p",null,"An element cannot, however, have both a ",(0,r.mdx)("inlineCode",{parentName:"p"},"selector")," and a ",(0,r.mdx)("inlineCode",{parentName:"p"},"locatorFunction"),"."),(0,r.mdx)("h2",{id:"call-elements-that-use-locatorfunction"},"Call Elements that use locatorFunction"),(0,r.mdx)("p",null,"Given the above element definitions, you call the elements in a test just like any other element. No special reference is required, as you are still just referring to an ",(0,r.mdx)("inlineCode",{parentName:"p"},"element")," inside a ",(0,r.mdx)("inlineCode",{parentName:"p"},"section"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<test name="LocatorFunctionTest">\n   <click selector="{{LocatorFunctionSection.simpleLocator}}" stepKey="SimpleLocator"/>\n   <click selector="{{LocatorFunctionSection.simpleLocatorTwoParam(\'string1\', \'string2\')}}" stepKey="TwoParamLiteral"/>\n</test>\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-functional-testing-framework-section-locator-functions-md-17ae5c8785f0fe4c8c89.js.map