import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_ACCESS_SECRET_KEY,
  region: 'eu-central-1',
});