FROM ubuntu:18.04

RUN apt-get update
RUN apt-get install --quiet --yes net-tools wget tree htop vim telnet git

