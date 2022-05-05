FROM node:14
#  우분투가 설치된 리눅스 한대를 다운받게된다 
# RUN apt install nodejs
# RUN git clone ~ 
# 이런 과정들이 여기서 실행하는 명령어이다 \

# FROM node:14
# RUN mkdir class class_build 굳이 따로 만들지 않아도 밑에서 없는 파일이면 저절로 만들어줌 

WORKDIR /class_build/
COPY . /class_build/

RUN yarn install
RUN yarn build:ssr
CMD yarn start