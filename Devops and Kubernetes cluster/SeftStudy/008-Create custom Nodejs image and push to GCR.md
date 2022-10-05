### Using Google Container Registry (GCR) with Kubernetes ###
Run the following command to enable the Container Registry API on your project


gcloud services enable containerregistry.googleapis.com
gcloud config set project k8stutorial2022

Show service account of your project:
gcloud iam service-accounts list

Set variables:
export PROJECT_ID=k8stutorial2022
export ACCOUNT_NAME=sa-hoangnd
export ACCOUNT_EMAIL=sa-hoangnd@k8stutorial2022.iam.gserviceaccount.com
export GCR_URL=asia.gcr.io


Run the following command and store the email as a variable
gcloud iam service-accounts list

grants admin permissions to the new Service Account:
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member=serviceAccount:$ACCOUNT_EMAIL \
  --role=roles/storage.admin


Login from Docker and push an image to the Container Registry
location: asia, us, eu, 
docker login -u _json_key --password-stdin https://asia.gcr.io < ~/sa-private-key.json

Setup nodejs App and image:
Write your code, Dockerfile in NodeJSMongoDB
cd NodeJSMongoDB

docker build . -t $GCR_URL/$PROJECT_ID/nodejs-hoangnd:v1.0.0
docker push $GCR_URL/$PROJECT_ID/nodejs-hoangnd:v1.0.0

Test the container(pull and run container):
docker rmi -f $GCR_URL/$PROJECT_ID/nodejs-hoangnd:v1.0.0
docker run -it $GCR_URL/$PROJECT_ID/nodejs-hoangnd:v1.0.0

gcloud container images list --repository $GCR_URL/$PROJECT_ID
gcloud container images list-tags $GCR_URL/$PROJECT_ID/nodejs-hoangnd
Delete image in GCR:
gcloud container images delete $GCR_URL/$PROJECT_ID/nodejs-hoangnd:v1.0.0 --force-delete-tags


























































