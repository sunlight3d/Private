### Dowload and install Google Cloud SDK(MacOS) ###
Artifact Registry is the next generation of Container Registry
Download Google Cloud CLI, then unzip:
-x: Extract, -f: File
tar -xf google-cloud-cli-399.0.0-darwin-x86_64.tar.gz
mv ~/Downloads/google-cloud-sdk ~/
Install gcloud:
~/google-cloud-sdk/install.sh
Update gcloud path:
source ~/.zshrc

### Dowload and install Google Cloud SDK(Windows) ###
Search "Google Cloud CLI installer", download then run in Powershell:
.\GoogleCloudSDKInstaller.exe

### Login to Google cloud and create Project ###
Login to active an account:
gcloud auth login
Show your current projects:
gcloud projects list
Show current Google Cloud version:
gcloud version

Create a google cloud project with Project's ID: k8stutorial
gcloud projects create k8stutorial2022
gcloud projects describe k8stutorial2022

You can also delete unused project:
gcloud projects delete k8stutorial2022


gcloud config set project k8stutorial2022

### Enable Artifact Registry: ###
gcloud services enable artifactregistry.googleapis.com

If error UREQ_PROJECT_BILLING_NOT_FOUND, please enable billing:
https://cloud.google.com/billing/docs/how-to/modify-project

To set a default repository

gcloud artifacts repositories list --project=k8stutorial2022
gcloud artifacts packages list --project=k8stutorial2022

To create a new repository, you need "location":
gcloud artifacts locations list

KMS(Key Management Service), search "Cloud KMS API" and enable it
then create key ring, choose region(asia southeast1)
You should also enable Cloud Resource Manager

gcloud beta services identity create --service=artifactregistry.googleapis.com --project=k8stutorial2022

Run the command to create a new repository
gcloud artifacts repositories create my-repo \
    --repository-format=docker \
    --location=asia-southeast1 \
    --description="This is test repository" \
    --kms-key="projects/k8stutorial2022/locations/asia-southeast1/keyRings/k8stutorial2022-keyring/cryptoKeys/k8stutorial2022-key" \
    --async

set label to a repository(a label can have multiple labels):
--clear-labels: all existing labels are removed before adding new labels

gcloud artifacts repositories update my-repo \
--project=k8stutorial2022 \
--location=asia-southeast1 \
--update-labels="stage=development" \
--clear-labels

Delete labels:
gcloud artifacts repositories update my-repo \
--project=k8stutorial2022 \
--location=asia-southeast1 \
--remove-labels="stage"

To delete the a repository, run the following command:
gcloud artifacts repositories delete my-repo \
--location=asia-southeast1 \
--async

