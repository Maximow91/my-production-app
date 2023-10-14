cd ~/my-production-app
npm run build:prod

rm -rf ~/../var/www/my_production_app/html
mv ~/production-project/build ~/../var/www/my_production_app/html