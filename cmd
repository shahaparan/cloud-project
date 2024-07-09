docker build -t my-react-app .

docker run --name webapp -dp 3001:3000 poran/my-react-app
docker login
docker tag my-react-app poran/my-react-app:latest
docker push poran/my-react-app:latest
