const { ConstructLibraryAws, Semver } = require('projen');

const project = new ConstructLibraryAws({
  name: 'cdk-watchful',
  description: 'Watching your CDK apps since 2019',

  jsiiVersion: Semver.caret('1.7.0'),

  authorName: 'Elad Ben-Israel',
  authorEmail: 'elad.benisrael@gmail.com',
  repository: 'https://github.com/eladb/cdk-watchful.git',
  keywords: [
    "cloudwatch",
    "monitoring"
  ],

  catalog: {
    twitter: 'emeshbi'
  },

  // creates PRs for projen upgrades
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',

  cdkVersion: '1.54.0',
  cdkDependencies: [
    "@aws-cdk/aws-apigateway",
    "@aws-cdk/aws-cloudwatch",
    "@aws-cdk/aws-cloudwatch-actions",
    "@aws-cdk/aws-dynamodb",
    "@aws-cdk/aws-ecs",
    "@aws-cdk/aws-ecs-patterns",
    "@aws-cdk/aws-elasticloadbalancingv2",
    "@aws-cdk/aws-events",
    "@aws-cdk/aws-events-targets",
    "@aws-cdk/aws-lambda",
    "@aws-cdk/aws-rds",
    "@aws-cdk/aws-sns",
    "@aws-cdk/aws-sns-subscriptions",
    "@aws-cdk/aws-sqs",
    "@aws-cdk/core"
  ],

  devDependencies: {
    "aws-sdk": Semver.caret("2.708.0")
  },

  // jsii publishing

  java: {
    javaPackage: 'com.github.eladb.watchful',
    mavenGroupId: 'com.github.eladb',
    mavenArtifactId: 'cdk-watchful'
  },

  python: {
    distName: 'cdk-watchful',
    module: 'cdk_watchful'
  }
});

project.gitignore.exclude('.env','.idea')
project.gitignore.exclude('example/*.js', 'example/*.d.ts');

project.synth();
