### Login Google Cloud CLI, configure Docker ###
Add current username to docker group(Linux):
sudo usermod -a -G docker ${USER}

Docker saves authentication settings in the configuration file 
cat ~/.docker/config.json

Log in to gcloud CLI as the user that will run Docker commands
gcloud auth login

To configure authentication with service account credentials:
gcloud auth \
	activate-service-account sa-hoangnd@k8stutorial2022.iam.gserviceaccount.com \
	--key-file=/Users/hoangnd/sa-private-key.json

Install Docker if it is not already installed.
To confirm which hosts are configured
cat ~/.docker/config.json
gcloud auth configure-docker asia-southeast1-docker.pkg.dev

### Store Node.js packages in Artifact Registry ###
gcloud artifacts repositories \
	create my-nodejs-repo \
	--repository-format=npm \
	--location=asia-southeast1 \
	--kms-key="projects/k8stutorial2022/locations/asia-southeast1/keyRings/k8stutorial2022-keyring/cryptoKeys/k8stutorial2022-key" \
	--description="Node.js package repository"

gcloud artifacts repositories list --project=k8stutorial2022 --format=json       


To set the repository, run the command
gcloud config set artifacts/repository my-nodejs-repo
And set location:
gcloud config set \
    artifacts/location asia-southeast1

Create a npm package:
mkdir my-node-package
cd my-node-package
npm init -y

The command returns configuration settings to add to your npm configuration file
An npm scope is a label for grouping packages
We recommend that you always set a scope for yourlocation repositories
gcloud artifacts print-settings npm --scope=@red-team
copy/paste output to .npmrc file

rc - runtime configuration
Change package.json of my-node-package:
"name": "@red-team/my-node-package",

Refresh the access token for connecting to the repository
cd my-node-package
npx google-artifactregistry-auth

Publish your package to the repository
npm publish

gcloud artifacts repositories list --project=k8stutorial2022 --format=json   

gcloud artifacts packages list --project=k8stutorial2022 

To view versions for a package, run the following command:
gcloud artifacts versions list \
	--package="@red-team/my-node-package"

Now you can install your nodejs package like this:
npm install @red-team/my-node-package	

To delete a package, Open the Repositories page in the Google Cloud console, choose package, delete













