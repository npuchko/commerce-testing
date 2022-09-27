"use strict";(self.webpackChunkcommerce_testing=self.webpackChunkcommerce_testing||[]).push([[4483],{71700:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return m}});var o,a=t(87462),r=t(63366),s=(t(15007),t(64983)),i=t(91515),l=["components"],p={},d=(o="InlineAlert",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),u={_frontmatter:p},c=i.Z;function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,s.mdx)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"cli-commands-vendorbincodecept"},"CLI commands: vendor/bin/codecept"),(0,s.mdx)(d,{variant:"warning",slots:"text1, text2",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"We do not recommend using Codeception commands directly as they can break the Functional Testing Framework basic workflow.\nAll the Codeception commands you need are wrapped using the ",(0,s.mdx)("a",{parentName:"p",href:"mftf.md"},"mftf tool"),"."),(0,s.mdx)("p",null,"To run the Codeception testing framework commands directly, change your directory to the ",(0,s.mdx)("inlineCode",{parentName:"p"},"<Magento root>"),"."),(0,s.mdx)("h2",{id:"usage-examples"},"Usage examples"),(0,s.mdx)("p",null,"Run all the generated tests:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"vendor/bin/codecept run functional -c dev/tests/acceptance/codeception.yml\n")),(0,s.mdx)("p",null,"Run all tests without the ",(0,s.mdx)("inlineCode",{parentName:"p"},'<group value="skip"/>')," ",(0,s.mdx)("a",{parentName:"p",href:"../test/annotations.md"},"annotation"),":"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"vendor/bin/codecept run functional --skip-group skip  -c dev/tests/acceptance/codeception.yml\n")),(0,s.mdx)("p",null,"Run all tests with the ",(0,s.mdx)("inlineCode",{parentName:"p"},'<group value="example"/>')," ",(0,s.mdx)("a",{parentName:"p",href:"../test/annotations.md"},"annotation")," but with no ",(0,s.mdx)("inlineCode",{parentName:"p"},'<group value="skip"/>'),":"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"vendor/bin/codecept run functional --group example --skip-group skip -c dev/tests/acceptance/codeception.yml\n")),(0,s.mdx)("h2",{id:"codecept-run"},(0,s.mdx)("inlineCode",{parentName:"h2"},"codecept run")),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"codecept run")," runs the test suites:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"vendor/bin/codecept run\n")),(0,s.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"The following documentation corresponds to Codeception 4.1.4."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},'Full reference:\n\nArguments:\n   suite                 suite to be tested\n   test                  test to be run\n\nOptions:\n    -o, --override=OVERRIDE                    Override config values (multiple values allowed)\n    -e, --ext=EXT                              Run with extension enabled (multiple values allowed)\n        --report                               Show output in compact style\n        --html[=HTML]                          Generate html with results [default: "report.html"]\n        --xml[=XML]                            Generate JUnit XML Log [default: "report.xml"]\n        --phpunit-xml[=PHPUNIT-XML]            Generate PhpUnit XML Log [default: "phpunit-report.xml"]\n        --tap[=TAP]                            Generate Tap Log [default: "report.tap.log"]\n        --json[=JSON]                          Generate Json Log [default: "report.json"]\n        --colors                               Use colors in output\n        --no-colors                            Force no colors in output (useful to override config file)\n        --silent                               Only outputs suite names and final results\n        --steps                                Show steps in output\n    -d, --debug                                Show debug and scenario output\n        --bootstrap[=BOOTSTRAP]                Execute custom PHP script before running tests. Path can be absolute or relative to current working directory [default: false]\n        --no-redirect                          Do not redirect to Composer-installed version in vendor/codeception\n        --coverage[=COVERAGE]                  Run with code coverage\n        --coverage-html[=COVERAGE-HTML]        Generate CodeCoverage HTML report in path\n        --coverage-xml[=COVERAGE-XML]          Generate CodeCoverage XML report in file\n        --coverage-text[=COVERAGE-TEXT]        Generate CodeCoverage text report in file\n        --coverage-crap4j[=COVERAGE-CRAP4J]    Generate CodeCoverage report in Crap4J XML format\n        --coverage-phpunit[=COVERAGE-PHPUNIT]  Generate CodeCoverage PHPUnit report in path\n        --no-exit                              Don\'t finish with exit code\n    -g, --group=GROUP                          Groups of tests to be executed (multiple values allowed)\n    -s, --skip=SKIP                            Skip selected suites (multiple values allowed)\n    -x, --skip-group=SKIP-GROUP                Skip selected groups (multiple values allowed)\n        --env=ENV                              Run tests in selected environments. (multiple values allowed)\n    -f, --fail-fast                            Stop after first failure\n        --no-rebuild                           Do not rebuild actor classes on start\n        --seed=SEED                            Define random seed for shuffle setting\n        --no-artifacts                         Don\'t report about artifacts\n    -h, --help                                 Display this help message\n    -q, --quiet                                Do not output any message\n    -V, --version                              Display this application version\n        --ansi                                 Force ANSI output\n        --no-ansi                              Disable ANSI output\n    -n, --no-interaction                       Do not ask any interactive question\n    -c, --config[=CONFIG]                      Use custom path for config\n    -v|vv|vvv, --verbose                       Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-functional-testing-framework-commands-codeception-md-e3f8458698f1d510330a.js.map