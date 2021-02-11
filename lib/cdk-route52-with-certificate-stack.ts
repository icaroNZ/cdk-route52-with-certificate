import {
  Certificate,
  CertificateValidation,
  ICertificate,
} from '@aws-cdk/aws-certificatemanager';
import { IPublicHostedZone, PublicHostedZone } from '@aws-cdk/aws-route53';
import * as cdk from '@aws-cdk/core';

interface CdkRoute52WithCertificateStackProps extends cdk.StackProps {
  dnsName: string;
}

export class CdkRoute52WithCertificateStack extends cdk.Stack {
  public readonly hostedZone: IPublicHostedZone;
  public readonly certificate: ICertificate;
  constructor(
    scope: cdk.Construct,
    id: string,
    props: CdkRoute52WithCertificateStackProps
  ) {
    super(scope, id, props);
    const { dnsName } = props;
    this.hostedZone = new PublicHostedZone(this, 'SimpleAppHostedZone', {
      zoneName: dnsName,
    });
    this.certificate = new Certificate(this, 'SimpleAppCertificateManager', {
      domainName: dnsName,
      validation: CertificateValidation.fromDns(this.hostedZone),
    });
  }
}
