#!/bin/bash
if [[ -f /etc/nginx/conf.d/default.conf ]]; then
	rm /etc/nginx/conf.d/default.conf;
fi;

if [[ "${GOOGLE_VERIFICATION_CODE}" != "" ]]; then
	cat /opt/nginx/default.conf | \
		sed 's|'{{GOOGLE_VERIFICATION_CODE}}'|location = /'${GOOGLE_VERIFICATION_CODE}'.html { rewrite ^/(.*) $1; return 200 "google-site-verification: $uri"; }|g' | \
		sed 's|'{{WORDPRESS_CONF_URL}}'|'${WORDPRESS_CONF_URL}'|g' | \
		sed 's|'{{NGINX_FRONTEND}}'|'${NGINX_FRONTEND}'|g' > /etc/nginx/conf.d/default.conf
else
	cat /opt/nginx/default.conf | \
		sed 's|'{{GOOGLE_VERIFICATION_CODE}}'|#No google site verification|g' | \
		sed 's|'{{WORDPRESS_CONF_URL}}'|'${WORDPRESS_CONF_URL}'|g' | \
		sed 's|'{{NGINX_FRONTEND}}'|'${NGINX_FRONTEND}'|g' > /etc/nginx/conf.d/default.conf
fi;

echo "${NGINX_FRONTEND}" > /usr/share/nginx/html/site_verification.txt

# Start nginx deamon
nginx -g "daemon off;"