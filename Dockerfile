FROM nginx:latest
COPY default.conf /opt/nginx/default.conf
RUN rm -rf /usr/share/nginx/html
COPY build /usr/share/nginx/html/build
WORKDIR /usr/share/nginx/html
COPY start.sh /start.sh
CMD ["/bin/bash", "/start.sh"]
