FROM nginx:alpine

# Nginx चे जुने default पेज डिलीट करा
RUN rm -rf /usr/share/nginx/html/*

# आपल्या सर्व फाइल्स Nginx फोल्डरमध्ये कॉपी करा
COPY . /usr/share/nginx/html

EXPOSE 80