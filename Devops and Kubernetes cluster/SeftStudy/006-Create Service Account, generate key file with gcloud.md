### Create service account and manage service account keys ###
Artifact Registry can store Docker and OCI(Open Container Initiative) container images in a Docker repository.
Install Docker if it is not already installed

Log in to gcloud CLI:
gcloud auth login

Identity and Access Management = IAM
You can view existing service accounts:
gcloud iam service-accounts list

### Create service account and manage service account keys ###
Enable the IAM API
Each project can have up to 100 service accounts
Service accounts do not have passwords, and cannot log in via browsers or cookies


To list all service accounts in the current project, run:
gcloud iam service-accounts list

Creat service account:
sa = Service Account
gcloud iam service-accounts create sa-hoangnd \
    --description="This is a test service account" \
    --display-name="Nguyen Duc Hoang-sa"

gcloud iam service-accounts list

Update a service account:
gcloud iam service-accounts update \
    sa-hoangnd@k8stutorial2022.iam.gserviceaccount.com \
    --description="This is a test service account 22" \
    --display-name="Nguyen Duc Hoang-sa1"

Grant one or more roles to the service account
Enable the Resource Manager API
View current access:
gcloud projects get-iam-policy k8stutorial2022 --format=yaml

To grant your service account an IAM role on your project:
gcloud projects add-iam-policy-binding k8stutorial2022 \
    --member="serviceAccount:sa-hoangnd@k8stutorial2022.iam.gserviceaccount.com" \
    --role="roles/editor"


Delete a service account
gcloud iam service-accounts delete \
    sa-hoangnd@k8stutorial2022.iam.gserviceaccount.com

A service account can have up to 10 keys(never expire, default)
Create a key for a service account
gcloud iam service-accounts keys create ~/sa-private-key.json \
    --iam-account=sa-hoangnd@k8stutorial2022.iam.gserviceaccount.com

cat ~/sa-private-key.json
you can see the private_key_id

List service account keys.
gcloud iam service-accounts keys list \
    --iam-account=sa-hoangnd@k8stutorial2022.iam.gserviceaccount.com \
    --format=json

Remember to get KEY_ID
To get the public key(a Privacy Enhanced Mail-PEM file) for a service account key
gcloud beta iam service-accounts keys \
	get-public-key 5fdd6b6920358f0bdc6d6204ca2634cbc94fa30c \
    --iam-account=sa-hoangnd@k8stutorial2022.iam.gserviceaccount.com \
    --output-file=sa-public-key.pem

cat sa-public-key.pem

Delete a service account key by key_id:
gcloud iam service-accounts keys delete 5fdd6b6920358f0bdc6d6204ca2634cbc94fa30c \
    --iam-account=sa-hoangnd@k8stutorial2022.iam.gserviceaccount.com



To configure authentication with service account credentials:
gcloud auth \
activate-service-account sunlight4d@k8stutorial2022.iam.gserviceaccount.com \
--key-file=sa-public-key.pem

