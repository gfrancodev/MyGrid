FROM node
LABEL mainteiner="gfrancodev"
COPY . /var/www
WORKDIR /var/www
ENV TIMEZONE=America/Sao_Paulo
ENV MONGOO_URI=
ENV IOT_CORE_CERTPATH_URL=
ENV IOT_CORE_KEYPATH_URL=
ENV IOT_CORE_CATH_URL=
ENV IOT_CORE_HOST=
ENV IOT_CORE_CLIENT_ID=
ENV IOT_CORE_TOPIC=
ENV PM2_PUBLIC_KEY=
ENV PM2_SECRET_KEY=
RUN npm install
RUN npm install pm2 -g && npm run build
CMD ["pm2-runtime", "dist/index.js"]
