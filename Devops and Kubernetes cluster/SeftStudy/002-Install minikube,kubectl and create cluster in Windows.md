### Install minikube on MacOS ###
**Install Windows Package Manager**
winget = Windows Package Manager
With older Windows version, search App Installer in Windows Store
winget is available in Windows 11

Install minikube:
Open Powershell as Administrator, run this:
winget install minikube

Install Docker, then we have Docker driver 
Otherwise, It automatically select the hyperv driver
=> then we can start your cluster(must be Administrator)
minikube start

**Install Kubectl on Windows** 
winget install kubectl

Show detail kubectl's client version
kubectl version --client --output=json
kubectl version --client --output=yaml

Getting the cluster state
kubectl cluster-info

Whenever minikube start successfully, you can show all pods of your cluster:
kubectl get pods -A
The Dashboard is a web-based Kubernetes user interface:
minikube dashboard



