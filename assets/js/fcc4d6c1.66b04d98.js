"use strict";(self.webpackChunkrobotframework_and_lambda=self.webpackChunkrobotframework_and_lambda||[]).push([[379],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1055:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={},o="RF Lambda Executor",i={unversionedId:"getting-started/project",id:"getting-started/project",title:"RF Lambda Executor",description:"I will explain the setup of a Robot Framework project on AWS Lambda using an existing project.",source:"@site/docs/getting-started/project.mdx",sourceDirName:"getting-started",slug:"/getting-started/project",permalink:"/robotframework-and-lambda/docs/getting-started/project",draft:!1,editUrl:"https://manykarim.github.io/robotframework-and-lambda/docs/getting-started/project.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/robotframework-and-lambda/docs/getting-started/install"}},s={},u=[{value:"Project Structure",id:"project-structure",level:2},{value:"template.yaml",id:"templateyaml",level:3},{value:"Lambda Functions",id:"lambda-functions",level:3},{value:"Distributor",id:"distributor",level:4},{value:"Executor",id:"executor",level:4},{value:"Merger",id:"merger",level:4},{value:"Build and Deploy",id:"build-and-deploy",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Build",id:"build",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Run",id:"run",level:2},{value:"Upload Test Cases",id:"upload-test-cases",level:3},{value:"From AWS Console",id:"from-aws-console",level:4},{value:"From AWS CLI",id:"from-aws-cli",level:4},{value:"From AWS Console",id:"from-aws-console-1",level:3},{value:"From AWS CLI",id:"from-aws-cli-1",level:3},{value:"Cleanup",id:"cleanup",level:2}],p={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rf-lambda-executor"},"RF Lambda Executor"),(0,r.kt)("p",null,"I will explain the setup of a Robot Framework project on AWS Lambda using an existing project.",(0,r.kt)("br",{parentName:"p"}),"\n","It is parallel test execution project that splits up your test cases into multiple Lambda functions and executes them in parallel."),(0,r.kt)("p",null,"It uses multiple AWS Ressources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/lambda/"},"AWS Lambda")," to execute Robot Framework tests and use its API"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/s3/"},"AWS S3")," to store the test cases and the test results"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/dynamodb/"},"AWS DynamoDB")," to store the run status"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/sqs/"},"AWS SQS")," to communicate between the Lambda functions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cloudformation/"},"AWS CloudFormation")," to create the AWS Ressources")),(0,r.kt)("p",null,"You can find the sample project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/manykarim/rf-lambda-executor"},"here")," and you can clone it with the command below:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/manykarim/rf-lambda-executor\n")),(0,r.kt)("p",null,"It will be featured at ",(0,r.kt)("a",{parentName:"p",href:"https://robocon.io/"},"RoboCon 2023")," in the my talk ",(0,r.kt)("a",{parentName:"p",href:"https://robocon.io/#to-infinity-and-beyond---serverless-scaling-with-aws-lambda"},"To Infinity and Beyond - Serverless scaling with AWS Lambda"),"."),(0,r.kt)("h2",{id:"project-structure"},"Project Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 distributor\n\u2502\xa0\xa0 \u251c\u2500\u2500 app.py\n\u2502\xa0\xa0 \u251c\u2500\u2500 __init__.py\n\u2502\xa0\xa0 \u251c\u2500\u2500 Listener\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 DistributorListener.py\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 __init__.py\n\u2502\xa0\xa0 \u2514\u2500\u2500 requirements.txt\n\u251c\u2500\u2500 executor\n\u2502\xa0\xa0 \u251c\u2500\u2500 app.py\n\u2502\xa0\xa0 \u251c\u2500\u2500 Dockerfile\n\u2502\xa0\xa0 \u251c\u2500\u2500 __init__.py\n\u2502\xa0\xa0 \u2514\u2500\u2500 requirements.txt\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 merger\n\u2502\xa0\xa0 \u251c\u2500\u2500 app.py\n\u2502\xa0\xa0 \u251c\u2500\u2500 __init__.py\n\u2502\xa0\xa0 \u2514\u2500\u2500 requirements.txt\n\u251c\u2500\u2500 poetry.lock\n\u251c\u2500\u2500 pyproject.toml\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 samconfig.toml\n\u2514\u2500\u2500 template.yaml\n")),(0,r.kt)("p",null,"The most important parts are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"distributor")," , ",(0,r.kt)("inlineCode",{parentName:"li"},"executor")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"merger")," folders which contain the Lambda functions"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"template.yaml")," file which contains the CloudFormation stack")),(0,r.kt)("h3",{id:"templateyaml"},"template.yaml"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"template.yaml")," file is the main file for the CloudFormation stack. It contains all the AWS Ressources that will be created and the Lambda functions that will be deployed.",(0,r.kt)("br",{parentName:"p"}),"\n","It is a YAML file using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification.html"},"SAM Specification"),"."),(0,r.kt)("h3",{id:"lambda-functions"},"Lambda Functions"),(0,r.kt)("p",null,"The Lambda functions are located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"distributor")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"executor")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"merger")," folders."),(0,r.kt)("h4",{id:"distributor"},"Distributor"),(0,r.kt)("p",null,"The distributor is the first Lambda function that will be executed.",(0,r.kt)("br",{parentName:"p"}),"\n","It is responsible for splitting up the test cases into smaller chunks and sending them to the executor Lambda function.",(0,r.kt)("br",{parentName:"p"}),"\n","It is triggered by an HTTP Post request to the API Gateway.  "),(0,r.kt)("p",null,"It will "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"download the test cases from the S3 Bucket ",(0,r.kt)("inlineCode",{parentName:"li"},"Testsbucket")),(0,r.kt)("li",{parentName:"ul"},"split up the tests into N small chunks of similar size"),(0,r.kt)("li",{parentName:"ul"},"create a DynamoDB entry for each chunk"),(0,r.kt)("li",{parentName:"ul"},"send each chunk to a SQS queue to the executor Lambda function")),(0,r.kt)("p",null,"The dependencies are defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"distributor/requirements.txt")," file."),(0,r.kt)("h4",{id:"executor"},"Executor"),(0,r.kt)("p",null,"Is the second Lambda function that will be executed.\nIt is responsible for executing the test cases and sending the results to the merger Lambda function.\nIt is triggered by a message in the SQS queue."),(0,r.kt)("p",null,"It will"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"download the test cases from the S3 Bucket ",(0,r.kt)("inlineCode",{parentName:"li"},"Testsbucket")),(0,r.kt)("li",{parentName:"ul"},"execute the test cases"),(0,r.kt)("li",{parentName:"ul"},"upload the results to the S3 Bucket ",(0,r.kt)("inlineCode",{parentName:"li"},"Resultsbucket")),(0,r.kt)("li",{parentName:"ul"},"send the results to the merger Lambda function"),(0,r.kt)("li",{parentName:"ul"},"update the DynamoDB entry"),(0,r.kt)("li",{parentName:"ul"},"check if all chunks are finished and trigger the merger Lambda function")),(0,r.kt)("p",null,"Due to the size of the dependencies (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"robotframework-browser"),") the executor Lambda function is deployed as a Docker container.",(0,r.kt)("br",{parentName:"p"}),"\n","The Dockerfile is located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"executor")," folder."),(0,r.kt)("h4",{id:"merger"},"Merger"),(0,r.kt)("p",null,"Is the third Lambda function that will be executed.\nIt is responsible for merging the results from the executor Lambda functions and sending the results to the S3 Bucket ",(0,r.kt)("inlineCode",{parentName:"p"},"Resultsbucket"),".\nIt is triggered either by the executor Lambda function or by a HTTP Get request to the API Gateway."),(0,r.kt)("p",null,"It will"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"download the results from the S3 Bucket ",(0,r.kt)("inlineCode",{parentName:"li"},"Resultsbucket")),(0,r.kt)("li",{parentName:"ul"},"merge the results using ",(0,r.kt)("inlineCode",{parentName:"li"},"rebot")),(0,r.kt)("li",{parentName:"ul"},"upload the results to the S3 Bucket ",(0,r.kt)("inlineCode",{parentName:"li"},"Resultsbucket")," in the folder ",(0,r.kt)("inlineCode",{parentName:"li"},"final")),(0,r.kt)("li",{parentName:"ul"},"update the DynamoDB entry")),(0,r.kt)("p",null,"The dependencies are defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"merger/requirements.txt")," file."),(0,r.kt)("h2",{id:"build-and-deploy"},"Build and Deploy"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cli/"},"AWS CLI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html"},"SAM CLI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker"))),(0,r.kt)("h3",{id:"build"},"Build"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sam build\n")),(0,r.kt)("h3",{id:"deploy"},"Deploy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sam deploy --guided\n")),(0,r.kt)("h2",{id:"run"},"Run"),(0,r.kt)("p",null,"Before you can run the tests you need to upload the test cases to the S3 Bucket ",(0,r.kt)("inlineCode",{parentName:"p"},"Testsbucket"),"."),(0,r.kt)("p",null,"You can do this with the AWS Console or with the AWS CLI."),(0,r.kt)("h3",{id:"upload-test-cases"},"Upload Test Cases"),(0,r.kt)("h4",{id:"from-aws-console"},"From AWS Console"),(0,r.kt)("h4",{id:"from-aws-cli"},"From AWS CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws s3 cp --recursive tests/ s3://<testbucket-name>/<project>/tests\n")),(0,r.kt)("h3",{id:"from-aws-console-1"},"From AWS Console"),(0,r.kt)("h3",{id:"from-aws-cli-1"},"From AWS CLI"),(0,r.kt)("h2",{id:"cleanup"},"Cleanup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws cloudformation delete-stack --stack-name rf-lambda-executor\n")))}m.isMDXComponent=!0}}]);