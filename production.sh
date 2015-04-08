rm -r medical.tar.gz 2>/dev/null
meteor build .
echo 1 | sudo -S ls 1>/dev/null
sudo rm  -rf ../../production/medical/*
mv medical.tar.gz ../../production/medical/
tar -xf ../../production/medical/medical.tar.gz -C ../../production/medical
touch ../../production/medical/bundle/start.sh
chmod 777 ../../production/medical/bundle/start.sh
cd ../../production/medical/bundle
cat << EOF > start.sh 
 export MONGO_URL='mongodb://localhost:27017/meteor'
 export ROOT_URL='http://localhost:3000'
 export MAIL_URL='smtp://akashd_ddn@yahoo.co.in:aA235813@yahoo.co.in'
 export DDP_DEFAULT_CONNECTION_URL='http://localhost:3000'
 cd programs/server 
 echo 1 | sudo -S ls 1>/dev/null
 sudo npm install
 cd ../..
 echo "DONE  STARTING THE APP NOW"
 PORT=3000 node main.js

EOF
./start.sh
