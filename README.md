# vaca-photo-diary

## Dockerfile

`FROM ubuntu` \
`MAINTAINER owenrbee@gmail.com` \
\
`RUN apt-get update` \
`RUN apt-get install -y  git-core` \
`RUN apt-get install -y apache2` \
`RUN git clone --depth=16 https://github.com/owenrb/vaca-photo-diary.git /var/vaca` \
`RUN mv /var/vaca/app/* /var/www/html/` \
`RUN ls -l /var/www/html` \
\
`CMD service apache2 start && tail -f /dev/null` 

## Build Docker image

`$ docker build -t ubuntu/httpd .`

## Run Docker Container

`$ docker run --name angularjs -p 80:80 -dit ubuntu/httpd`
