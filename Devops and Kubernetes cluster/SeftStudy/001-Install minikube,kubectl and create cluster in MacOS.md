### Install minikube on MacOS ###
Download minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64
Copy and rename:
sudo install minikube-darwin-amd64 /usr/local/bin/minikube
Install Docker, then we have Docker driver => then we can start your cluster:

minikube start
Whenever minikube start successfully, you can show all pods of your cluster:
kubectl get pods -A
The Dashboard is a web-based Kubernetes user interface:
minikube dashboard

**Install Kubectl on MacOS** 
Get current Kube controller version:
curl -L https://dl.k8s.io/release/stable.txt --silent 
download kubectl to the current folder:
curl -LO "https://dl.k8s.io/release/$(curl -L https://dl.k8s.io/release/stable.txt --silent)/bin/darwin/amd64/kubectl"
Move kubectl to /usr/local/bin/
sudo mv ./kubectl /usr/local/bin/kubectl

Assign executable permission to kubectl:
chmod +x /usr/local/bin/kubectl

Show detail kubectl's client version
kubectl version --client --output=json
kubectl version --client --output=yaml

Getting the cluster state
kubectl cluster-info

Get current shell running
echo $SHELL
if your shell is zsh, open ~/.zshrc
Autoload function compinit
autoload -Uz compinit
compinit
source <(kubectl completion zsh)

