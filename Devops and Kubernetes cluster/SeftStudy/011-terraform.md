terraform login
See the API token(Terraform Cloud token):
2CZx1IaM9vaHxQ.atlasv1.zDQstsrrofStOMsdkujlHGTK4AqhpDvs9bxD185p5gkIDgCZ2bdMlUMKH3hQzvc5kNk

Variable sets allow you to define and apply variables one time across multiple workspaces within an organization
Login top Identity and Access Management (IAM) on AWS
then create new access key
AWSAccessKeyId=AKIA3P3TO7VRUGIT7CUI
AWSSecretKey=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
Create a variable set named "AWS Credentials" with AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY

you will create a CLI-driven workspace.
Clone the example GitHub repository,which contains the Terraform configuration that defines an AWS EC2 instance and its attributes.
git clone https://github.com/hashicorp/learn-terraform-cloud.git
cd learn-terraform-cloud



New to TFC? Follow these steps to instantly apply an example configuration:

   $ git clone https://github.com/hashicorp/tfc-getting-started.git
   $ cd tfc-getting-started
   $ scripts/setup.sh


