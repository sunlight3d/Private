### Deploy a local dev ###
Start your cluster
minikube start
Then show cluster:
kubectl config view
kubectl config get-contexts    

Show all nodes, maybe you have only master/control-plane node:
kubectl get nodes

Create a deployment with image from GCR(Google Container Registry) or Artifact Registry
kubectl create deployment kubernetes-xx --image=gcr.io/google-samples/kubernetes-bootcamp:v1
kubectl get deployments
kubectl delete deployments kubernetes-xx

