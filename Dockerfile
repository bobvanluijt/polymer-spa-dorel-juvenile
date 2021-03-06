FROM nginx:latest
RUN apt-get update
RUN apt-get install -y curl git gnupg2
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install yarn
COPY default.conf /opt/nginx/default.conf
RUN rm -rf /usr/share/nginx/html
COPY . /usr/share/nginx/html/
WORKDIR /usr/share/nginx/html
RUN yarn install
RUN yarn build
COPY start.sh /start.sh
CMD ["/bin/bash", "/start.sh"]