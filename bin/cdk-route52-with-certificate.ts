#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkRoute52WithCertificateStack } from '../lib/cdk-route52-with-certificate-stack';

const app = new cdk.App();
const domainNameApex = 'icarolavrador.xzy';
new CdkRoute52WithCertificateStack(app, 'CdkRoute52WithCertificateStack', {
  env: { region: 'us-east-1' },
  dnsName: domainNameApex,
});
